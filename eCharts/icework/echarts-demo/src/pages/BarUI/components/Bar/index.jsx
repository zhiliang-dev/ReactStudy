import React, { useState, useEffect, Component } from 'react';

var echarts = require('echarts');

export default class Bar extends Component {
  componentDidMount() {
    console.log('BarUI');
    this.barRender();
  }

  barRender = () => {
    var barEchart = echarts.init(document.getElementById('bar'));
    var barOptions = {
      title: {
        text: '第一个Bar实例',
      },
      tooltip: {},
      xAxis: {
        name: '类型',
        nameLocation: 'middle',
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        nameTextStyle: {
          backgroundColor: 'transparent',
        },
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
    barEchart.setOption(barOptions);
    window.onresize = barEchart.resize;
  };

  render() {
    return (
      <div id="bar" style={{ width: '100%', height: 400 }}>
        123123
      </div>
    );
  }
}

// const barRender = () => {
//   setLoading(true);
//   var barEchart = echarts.init(document.getElementById('bar'));
//   var barOptions = {
//     title: {
//       text: '第一个Bar实例',
//     },
//     tooltip: {},
//     xAxis: {
//       name: '类型',
//       nameLocation: 'middle',
//       data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
//       nameTextStyle: {
//         backgroundColor: 'transparent',
//       },
//     },
//     yAxis: {},
//     series: [
//       {
//         name: '销量',
//         type: 'bar',
//         data: [5, 20, 36, 10, 10, 20],
//       },
//     ],
//   };
//   barEchart.setOption(barOptions);
// };

// const Bar = () => {
//   const barRender = () => {
//     var barId = document.getElementById('bar');
//     if (!barId) {
//       return false;
//     }
//     var barEchart = echarts.init(barId);
//     var barOptions = {
//       title: {
//         text: '第一个Bar实例',
//       },
//       tooltip: {},
//       xAxis: {
//         name: '类型',
//         nameLocation: 'middle',
//         data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
//         nameTextStyle: {
//           backgroundColor: 'transparent',
//         },
//       },
//       yAxis: {},
//       series: [
//         {
//           name: '销量',
//           type: 'bar',
//           data: [5, 20, 36, 10, 10, 20],
//         },
//       ],
//     };
//     barEchart.setOption(barOptions);
//   };

//   return <div id="bar">{barRender()}</div>;
// };

// export default Bar;
