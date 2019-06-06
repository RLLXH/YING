<template>
  <div class="all" style="margin:20px auto">
    <div class="headerBox">
      <el-row style="margin-bottom:20px">
        <span>
          数据类型：
          <el-button type="text" @click="ff('1')">战队数据</el-button>
          <el-button type="text" @click="ff('2')">选手数据</el-button>
        </span>
      </el-row>
      <el-row>
        <span>
          赛事：
          <el-select size="mini" v-model="event" @change="changeSelect" value-key="name">
            <el-option v-for="item in list" :key="item.index" :label="item.name" :value="item"></el-option>
          </el-select>
        </span>
      </el-row>
    </div>
    <div class="dateBox">
      <el-tabs type="border-card">
        <el-tab-pane label="进攻和经济效率" v-if="flag==1">
          <template>
            <div>
              <el-table :data="list1">
                <el-table-column prop="ranking" label="名次"></el-table-column>
                <el-table-column prop="combatTeam" label="战队"></el-table-column>
                <el-table-column prop="kda" label="KDA"></el-table-column>
                <el-table-column prop="fieldKill" label="场均击杀"></el-table-column>
                <el-table-column prop="fieldAveragedDeath" label="场均死亡"></el-table-column>
                <el-table-column prop="injuryPerMinute" label="每分钟伤害"></el-table-column>
                <el-table-column prop="bloodRate" label="一血率"></el-table-column>
                <el-table-column prop="averageFieldTime" label="场均时长"></el-table-column>
                <el-table-column prop="averageMarketEconomy" label="场均经济"></el-table-column>
                <el-table-column prop="economyPerMinute" label="每分钟经济"></el-table-column>
                <el-table-column prop="repairKnifePerMinute" label="每分钟补刀"></el-table-column>
              </el-table>
            </div>
          </template>
        </el-tab-pane>
        <el-tab-pane label="视野和资源控制" v-if="flag==1">
          <template>
            <div>
              <el-table :data="list2">
                <el-table-column prop="ranking" label="名次"></el-table-column>
                <el-table-column prop="combatTeam" label="战队"></el-table-column>
                <el-table-column prop="averageFieldDragon" label="场均小龙"></el-table-column>
                <el-table-column prop="xiaolongControlRate" label="小龙控制率"></el-table-column>
                <el-table-column prop="averageDragon" label="场均大龙"></el-table-column>
                <el-table-column prop="dalongControlRate" label="大龙控制率"></el-table-column>
                <el-table-column prop="interruptionPerMinute" label="每分钟插眼"></el-table-column>
                <el-table-column prop="eyeRowPerMinute" label="每分钟排眼"></el-table-column>
                <el-table-column prop="eyeRowEfficiency" label="排眼效率"></el-table-column>
                <el-table-column prop="numberFieldAveragePushTowers" label="场均推塔数"></el-table-column>
                <el-table-column prop="numberFieldAveragePushedTowers" label="场均被推塔数"></el-table-column>
              </el-table>
            </div>
          </template>
        </el-tab-pane>
        <el-tab-pane label="KDA数据" v-if="flag==2">
          <template>
            <div>
              <el-table :data="list3">
                <el-table-column prop="ranking" label="名次"></el-table-column>
                <el-table-column prop="person" label="选手"></el-table-column>
                <el-table-column prop="combatTeam" label="战队"></el-table-column>
                <el-table-column prop="site" label="位置"></el-table-column>
                <el-table-column prop="numberOfAppearances" label="出场次数"></el-table-column>
                <el-table-column prop="kda" label="KDA"></el-table-column>
                <el-table-column prop="participationRate" label="参团率"></el-table-column>
                <el-table-column prop="averageKilling" label="场均击杀"></el-table-column>
                <el-table-column prop="maximumSingleKill" label="单场最高击杀"></el-table-column>
                <el-table-column prop="fieldAveragedDeath" label="场均死亡"></el-table-column>
                <el-table-column prop="maximumSingleDeath" label="单场最高死亡"></el-table-column>
                <el-table-column prop="fieldAssists" label="场均助攻"></el-table-column>
              </el-table>
            </div>
          </template>
        </el-tab-pane>
        <el-tab-pane label="FARM和团队贡献" v-if="flag==2">
          <template>
            <div>
              <el-table :data="list4">
                <el-table-column prop="ranking" label="名次"></el-table-column>
                <el-table-column prop="person" label="选手"></el-table-column>
                <el-table-column prop="danChangZuiGao" label="单场最高助攻"></el-table-column>
                <el-table-column prop="gpm" label="GPM"></el-table-column>
                <el-table-column prop="cspm" label="CSPM"></el-table-column>
                <el-table-column prop="outputPerMinute" label="每分钟输出"></el-table-column>
                <el-table-column prop="outputShare" label="输出占比"></el-table-column>
                <el-table-column prop="takeDamageEveryMinute" label="每分钟承受伤害"></el-table-column>
                <el-table-column prop="percentageInJuriesSustained" label="承受伤害占比"></el-table-column>
                <el-table-column prop="interruptionPerMinute" label="每分钟插眼数"></el-table-column>
                <el-table-column prop="eyeRowPerMinute" label="每分钟排眼数"></el-table-column>
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
        <li>
          <img src="../assets/1556177380(1).jpg">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "../api/axios.js";
import { teamdataSelect } from "../api/address.js";
export default {
  data() {
    return {
      ttt: true,
      event: "",
      activeName: "first",
      list: [],
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      flag: "1"
    };
  },
  created() {
    this.getList();
  },
  methods: {
    ff(val) {
      this.flag = val;
    },
    getList() {
      axios.post(teamdataSelect).then(data => {
        this.list = data.data.competitionSeasons;
      });
    },
    changeSelect(val) {
      this.list1 = val.attackAndEconomies;
      this.list2 = val.visionAndResources;
      this.list3 = val.kdaDatas;
      this.list4 = val.farmTeamContributions;
      if (this.ttt) {
        this.list1.map((v, k) => {
          console.log(v);
          for (let val in v) {
            if (val != "ranking" && val != "combatTeam" && val != "person") {
              v[val] = (v[val] / 100).toFixed(2);
            }
          }
        });
        this.list2.map(v => {
          for (let val in v) {
            if (val != "ranking" && val != "combatTeam" && val != "person") {
              v[val] = (v[val] / 100).toFixed(2);
            }
          }
        });
        this.list3.map(v => {
          for (let val in v) {
            if (val != "ranking" && val != "combatTeam" && val != "person") {
              v[val] = (v[val] / 100).toFixed(2);
            }
          }
        });
        this.list4.map(v => {
          for (let val in v) {
            if (val != "ranking" && val != "combatTeam" && val != "person") {
              v[val] = (v[val] / 100).toFixed(2);
            }
          }
        });
      }
      this.ttt =false
    }
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
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  /deep/.el-table .cell,
  .el-table th div,
  .el-table--border td:first-child .cell,
  .el-table--border th:first-child .cell {
    padding-left: 0px;
    padding-right: 0px;
    font-size: 6px;
  }
}
</style>
