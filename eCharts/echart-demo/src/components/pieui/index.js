import * as echarts from 'echarts'
import React, { Component } from 'react'

class Index extends Component {
	componentDidMount() {
		this.initPie()
	}

	initPie() {
		let mychart = echarts.init(document.getElementById('pie'))
		mychart.setOption({
			series: {
				title: 'pie echart',
				type: 'pie',
				data: [
					{ name: 'A', value: 1212 },
					{ name: 'B', value: 2323 },
					{ name: 'C', value: 1919 },
				],
			},
		})
	}

	render() {
		return <div className='pie-echarts' id='pie' style={{ width: 600, height: 400 }}></div>
	}
}

export default Index
