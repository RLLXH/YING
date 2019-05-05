<template>
  <div class="backG">
    <div class="all">
      <el-form label-position="0" label-width="110px" :model="user" :rules="rules" ref="user">
        <el-form-item label>
          <img src="../assets/logo-white.png">
        </el-form-item>
        <el-form-item label prop="userName">
          <el-input v-model="user.userName" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label prop="password">
          <el-input v-model="user.password" type="password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item label>
          <el-button @click="loadBtn('user')">登陆</el-button>
        </el-form-item>
        <el-form-item label>
          <el-button @click="registered">没有账号？立即注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
 <script>
import axios from "../api/axios";
import { userLogin } from "../api/address.js";
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
        password: [{ required: true, message: " ", trigger: "blur" }],
        userName: [{ required: true, message: " ", trigger: "blur" }]
      }
    };
  },
  methods: {
    registered() {
      this.$router.push("/Index/Registered");
    },
    handleClick() {
      (this.user.password = ""), (this.user.userName = "");
    },
    loadBtn(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post(
              userLogin +
                "?name=" +
                this.user.userName +
                "&password=" +
                this.user.password
            )
            .then(data => {
              this.$message.success("登陆成功");
              localStorage.setItem("loading", true);
              this.$router.push("/Index/grad");
            });
        } else {
          this.$message.warning("请输入用户名和密码");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.backG {
  overflow: hidden;
  height: 100%;
}
.all {
  // width: 400px;
  background: url(../assets/232A2732B679BD55B8FA34D44473E854.jpg) no-repeat !important;
  background-size: 100% !important;
  // height: 400px;
  height: 100%;
  margin: auto;
  // margin-top: 19z0px;
  padding-top: 5em;
  text-align: center;
  img {
    width: 15%;
    height: 15%;
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
