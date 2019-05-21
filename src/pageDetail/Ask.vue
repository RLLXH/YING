<template>
  <div style="width:1200px;margin:0 auto;padding:10px">
      <div v-for="item in 10" class="item fl clearfix">
					<div class="item_left fl">
						<img src="https://static.wanplus.com/images/icp/pdf.png" alt="">
					</div>
					<div class="item_right fl">
						<div class="item_right_title" title="英雄联盟赛事用户调研报告">英雄联盟赛事用户调研报告</div>
						<div class="item_right_text" title="玩加出品-英雄联盟赛事用户调研报告">玩加出品-英雄联盟赛事用户调研报告</div>
						<div class="item_right_price clearfix">
							<div class="fl" style="color:#000;font-size:16px;margin-right:10px">￥500.00</div>
							<div class="fr pay" style="font-size: 14px;
    color: #fff;
    padding: 5px 20px;
    background: #E15A5A;
    border-radius: 4px;
    display: table;
    cursor: pointer;" onclick="showAlert()">付费预览</div>
						</div>
					</div>
				</div>
  </div>
</template>
<style scoped>
.item_left {
    margin-right: 20px;
}
.fl {
    float: left;
}
.clearfix {
    *zoom: 1;
}
.item_right_text {
    width: 192px;
    height: 32px;
    margin-top: 12px;
    font-size: 12px;
    color: #999;
    overflow: hidden;
}
.item_right_price {
    margin-top: 10px;
}

.item_right_price .fl {
    font-size: 20px;
    color: #fff;
}
.clearfix:before, .clearfix:after {
    display: table;
    line-height: 0;
    content: "";
}
.item_right_price {
    margin-top: 10px;
}

.item_right_title {
    width: 192px;
    font-weight: bold;
    font-size: 16px;
    color: #333;
    height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.clearfix:before, .clearfix:after {
    display: table;
    line-height: 0;
    content: "";
}
.item {
    padding: 15px 25px;
    margin: 25px 25px 0 0;
    background: #fff;
    border-radius: 5px;
}

</style>
