<template>
  <div class="form_container">
    <el-form
      v-if="state.showLogin"
      ref="loginFormRef"
      :model="loginForm"
      status-icon
      :hide-required-asterisk="true"
      :rules="rules"
      label-width="100px"
      class="login-form"
    >
      <el-form-item label="账号" prop="email">
        <el-input
          v-model="state.loginForm.email"
          autocomplete="off"
          placeholder="请输入登录邮箱(super@outlook.com)"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="state.loginForm.password"
          type="password"
          autocomplete="off"
          placeholder="请输入密码(123456)"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { onMounted, reactive, computed, defineComponent } from "vue";
// import { useRouter, useRoute } from "vue-router";
// import { ElMessage } from "element-plus";

export default defineComponent({
  name: "LoginForm",
  props: {
    title: String,
  },
  setup(props, { emit }) {
    // const router = useRouter()
    // const route = useRoute()
    const state = reactive({
      showLogin: true,
      loginForm: {
        email: "",
        password: "",
      },

      lowerCaseUsername: computed(() => state.email.toLowerCase()),
    });

    const submitForm = () => {
      console.log("登录成功", props.title);
      emit("login", {});
      // router.push('/home')
    };

    onMounted(() => {
      // 挂载
    });

    return { submitForm, state };
  },
});
</script>
<style lang="scss">
  // .form_container{
  //   width: 100%;
  //   height: 100vh;
  //   background: url('@assets/login/background.png');
  // }
</style>
