   var myChart = echarts.init(document.getElementById('zhuanyeshangye'));
		
  var dataBJ = [
   [70.92,89.63,1,1,1,1,83.55,"朱正廷"],
    [86.55,95.01,1,1,1,1,94.39,"朱一龙"],
    [94.01,88.15,1,1,1,1,80.71,"周迅"],
	[95.60,88.41,1,1,1,1,74.83,"周润发"],
	[88.18,89.31,1,1,1,1,84.19,"周杰伦"],
	[88.25,92.98,1,1,1,1,75.95,"周冬雨"],
	[91.47,87.18,1,1,1,1,82.29,"郑爽"],
[93.76,	90.28,1,1,1,1,	68.57,	"郑恺"],
[90.01,	88.68,1,1,1,1,	71.85,  "赵薇"],
[90.44, 95.74,1,1,1,1,	91.52,	"赵丽颖"],
[90.67, 89.53,1,1,1,1,	74.68,	"章子怡"],
[89.94,	93.47,1,1,1,1,	85.31,	"张艺兴"],
[93.02,	90.84,1,1,1,1,	73.84,	"张一山"],
[82.65,	87.5,1,1,1,1,	86.11,	"张馨予"],
[90.17,	88.45,1,1,1,1,	81.67,	"张韶涵"],
[81.16,	88.20,1,1,1,1,	69.96,	"张钧甯"],
[86.57,	88.82,1,1,1,1,	85.49,	"张杰"],
[96.42,	90.28,1,1,1,1,	67.78,	"张嘉译"],
[90.12,	88.97,1,1,1,1,	73.52,	"张彬彬"],
[74.18,	87.84,1,1,1,1,	74.02,	"尤长靖"],
[87.04,	94.60,1,1,1,1,	92.45,	"易烊千玺"],
[85.77,	91.56,1,1,1,1,	81.13,	"杨紫"],
[88.45,	93.53,1,1,1,1,	80.88,  "杨颖"],
[88.58,	93.07,1,1,1,1,	76.20,	"杨洋"],
[89.61,	94.10,1,1,1,1,	90.45,	"杨幂"],
[76.02, 88.80,1,1,1,1,	85.42,	"杨超越"],
[91.16,	89.63,1,1,1,1,	81.30,	"薛之谦"],
[85.32,	89.29,1,1,1,1,	71.13,	"许魏洲"],
[97.00,	89.90,1,1,1,1,	70.3,	"徐峥"],
[87.33,	88.13,1,1,1,1,	71.01,	"邢昭林"],
[87.75,	89.51,1,1,1,1,	81.90,	"谢娜"],
[86.93,	90.62,1,1,1,1,  60.76,	"吴尊"],
[88.74, 93.57,1,1,1,1,	86.39,	"吴亦凡"],
[75.26,	87.76,1,1,1,1,	85.24,	"吴宣仪"],
[83.70,	88.13,1,1,1,1,	80.32,	"吴昕"],
[95.68,	87.15,1,1,1,1,	60.97,	"吴奇隆"],
[88.09,	91.33,1,1,1,1,	71.68,	"吴磊"],
[95.14,	89.95,1,1,1,1,	69.52,	"吴京"],
[92.72,	88.36,1,1,1,1,	57.18,	"魏大勋"],
[89.48, 90.04,1,1,1,1,	65.44,	"王子文"],
[87.90,	94.41,1,1,1,1,	85.82,	"王源"],
[78.75,	88.08,1,1,1,1,	72.53,	"王一博"],
[91.15,	89.37,1,1,1,1,  68.50,  "王凯"],
[89.24,	95.77,1,1,1,1,  90.33,	"王俊凯"],
[86.775,89.42,1,1,1,1,	76.30,	"王嘉尔"],
[88.82,	87.17,1,1,1,1,	59.16,	"王鹤棣"],
[88.89,	91.89,1,1,1,1,  78.53,  "唐嫣"],
[90.59,	89.26,1,1,1,1,	76.21,	"孙俪"],
[87.78,	90.08,1,1,1,1,	51.09,	"宋威龙"],
[88.05,	89.91,1,1,1,1,	76.42,	"宋茜"],
[94.39,	92.53,1,1,1,1,	88.64,	"沈腾"],
[94.94,	89.21,1,1,1,1,	84.33,	"秦岚"],
[86.55,	89.50,1,1,1,1,	74.68,	"彭于晏"],
[87.81,	89.01,1,1,1,1,	80.29,	"倪妮"],
[88.62,	87.8,1,1,1,1,	71.45,	"马天宇"],
[87.3,	89.17,1,1,1,1,	94.41,	"马苏"],
[83.81,	88.62,1,1,1,1,	72.01,	"马思纯"],
[93.88,	89.90,1,1,1,1,  70.72,	"罗晋"],
[90.82,	94.94,1,1,1,1,	89.31,	"鹿晗"],
[87.12,	89.96,1,1,1,1,	77.73,	"柳岩"],
[88.27,	90.46,1,1,1,1,	64.21,	"刘涛"],
[85.26,	88.45,1,1,1,1,	75.1,	"刘诗诗"],
[96.33,	90.48,1,1,1,1,	59.44,	"刘若英"],
[83.90,	90.98,1,1,1,1,	80.56,	"刘昊然"],
[95.57,	87.81,1,1,1,1,	81.09,	"刘慈欣"],
[89.06,	88.4,1,1,1,1,	72.16,	"林志玲"],
[75.32,	87.54,1,1,1,1,  79.03,	"林彦俊"],
[89.05,	89.95,1,1,1,1,	77.48,	"林更新"],
[87.46,	88.38,1,1,1,1,	72.25,	"李宇春"],
[87.64,	92.53,1,1,1,1,  82.58,	"李易峰"],
[91.20,	90.28,1,1,1,1,	73.78,	"李晨"],
[89.79,	89.18,1,1,1,1,	63.59,	"李冰冰"],
[91.1,	88.58,1,1,1,1,	74.71,	"雷佳音"],
[89.44,	86.56,1,1,1,1,	69.86,	"鞠婧祎"],
[83.11,	88.51,1,1,1,1,	78.96,	"景甜"],
[89.32,	89.54,1,1,1,1,  65.62,	"井柏然"],
[97.51,	92.39,1,1,1,1,	71.04,	"靳东"],
[93.77,	90.04,1,1,1,1,	55.57,	"蒋欣"],
[89.88,	90.13,1,1,1,1,	70.82,	"江疏影"],
[89.28,	91.71,1,1,1,1,	78.50,	"黄子韬"],
[87.90,	89.76,1,1,1,1,	63.18,	"黄轩"],
[88.57,	90.69,1,1,1,1,	75.69,	"黄晓明"],
[80.38,	88.87,1,1,1,1,	79.15,	"黄明昊"],
[86.82,	90.26,1,1,1,1,	74.09,	"黄景瑜"],
[90.80,	89.27,1,1,1,1,	73.50,	"黄渤"],
[87.91,	89.75,1,1,1,1,	82.56,	"华晨宇"],
[86.69, 88.92,1,1,1,1,	49.18,	"胡可"],
[88.93,	91.27,1,1,1,1,	79.50,	"胡歌"],
[85.08,	87.47,1,1,1,1,	84.71,	"侯明昊"],
[91.37,	88.94,1,1,1,1,	86.29,	"何炅"],
[89.33,	87.46,1,1,1,1,	77.26,	"韩寒"],
[91.36,	88.32,1,1,1,1,	73.42,	"韩东君"],
[87.97,	91.97,1,1,1,1,	80.92,	"关晓彤"],
[90.91,	91.01,1,1,1,1,	85.55,	"古力娜扎"],
[81.24,	89.21,1,1,1,1,	81.88,	"范丞丞"],
[86.94,	91.37,1,1,1,1,	84.25,	"范冰冰"],
[89.81,	95.89,1,1,1,1,	90.79,	"迪丽热巴"],
[84.65,	92.28,1,1,1,1,	86.23,	"邓伦"],
[89.96,	88.72,1,1,1,1,	74.55,	"邓超"],
[93.73,	89.09,1,1,1,1,	60.63,	"大张伟"],
[89.43,	93.47,1,1,1,1,	81.62,	"陈伟霆"],
[64.73,	88.63,1,1,1,1,	82.87,  "陈立农"],
[90.85,	89.96,1,1,1,1,	71.65,	"陈坤"],
[88.66,	88.23,1,1,1,1,	77.29,	"陈赫"],
[82.37,	93.38,1,1,1,1,	95.65,	"蔡徐坤"],
[79.16,	89.45,1,1,1,1,	80.75,	"白宇"],
[89.31,	89.41,1,1,1,1,	87.11,  "白敬亭"],
];

