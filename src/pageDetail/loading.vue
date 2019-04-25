<template>
  <div class="all">
    <el-form
      label-position="0"
      label-width="110px"
      :inline="true"
      :model="user"
      :rules="rules"
      ref="user"
    >
      <el-form-item label>
        <img src="../assets/logo-white.png">
      </el-form-item>
      <el-form-item label>
        <el-input v-model="user.userName" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label>
        <el-input v-model="user.password" type="password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item label>
        <el-button @click="loadBtn('user')">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
// <script>
// import { login } from "../api/address.js";
// import axios from "../api/axios.js";
// import { createNamespacedHelpers } from "vuex";
// const { mapState, mapActions, mapmutations } = createNamespacedHelpers("loadingstore");
export default {
  data() {
    return {
      activeName: "0",
      user: {
        password: "",
        userName: ""
      },
      rules: {
        password: [{ required: true, message: "请输入", trigger: "blur" }],
        userName: [{ required: true, message: "请输入", trigger: "blur" }]
      }
    };
  },
  methods: {
    regin() {
      this.$router.push("/Index/Registered");
    },
    handleClick() {
      (this.user.password = ""), (this.user.userName = "");
    },
    loadBtn(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let data = {
            password: this.user.password,
            userName: this.user.userName
          };
          // axios
          //   .post(login + "?type=" + (this.activeName - 0), data)
          //   .then(data => {
          //     console.log("登陆成功");
          //     this.$router.push("/Index/staffManagement");
          //     this.setloadingData(true);
          //   });
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.all {
  background: #f5f5f5;
  width: 400px;
  height: 400px;
  margin: auto;
  margin-top: 50px;
  padding-top: 20px;
  text-align: center;
  img {
    width: 50%;
    height: 50%;
  }
  .el-row {
    margin-top: 20px;
  }
  .el-button {
    width: 210px;
    // text-align: center;
    background: #d7382d;
    border: none;
    // height: 20px;
    // line-height: 20px;
    color: #fff;
  }
}
</style>
