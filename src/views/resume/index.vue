<template>
  <section class="container">
    <div class="page">
      <div class="base-info">
        <div class="flex-center name">Vanclimber</div>
        <div class="contact-info flex-center">
          <span>电话：*******</span>
          <span>&nbsp; | &nbsp;</span>
          <span>邮箱：fanc1999@foxmail.com</span>
        </div>
        <div class="flex-center">
          <span>微信：*******</span>
        </div>
      </div>
      <div class="education">
        <div class="title-wrapper">
          <div class="title-badge">
            <div class="title-tag">教育经历</div>
            <div class="bg-top"></div>
            <div class="bg-bottom"></div>
          </div>
        </div>
        <div class="flex-between">
          <div>
            <span class="enhance">电子科技大学</span>
            <span class="tag-primary">985</span>
          </div>
          <div><span>2017年09月 - 2021年7月</span></div>
        </div>
        <div class="flex-between">
          <div>
            <span>软件工程 </span>
            <span> 本科</span>
          </div>
          <div><span>成都</span></div>
        </div>
      </div>
      <div class="work-experience">
        <div class="title-wrapper">
          <div class="title-badge">
            <div class="title-tag">工作经历</div>
            <div class="bg-top"></div>
            <div class="bg-bottom"></div>
          </div>
        </div>
        <div class="flex-between">
          <span class="enhance">北京三快在线科技有限公司（美团）</span>
          <span>2021年7月 - 至今</span>
        </div>
        <div class="flex-between">
          <div>
            <span>前端开发工程师 </span>
            <span>优选研发部-物流研发组</span>
          </div>
          <span>北京</span>
        </div>
        <div class="product">
          <div><span class="enhance">项目一：物流仓储系统</span></div>
          <div class="intro">
            <div>项目简介：</div>
            <div>
              基于美团优选零售系统的前端架构体系下的优选物流内部系统。
              物流业务承载了所售商品在美团优选的大部分生命周期。仓储系统主要涉及从供应商到大仓，仓内流转以及出仓的环节。
            </div>
          </div>
          <div>
            技术栈：Vue2 +elementUI + 自研组件库 + 自研脚手架（基于webpack） +
            微前端
          </div>
          <div>主要职责：</div>
          <ul>
            <li>
              承接日常在库和出库方向需求，对接产品同学，参与需求评审、技术方案设计、等全流程，最终实现高质量交付。
            </li>
            <li>
              承担日常基建升级的接入工作，并撰写使用文档。在保障业务项目平稳运行的同时，进行基建升级接入，保证基建统一性。
            </li>
            <li>
              负责业务组件的开发、维护工作。维护打印组件，基于浏览器原生的的打印能力，能够按指定模板进行打印。该组件为整个物流系统的PC端打印提供支持。
            </li>
          </ul>
        </div>
        <div class="product">
          <div><span class="enhance">项目二：优选司机端小程序</span></div>
          <div class="intro">
            <div>项目简介：</div>
            <div>
              司机连结着供应商与大仓，承载着二者之间的送取货需求，为优选履约发挥着重要作用。
              通过针对司机的平台型产品，实现对司机的更规范更精细的管理动作，进行数据采集和数字化运营。
            </div>
          </div>
          <div><span>技术栈：自研脚手架 + TS + 自研小程序组件库</span></div>
          <div><span>主要职责：</span></div>
          <ul>
            <li>
              参与司机端小程序从零到一的搭建工作，包括接入公司基建，如登录，存储，日志，监控等模块和UI组件库；以及司机端原有业务的迁移工作。
            </li>
            <li>
              并开发司机履约的正向流程，涉及发货确认，签到，月台使用，卸货等环节。并将各个环节拆分组件化，使其逻辑内聚，解耦并降低页面复杂度。
            </li>
            <li>
              修复了原项目依赖的条形码渲染库存在的bug，开发新的npm包，修复bug并拓展部分能力。
            </li>
          </ul>
        </div>
        <div class="product">
          <div><span class="enhance">项目三：Maya配置化项目</span></div>
          <div class="intro">
            <div>项目简介：</div>
            <div>
              基于元数据的前后端配置化方案，降低页面开发成本。用户可以在平台上，通过可视化编辑器基于拖拽+配置的方式生成页面。
              实现方案参考阿里低代码协议。
            </div>
          </div>
          <div>
            <span>技术栈：vite + vue2 + vue-compostion-api + pinia + TS</span>
          </div>
          <div><span>主要职责：</span></div>
          <ul>
            <li>参与技术实现调研与选型，调研业界低代码产品，参与可视化编辑的技术方案设计。</li>
            <li>负责可视化编辑器的画布部分开发。主要涉及组件面板到画布内的拖拽，画布内的拖拽，位置识别，容器识别等功能。</li>
            <li>参与组件描述协议的设计，基于阿里低代码的描述协议进行拓展，适配元数据能力。</li>
            <li>
              基础组件和业务组件接入配置化平台，撰写组件描述协议。并开发更适配现有业务场景的低代码业务组件。
            </li>
          </ul>
        </div>
      </div>
      <div class="professional-skill">
        <div class="title-wrapper">
          <div class="title-badge">
            <div class="title-tag">专业技能</div>
            <div class="bg-top"></div>
            <div class="bg-bottom"></div>
          </div>
        </div>
        <ul>
          <li>熟悉 HTML，CSS 和 JavaScript，熟悉 ES6+常用语法；</li>
          <li>主要技术栈为Vue，了解Vue3，熟悉Vue2；</li>
          <li>了解微信小程序开发，有相关的项目开发经验；</li>
          <li>使用过vue-composition-api、pinia，vite等库或工具；</li>
          <li>熟悉常用组件库，了解常用Git操作，能够使用Git进行团队合作；</li>
        </ul>
      </div>
      <div class="personal-summary">
        <div class="title-wrapper">
          <div class="title-badge">
            <div class="title-tag">个人总结</div>
            <div class="bg-top"></div>
            <div class="bg-bottom"></div>
          </div>
        </div>
        <ul>
          <li>乐观开发，性格幽默，能较好较快融入团队。</li>
          <li>学习能力强。不设边界，写过npm包、chrome插件，Alfred工作流。</li>
          <li>热爱开发，愿意专研，具有团队合作精神，执行力较好。长期保持高绩效。</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@media print {
  .page {
    background-color: #fff;
    -webkit-print-color-adjust: exact;
  }
  @page {
    size: A4;
  }
}