var dataGZ = [
    [1,26,37,27,1.163,27,13,"优"],
    [2,85,62,71,1.195,60,8,"良"],
    [3,78,38,74,1.363,37,7,"良"],
    [4,21,21,36,0.634,40,9,"优"],
    [5,41,42,46,0.915,81,13,"优"],
    [6,56,52,69,1.067,92,16,"良"],
    [7,64,30,28,0.924,51,2,"良"],
    [8,55,48,74,1.236,75,26,"良"],
    [9,76,85,113,1.237,114,27,"良"],
    [10,91,81,104,1.041,56,40,"良"],
    [11,84,39,60,0.964,25,11,"良"],
    [12,64,51,101,0.862,58,23,"良"],
    [13,70,69,120,1.198,65,36,"良"],
    [14,77,105,178,2.549,64,16,"良"],
    [15,109,68,87,0.996,74,29,"轻度污染"],
    [16,73,68,97,0.905,51,34,"良"],
    [17,54,27,47,0.592,53,12,"良"],
    [18,51,61,97,0.811,65,19,"良"],
    [19,91,71,121,1.374,43,18,"良"],
    [20,73,102,182,2.787,44,19,"良"],
    [21,73,50,76,0.717,31,20,"良"],
    [22,84,94,140,2.238,68,18,"良"],
    [23,93,77,104,1.165,53,7,"良"],
    [24,99,130,227,3.97,55,15,"良"],
    [25,146,84,139,1.094,40,17,"轻度污染"],
    [26,113,108,137,1.481,48,15,"轻度污染"],
    [27,81,48,62,1.619,26,3,"良"],
    [28,56,48,68,1.336,37,9,"良"],
    [29,82,92,174,3.29,0,13,"良"],
    [30,106,116,188,3.628,101,16,"轻度污染"],
    [31,118,50,0,1.383,76,11,"轻度污染"]
];

