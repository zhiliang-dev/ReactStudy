import React, { Component } from 'react'

var echarts = require('echarts')

var base = +new Date(2014, 9, 3)
var oneDay = 24 * 3600 * 1000
var date = []

var data = [Math.random() * 150]
var now = new Date(base)

function addData(shift) {
	now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/')
	date.push(now)
	data.push((Math.random() - 0.4) * 10 + data[data.length - 1])

	if (shift) {
		date.shift()
		data.shift()
	}

	now = new Date(+new Date(now) + oneDay)
}
export default class Index extends Component {
	componentDidMount() {
		this.barRender()
		this.lineRender()
		this.pieRender()
		this.mixEchartsRender()
	}
	mixEchartsRender = () => {
		var mixEcharts = echarts.init(document.getElementById('mix_echarts'))
		var mixEchartsOptions = {
			title: {
				text: '第一个 Mix ECharts 实例',
			},
			xAxis: {
				data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dev'],
			},
			yAxis: {},
			tooltip: {},
			legend: {
				data: ['销量'],
			},
			series: [
				{
					name: '销量',
					type: 'pie',
					center: ['65%', 60],
					radius: 35,
					roseType: 'radius',
					data: [
						{ name: 'XX', value: 60 },
						{ name: 'YY', value: 45 },
						{ name: 'ZZ', value: 56 },
					],
					label: {
						show: true,
						position: 'outside',
					},
				},
				{
					name: '销量',
					type: 'line',
					data: [34, 28, 45, 64, 78, 32, 89, 45, 47, 68, 98, 62],
				},
				{
					name: '销量',
					type: 'bar',
					data: [20, 14, 32, 46, 24, 23, 23, 13, 16, 20, 24, 15],
				},
			],
		}
		var mixEchartsOptions2 = {
			title: {
				text: '第一个 Mix ECharts 实例',
			},
			xAxis: {
				type: 'category',
			},
			yAxis: {},
			dataset: {
				source: [
					['Jan', 34, 20, 'XX', 22],
					['Feb', 28, 14, 'YY', 45],
					['Mar', 45, 32, 'ZZ', 56],
					['Apr', 64, 46],
					['May', 78, 24],
					['Jun', 32, 23],
					['Jul', 89, 23],
					['Aug', 45, 13],
					['Sep', 47, 16],
					['Oct', 68, 20],
					['Nov', 98, 24],
					['Dec', 62, 15],
				],
			},
			series: [
				{
					type: 'pie',
					center: ['65%', 60],
					radius: 35,
					encode: { itemName: 3, value: 4 },
				},
				{
					type: 'line',
					encode: { x: 0, y: 1 },
				},
				{
					name: '销量',
					type: 'bar',
					encode: { x: 0, y: 2 },
				},
			],
		}
		mixEcharts.setOption(mixEchartsOptions)
	}

	barRender = () => {
		var barChart = echarts.init(document.getElementById('bar'))
		var barOptions = {
			title: {
				text: '第一个 ECharts 实例',
			},
			tooltip: {},
			legend: {
				data: ['销量'],
			},
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
		}
		barChart.setOption(barOptions)
	}
	lineRender = () => {
		var lineChart = echarts.init(document.getElementById('line'))
		for (var i = 1; i < 100; i++) {
			addData()
		}
		var lineOptions = {
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: date,
			},
			yAxis: {
				boundaryGap: [0, '50%'],
				type: 'value',
			},
			series: [
				{
					name: '成交',
					type: 'line',
					smooth: true,
					symbol: 'none',
					stack: 'a',
					areaStyle: {
						normal: {},
					},
					data: data,
				},
			],
			// itemStyle: {
			// 	normal: {
			// 		// color: 各异,
			// 		label: {
			// 			show: false,
			// 			// position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
			// 			//           'inside'|'left'|'right'|'top'|'bottom'
			// 			// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
			// 		},
			// 		lineStyle: {
			// 			width: 2,
			// 			type: 'solid',
			// 			shadowColor: 'rgba(0,0,0,0)', //默认透明
			// 			shadowBlur: 5,
			// 			shadowOffsetX: 3,
			// 			shadowOffsetY: 3,
			// 		},
			// 	},
			// 	emphasis: {
			// 		// color: 各异,
			// 		label: {
			// 			show: false,
			// 			// position: 默认自适应，水平布局为'top'，垂直布局为'right'，可选为
			// 			//           'inside'|'left'|'right'|'top'|'bottom'
			// 			// textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
			// 		},
			// 	},
			// },
			// //smooth : false,
			// //symbol: null,         // 拐点图形类型
			// symbolSize: 2, // 拐点图形大小
			// //symbolRotate : null,  // 拐点图形旋转控制
			// showAllSymbol: false, // 标志图形默认只有主轴显示（随主轴标签间隔隐藏策略）
		}
		setInterval(function () {
			addData(true)
			lineChart.setOption({
				xAxis: {
					data: date,
				},
				series: [
					{
						name: '成交',
						data: data,
					},
				],
			})
		}, 500)
		lineChart.setOption(lineOptions)
	}
	pieRender = () => {
		var pieChart = echarts.init(document.getElementById('pie'), 'dark')
		var pieOptions = {
			title: {
				text: '第一个 pie 实例',
			},
			tooltip: {},
			series: [
				{
					name: '销量',
					type: 'pie',
					radius: '55%',
					data: [
						{ value: 235, name: '视频广告' },
						{ value: 274, name: '联盟广告' },
						{ value: 310, name: '邮件营销' },
						{ value: 304, name: '直接访问' },
						{ value: 400, name: '搜索引擎' },
					],
				},
			],
		}
		pieChart.setOption(pieOptions)
	}
	scatterRender = () => {}
	render() {
		return (
			<div>
				<div style={{ display: 'flex' }}>
					<div id='bar' style={{ width: 600, height: 400 }}></div>
					<div id='mix_echarts' style={{ width: 600, height: 400 }}></div>
				</div>

				<div id='line' style={{ width: 600, height: 400 }}></div>
				<div id='pie' style={{ width: 600, height: 400 }}></div>
				<div id='scatter'></div>
				<div id='effectScatter'></div>
				<div id='radar'></div>
			</div>
		)
	}
}
