<template>
  <div>
    <!-- <h1>{{ $store.state.name }}</h1> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <router-link to="/login">登录</router-link> -->
    <!-- <router-link to="/main">首页</router-link> -->
    <!-- <router-view></router-view> -->
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
// import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore()
    console.log(store.state)
  }
  // components: {
  //   ElButton
  // }
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
