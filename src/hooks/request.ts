import axios from "axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { ref, type Ref } from "vue";

type JSONObject = {
  [key: string]: string | number | boolean | JSONObject | JSONObject[];
};

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SCREEN_BASE_URL,
  timeout: 1_000 * 10,
});

export type UsePostDataType<T> = {
  isPending: Ref<Boolean>;
  data: Ref<null | T>;
  error: Ref<any>;
};

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    const { data } = res;
    if (!data) {
      const error = new Error("HTTP状态码为200, 但请求没有响应体");
      throw error;
    } else {
      return res;
    }
  },
  (error: any) => {
    console.log("errrr", error);
    throw error;
  }
);

type UsePost = {
    <T>(
        url: string,
        body: JSONObject,
        config?: AxiosRequestConfig,
        isAsync?: true
    ): Promise<UsePostDataType<T>>
    <T>(
        url: string,
        body: JSONObject,
        config?: AxiosRequestConfig,
        isAsync?: false
    ): UsePostDataType<T>
};

export const usePost = (<T = any> (
  url: string,
  body: JSONObject,
  config?: AxiosRequestConfig,
  isAsync = true
): Promise<UsePostDataType<T>> | UsePostDataType<T> => {
  const hooksData: UsePostDataType<T> = {
    data: ref(null),
    isPending: ref(true),
    error: ref(null),
  };

  const asyncTask = new Promise<UsePostDataType<T>>((_res, _rej) => {
    axiosInstance
      .post(url, body, config)
      .then((value: AxiosResponse<T>) => {
        hooksData.isPending.value = false;
        hooksData.data.value = value.data;
        _res(hooksData);
      })
      .catch((reason: any) => {
        hooksData.isPending.value = false;
        hooksData.error = reason;
        _rej(hooksData);
      });
  });

  return isAsync ? asyncTask : hooksData;
}) as UsePost;


const trimParams = (params:Record<string,any> = {}) => {
    if (params) {
        Object.entries(params).forEach(([k, v]) => {
            if (typeof v === 'object' && v !== null) {
                trimParams(v);
            } else if (typeof v === 'string') {
                params[k] = v.trim();
            }
        });
    }
};
const isNull = (val: any) => val === null;
const isUndefined = (val: any) => val === undefined;
const flatten = (val: any[]) => {
  return val.flat();
};
const queryParse = (queryString = '') => {
    let query: string;
    if (queryString.startsWith('?')) {
        query = queryString.substring(1);
    } else {
        query = queryString;
    }
    if (query === '') {
        return {};
    }
    return query.split('&').reduce((prev:Record<string,any>, cur) => {
        const [k, v = null] = cur.split('=');
        const val = isNull(v) ? v : decodeURIComponent(v as string);
        if (isUndefined(prev[k])) {
            prev[k] = val;
        } else {
            prev[k] = flatten([prev[k], val]);
        }
        return prev;
    }, {});
};
const queryStringify = (params = {}) => {
    return Object.entries(params || {})
        .reduce((prev: any[], cur: any[]) => {
            const [k, v] = cur;
            if (isUndefined(v)) {
                return prev;
            }
            if (isNull(v)) {
                prev.push(k);
            } else {
                const list = flatten([v])
                    .filter((v2) => {
                        return !isUndefined(v2);
                    })
                    .map((v2) => {
                        const val = encodeURIComponent(v2);
                        return isNull(v2) ? k : [k, val].join('=');
                    });
                prev.push(...list);
            }
            return prev;
        }, [])
        .join('&');
};
export const toQueryString = (body: { [x: string]: any; }) => {
    const qsUrl:Record<string,any> = {};
    Object.keys(body).forEach((key) => {
        if (body[key] !== undefined) {
            qsUrl[key] = body[key];
        }
    });
    return queryStringify(qsUrl);
};

type UseGet = {
    <T>(
        url: string,
        params?: JSONObject,
        config?: AxiosRequestConfig,
        isAsync?: true
    ): Promise<UsePostDataType<T>>;
    <T>(
        url: string,
        params?: JSONObject,
        config?: AxiosRequestConfig,
        isAsync?: false
    ): UsePostDataType<T>
}


export const useGet = (<T = any>(
  url: string,
  params?: JSONObject,
  config?: AxiosRequestConfig,
  isAsync = true
) => {

    const hooksData: UsePostDataType<T> = {
        data: ref(null),
        isPending: ref(true),
        error: ref(null),
      };

    let urlParams = url.split('?')[1] || '';
    let urlPath = url.split('?')[0];
    let tmpParams;

    try {
        tmpParams = queryParse(urlParams);
    } catch (e) {
        console.error('request:get', tmpParams, e);
    }
    tmpParams = Object.assign(tmpParams || {}, params);
    trimParams(tmpParams);
    const queryString = toQueryString(tmpParams);
    urlPath = urlPath + `${queryString ? '?' : ''}${queryString}`;


    const asyncTask = new Promise<UsePostDataType<T>>((_res, _rej) => {
        axiosInstance
          .get(urlPath, config)
          .then((value: AxiosResponse<T>) => {
            hooksData.isPending.value = false;
            hooksData.data.value = value.data;
            _res(hooksData);
          })
          .catch((reason: any) => {
            hooksData.isPending.value = false;
            hooksData.error = reason;
            _rej(hooksData);
          });
      });
    
      return isAsync ? asyncTask : hooksData;
}) as UseGet;
