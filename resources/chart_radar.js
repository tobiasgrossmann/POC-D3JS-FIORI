var IRA_NEW = [
	{ axis: "PTS", value: 30, total: 30 },
	{ axis: "Rebounds (TOT)", value: 15, total: 15 },
    { axis: "AS", value: 5, total: 5 },
    { axis: "TO", value: 10, total: 10 },
    { axis: "ST", value: 4, total: 4 },
    { axis: "BS", value: 10, total: 10 },
];

var ESP_NEW = [
	{ axis: "PTS", value: 42, total: 42 },
	{ axis: "Rebounds (TOT)", value: 21, total: 21 },
    { axis: "AS", value: 11, total: 11 },
    { axis: "TO", value: 6, total: 6 },
    { axis: "ST", value: 7, total: 7 },
    { axis: "BS", value: 2, total: 2 },
];

var IRA = {
	pts: 30,
	reb_tot: 15,
	as: 5,
	to: 10,
	st: 4,
	bs: 10
};

var ESP = {
	pts: 42,
	reb_tot: 21,
	as: 11,
	to: 6,
	st: 7,
	bs: 2
};

function getRadarChartData() {
	var data = [];
	var sliderValue = rangeInput.value;
	var tempArray = [];

	// for (var prop in IRA) {
	// 	console.log(IRA[prop]);
	// 	// tempArray.push({  });
	// }

	for (var i = 0; i < IRA_NEW.length; i++) {
	    IRA_NEW[i].value = Math.floor(IRA_NEW[i].total * sliderValue);
	}
	data.push(IRA_NEW);

	for (var i = 0; i < ESP_NEW.length; i++) {
	    ESP_NEW[i].value = Math.floor(ESP_NEW[i].total * sliderValue);
	    //Do something
	}
	data.push(ESP_NEW);


	// data = [
	// 	[
	//     	{ axis: "PTS", value: Math.floor(IRA.pts * sliderValue) },
	//     	{ axis: "Rebounds (TOT)", value: Math.floor(IRA.reb_tot * sliderValue) },
	// 	    { axis: "AS", value: Math.floor(IRA.as * sliderValue) },
	// 	    { axis: "TO", value: Math.floor(IRA.to * sliderValue) },
	// 	    { axis: "ST", value: Math.floor(IRA.st * sliderValue) },
	// 	    { axis: "BS", value: Math.floor(IRA.bs * sliderValue) },
	// 	],
	// 	[
	//     	{ axis: "PTS", value: Math.floor(ESP.pts * sliderValue) },
	//     	{ axis: "Rebounds (TOT)", value: Math.floor(ESP.reb_tot * sliderValue) },
	// 	    { axis: "AS", value: Math.floor(ESP.as * sliderValue) },
	// 	    { axis: "TO", value: Math.floor(ESP.to * sliderValue) },
	// 	    { axis: "ST", value: Math.floor(ESP.st * sliderValue) },
	// 	    { axis: "BS", value: Math.floor(ESP.bs * sliderValue) },
	// 	]
	// ];

	return data;
}

