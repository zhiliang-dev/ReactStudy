import React, { Component } from 'react';

var echarts = require('echarts');

export default class BarUI extends Component {
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
	};
	render() {
		return <div id="bar" style={{ width: 600, height: 400 }}></div>;
	}
}
