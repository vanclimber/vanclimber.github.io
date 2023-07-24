<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const keywords = ref("");
const source = ref<string[]>([]);
let script: null | HTMLScriptElement = null;

onMounted(() => {
  window.baiduTipsCallBack ||
    (window.baiduTipsCallBack = (data) => {
      source.value = [keywords.value].concat(data.s);
      script!.remove();
    });
});
onBeforeUnmount(() => {
  delete window.baiduTipsCallBack;
});

const searchEngines = [
  {
    img: new URL("@/assets/images/google.webp", import.meta.url).pathname,
    url: "https://www.google.com/search?q=",
    name: "Google",
  },
  {
    img: new URL("@/assets/images/bing_new.webp", import.meta.url).pathname,
    url: "https://www.bing.com/search?q=",
    name: "必应",
  },
  {
    img: new URL("@/assets/images/baidu.webp", import.meta.url).pathname,
    url: "https://www.baidu.com/s?wd=",
    name: "百度",
  },
];

const names = [
  { text: "V", color: "#5186ec" },
  { text: "a", color: "#d95040" },
  { text: "n", color: "#f2be42" },
  { text: "c", color: "#5186ec" },
  { text: "l", color: "#58a55c" },
  { text: "i", color: "#d95040" },
  { text: "m", color: "#5186ec" },
  { text: "b", color: "#d95040" },
  { text: "e", color: "#f2be42" },
  { text: "r", color: "#5186ec" },
];
const currentEngine = ref(searchEngines[0]);
const showEngineBar = ref(false);

// 通过jsonp的方式，从百度获取搜索提示
const getTips = (val: string) => {
  const sugurl = `https://suggestion.baidu.com/su?wd=${val}&cb=baiduTipsCallBack`;
  script = document.createElement("script");
  script.src = sugurl;
  document.getElementsByTagName("head")[0].appendChild(script);
};
const onSelected = (item: { label: string; value: string }) => {
  window.open(currentEngine.value.url + item.value );
};

const toggleSearchEngine = (item: any) => {
  currentEngine.value = item;
  showEngineBar.value = false;
};
</script>

<template>
  <main>
    <ui-top-app-bar :navIcon="false" class="top-bar">
      <template #toolbar>
        <a
          href="https://github.com/vanclimber"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ui-icon-button icon="file_download">
            <svg
              class="octicon octicon-mark-github"
              width="32"
              height="32"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </ui-icon-button>
        </a>
      </template>
    </ui-top-app-bar>

    <section class="name">
      <span
        v-for="item in names"
        :style="{ color: item.color }"
        class="name-text"
        >{{ item.text }}</span
      >
    </section>
    <section class="search-bar">
      <ui-autocomplete
        v-model="keywords"
        remote
        :source="source"
        outlined
        :placeholder="`与${currentEngine.name}达成战略合作`"
        @search="getTips"
        @selected="onSelected"
        class="search-input"
      >
        <template v-slot:before>
          <ui-button
            outlined
            class="engine-button"
            @click="showEngineBar = true"
          >
            <div class="engine-img-container">
              <img
                :src="currentEngine.img"
                :draggable="false"
                class="engine-img"
              />
              <ui-icon size="18">keyboard_arrow_down</ui-icon>
            </div>
          </ui-button>
        </template>
      </ui-autocomplete>
      <section
        :class="['engine-bar', showEngineBar ? 'show-elem' : 'hide-elem']"
      >
        <div
          v-for="item in searchEngines"
          class="engine-item"
          @click="toggleSearchEngine(item)"
        >
          <img :src="item.img" class="engine-img" />
          <span>{{ item.name }}</span>
        </div>
      </section>
    </section>
    <div
      :class="['overlay', showEngineBar ? 'show-elem' : 'hide-elem']"
      @click="showEngineBar = false"
    ></div>
  </main>
</template>

<style scoped lang="scss">
main {
  height: 100vh;
}

.top-bar {
  a {
  color: #fff;
}
}


.name {
  display: flex;
  justify-content: center;
  padding-top: 10%;

  .name-text {
    font-size: 140px;
    user-select: none;
  }
}

.search-bar {
  display: flex;
  justify-content: center;
  position: relative;
  .engine-button {
    margin: auto;
    margin-right: 16px;
    height: 100%;
    padding: 0 8px;
  }
  .engine-img-container {
    display: flex;
    align-items: center;
  }

  .search-input {
    :deep(.mdc-text-field) {
      width: 500px;
    }
    :deep(.mdc-menu) {
      width: 500px;
    }
  }
  .engine-img {
    width: 34px;
    height: 34px;
  }

  .engine-bar {
    position: absolute;
    top: 64px; // 56+8
    z-index: 300;
    border-radius: 4px;
    background-color: #fff;
    width: 500px;
    display: flex;
    .engine-item {
      cursor: pointer;
      display: flex;
      height: 90px;
      width: 90px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: rgb(92, 92, 92);
      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
}

.show-elem {
  opacity: 1;
  transition: opacity 300ms ease;
}
.hide-elem {
  opacity: 0;
  pointer-events: none;
  transition: opacity 300ms ease;
}
</style>
