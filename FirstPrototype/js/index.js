var dData = function() {
  return Math.round(Math.random() * 90) + 10
};

var lineChartData = {
  labels:[],
  datasets: [{
    label:"Stress",
    fillColor: "rgba(220,220,220,0)",
    strokeColor: "rgba(156,128,239,1)",
    pointColor: "rgba(156,128,239,1)",
    data:[]

  }, {
    label:"Excitement",
    fillColor: "rgba(220,220,220,0)",
    strokeColor: "rgba(224, 203, 78,1)",
    pointColor: "rgba(224, 203, 78,1)",
    data:[]

  } , {
    label:"Engagement",
    fillColor: "rgba(220,220,220,0)",
    strokeColor: "rgba(117,197, 199,1)",
    pointColor: "rgba(117,197, 199,1)",
    data:[]
},{
  label:"Focus",
  fillColor: "rgba(220,220,220,0)",
  strokeColor: "rgba(141,224, 130,1)",
  pointColor: "rgba(141,224, 130,1)",
  data:[]

}, {
  label:"Interest",
  fillColor: "rgba(220,220,220,0)",
  strokeColor: "rgba(220,150, 83,1)",
  pointColor: "rgba(220,150, 83,1)",
  data:[]

} , {
  label:"Relaxation",
  fillColor: "rgba(220,220,220,0)",
  strokeColor: "rgba(122,175, 235,1)",
  pointColor: "rgba(122,175, 235,1)",
  data:[]
}]
}

var index = 0;
var ctx = document.getElementById("canvas").getContext("2d");
Chart.defaults.global.showTooltips = false;
var lineChart = new Chart(ctx).Line(lineChartData, {
  datasetStrokeWidth:3,
  scaleOverride : true,
  scaleSteps : 10,
  scaleStepWidth : 10,
  scaleStartValue : 0,
  pointDotRadius: 0,
  bezierCurve: false,
  scaleShowVerticalLines: false,
  scaleGridLineColor: "rgba(0,0,0,0.2)",
  responsive: true,
  barValueSpacing: 2
});

setInterval(function() {
  if (index>3) {
    lineChart.removeData();
  }
  lineChart.addData([dData(),dData(), dData(),dData(),dData(),dData()], index*10);
  index++;
}, 3000);
