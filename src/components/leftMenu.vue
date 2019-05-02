<template>
  <div class="all">
    
    <el-menu  class="el-menu-demo" mode="horizontal" router>
      <el-menu-item index="/Index/grad">首页</el-menu-item>
      <el-menu-item index="/Index/DataBase">数据库</el-menu-item>
      
      <el-menu-item index="/Index/RankingList">排行榜</el-menu-item>
      <el-menu-item index="/Index/HeroseList">英雄榜</el-menu-item>
      <el-menu-item index="3">社区</el-menu-item>
      <el-menu-item index="3">直播</el-menu-item>
      <el-menu-item @click="open('https://www.wanplus.com/app/')">APP</el-menu-item>
      <el-menu-item  @click="open('https://www.wanplus.com/report/')" disabled>咨询</el-menu-item>
      <el-menu-item index="/Index/Loading">登陆</el-menu-item>
      <el-menu-item index="3">注册</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
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
  .el-menu {
    border: none !important;
    .el-menu-item{
     width: 100px;
    }
    //  .el-menu{
    //      background-color: seagreen;
    //      .el-menu-item-group .el-submenu .el-menu{
    //           background-color: seagreen!important;
    //      }
  }
}
</style>