/*function getRadarChartData() {
	return [
	  [ 
	    {axis: "PTS",value:30},
	    // {axis: "Field Goals (M)",value: 23},
	    // {axis: "Field Goals (A)",value: 59},
	    // {axis: "2 Points (M)",value: 17},
	    // {axis: "2 Points (A)",value: 44},
	    // {axis: "3 Points (M)",value: 6},
	    // {axis: "3 Points (A)",value: 15},
	    // {axis: "Free Throws (M)",value: 8},
	    // {axis: "Free Throws (A)",value: 13},
	    // {axis: "Rebounds (OR)",value: 11},
	    // {axis: "Rebounds (DR)",value: 20},
	    {axis: "Rebounds (TOT)",value:15},
	    // {axis: "Points from Turnovers",value: 13},
	    // {axis: "Points in the Paint",value: 26},
	    //{axis: "Second Chance Points",value: 11},
	    //{axis: "Fast Break Points",value: 4},
	    //{axis: "Bench Points",value: 12},
	    {axis: "AS",value:5},
	    {axis: "TO",value:10},
	    {axis: "ST",value:4},
	    {axis: "BS",value:1},
	    // {axis: "PF",value:24},
	    // {axis: "FD",value:12}
	  ], 
	  [
	    {axis: "PTS",value:42},
	    // {axis: "Field Goals (M)",value: 30},
	    // {axis: "Field Goals (A)",value: 60},
	    // {axis: "2 Points (M)",value: 23},
	    // {axis: "2 Points (A)",value: 41},
	    // {axis: "3 Points (M)",value: 7},
	    // {axis: "3 Points (A)",value: 19},
	    // {axis: "Free Throws (M)",value: 23},
	    // {axis: "Free Throws (A)",value: 32},	
	    // {axis: "Rebounds (OR)",value: 13},
	    // {axis: "Rebounds (DR)",value: 29},
	    {axis: "Rebounds (TOT)",value:21},
	    // {axis: "Points from Turnovers",value: 20},
	    // {axis: "Points in the Paint",value: 40},
	    //{axis: "Second Chance Points",value: 14},
	    //{axis: "Fast Break Points",value: 10},
	    //{axis: "Bench Points",value: 29},		    
	    {axis: "AS",value:11},
	    {axis: "TO",value:6},
	    {axis: "ST",value:7},
	    {axis: "BS",value:2},
	    // {axis: "PF",value:12},
	    // {axis: "FD",value:24}
	  ]
	];
}*/

function drawRadarChart(placeholderID, placeholderChartID, data, widht) {
	var w = widht;
	var d = data;

	var basketballcolor=d3.scale.category10();

    var mycfg = {
			radius: 5,
			w: w/100*70,
			h: w/100*70,
			factor: 1,
			factorLegend: .85,
			levels: 20,
			maxValue: 0,
			radians: 2 * Math.PI,
			opacityArea: .5,
			color: ["#b9db52", "#60bfcd"],
            ToRight: 5,
            TranslateX: 80,
            TranslateY: 30,
            ExtraWidthX: 120,
            ExtraWidthY: 120
    };

	//Call function to draw the Radar chart
	//Will expect that data is in %'s
	RadarChart.draw("#" + placeholderChartID, d, mycfg);
}

