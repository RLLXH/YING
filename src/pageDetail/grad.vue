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
                <el-tabs v-model="activeName"  class="colorBox">
                  <el-tab-pane label="全部" name="first">
                    <div class="colorBox">
                      <el-row>
                        <el-col :span="5">
                          <img width="100px" height="100px" src="../assets/1.jpg">
                        </el-col>
                        <el-col :span="19">[OWL选手]达拉燃老板透露Effect去向：将留队作为主播</el-col>
                      </el-row>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="比赛数据" name="second">配置管理</el-tab-pane>
                  <el-tab-pane label="赛事信息" name="third">角色管理</el-tab-pane>
                  <el-tab-pane label="战术攻略" name="fourth">定时任务补偿</el-tab-pane>
                  <el-tab-pane label="人物特稿" name="five">任务特稿</el-tab-pane>
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
export default {
  data() {
    return {
      activeName: "first",
      dataList: [
        {
          title: "【卡尔】 卡尔最强王者  微服私访",
          num: "1446355"
        }
      ]
    };
  },
  methods: {}
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
  margin-top:10px;
  height: 40px;
  background-color: #ffffff;
  display: block;
  font-size: 13px;
  line-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  .el-row{
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
