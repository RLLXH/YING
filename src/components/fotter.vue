<template>
  <div class="footerBox">
    <div class="ulB">
      <div class="ulBox">
        <el-row>
          <el-col :span="4">
            <ul class="textBox">
              <li class="first">玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>英雄联盟</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
            </ul>
          </el-col>
          <el-col :span="4">
            <ul class="textBox">
              <li class="first">玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
            </ul>
          </el-col>
          <el-col :span="4">
            <ul class="textBox">
              <li class="first">玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
            </ul>
          </el-col>
          <el-col :span="4">
             <ul class="textBox">
              <li class="first">玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
            </ul>
          </el-col>
          <el-col :span="4">
             <ul class="textBox">
              <li class="first">玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
            </ul>
          </el-col>
          <el-col :span="4">
            <ul class="textBox">
              <li class="first">玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
              <li>玩家电竞</li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="imgBox">
      <div class="iconBox">
        <ul>
          <div>合作媒体</div>
          <li>
            <a href="https://games.qq.com/">
              <img src="../assets/qqgame.png" height="30px;">
            </a>
          </li>
          <li>
            <a href="https://games.qq.com/">
              <img src="../assets/lol.png" height="30px;">
            </a>
          </li>
          <li>
            <a href="https://games.qq.com/">
              <img src="../assets/quantou.png" height="30px;">
            </a>
          </li>
        </ul>
        <ul>
          <div>合作战队</div>
          <li>
            <a href="https://games.qq.com/">
              <img src="../assets/we.png" height="30px;">
            </a>
          </li>
          <li>
            <a href="https://games.qq.com/">
              <img src="../assets/imay.png" height="30px;">
            </a>
          </li>
          <li>
            <a href="https://games.qq.com/">
              <img src="../assets/lgd.png" height="30px;">
            </a>
          </li>
           <li>
            <a href="https://games.qq.com/">
              <img src="../assets/edg.png" height="30px;">
            </a>
          </li>
           <li>
            <a href="https://games.qq.com/">
              <img src="../assets/qg.png" height="30px;">
            </a>
          </li>
        </ul>
        <ul>
          <div>合作直播平台</div>
          <li>
            <a href="https://games.qq.com/">
              <img src="../assets/huya.png" height="30px;">
            </a>
          </li>
          <li>
            <a href="https://games.qq.com/">
              <img src="../assets/douyu.png" height="30px;">
            </a>
          </li>
          <li>
            <a href="https://games.qq.com/">
              <img src="../assets/zhanqi.png" height="30px;">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.footerBox {
  width: 100%;
  .ulB {
    width: 100%;
    background-color: black;

    .ulBox {
      color: #ffffff;
      width: 60%;
      margin: auto;

      ul {
        li {
          list-style: none;
        }
      }
    }
  }
  .imgBox {
    width: 100%;
    background: #252525;
    .iconBox {
      width: 60%;
      background: #252525;
      padding-top: 38px;
      color: #838383;
      font-size: 14px;
      font-weight: 700;
      padding-bottom: 48px;
      overflow: hidden;
      margin: auto;
      ul {
        display: inline-block;
      }
      ul li {
        display: inline;
        margin-right: 2 4px;
      }
    }
  }
  .textBox{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: rgba(255,255,255,.38);
    li{
      margin-bottom:  5px;
    }
    .first{
      font-size: 14px;
    }
  }
}
</style>
