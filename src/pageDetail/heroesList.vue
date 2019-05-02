<template>
  <div class="all">
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
      list: [{ name: "1" ,num:'80'}],
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
