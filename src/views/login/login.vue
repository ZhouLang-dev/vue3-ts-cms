<template>
  <div class="login">
    <div class="login-container">
      <h3>登录</h3>
      <login-accmount ref="accmountRef" />
      <el-button type="primary" @click="handleLogin">立即登录</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginAccmount from './component/login-accmount.vue'

export default defineComponent({
  components: {
    loginAccmount
  },
  setup() {
    const accmountRef = ref<InstanceType<typeof loginAccmount>>()
    const handleLogin = () => {
      accmountRef.value?.loginAction()
    }
    return {
      accmountRef,
      handleLogin
    }
  }
})
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
