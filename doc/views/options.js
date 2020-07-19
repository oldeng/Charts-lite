const option1 = {
  title: {
    text: '周销售额趋势'
  },
  xAxis: {
    name: 'X',
    
    axisLabel: {
      style: {
        border: 1,
        fill: 'red',
        fontSize: 30,
      }
    },
    data: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  },
  grid: {
    left: 100,
  },
  yAxis: {
    name: 'Y',
    data: 'value',
    hover: true,
    hoverRect: [100, 25],
    // hoverRect: [20, 20],
    mouseEnter: function (event, graphic) {
      console.log('mouseoEnter');
      let dom = document.querySelector('#tips');
      let content = document.querySelector('.content');
      dom.style.display = 'block';
      // dom.style.left = event.x + 'px';
      // dom.style.top = event.y + 'px';
      content.innerText = `${graphic.shape.content}`
      console.log(graphic);
      let tipsWidth = dom.offsetWidth;
      let tipsHeight = dom.offsetHeight;
      dom.style.left = event.x + 'px';
      let offset = {
        x: 35,
        y: 0
      }
      dom.style.width =  graphic.axisLabel.style.fontSize * graphic.shape.content.length + 'px';
      dom.style.left = event.x + offset.x +'px';
      dom.style.top = event.y + offset.y - tipsHeight / 2  + 'px';
      let arrowLeft = document.querySelector('.arrow-left');
      let arrowRight = document.querySelector('.arrow-right');
      let arrowTop = document.querySelector('.arrow-up');
      let arrowBottom = document.querySelector('.arrow-down');
      arrowRight.style.display = 'none';
      arrowTop.style.display = 'none';
      arrowBottom.style.display = 'none';
      arrowLeft.style.display = 'block';
    },
    mouseOuter: function () {
      let dom = document.querySelector('#tips');
      dom.style.display = 'none'
      // dom.style.left = '0px';
      // dom.style.top = '600px';
    },
    axisLabel: {
      style: {
        fill: '#ffffff',
        fontSize: 25,
      },
    },
    axisTick: {
      show: true,
      style: {
        stroke: 'red',
        lineWidth: 1,
        width: 10
      }
    }
  },
  series: [
    {
      value: 'xxxxx',
      label: {
        show: true,
        position: 'right',
        offset: [0, -100],
        style: {
          fill: '#ffffff'
        }
      },
      hover: true,
      data: [2339, 1899, 2118, 1790, 3265, 4465, 3996],
      mouseEnter: function (event, graphic) {
        console.log('mouseoEnter');
        let dom = document.querySelector('#tips');
        let arrowLeft = document.querySelector('.arrow-left');
        let arrowRight = document.querySelector('.arrow-right');
        let arrowTop = document.querySelector('.arrow-up');
        let arrowBottom = document.querySelector('.arrow-down');
        let content = document.querySelector('.content');
        dom.style.display = 'block';
        // dom.style.left = event.x + 'px';
        // dom.style.top = event.y + 'px';
        content.innerText = `${graphic.data}`
        console.log(graphic);
        let tipsWidth = dom.offsetWidth;
        let tipsHeight = dom.offsetHeight;
        dom.style.left = event.x + 'px';
        let offset = {
          x: 13,
          y: 0
        }
        dom.style.width =  graphic.style.fontSize * (graphic.data+'').length + 'px';
        dom.style.left = graphic.shape.x + graphic.shape.w + offset.x +'px';
        dom.style.top = graphic.shape.y + offset.y  + 'px';

        arrowLeft.style.display = 'none';
        arrowTop.style.display = 'none';
        arrowRight.style.display = 'none';
        arrowBottom.style.display = 'block';
        // arrowLeft.style.display = 'none';
      },
      // mouseOuter: function (e, graphic) {
      //   console.log('mouseoEnter');
      //   let dom = document.querySelector('#tips');
      //   let content = document.querySelector('.content');
      //   dom.style.display = 'block';
      //   dom.style.left = event.x + 'px';
      //   dom.style.top = event.y + 'px';
      //   content.innerText = `x=${event.x}, y=${event.y} ${graphic.shape.content}`
      //   console.log(graphic);
      // },
      // mouseMove: function (e, graphic) {
      //   let dom = document.querySelector('#tips');
      //   dom.style.left = e.x + 'px';
      //   dom.style.top = e.y + 'px';
      //   dom.innerText = `x=${e.x}, y=${e.y}`;
      // },
      type: 'bar'
    }
  ]
}


export default [option1, {}]

