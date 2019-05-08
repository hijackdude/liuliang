var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
var data0 = [
    [28604, 77, 23, '王俊凯', '代言指数'],
    [31163, 77.4, 276, '杨幂', '代言指数'],

];

var data1 = [
    [95.69, 81.8, 23, '王俊凯', '代言指数'],
    [43294, 81.7, 359, '杨幂', '代言指数'],

];

var data = [
    [28604, 77],
    [31163, 77.4],
    [95.69, 81.8],
    [43294, 81.7],
    
];

// See https://github.com/ecomfe/echarts-stat
var myRegression = ecStat.regression('logarithmic', data);

myRegression.points.sort(function(a, b) {
    return a[0] - b[0];
});

option = {
   
    title: {
        text: '专业水平高不一定给你带来代言，热度可以',
        sublink: 'https://github.com/ecomfe/echarts-stat',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        top: 80,
        bottom: 90
    },
    xAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
    },
    series: [{
        name: '代言指数',
        type: 'scatter',
        symbolSize: function(data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function(param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                }])
            }
        },
        data: data0
    }, {
        name: '专业指数',
        type: 'scatter',
        symbolSize: function(data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function(param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                }, {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                }])
            }
        },
        data: data1
    }, {
        name: '专业指数',
        type: 'line',
        lineStyle: {
            normal: {
                color: '#2f4554'
            }
        },
        smooth: true,
        showSymbol: false,
        data: myRegression.points,
        markPoint: {
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    formatter: myRegression.expression,
                    textStyle: {
                        color: '#333',
                        fontSize: 14
                    }
                }
            },
            data: [{
                coord: myRegression.points[myRegression.points.length - 1]
            }]
        }
    }]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}