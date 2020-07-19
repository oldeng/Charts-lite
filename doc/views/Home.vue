<template>
  <div class="home">
    <div ref="charts" class="container"></div>
    <div id="tips">
      <div class="arrow-up"></div>
      <div class="arrow-down"></div>
      <div class="arrow-left"></div>
      <div class="arrow-right"></div>
      <div class="content">
      </div>
    </div>
  </div>
</template>

<script>
import Charts from "../../src/index";
import options from "./options";

export default {
  name: "Home",
  mounted() {
    this.$nextTick(() => {
      const myChart = new Charts(this.$refs["charts"]);
      myChart.setOption(options[0]);
    });
  }
};
</script>
<style lang="less" scoped>
h1 {
  margin: 0;
}
.container {
  width: 500px;
  height: 500px;
  margin: 0 auto;
  overflow: auto;
  border: 1px solid red;
}

#tips {
  width: 50px;
  height: 50px;
  border: 1px solid rgba(255, 255, 255, .3);
  border-radius: 5px;
  position: absolute;
  transition: all 0.1s;
  left: 100px;
  display: none;
  /* css3三角形（向上 ▲） */
  .arrow-up {
    width: 0px;
    height: 0px;
    border-left: 10px solid transparent; /* 右透明 */
    border-right: 10px solid transparent; /*右透明 */
    border-bottom: 10px solid rgba(255, 255, 255, .3); /* 定义底部颜色 */
    font-size: 0px;
    line-height: 0px;
    position: absolute;
    left: 50%;
    margin-top: -10px;
    margin-left: -10px;
  }
  /* css3三角形（向下 ▼） */
  .arrow-down {
    width: 0px;
    height: 0px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid rgba(255, 255, 255, .3);
    font-size: 0px;
    line-height: 0px;
        position: absolute;
    bottom: -10px;
    left: 50%;
    margin-left: -10px;
  }
  /* css3三角形（向左） */
  .arrow-left {
    position: absolute;
    width: 0px;
    height: 0px;
    border-bottom: 10px solid transparent; /* left arrow slant */
    border-top: 10px solid transparent; /* right arrow slant */
    border-right: 10px solid rgba(255, 255, 255, .3); /* bottom, add background color here */
    font-size: 0px;
    line-height: 0px;
    left: -10px;
    top: 50%;
    margin-top: -10px;

  }
  /* css3三角形（向右） */
  .arrow-right {
    position: absolute;
    width: 0px;
    height: 0px;
    border-bottom: 10px solid transparent; /* left arrow slant */
    border-top: 10px solid transparent; /* right arrow slant */
    border-left: 10px solid rgba(255, 255, 255, .3); /* bottom, add background color here */
    font-size: 0px;
    line-height: 0px;
    right: -10px;
    top: 50%;
    margin-top: -10px;
  }
}
</style>