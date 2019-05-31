 var myChart = echarts.init(document.getElementById('chart'));
		
option = {
	
   
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series : [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: 'none',
            
			
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            data: [{
                name: '虚假流量',
                x: 600,
                y: 1192.8,
				symbol: 'image://picture//xujialiuliang.png',
				   symbolSize:[80,140],
				
            }, {
                name: '承担打投任务',
                x: 300,
                y: 1016.9,
				 symbol: 'image://picture//sanfen.png',
				   symbolSize:[100,120],
				
            }, {
                name: '专业刷数据',
                x: 900,
                y: 1016.9,
				symbol: 'image://picture//shuijun.png',
				   symbolSize:[100,120],
            }, {
                name: '组织承接打投任务 部分与经济公司有联系',
                x: 600,
                y: 846.4,
				 symbol: 'image://picture//fentou.png',
				   symbolSize:[90,162]
            },
				  {name:'需要流量来衡量其商业价值',
				   x:300,
				   y:673.2,
				   symbol: 'image://picture//yiren.png',
				   symbolSize:[90,162],
				  
		
				  },
				  {name:'运营艺人演艺事业',
				   x:900,
				   y:673.2,
				  symbol: 'image://picture//jingjigongsi.png',
				   symbolSize:[150,100],
				  },
				  {name:'提供演艺资源 需要艺人流量',
				  x:600,
				  y:500,
				   symbol: 'image://picture//guanggaozhu.png',
				   symbolSize:[160,150],},],
            // links: [],
            links: [{
                source: '提供演艺资源 需要艺人流量',
                target: '需要流量来衡量其商业价值',
                
            }, {
                source: '提供演艺资源 需要艺人流量',
                target: '运营艺人演艺事业',
               
              
            }, {
                source: '需要流量来衡量其商业价值',
                target: '运营艺人演艺事业',
				}, {
                source: '需要流量来衡量其商业价值',
                target: '组织承接打投任务 部分与经济公司有联系'
            }, {
                source: '需要流量来衡量其商业价值',
                target: '承担打投任务'
            }, {
                source: '组织承接打投任务 部分与经济公司有联系',
                target: '专业刷数据'
            },{source: '组织承接打投任务 部分与经济公司有联系',
                target: '虚假流量'},
					{source: '组织承接打投任务 部分与经济公司有联系',
                target: '专业刷数据'},
					{source: '专业刷数据',
                target: '虚假流量'},
					{source: '承担打投任务',
                target: '虚假流量'},
						{source: '运营艺人演艺事业',
                target: '组织承接打投任务 部分与经济公司有联系'},
					{source: '运营艺人演艺事业',
                target: '专业刷数据'},
					{source: '组织承接打投任务 部分与经济公司有联系',
                target: '承担打投任务'},
				   ],
			
			
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                }
            }
        }
    ]
};
		
	 myChart.setOption(option);
		
    


// JavaScript Document