var dataSH = [
    [1,91,45,125,0.82,34,23,"良"],
    [2,65,27,78,0.86,45,29,"良"],
    [3,83,60,84,1.09,73,27,"良"],
    [4,109,81,121,1.28,68,51,"轻度污染"],
    [5,106,77,114,1.07,55,51,"轻度污染"],
    [6,109,81,121,1.28,68,51,"轻度污染"],
    [7,106,77,114,1.07,55,51,"轻度污染"],
    [8,89,65,78,0.86,51,26,"良"],
    [9,53,33,47,0.64,50,17,"良"],
    [10,80,55,80,1.01,75,24,"良"],
    [11,117,81,124,1.03,45,24,"轻度污染"],
    [12,99,71,142,1.1,62,42,"良"],
    [13,95,69,130,1.28,74,50,"良"],
    [14,116,87,131,1.47,84,40,"轻度污染"],
    [15,108,80,121,1.3,85,37,"轻度污染"],
    [16,134,83,167,1.16,57,43,"轻度污染"],
    [17,79,43,107,1.05,59,37,"良"],
    [18,71,46,89,0.86,64,25,"良"],
    [19,97,71,113,1.17,88,31,"良"],
    [20,84,57,91,0.85,55,31,"良"],
    [21,87,63,101,0.9,56,41,"良"],
    [22,104,77,119,1.09,73,48,"轻度污染"],
    [23,87,62,100,1,72,28,"良"],
    [24,168,128,172,1.49,97,56,"中度污染"],
    [25,65,45,51,0.74,39,17,"良"],
    [26,39,24,38,0.61,47,17,"优"],
    [27,39,24,39,0.59,50,19,"优"],
    [28,93,68,96,1.05,79,29,"良"],
    [29,188,143,197,1.66,99,51,"中度污染"],
    [30,174,131,174,1.55,108,50,"中度污染"],
    [31,187,143,201,1.39,89,53,"中度污染"]
];

