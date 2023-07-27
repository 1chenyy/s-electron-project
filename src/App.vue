<script setup lang="ts">
import TitleBar from "./components/TitleBar.vue";
import {StarOutlined} from '@ant-design/icons-vue';
import {reactive, ref, VueElement, h} from "vue";
import type {MenuProps, ItemType} from 'ant-design-vue';

const isCollapse = ref(false)
const openKeys  = ref<string[]>(['page1']);
const menuItems: ItemType[] = reactive([
  getItem("nva 1", "page1", () => h(StarOutlined)),
])
const menuClick: MenuProps['onClick'] = e => {
  console.log('click', e.key);

}

function getItem(
    label: VueElement | string,
    key: string,
    icon?: any,
    children?: ItemType[],
    type?: 'group',
): ItemType {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as ItemType;
}
</script>

<template>
  <div id="app">
    <div class="left-content">
      <img src="/electron-vite.svg" ondragstart="return false;" @click="isCollapse = !isCollapse"
           :class="{ largeImg : !isCollapse, smallImg: isCollapse }" alt=""/>
      <a-menu id="menu" :inline-collapsed="isCollapse"
              mode="inline"
              :items="menuItems"
              @click="menuClick"
              v-model:selectedKeys="openKeys"
      />
    </div>
    <div class="right-content">
      <TitleBar/>
      <a-card id="main" :bordered="false">
        <router-view/>
      </a-card>
    </div>
  </div>
</template>

<style scoped lang="less">
#app {
  display: flex;
  flex-direction: row;

  .left-content {
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    -webkit-app-region: drag;
    user-select: none;

    img {
      margin-top: 20px;
      -webkit-app-region: none;
    }

    .largeImg {
      width: 60px;
      height: 60px;
    }

    .smallImg {
      width: 30px;
      height: 30px;
    }

    #menu {
      margin-top: 20px;
      border-right: 0;
      -webkit-app-region: none;
      overflow-y: auto;
      flex-grow: 1;

      &::-webkit-scrollbar {
        width: 1px;
        height: 1px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        position: absolute;
        box-shadow: inset 0 0 5px #823aa000;
        background: #48A2FFaa;
      }

      &::-webkit-scrollbar-track {
        border-radius: 10px;
        position: absolute;
        box-shadow: inset 0 0 5px #823aa000;
        background: #ffffff;
      }
    }
  }

  .right-content {
    flex-grow: 1;
    height: 100vh;
    background-color: #F2F6F9;
    display: flex;
    flex-direction: column;

    #main {
      position: relative;
      height: calc(100% - 20px);
      margin: 0 10px 10px;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 5px;
        height: 1px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        position: absolute;
        box-shadow: inset 0 0 5px #823aa000;
        background: #48A2FFaa;
      }

      &::-webkit-scrollbar-track {
        border-radius: 5px;
        position: absolute;
        box-shadow: inset 0 0 5px #823aa000;
        background: #ffffff;
      }
    }
  }
}
</style>
