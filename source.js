	var  width=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)*0.98;
		var  height=(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)*0.9;
		var  img_h=50;
		var  img_w=50;
		var  radius=10;

		var svg=d3.select(".chart")  
                .append("svg")  
                .attr("width",width)  
                .attr("height",height); 	
		var nodes=[{name:"蔡徐坤",image:"hlp.jpg",intro:"。"},
				{name:"粉头1",image:"gyl.jpg",intro:"。"},
				{name:"粉头2",image:"qtw.jpg",intro:""},
				{name:"粉头3",image:"ch.jpg",intro:""},
				{name:"水军",image:"ccg.jpg",intro:""},
				{name:"散粉",image:"gxq.jpg",intro:""},
				{name:"水军",image:"gxf.jpg",intro:""},
				{name:"大粉丝",image:"lyk.jpg",intro:""},
				{name:"水军",image:"zdl.jpg",intro:""},
				{name:"水军",image:"cys.jpg",intro:""},
				{name:"大粉丝",image:"ldk.jpg",intro:""},
				{name:"水军",image:"srj.jpg",intro:""},
				{name:"水军",image:"oyj.jpg",intro:""},
				{name:"大粉丝",image:"dyz.jpg",intro:""},
				{name:"水军",image:"jcm.jpg",intro:""}];

		var edges=[{source:0,target:1,relation:"父女"},{source:0,target:2,relation:"父女"},{source:0,target:3,relation:"父女"},
	           {source:0,target:2,relation:"父女"},{source:0,target:4,relation:"工作室、水军花钱刷转发"}, {source:0,target:5,relation:"偶像和粉丝"}, 
			   {source:1,target:6,relation:"粉丝花钱刷转发量"},{source:1,target:7,relation:"爱的关系"},
			   {source:2,target:9,relation:"粉丝花钱刷转发量"}, {source:2,target:10,relation:"爱的关系"},
				 {source:3,target:12,relation:"粉丝花钱刷转发量"},{source:3,target:13,relation:"爱的关系"}, 
				 {source:7,target:8,relation:"粉丝花钱刷流量"}, {source:10,target:11,relation:"粉丝花钱刷流量"},
			   {source:13,target:14,relation:"粉丝花钱刷流量"}];
		
		function fade(op,ra)
		{
			return function(g,i)
			{
				if (ra==40)
				{
					svg.select("#circle"+i).remove();
					svg.select("#catpattern"+i).remove();
					svg.select("#imgdefs"+i).remove();
					svg.select("#node"+i)
					   .attr("r",ra)
					   .style("fill",function(){
							var defs = svg.append("defs").attr("id", "imgdefs"+i)
							var catpattern = defs.append("pattern")
													.attr("id", "catpattern" + i)
													.attr("height", 1)
													.attr("width", 1)
							catpattern.append("image")
									.attr("id","circle"+i)
									.attr("x", 0)
									.attr("y", 0)
									.attr("width", 80)
									.attr("height", 80)
									.attr("xlink:href", g.image);
							return "url(#catpattern"+i+")";
							})
				}
				else if (ra==20)
				{
					svg.select("#circle"+i).remove();
					svg.select("#catpattern"+i).remove();
					svg.select("#imgdefs"+i).remove();
					svg.select("#node"+i)
					   .attr("r",ra)
					   .style("fill",function(){
							var defs = svg.append("defs").attr("id", "imgdefs"+i)
							var catpattern = defs.append("pattern")
													.attr("id", "catpattern" + i)
													.attr("height", 1)
													.attr("width", 1)
							catpattern.append("image")
									.attr("id","circle"+i)
									.attr("x", 0)
									.attr("y", 0)
									.attr("width", 40)
									.attr("height", 40)
									.attr("xlink:href", g.image);
							return "url(#catpattern"+i+")";
							})
				}
				
				svg.selectAll(".forceCircle")
					.attr("opacity",op);
				svg.selectAll(".pathText")
					.attr("opacity",op);
				svg.selectAll(".forceText")
					.attr("opacity",op);
				svg.selectAll(".forceLine")
				   .filter(function(d,i1){
						if (op==0)
						{
							svg.selectAll(".forceCircle")
							   .filter(function(e){
									if ((e.index==d.source.index && d.target.index==i) || (e.index==d.target.index && d.source.index==i) || (e.index==i))
									{
										svg.selectAll(".forceText")
											.filter(function(f){
												return f.index==e.index;
										   })
										   .attr("opacity",Math.abs(op-1));
										return true;
									}
							   })
							   .attr("opacity",Math.abs(op-1));
							if (!(d.source.index!=i && d.target.index!=i))
							{
								svg.selectAll(".pathText")
								   .filter(function(f,i2){
										return i1==i2-1;
									})
									.attr("opacity",Math.abs(op-1));
							}
						}
						return d.source.index!=i && d.target.index!=i;
					})
				   .attr("opacity",op);
				
				tooltip.html("describe"+g.intro)
					   .style("left",(d3.event.pageX)+"px")  	
					   .style("top",(d3.event.pageY+20)+"px")  
					   .style("opacity",Math.abs(op-1));  
			}
		}
			   
		var force=d3.layout.force()
                .nodes(nodes)
				.links(edges)
				.size([width,height])
				.linkDistance(height*0.4)
				.charge(-800)
                .start();	
        //提示框部分
		var tooltip=d3.selectAll("body")  
                    .append("div")  
                    .attr("class","tooltip")  
                    .style("opacity",0.0); 

       //箭头绘制	
		var defs = svg.append("defs");
		var radius=10;
		var arrowMarker = defs.append("marker")
								.attr("id","arrow")
								.attr("markerUnits","strokeWidth")
								.attr("markerWidth","4")
								.attr("markerHeight","4")
								.attr("viewBox","0 0 4 4")
								.attr("refX",20+radius/8-2)   //实际是radius/strokeWidth
								.attr("refY",2)
								.attr("orient","auto");

		var arrow_path = "M0,1 L4,2 L0,3 L0,0";

		arrowMarker.append("path")
					.attr("d",arrow_path); 					
		var color=d3.scale.category20();
		var path = svg.selectAll("path")
								  .data(edges)
								  .enter()
								  .append("path")
								  .attr("id", function(d,i) {
									   return "edgepath" +i;
								  })
								  .attr("class","forceLine")
								  .attr("marker-end","url(#arrow)");		
		var pathtext = svg.selectAll('.pathText')
				  .data(edges)
				  .enter()
				  .append("text")
				  .attr("class","pathText")
				  .append('textPath')
				  .style("stroke","#000000")
				  .attr("text-anchor", "middle")//居中
				  .attr("startOffset","50%")
				  .attr('xlink:href', function(d,i) { return "#edgepath" + i; })
				  .text(function(d) { return d.relation; });						  
		var  img_h=50;
		var  img_w=50;
		var  radius=23;								
		var circles=svg.selectAll("forceCircle")
	               .data(nodes)
				   .enter()
				   .append("circle")
				   .attr("id",function(d,i){return "node"+i})
				   .attr("class","forceCircle")
				   .attr("r",radius)
				   .style("stroke","DarkGray")
				   .style("stroke-width","1.0px")
				   .attr("fill", function(d, i){
                                    //创建圆形图片
                                    var defs = svg.append("defs").attr("id", "imgdefs");
                                    var catpattern = defs.append("pattern")
                                                         .attr("id", "catpattern" + i)
                                                         .attr("height", 1)
                                                         .attr("width", 1);
                                    catpattern.append("image")
											.attr("id","circle"+i)
                                            .attr("x", - (img_w / 2 - radius+5.8))
                                            .attr("y", - (img_h / 2 - radius+3.5))
                                            .attr("width", img_w+11)
                                            .attr("height", img_h+6)
                                            .attr("xlink:href","image/"+d.image);
                                    return "url(#catpattern" + i + ")";
                    })
					//.attr("fill",function(d){ return str[d.index];})
					/*.on("mouseover",function(d,i){    //加入提示框
                        tooltip.html("角色简介："+d.intro)
                               .style("left",(d3.event.pageX)+"px")  
                               .style("top",(d3.event.pageY+20)+"px")  
							   //.style("fill",rgb(198,226,255))
                               .style("opacity",0.6);  
					})
				   .call(force.drag);  */
					.on("mouseover",fade(0,40))
					.on("mouseout",fade(1,20))
					.call(force.drag);
	    var texts=svg.selectAll(".forceText")
                 .data(nodes)
				 .enter()
				 .append("text")
				 .attr("class","forceText")
				 .attr("x",function(d){return d.x;})
				 .attr("y",function(d){return d.y;})
				 .style("stroke", "#000000")
				 .style("font-family","Bell MT")
				 .style("font-size","10px")
                 .attr("dx","-1.5em")
				 .attr("dy","3em")
				 .text(function(d){return d.name;});
				 	
				 	
		force.on("tick",function(){
		      path.attr("d", function(d) {
					var dx = d.target.x - d.source.x;//增量
					var	dy = d.target.y - d.source.y;
					return "M" + d.source.x + ","+ d.source.y + "L" + d.target.x + "," + d.target.y;
				  });
			  circles.attr("cx",function(d){return d.x;});
			  circles.attr("cy",function(d){return d.y;});
			  texts.attr("x",function(d){return d.x;});
			  texts.attr("y",function(d){return d.y;});
		});