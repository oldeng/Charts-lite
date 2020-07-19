[ENGLISH](./README_EN.md)

<h1 align="center">Charts</h1>

<p align="center">
    <a href="https://github.com/jiaming743/charts/blob/master/LICENSE">
        <img src="https://img.shields.io/github/license/jiaming743/charts.svg" alt="LICENSE" />
    </a>
    <a href="https://www.npmjs.com/package/@jiaminghi/charts">
        <img src="https://img.shields.io/npm/v/@jiaminghi/charts.svg" alt="LICENSE" />
    </a>
</p>


### 支持

* `折线图`
* `柱状图`
* `饼状图`
* `雷达图`
* `仪表盘`
* `独立的Canvas渲染库`
* `独立的贝塞尔曲线和动画库`

### npm安装

```shell
//npm安装暂时未开放
$ npm install @oldeng/
```

### 使用

```javascript
import Charts from '@oldeng/charts'

const container = document.getElementById('container')

const myChart = new Charts(container)

myChart.setOption({
  title: 'My Chart',
  // ...otherConfig
})
```

详细文档及示例请移步[HomePage](http://charts.jiaminghi.com).

### 快速体验

```html
<!--资源位于个人服务器仅供体验和测试，请勿在生产环境使用-->
<!--调试版-->
<script src="http://lib.jiaminghi.com/charts/charts.map.js"></script>
<!--压缩版-->
<script src="http://lib.jiaminghi.com/charts/charts.min.js"></script>
<script>
  const Charts = window.Charts.default
  // do something
</script>
```