var schema = [
    {name: 'date', index: 0, text: '专业指数'},
    {name: 'AQIindex', index: 1, text: '商业综合指数'},
    {name: 'PM25', index: 2, text: 'PM2.5'},
    {name: 'PM10', index: 3, text: 'PM10'},
    {name: 'CO', index: 4, text: '一氧化碳（CO）'},
    {name: 'NO2', index: 5, text: '二氧化氮（NO2）'},
    {name: 'SO2', index: 6, text: '热度指数'}
];


var itemStyle = {
    normal: {
        opacity: 1.5,
        shadowBlur: 1,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
};

option = {
   
    color: [
        'E32429', '#fec42c', '#80F1BE'
    ],
    
    grid: {
        x: '10%',
        x2: 150,
        y: '18%',
        y2: '10%'
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
            var value = obj.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                
                + value[7]
                + '</div>'
			    + schema[0].text + '：' + value[0] + '<br>'
                + schema[1].text + '：' + value[1] + '<br>'
               
                + schema[6].text + '：' + value[6] + '<br>';
        }
    },
    xAxis: {
        type: 'value',
        name: '专业指数',
		scale:true,
        nameTextStyle: {
            color: '#2F4F4F',
            fontSize: 14
        },
		min:40,
        
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {

                color: '#2F4F4F'
            }
        }
    },
    yAxis: {
        type: 'value',
        name: '商业综合指数',
		scale:true,
        nameLocation: 'end',
      
        nameTextStyle: {
            color: '#2F4F4F',
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                color: '#2F4F4F'
            }
        },
        splitLine: {
            show: false
        }
    },
    visualMap: [
      
        {
            left: 'right',
            bottom: '25%',
            dimension: 6,
            min:49 ,
            max: 95,
            itemHeight: 150,
            calculable: true,
            precision: 0,
            text: ['颜色：热度指数'],
			hoverlink:true,
            textGap: 30,


            textStyle: {
                color: '#2F4F4F'
            },
            inRange: {
                colorLightness: [1, 0.4],
				color: ['#168B87','#E32429']
            },
            outOfRange: {
                color: ['rgba( 255,182,193,.2)']
            },
            controller: {
                inRange: {
                    color: ['#168B87','#c23531']
                },
                outOfRange: {
                    color: ['#FFFFFF']
                }
            }
        }
    ],
    series: [
        {
            name: '北京',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataBJ,
			symbolSize:18,
			
					markLine: {
						symbol:['circle'],
                lineStyle: {
                    normal: {
                        type: 'dashed',
						width:'1'
                    }
                },
                data : [
                        [
                            {
                              
                                 yAxis: 86.0,
                                 xAxis: 57.14
                            },
                            {
                                yAxis: 92.36,
                                xAxis: 100.0
                            }
                        ]
                ]
            }
       
        },
		 
    ]
};
	 myChart.setOption(option);// JavaScript Document