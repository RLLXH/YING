<template>
  <div>
    <div class="imgBox"></div>
    <div class="mainBox">
      <el-row>
        <el-col :span="17">
          <div class="colorBox">
            <el-row>热门赛事</el-row>
            <el-row>
              <el-col :span="5">
                <img width="96%" src="../assets/pit.png" height="90px">
                <span class="spanBox">DITA PIT MINOR1111111ffff</span>
              </el-col>
              <el-col :span="5">
                <img width="96%" src="../assets/pit.png" height="90px">
                <span class="spanBox">DITA PIT MINORffffffff</span>
              </el-col>
              <el-col :span="5">
                <img width="96%" src="../assets/pit.png" height="90px">
                <span class="spanBox">DITA PIT MINORffffffff</span>
              </el-col>
              <el-col :span="5">
                <img width="96%" src="../assets/pit.png" height="90px">
                <span class="spanBox">DITA PIT MINORfffffffff</span>
              </el-col>
            </el-row>
          </div>
          <el-row>
            <el-col>
              <template>
                <el-tabs v-model="activeName" class="colorBox">
                  <el-tab-pane label="全部" name="first">
                    <div class="colorBox" v-for="(item,index) in list1" :key="index">
                      <el-row>
                        <el-col :span="5">
                          <img :src="item.img" width="100px" height="100px">
                        </el-col>
                        <el-col :span="19">{{item.title}}</el-col>
                      </el-row>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="比赛数据" name="second">
                    <div class="colorBox" v-for="(item,index) in list2" :key="index">
                      <el-row>
                        <el-col :span="5">
                          <img :src="item.img" width="100px" height="100px">
                        </el-col>
                        <el-col :span="19">{{item.title}}</el-col>
                      </el-row>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="赛事信息" name="third">
                    <div class="colorBox" v-for="(item,index) in list3" :key="index">
                      <el-row>
                        <el-col :span="5">
                          <img :src="item.img" width="100px" height="100px">
                        </el-col>
                        <el-col :span="19">{{item.title}}</el-col>
                      </el-row>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="战术攻略" name="fourth">
                    <div class="colorBox" v-for="(item,index) in list4" :key="index">
                      <el-row>
                        <el-col :span="5">
                          <img :src="item.img" width="100px" height="100px">
                        </el-col>
                        <el-col :span="19">{{item.title}}</el-col>
                      </el-row>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="人物特稿" name="five">
                    <div class="colorBox" v-for="(item,index) in list5" :key="index">
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

        <el-col :span="6" class="niceBox">
          <div class="colorBox">
            <el-row>
              <el-col class="headerText">直播人气排行榜</el-col>
            </el-row>
            <el-row class="fitText">
              <el-col :span="5">主播</el-col>
              <el-col :span="4" :offset="15">人气</el-col>
            </el-row>
          </div>
          <el-row v-for="(item,index) in this.dataList" :key="index" class="fitBox">
            <el-col :span="19">
              <a href="#">{{item.title}}</a>
            </el-col>
            <el-col :span="4">{{item.num}}</el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { firstShowFatherSelect } from "../api/address.js";
import axios from "../api/axios";
export default {
  data() {
    return {
      activeName: "first",
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      list5: [],
      dataList: [
        {
          title: "【卡尔】 卡尔最强王者  微服私访",
          num: "1446355"
        }
      ]
    };
  },
  created() {
    this.getlist();
  },
  methods: {
    getlist() {
      axios.post(firstShowFatherSelect).then(data => {
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
  background-color: green;
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
  height: 40px;
  background-color: #ffffff;
  display: block;
  font-size: 13px;
  line-height: 40px;
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
</style>
