<template>
  <div class="login-container">
    <div class="form-container">
      <h2>用户登录</h2>
      <el-form
        label-position="top"
        label-width="80px"
        ref="formData"
        :model="formData"
        :rules="rules"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" type="password"></el-input>
        </el-form-item>
        <el-button class="login-btn" type="primary" @click="submitForm('formData')">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      formData: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "change" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "change"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          {
            min: 6,
            message: "密码太短",
            trigger: "change"
          }
        ]
      }
    };
  },

  methods: {
    submitForm(formName) {
        // console.log(formName);
        // console.log(this.$refs);
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  }
};
</script>

<style lang="scss">
.login-container {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-container {
    background-color: white;
    width: 580px;
    padding: 40px;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