var RadarChart = {
  draw: function(id, d, options){
  var cfg = d;
	
	if('undefined' !== typeof options){
	  for(var i in options){
		if('undefined' !== typeof options[i]){
		  cfg[i] = options[i];
		}
	  }
	}
	cfg.maxValue = 50;
	// cfg.maxValue = Math.max(cfg.maxValue, d3.max(d, function(i){return d3.max(i.map(function(o){return o.value;}))}));
	var allAxis = (d[0].map(function(i, j){return i.axis}));
	var total = allAxis.length;
	var radius = cfg.factor*Math.min(cfg.w/2, cfg.h/2);
	//var Format = d3.format('%');
	d3.select(id).select("svg").remove();
	
	var g = d3.select(id)
			.append("svg")
			.attr("width", cfg.w+cfg.ExtraWidthX)
			.attr("height", cfg.h+cfg.ExtraWidthY)
			.append("g")
			.attr("transform", "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")");
			;
 
	var tooltip;
	
	//Circular segments
	for(var j=0; j<cfg.levels-1; j++){
	  var levelFactor = cfg.factor*radius*((j+1)/cfg.levels);
	  g.selectAll(".levels")
	   .data(allAxis)
	   .enter()
	   .append("svg:line")
	   .attr("x1", function(d, i){return levelFactor*(1-cfg.factor*Math.sin(i*cfg.radians/total));})
	   .attr("y1", function(d, i){return levelFactor*(1-cfg.factor*Math.cos(i*cfg.radians/total));})
	   .attr("x2", function(d, i){return levelFactor*(1-cfg.factor*Math.sin((i+1)*cfg.radians/total));})
	   .attr("y2", function(d, i){return levelFactor*(1-cfg.factor*Math.cos((i+1)*cfg.radians/total));})
	   .attr("class", "line")
	   .style("stroke", "grey")
	   .style("stroke-opacity", "0.75")
	   .style("stroke-width", "0.3px")
	   .attr("transform", "translate(" + (cfg.w/2-levelFactor) + ", " + (cfg.h/2-levelFactor) + ")");
	}
 
	//Text indicating at what each level is
	// for(var j=0; j<cfg.levels; j++){
	//   var levelFactor = cfg.factor*radius*((j+1)/cfg.levels);
	//   g.selectAll(".levels")
	//    .data([1]) //dummy data
	//    .enter()
	//    .append("svg:text")
	//    .attr("x", function(d){return levelFactor*(1-cfg.factor*Math.sin(0));})
	//    .attr("y", function(d){return levelFactor*(1-cfg.factor*Math.cos(0));})
	//    .style("font-size", "60%")
	//    .attr("transform", "translate(" + (cfg.w/2-levelFactor + cfg.ToRight) + ", " + (cfg.h/2-levelFactor) + ")")
	//    .attr("fill", "#737373")
	//    .text((j+1)*cfg.maxValue/cfg.levels);
	// }
	
	var series = 0;
 
	var axis = g.selectAll(".axis")
			.data(allAxis)
			.enter()
			.append("g")
			.attr("class", "axis");
 
	axis.append("line")
		.attr("x1", cfg.w/2)
		.attr("y1", cfg.h/2)
		.attr("x2", function(d, i){return cfg.w/2*(1-cfg.factor*Math.sin(i*cfg.radians/total));})
		.attr("y2", function(d, i){return cfg.h/2*(1-cfg.factor*Math.cos(i*cfg.radians/total));})
		.attr("class", "line")
		.style("stroke", "grey")
		.style("stroke-width", "1px");
 
	axis.append("text")
		.text(function(d){return d})
		.style("font-size", "120%")
		.style("font-family", "BebasRegular")
		.attr("fill", "#FFFFFF")
		.attr("text-anchor", "middle")
		.attr("dy", "1.5em")
		.attr("transform", function(d, i){return "translate(0, -10)"})
		.attr("x", function(d, i){return cfg.w/2*(1-cfg.factorLegend*Math.sin(i*cfg.radians/total))-60*Math.sin(i*cfg.radians/total);})
		.attr("y", function(d, i){return cfg.h/2*(1-Math.cos(i*cfg.radians/total))-20*Math.cos(i*cfg.radians/total);});
 
 
	d.forEach(function(y, x){
	  dataValues = [];
	  g.selectAll(".nodes")
		.data(y, function(j, i){
		  dataValues.push([
			cfg.w/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total)), 
			cfg.h/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total))
		  ]);
		});
	  dataValues.push(dataValues[0]);
	  g.selectAll(".area")
					 .data([dataValues])
					 .enter()
					 .append("polygon")
					 .attr("class", "radar-chart-serie"+series)
					 .style("stroke-width", "2px")
					 .style("stroke", cfg.color[series])
					 .attr("points",function(d) {
						 var str="";
						 for(var pti=0;pti<d.length;pti++){
							 str=str+d[pti][0]+","+d[pti][1]+" ";
						 }
						 return str;
					  })
					 .style("fill", function(j, i){return cfg.color[series]})
					 .style("fill-opacity", cfg.opacityArea)
					 .on('mouseover', function (d){
										z = "polygon."+d3.select(this).attr("class");
										g.selectAll("polygon")
										 .transition(200)
										 .style("fill-opacity", 0.1); 
										g.selectAll(z)
										 .transition(200)
										 .style("fill-opacity", .7);
									  })
					 .on('mouseout', function(){
										g.selectAll("polygon")
										 .transition(200)
										 .style("fill-opacity", cfg.opacityArea);
					 });
	  series++;
	});
	series=0;
 
	d.forEach(function(y, x){
	  g.selectAll(".nodes")
		.data(y).enter()
		.append("svg:circle")
		.attr("class", "radar-chart-serie"+series)
		.attr('r', cfg.radius)
		.attr("alt", function(j){return Math.max(j.value, 0)})
		.attr("cx", function(j, i){
		  dataValues.push([
			cfg.w/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total)), 
			cfg.h/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total))
		]);
		return cfg.w/2*(1-(Math.max(j.value, 0)/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total));
		})
		.attr("cy", function(j, i){
		  return cfg.h/2*(1-(Math.max(j.value, 0)/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total));
		})
		.attr("data-id", function(j){return j.axis})
		.style("fill", cfg.color[series]).style("fill-opacity", .9)
		.on('mouseover', function (d){
					newX =  parseFloat(d3.select(this).attr('cx')) - 10;
					newY =  parseFloat(d3.select(this).attr('cy')) - 5;
					
					tooltip
						.attr('x', newX)
						.attr('y', newY)
						.text(d.value)
						.transition(200)
						.style('opacity', 1)
						.style("font-size", "120%")
						.style("font-family", "BebasRegular")
						.attr("fill", "#FFFFFF");
						
					z = "polygon."+d3.select(this).attr("class");
					g.selectAll("polygon")
						.transition(200)
						.style("fill-opacity", 0.1); 
					g.selectAll(z)
						.transition(200)
						.style("fill-opacity", .7);
				  })
		.on('mouseout', function(){
					tooltip
						.transition(200)
						.style('opacity', 0);
					g.selectAll("polygon")
						.transition(200)
						.style("fill-opacity", cfg.opacityArea);
				  })
		.append("svg:title")
		.text(function(j){return Math.max(j.value, 0)});
 
	  series++;
	});
	//Tooltip
	tooltip = g.append('text')
			   .style('opacity', 0)
			   .style('font-size', '80%');
  }
};


