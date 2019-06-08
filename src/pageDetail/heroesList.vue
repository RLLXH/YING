<template>
  <div class="all" style="margin:20px auto">
    <el-form  :inline="true">
      <el-form-item label="赛事:" prop="name">
        <el-select  clearable v-model="theQuery.competitionId" @change="getList">
         <el-option v-for="item in selectlist" :key="item.index" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类:" prop="name">
        <el-select  clearable v-model="theQuery.site"  @change="getList">
          <el-option
            v-for="item in seleclist"
            :key="item.label"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-table :data="list">
      <el-table-column label="英雄">
        <template slot-scope="scope">
          <div>
            <img :src='scope.row.img' alt>
            <span>{{scope.row.heroName}}</span>
          </div>
        </template>
      </el-table-column>
     <el-table-column label="出场率">
         <template slot-scope="scope">
             <div>
                <el-progress :percentage='scope.row.attendanceRate'></el-progress> 
             </div>
         </template>
     </el-table-column>
         <el-table-column label="被禁率">
         <template slot-scope="scope">
             <div>
                <el-progress :percentage='scope.row.banRate' color="black"></el-progress> 
             </div>
         </template>
     </el-table-column>
         <el-table-column label="胜率">
         <template slot-scope="scope">
             <div>
                <el-progress :percentage='scope.row.winningProbability'></el-progress> 
             </div>
         </template>
     </el-table-column>
         <el-table-column label="KDA">
         <template slot-scope="scope">
             <div>
                <el-progress :percentage='scope.row.kda'></el-progress> 
             </div>
         </template>
     </el-table-column>
    </el-table>
  </div>
</template>
<script>
import  {heroListSelect,teamdataSelect} from '../api/address.js'
import axios from '../api/axios.js'
export default {
  data() {
    return {
        selectlist:[],
        seleclist:[
          {value:'',label:'全部英雄'},
          {value:'1',label:'ADC'},
          {value:'2',label:'辅助'},
          {value:'3',label:'上单'},
          {value:'4',label:'打野'},
        ],
        theQuery:{
          competitionId:2,
          site:'',
          pageNum:1,
          pageSize:20,
        },
      list: [
        { name: "木木" ,num:80},
      
        ],
    };
  },
  created(){
    this.getSelect();
    this.getList();
  },
  methods:{
    getSelect(){
       axios.post(teamdataSelect).then(data=>{
       this.selectlist=data.data.competitionSeasons
      })
    },
    getList(){
      axios.post(heroListSelect+'?pageSize='+this.theQuery.pageSize+'&pageNum='+this.theQuery.pageNum+'&competitionId='+this.theQuery.competitionId+'&site='+this.theQuery.site).then(data=>{
        console.log(data)
        this.list=data.data.content;
        this.list.map(v=>{
          for (let val in v){
            if(val!='img' && val!='heroName'){
              v[val] = (v[val]/100).toFixed(2)-0
            }
          }
        })
      })
    }
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
