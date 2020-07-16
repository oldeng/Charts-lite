const option1 = {

    hover: true,
    xAxis: {
      name: '第一周',
      hover: true,
      mouseEnter: function (e) {
        console.log('mouseoEnter');
        console.log(e);
        let dom = document.querySelector('#tips');
        dom.style.left = e.x+'px';
        dom.style.top = e.y + 'px';

        dom.innerText = `x=${e.x}, y=${e.y}`
      },
      data: ['周一']
    },
    yAxis: {
      name: '销售额',
      hover: true,
      mouseEnter: function (e) {
        console.log('mouseoEnter');
        console.log(e);
        let dom = document.querySelector('#tips');
        dom.style.left = e.x+'px';
        dom.style.top = e.y + 'px';

        dom.innerText = `x=${e.x}, y=${e.y}`
      },
      min: 0,
      data: 'value'
    },
    series: [
      {
        data: [1200, 1],
        type: 'bar',
        hover: true,
        mouseEnter: function (e) {
          console.log('mouseoEnter');
          console.log(e);
          let dom = document.querySelector('#tips');
          dom.style.left = e.x+'px';
          dom.style.top = e.y + 'px';

          dom.innerText = `x=${e.x}, y=${e.y}`
        },
        details: {
          show: true,
          style: {
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            textBaseline: 'middle'
          }
        }
      }
    ]
  }
  
  const option2 = {
    title: {
      text: '周销售额趋势'
    },
    xAxis: {
      name: '第二周',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      name: '销售额',
      data: 'value'
    },
    series: [
      {
        data: [2339, 1899, 2118, 1790, 3265, 4465, 3996],
        type: 'bar'
      }
    ]
  }
  
  export default [option1, option2]