/*
color 1: 1f77b4 #1f77b4
color 2: ff7f0e #ff7f0e
*/

/**
 * Kick off radar diagramm.
 */
document.addEventListener('DOMContentLoaded', function(){
  	// console.log("window.onload");
  	drawRadar();
});

var rangeInput = document.getElementById('radar-slider');

if (rangeInput) {
	rangeInput.oninput = function() {
	  	drawRadar();
	};
}

var checkbox_fgm = document.getElementsByName('checkbox_fgm');
if (checkbox_fgm.length) {
	checkbox_fgm[0].onchange = function() {
		if (this.checked) {
			IRA_NEW.push({ axis: this.parentNode.textContent, value: 23, total: 23 });
			ESP_NEW.push({ axis: this.parentNode.textContent, value: 30, total: 30 });
		} else {
			for (var i = 0; i < IRA_NEW.length; i++) {
				if (IRA_NEW[i].axis === this.parentNode.textContent) {
					IRA_NEW.splice(i, 1);
				}
			}
			for (var i = 0; i < ESP_NEW.length; i++) {
				if (ESP_NEW[i].axis === this.parentNode.textContent) {
					ESP_NEW.splice(i, 1);
				}
			}
		}
		
	  	drawRadar();
	};
}

var checkbox_fga = document.getElementsByName('checkbox_fga');
if (checkbox_fga.length) {
	checkbox_fga[0].onchange = function() {
		if (this.checked) {
			IRA_NEW.push({ axis: this.parentNode.textContent, value: 23, total: 23 });
			ESP_NEW.push({ axis: this.parentNode.textContent, value: 30, total: 30 });
		} else {
			for (var i = 0; i < IRA_NEW.length; i++) {
				if (IRA_NEW[i].axis === this.parentNode.textContent) {
					IRA_NEW.splice(i, 1);
				}
			}
			for (var i = 0; i < ESP_NEW.length; i++) {
				if (ESP_NEW[i].axis === this.parentNode.textContent) {
					ESP_NEW.splice(i, 1);
				}
			}
		}
		
	  	drawRadar();
	};
}

var checkbox_ftm = document.getElementsByName('checkbox_ftm');
if (checkbox_ftm.length) {
	checkbox_ftm[0].onchange = function() {
		if (this.checked) {
			IRA_NEW.push({ axis: this.parentNode.textContent, value: 23, total: 23 });
			ESP_NEW.push({ axis: this.parentNode.textContent, value: 30, total: 30 });
		} else {
			for (var i = 0; i < IRA_NEW.length; i++) {
				if (IRA_NEW[i].axis === this.parentNode.textContent) {
					IRA_NEW.splice(i, 1);
				}
			}
			for (var i = 0; i < ESP_NEW.length; i++) {
				if (ESP_NEW[i].axis === this.parentNode.textContent) {
					ESP_NEW.splice(i, 1);
				}
			}
		}
		
	  	drawRadar();
	};
}

