<template>
  <div class="home">
    <div ref="charts" class="container"></div>
    <div id="tips"></div>
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
    width: 100px;
    height: 100px;
    border: 1px solid red;
    position: absolute;
    transition: all .1s;
  }
</style>