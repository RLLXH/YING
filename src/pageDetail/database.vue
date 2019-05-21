<template>
  <div class="all" style="margin:20px auto">
    <div class="headerBox">
      <el-row style="margin-bottom:20px">
        <span>
          数据类型：
          <el-button type="text">战队数据</el-button>
          <el-button type="text">选手数据</el-button>
        </span>
      </el-row>
      <el-row>
        <span>
          赛事：
          <el-select size="mini" v-model="event">
            <el-option v-for="item in list" :key="item.index" :label="item.name" :value="item.name"></el-option>
          </el-select>
        </span>
      </el-row>
    </div>
    <div class="dateBox">
      <el-tabs type="border-card">
        <el-tab-pane label="用户管理">
          <template>
            <div>
              <el-table>
                <el-table-column
                  v-for="(item,index) in tabHeade"
                  :key="index"
                  :prop="item.prop"
                  :label="item.label"
                ></el-table-column>
              </el-table>
            </div>
          </template>
        </el-tab-pane>
        <el-tab-pane label="配置管理">
          <template>
            <div>
              <el-table>
                <el-table-column
                  v-for="(item,index) in tabHeade"
                  :key="index"
                  :prop="item.prop"
                  :label="item.label"
                ></el-table-column>
              </el-table>
            </div>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="hezuoBox">
      <h4>合作伙伴</h4>
      <ul>
        <li>
          <img src="../assets/aofeng.jpg">
        </li>
        <li>
          <img src="../assets/zuoshi.jpg">
        </li>
        <li>
          <img src="../assets/xuwei.jpg">
        </li>
      </ul>
       <h4>名词解释</h4>
       <ul>
         <li><img src="../assets/1556177380(1).jpg"></li>
       </ul>
    </div>
   
  </div>
</template>
<script>
export default {
  data() {
    return {
      event: "2019 mis 入围赛",
      activeName: "first",
      list: [{ name: "2019 mis 入围赛" }],
      tabHeade: [
        {
          prop: "t",
          label: "名次"
        },
        {
          prop: "t",
          label: "选手"
        },
        {
          prop: "t",
          label: "战队"
        },
        {
          prop: "t",
          label: "位置"
        },
        {
          prop: "t",
          label: "出场次数"
        },
        {
          prop: "t",
          label: "KDA"
        },
        {
          prop: "t",
          label: "参团率"
        },
        {
          prop: "t",
          label: "场均击杀"
        },
        {
          prop: "t",
          label: "单场最高击杀"
        },
        {
          prop: "t",
          label: "场均死亡"
        },
        {
          prop: "t",
          label: "单场最高死亡"
        },
        {
          prop: "t",
          label: "场均助攻"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.all {
  width: 60%;
  margin: auto;
  .headerBox {
    padding: 16px 0 16px 16px;
    background: black;
    -webkit-background-size: cover;
    background-size: cover;
    overflow: hidden;
    margin-bottom: 15px;
    position: relative;
    color: #ffffff;
    span {
      width: 100%;
      font-size: 14px;
      color: #e6e6e6;
      line-height: 22px;
      font-weight: 600;
      .el-button:focus {
        background-color: #f5f6f7;
        color: black;
      }
      .el-button--text {
        padding: 0 4px;
        line-height: 24px;
        color: #e6e6e6;
        margin-left: 16px;
      }
    }
  }
  .hezuoBox {
    span {
      height: 65px;
      line-height: 65px;
      font-size: 16px;
      color: rgb(65, 65, 65);
      font-weight: 600;
      font-family: 微软雅黑;
      padding: 0px 0px 0px 18px;
    }

    ul {
        padding: 0px 0px;
        display: flex;

      li {
        display: inline-block;
        margin-right: 20px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