var checkbox_fta = document.getElementsByName('checkbox_fta');
if (checkbox_fta.length) {
	checkbox_fta[0].onchange = function() {
		if (this.checked) {
			IRA_NEW.push({ axis: this.parentNode.textContent, value: 23, total: 23 });
			ESP_NEW.push({ axis: this.parentNode.textContent, value: 30, total: 30 });
		} else {
			for (var i = 0; i < IRA_NEW.length; i++) {
				if (IRA_NEW[i].axis === this.parentNode.textContent) {
					IRA_NEW.splice(i, 1);
				}
			}
			for (var i = 0; i < ESP_NEW.length; i++) {
				if (ESP_NEW[i].axis === this.parentNode.textContent) {
					ESP_NEW.splice(i, 1);
				}
			}
		}
		
	  	drawRadar();
	};
}

var checkbox_or = document.getElementsByName('checkbox_or');
if (checkbox_or.length) {
	checkbox_or[0].onchange = function() {
		if (this.checked) {
			IRA_NEW.push({ axis: this.parentNode.textContent, value: 23, total: 23 });
			ESP_NEW.push({ axis: this.parentNode.textContent, value: 30, total: 30 });
		} else {
			for (var i = 0; i < IRA_NEW.length; i++) {
				if (IRA_NEW[i].axis === this.parentNode.textContent) {
					IRA_NEW.splice(i, 1);
				}
			}
			for (var i = 0; i < ESP_NEW.length; i++) {
				if (ESP_NEW[i].axis === this.parentNode.textContent) {
					ESP_NEW.splice(i, 1);
				}
			}
		}
		
	  	drawRadar();
	};
}

var checkbox_dr = document.getElementsByName('checkbox_dr');
if (checkbox_dr.length) {
	checkbox_dr[0].onchange = function() {
		if (this.checked) {
			IRA_NEW.push({ axis: this.parentNode.textContent, value: 23, total: 23 });
			ESP_NEW.push({ axis: this.parentNode.textContent, value: 30, total: 30 });
		} else {
			for (var i = 0; i < IRA_NEW.length; i++) {
				if (IRA_NEW[i].axis === this.parentNode.textContent) {
					IRA_NEW.splice(i, 1);
				}
			}
			for (var i = 0; i < ESP_NEW.length; i++) {
				if (ESP_NEW[i].axis === this.parentNode.textContent) {
					ESP_NEW.splice(i, 1);
				}
			}
		}
		
	  	drawRadar();
	};
}

var checkbox_pf = document.getElementsByName('checkbox_pf');
if (checkbox_pf.length) {
	checkbox_pf[0].onchange = function() {
		if (this.checked) {
			IRA_NEW.push({ axis: this.parentNode.textContent, value: 23, total: 23 });
			ESP_NEW.push({ axis: this.parentNode.textContent, value: 30, total: 30 });
		} else {
			for (var i = 0; i < IRA_NEW.length; i++) {
				if (IRA_NEW[i].axis === this.parentNode.textContent) {
					IRA_NEW.splice(i, 1);
				}
			}
			for (var i = 0; i < ESP_NEW.length; i++) {
				if (ESP_NEW[i].axis === this.parentNode.textContent) {
					ESP_NEW.splice(i, 1);
				}
			}
		}
		
	  	drawRadar();
	};
}

function drawRadar() {
	// console.log("drawRadar");
  	var placeholderIDRadar = 'idMain--d3placeholdertabnetdiag';
	var placeholderChartIDRadar = 'idMain--d3placeholdertabnetdiagChart';
	if (document.getElementById(placeholderIDRadar)) {
        var clientWidhtPlaceholderRadar = document.getElementById(placeholderIDRadar).clientWidth;
        var radarChartWith = clientWidhtPlaceholderRadar - 40;
        drawRadarChart(placeholderIDRadar, placeholderChartIDRadar, getRadarChartData(), radarChartWith);
    }
}