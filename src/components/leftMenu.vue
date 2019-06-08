<template>
  <div class="all">
    <el-menu  class="el-menu-demo" mode="horizontal" router default-active>
      <el-menu-item style="background:#000" index="/Index/grad">首页</el-menu-item>
      <el-menu-item style="background:#000" index="/Index/DataBase">比赛数据</el-menu-item>
      <el-menu-item style="background:#000" index="/Index/RankingList">排行榜</el-menu-item>
      <el-menu-item style="background:#000" index="/Index/HeroseList">英雄榜</el-menu-item>
      <!-- <el-menu style="background:#000"-item index="3">社区</el-menu-item>
      <el-menu-item style="background:#000" index="3">直播</el-menu-item> -->
      <el-menu-item style="background:#000" index="/Index/App">APP</el-menu-item>
      <el-menu-item style="background:#000" index="/Index/Ask" >咨询</el-menu-item>
      <el-menu-item style="background:#000" index="/Index/Loading">{{loading?loading:'登录'}}</el-menu-item>
      <el-menu-item style="background:#000" index="/Index/Loading" v-if="this.loading" @click="out">退出登陆</el-menu-item>
      <el-menu-item style="background:#000"  v-if="!this.loading" index="/Index/Registered">注册</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading:localStorage.getItem('loading')
    };
  },
  created(){
    this.loading=localStorage.getItem('loading')
  },
  methods:{
    out(){
      localStorage.clear('loading');
      this.loading=false;
      window.history.go(0)
      vue.set();
    },
    open(data){
      window.open(data)
    }
  }
};
</script>
<style scoped lang='less'>
@percent: 100%;
.all {
 
  height: @percent;
  background-color: #f5f5f5;
  margin:20px;
  .el-menu {
    border: none !important;
    display: flex;
    justify-content: space-around;
    .el-menu-item{
    width: 100%;

    }

  }
}
#app .el-menu-item.is-active {
    background-color: #fff !important;
}
</style>
