Highcharts.chart('container', {
	chart: {
		type: 'tilemap',
		height:'100%'
	},

	title: {
		text: 'hexagons!'
	},

	subtitle: {
		text: 'the shapes that brought you honey, food of the gods'
	},

	xAxis: {
		visible: false
	}, 

	yAxis: {
		visible: false
	},

	legend: {
		enabled: false
	},

	tooltip: {
		pointFormat: 'x: {point.x}<br />y: {point.y}'
	},

	plotOptions: {
		series: {
			dataLabels: {
				enabled: true,
				color: '#000000',
				format: '{point.x},{point.y}'
			},
			borderWidth: 1,
			borderColor: '#777'
		}
	},

	series: [{
		keys: ['x', 'y'],
		color: 'orange',
		data: [
			[0,0],
			[1,0],
			[2,0],
			[3,0],
			[4,0],
			[1,1],
			[2,1],
			[3,1],
			[4,1],
			[0,2],
			[1,2],
			[2,2],
			[3,2],
			[4,2],
			[1,3],
			[2,3],
			[3,3],
			[4,3]
		]
	}]
});