.flex-center {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px 0;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 12px;

  .page {
    width: 210mm;
    padding: 2mm 13mm;
    background-color: #fff;

    .base-info {
      margin-bottom: 20px;
    }

    .name {
      font-size: 24px;
      font-weight: 500;
    }

    .title-wrapper {
      margin-bottom: 8px;
      .title-badge {
        display: inline-block;
        position: relative;
        .title-tag {
          display: inline-block;
          position: relative;
          font-size: 16px;
          font-weight: 500;
          padding: 4px 16px;
          padding-right: 24px;
          color: #fff;
          z-index: 3;
        }
      }

      .bg-top {
        position: absolute;
        border-bottom: 30px solid rgb(65, 131, 255);
        left: 0;
        bottom: 0;
        width: 100%;
        z-index: 2;
        border-right: 10px solid transparent;
      }
      .bg-bottom {
        position: absolute;
        left: 0;
        bottom: 0;
        border-bottom: 21px solid rgba(65, 131, 255, 0.2);
        width: calc(100% + 12px);
        z-index: 1;
        border-right: 7px solid transparent;
      }

      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: rgba(65, 131, 255, 0.15);
      }
    }

    .enhance {
      font-size: 14px;
      font-weight: 500;
    }
    .intro {
      display: flex;
      & > div:first-child {
        flex-shrink: 0;
      }
    }

    .tag-primary {
      display: inline-block;
      border-radius: 4px;
      margin: 0 2px;
      padding: 0 2px;
      color: rgba(65, 131, 255, 0.8);
      background-color: rgba(65, 131, 255, 0.2);
      font-size: 10px;
    }

    .product {
      margin-bottom: 20px;
      line-height: 20px;
    }
  }
}
</style>
