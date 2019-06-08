<template>
  <div>
    <div class="imgBox" style="margin-top:10px">
      <el-carousel>
      <el-carousel-item>
        <img src="../assets/105260.png">
      </el-carousel-item>
       <el-carousel-item>
        <img src="../assets/101458.jpg">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/102657.jpg">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets//104500.jpg">
      </el-carousel-item>
       <!-- <el-carousel-item>
        <img src="../assets/lun5.jpg">
      </el-carousel-item> -->
    </el-carousel>
















    </div>
    <div class="mainBox">
      <el-row>
        <el-col :span="16">
          <div class="colorBox" style="padding:20px">
            <el-row style="margin:20px 0">热门赛事</el-row>
            <el-row :gutter ="32">
              <el-col :span="5" >
                <img width="96%" @click="video" src="../assets/pit.png" height="90px">
                <span class="spanBox">2019 MSI | 季赛冠军</span>
              </el-col>
              <el-col :span="5" >
                <img width="96%" @click="video" src="../assets/761_mid.jpg" height="90px">
                <span class="spanBox">NEST全国电子竞技大赛</span>
              </el-col>
              <el-col :span="5" >
                <img width="96%" @click="video" src="../assets/762_mid.jpg" height="90px">
                <span class="spanBox">2019LCK春季升降级赛</span>
              </el-col>
              <el-col :span="5" >
                <img width="96%" @click="video" src="../assets/811_mid.jpg" height="90px">
                <span class="spanBox">2019 NA LCS Spring、北美职业联赛春季赛</span>
              </el-col>
            </el-row>
          </div>
          <el-row>
            <el-col >
              <template>
                <el-tabs style="padding:20px" v-model="activeName" class="colorBox">
                  <el-tab-pane label="全部" name="first">
                    <div class="colorBox" v-for="(item,index) in list1" :key="index" @click="details(item)">
                      <el-row>
                        <el-col :span="5">
                          <img :src="item.img" width="100px" height="100px">
                        </el-col>
                        <el-col :span="19">{{item.title}}</el-col>
                      </el-row>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="比赛数据" name="second">
                    <!-- <div class="colorBox" v-for="(item,index) in list2" :key="index" @click="details(item)" >
                      <el-row>
                        <el-col :span="5">
                          <img :src="item.img" width="100px" height="100px">
                        </el-col>
                        <el-col :span="19">{{item.title}}</el-col>
                      </el-row>
                    </div> -->

                      <!-- 比赛数据 -->
                    <div  class="colorBox">
                      <span class="headerspoan">2019 LPL 夏季赛 LNG vs JDG <span>22小时前</span></span>
                      <el-row>
                        <el-col class="left" :span="8">
                            <el-row>
                              <el-col :span="4">LNG</el-col>
                               <el-col :span="20">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                               </el-col>
                               <el-col>
                                <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                               </el-col>
                            </el-row>
                            
                        </el-col>
                        <el-col class="bijiaoBox" :span="8">
                          <img src="../assets/bifen.png" alt="">
                        </el-col>
                        <el-col :span="8" class='right'>
                             <el-row>
                              
                               <el-col :span="20">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                               </el-col>
                                <el-col :span="4">LNG</el-col>
                               <el-col>
                                <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                               </el-col>
                               
                            </el-row>
                        </el-col>
                      </el-row>
                    </div>

                     <div  class="colorBox">
                      <span class="headerspoan">2019 LPL 夏季赛 YOO vs GON <span>22小时前</span></span>
                      <el-row>
                        <el-col class="left" :span="8">
                            <el-row>
                              <el-col :span="4">YOO</el-col>
                               <el-col :span="20">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                               </el-col>
                               <el-col>
                                <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                               </el-col>
                            </el-row>
                            
                        </el-col>
                        <el-col class="bijiaoBox" :span="8">
                          <img src="../assets/bifen.png" alt="">
                        </el-col>
                        <el-col :span="8" class='right'>
                             <el-row>
                              
                               <el-col :span="20">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                               </el-col>
                                <el-col :span="4">GON</el-col>
                               <el-col>
                                <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                               </el-col>
                               
                            </el-row>
                        </el-col>
                      </el-row>
                    </div>
                     <div  class="colorBox">
                      <span class="headerspoan">2019 LPL 夏季赛 FEN vs IG <span>22小时前</span></span>
                      <el-row>
                        <el-col class="left" :span="8">
                            <el-row>
                              <el-col :span="4">FEN</el-col>
                               <el-col :span="20">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                               </el-col>
                               <el-col>
                                <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                               </el-col>
                            </el-row>
                            
                        </el-col>
                        <el-col class="bijiaoBox" :span="8">
                          <img src="../assets/bifen.png" alt="">
                        </el-col>
                        <el-col :span="8" class='right'>
                             <el-row>
                              
                               <el-col :span="20">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                               </el-col>
                                <el-col :span="4">IG</el-col>
                               <el-col>
                                <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                               </el-col>
                               
                            </el-row>
                        </el-col>
                      </el-row>
                    </div>
                     <div  class="colorBox">
                      <span class="headerspoan">2019 LPL 夏季赛 RNG vs Mumu <span>22小时前</span></span>
                      <el-row>
                        <el-col class="left" :span="8">
                            <el-row>
                              <el-col :span="4">RNG</el-col>
                               <el-col :span="20">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                               </el-col>
                               <el-col>
                                <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                               </el-col>
                            </el-row>
                            
                        </el-col>
                        <el-col class="bijiaoBox" :span="8">
                          <img src="../assets/bifen.png" alt="">
                        </el-col>
                        <el-col :span="8" class='right'>
                             <el-row>
                              
                               <el-col :span="20">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                               </el-col>
                                <el-col :span="4">Mumu</el-col>
                               <el-col>
                                <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                                 <img src="../assets/liulang.png" alt="">
                               </el-col>
                               
                            </el-row>
                        </el-col>
                      </el-row>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="赛事信息" name="third">
                    <div class="colorBox" v-for="(item,index) in list3" :key="index" @click="details(item)">
                      <el-row>
                        <el-col :span="5">
                          <img :src="item.img" width="100px" height="100px">
                        </el-col>
                        <el-col :span="19">{{item.title}}</el-col>
                      </el-row>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="战术攻略" name="fourth">
                    <div class="colorBox" v-for="(item,index) in list4" :key="index" @click="details(item)">
                      <el-row>
                        <el-col :span="5">
                          <img :src="item.img" width="100px" height="100px">
                        </el-col>
                        <el-col :span="19">{{item.title}}</el-col>
                      </el-row>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="人物特稿" name="five">
                    <div class="colorBox" v-for="(item,index) in list5" :key="index" @click="details(item)">
                      <el-row>
                        <el-col :span="5">
                          <img :src="item.img" width="100px" height="100px">
                        </el-col>
                        <el-col :span="19">{{item.title}}</el-col>
                      </el-row>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </template>
            </el-col>
          </el-row>
        </el-col>
               <el-dialog
          title="俱乐部详细"
          :visible.sync="dialogVisibleClub"
          width="70%"
          >
          <div>
            <el-row>
                <el-col :span="7">
                  <h2>荣耀</h2>
                  <h3 v-for="(item,index) in clubdata.data.honer" :key="index">{{item}}</h3>
                </el-col>
                <el-col :span="17">
                  <h2>俱乐部成员</h2>
                  <el-table
                    :data="clubdata.data.table"
                    style="width: 100%">
                    <el-table-column
                      prop="ID"
                      label="游戏ID"
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="姓名"
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="游戏位置">
                    </el-table-column>
                    <el-table-column
                      prop="way"
                      label="上次动向">
                    </el-table-column>
                  </el-table>
                </el-col>
              </el-row>
          </div>
          <!-- <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </!--> 
      </el-dialog>
        <el-dialog
          title="详细"
          :visible.sync="dialogVisible"
          width="30%"
          >
          <h2 style="padding:0 20px">{{detailsdata.author}}</h2>
          <img style="padding:0 20px;margin:0 auto" :src="detailsdata.img" alt="">
          <p style="padding:0 20px">{{detailsdata.title}}</p>
          <span slot="footer" class="dialog-footer">

          </span>
      </el-dialog>
      <el-dialog
          title="视频"
          :visible.sync="dialogVisibleVideo"
          width="90%"
         >
         <video data-v-fb8cd72c="" width="100%" height="211" controls="controls" style="height:600px"><source data-v-fb8cd72c="" src="http://vodkgeyttp8.vod.126.net/cloudmusic/8b19/core/8174/71f820db72d0921d136fc5951346cf91.mp4?wsSecret=cc10eba841137775140b425b228c5cfd&wsTime=1560007092" type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;"></video>
          <span slot="footer" class="dialog-footer">vod
          </span>
      </el-dialog>
    <el-col :span="7" class="niceBox">
          <div class="colorBox" style="padding:20px">
            <el-row>
              <el-col class="headerText" >俱乐部信息</el-col>
            </el-row>
            <el-row class="fitText">
              <el-col :span="5">俱乐部</el-col>
              <el-col :span="4" :offset="15">人气</el-col>
            </el-row>
          </div>
          <div  v-for="(item,index) in this.dataList" :key="index" class="fitBox" @click="club(item)">
            <el-row style="padding:20px">
            <el-col :span="19">
              <span>{{item.title}}</span>
            </el-col>
            <el-col :span="4" style="    line-height: 37px;font-size: 12px;">{{item.num}}</el-col>
          </el-row>
          </div>
          
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { firstShowFatherSelect } from "../api/address.js";
import axios from "../api/axios";
export default {
  mountend (){
    
  },
  data() {
    return {
      clubdata:{
        data:{
          honer:[],
          table:{}
        }
      },
      dialogVisible: false,
      dialogVisibleVideo:false,
      dialogVisibleClub:false,
      activeName: "first",
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      list5: [],
      dataList: [
        {
          title: "皇族电子竞技俱乐部",num: "124234234",
          data:{
            honer:[
              '2013年英雄联盟全球总决赛亚军', 
              '2014年英雄联盟全球总决赛亚军', 
              '2017年德玛西亚杯长沙站冠军', 
              '2018年LPL春季赛冠军', 
              '2018年MSI季中邀请赛冠军',
            ],
            table:[
              {
                ID: 'AmazingJ',
                name: '石伟豪',
                address: '上单',
                way:'BLG战队'
              },
                {
                ID: 'AmazingJ',
                name: '石伟豪',
                address: '上单',
                way:'BLG战队'
              },
               {
                ID: 'AmazingJ',
                name: '石伟豪',
                address: '上单',
                way:'BLG战队'
              },
               {
                ID: 'AmazingJ',
                name: '石伟豪',
                address: '上单',
                way:'BLG战队'
              },
            ]
          }
        },
        {
          title: "皇族电子竞技俱乐部",num: "124234234",
          data:{
            honer:[
              '2013年英雄联盟全球总决赛亚军', 
              '2014年英雄联盟全球总决赛亚军', 
              '2017年德玛西亚杯长沙站冠军', 
              '2018年LPL春季赛冠军', 
              '2018年MSI季中邀请赛冠军'
            ],
            table:[
              {
                ID: 'AmazingJ',
                name: '石伟豪',
                address: '上单',
                way:'BLG战队'
              },
                {
                ID: 'AmazingJ',
                name: '石伟豪',
                address: '上单',
                way:'BLG战队'
              },
               {
                ID: 'AmazingJ',
                name: '石伟豪',
                address: '上单',
                way:'BLG战队'
              },
               {
                ID: 'AmazingJ',
                name: '石伟豪',
                address: '上单',
                way:'BLG战队'
              },
            ]
          }
        },
        {
          title: "皇族电子竞技俱乐部",num: "124234234",
          data:{
            honer:[
              '2013年英雄联盟全球总决赛亚军', 
              '2014年英雄联盟全球总决赛亚军', 
              '2017年德玛西亚杯长沙站冠军', 
              '2018年LPL春季赛冠军', 
              '2018年MSI季中邀请赛冠军'
            ],
            table:[
              {
                ID: 'AmazingJ',
                name: '石伟豪',
                address: '上单',
                way:'BLG战队'
              },
                {
                ID: 'AmazingJ',
                name: '石伟豪',
                address: '上单',
                way:'BLG战队'
              },
               {
                ID: 'AmazingJ',
                name: '石伟豪',
                address: '上单',
                way:'BLG战队'
              },
               {
                ID: 'AmazingJ',
                name: '石伟豪',
                address: '上单',
                way:'BLG战队'
              },
            ]
          }
        },
        {
          title: "皇族电子竞技俱乐部",num: "124234234",
          data:{
            honer:[
              '2013年英雄联盟全球总决赛亚军', 
              '2014年英雄联盟全球总决赛亚军', 
              '2017年德玛西亚杯长沙站冠军', 
              '2018年LPL春季赛冠军', 
              '2018年MSI季中邀请赛冠军'
            ],
            table:[
              {
                ID: 'AmazingJ',
                name: '石伟豪',
                address: '上单',
                way:'BLG战队'
              },
                {
                ID: 'AmazingJ',
                name: '石伟豪',
                address: '上单',
                way:'BLG战队'
              },
               {
                ID: 'AmazingJ',
                name: '石伟豪',
                address: '上单',
                way:'BLG战队'
              },
               {
                ID: 'AmazingJ',
                name: '石伟豪',
                address: '上单',
                way:'BLG战队'
              },
            ]
          }
        },
      ],
      detailsdata:[]
    };
  },
  created() {
    this.getlist();
  },
  methods: {
    handleClose(){},
    details(item) {
      this.dialogVisible = true
      this.detailsdata = item
    },
    video () {
      this.dialogVisibleVideo = true
    },
    club (item) {
      this.dialogVisibleClub = true
      this.clubdata = item
    },
    getlist() {
      axios.post('/firstShowFather/select').then(data => {
        console.log(data);
        this.list1 = data.data[0].firstShowList;
        this.list2 = data.data[1].firstShowList;
        this.list3 = data.data[2].firstShowList;
        this.list4 = data.data[3].firstShowList;
        this.list5 = data.data[4].firstShowList;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.imgBox {
  width: 100%;
  height: 300px;
  .el-carousel__item.is-animating{
    text-align: center;
  }
  img{
   margin: auto;
  }
  // background-color: green;
}
.mainBox {
  margin: auto;
  width: 60%;
  height: 40px;
  // background-color: brown;
}
.niceBox {
  margin-left: 10px;
  .fitText {
    font-size: 12px;
    color: #aaa;
    line-height: 14px;
    cursor: pointer;
  }
  .headerText {
    height: 50px;
    font-weight: 400;
    line-height: 50px;
  }
}

.fitBox {
  margin-top: 10px;
  background-color: #ffffff;
  display: block;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  .el-row {
    margin-top: 0px;
  }
  a {
    text-decoration: none;
    display: block;
    font-size: 13px;
    line-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.spanBox {
  line-height: 20px;
  width: 75%;
  margin: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
  font-size: 14px;
  color: #414141;
  padding-left: 20px;
}
.colorBox {
  background: #ffffff;
  margin-top: 20px;
}

.headerspoan{
  display: block;
  width: 100%;
  font-size: 15px;
    color: #323232;
    font-weight: 600;
    line-height: 20px;
  text-align: center;
  span{
    font-size: 12px;
    color: #aaa;
    line-height: 18px;
    padding-left:4px; 
  }
}
.left{
     font-size: 17px;
    color: #414141;
    font-weight: 600;
    line-height: 24px;
  img{
    width: 17%;
    float: right;
    margin-right: 2%;
  }
  .el-col{
    margin-bottom: 5px;
    height: 100%;
  }
}
.right{
     font-size: 17px;
    color: #414141;
    font-weight: 600;
    line-height: 24px;
  img{
    width: 17%;
    float: left;
    margin-right: 2%;
  }
  .el-col{
    margin-bottom: 5px;
    height: 100%;
  }
}
.bijiaoBox{
 
 img{
   margin-top: 10px;
   width: 100%;
   height: 100%;
 }
}
</style>
