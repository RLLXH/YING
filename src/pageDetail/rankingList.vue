<template>
  <div class="all" style="margin:20px auto">
    <el-row>
      <el-col :span="7" class="box">
        <h2 style="padding:20px">战队排行</h2>
        <el-table :data="list">
          <el-table-column
            v-for="(item,index) in tabHeade"
            :key="index"
            :prop="item.prop"
            :label="item.label"
            :type="item.type"
          ></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="7" :offset="1" class="box">
        <div class="clans">
          <div class="icon">
            <img src="../assets/64_mid.png">
          </div>
          <div class="clansName">
            <div class="nation">SKT</div>
            <div class="integral">
              <p>战力值</p>
              <p>1608</p>
            </div>
            <h4>1</h4>
          </div>
        </div>
        <div class="dtBox">
          <div>历史战绩</div>
          <div>战绩</div>
          <div>胜/平/负</div>
        </div>
        <h2>近期比赛</h2>
        <el-table :data="list">
          <el-table-column
            v-for="(item,index) in tabHeade"
            :key="index"
            :prop="item.prop"
            :label="item.label"
            :type="item.type"
          ></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="7" :offset="1" class="box">
        <h2 style="padding:20px">选手排行</h2>
        <el-table :data="list">
          <el-table-column
            v-for="(item,index) in tabHeade"
            :key="index"
            :prop="item.prop"
            :label="item.label"
            :type="item.type"
          ></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          name: "SKT",
          num: "168"
        }
      ],
      tabHeade: [
        {
          prop: "t",
          label: " ",
          type: "index"
        },
        {
          prop: "name",
          label: "战队名"
        },
        {
          prop: "num",
          label: "战队值"
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
  .box {
    background: #fff;
    h2 {
      font-size: 16px;
      color: #000;
      font-weight: 400;
      width: 90%;
      margin: auto;
      padding-top: 10px;
      border-bottom: 1px solid #414141;
    }
    .dtBox {
      line-height: 29px;
      font-size: 13px;
     
    }
    .clans {
      height: 112px;
      margin: 0 1em;
      border-bottom: solid 1px #414141;
      overflow: hidden;
      .icon {
        img {
          width: 5em;
          height: 5em;
          float: left;
          margin-top: 10px;
        }
      }
      .clansName {
        float: left;
        width: 196px;
        margin-left: 0.5em;
        margin-top: 0.75em;
        margin-bottom: 6px;
        .nation {
          line-height: 13px;
          color: #121212;
          font-size: 14px;
          float: left;
        }
        .integral {
          float: right;
          font-size: 18px;
          color: #3d3d3d;
          text-align: center;
        }
      }
    }
  }
}
</style>
