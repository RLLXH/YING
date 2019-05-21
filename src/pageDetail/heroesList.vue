<template>
  <div class="all" style="margin:20px auto">
    <el-form  :inline="true">
      <el-form-item label="赛事:" prop="name">
        <el-select placeholder="请输入信息" clearable v-model="iii">
          <el-option
            v-for="item in seleclist"
            :key="item.value"
            :label="item.value"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类:" prop="name">
        <el-select placeholder="请输入信息" clearable v-model="iii">
          <el-option
            v-for="item in seleclist"
            :key="item.value"
            :label="item.value"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-table :data="list">
      <el-table-column label="英雄">
        <template slot-scope="scope">
          <div>
            <img src="../assets/liulang.png" alt>
            <span>{{scope.row.name}}</span>
          </div>
        </template>
      </el-table-column>
     <el-table-column label="出场率">
         <template slot-scope="scope">
             <div>
                <el-progress :percentage='scope.row.num'></el-progress> 
             </div>
         </template>
     </el-table-column>
         <el-table-column label="被禁率">
         <template slot-scope="scope">
             <div>
                <el-progress :percentage='scope.row.num' color="black"></el-progress> 
             </div>
         </template>
     </el-table-column>
         <el-table-column label="胜率">
         <template slot-scope="scope">
             <div>
                <el-progress :percentage='scope.row.num'></el-progress> 
             </div>
         </template>
     </el-table-column>
         <el-table-column label="KDA">
         <template slot-scope="scope">
             <div>
                <el-progress :percentage='scope.row.num'></el-progress> 
             </div>
         </template>
     </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
        iii:'',
        seleclist:[{
             value:'2019LDL春季赛'
        }
           
        ],
      list: [
        { name: "木木" ,num:'80'},
        { name: "亚索" ,num:'59'},
        { name: "德马" ,num:'84'},
        { name: "欧皇" ,num:'34'},
        { name: "路飞" ,num:'75'},
        { name: "乔巴" ,num:'69'},
        { name: "娜美" ,num:'86'},
        { name: "大妈" ,num:'84'},
        { name: "香克斯" ,num:'82'},
        { name: "纳鲁托" ,num:'56'},
        { name: "啥是可" ,num:'67'},
        { name: "雏田" ,num:'89'},
        ],
    };
  }
};
</script>

<style lang="less" scoped>
.all {
  width: 60%;
  margin: auto;
  img {
    width: 48px;
    height: 48px;
  }
}
</style>
