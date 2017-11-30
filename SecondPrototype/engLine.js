let lineChartData = {
  labels:[],
  datasets: [{
    label:"Engagement",
    fillColor: "rgba(220,220,220,0)",
    strokeColor: "rgba(117,197, 199,1)",
    pointColor: "rgba(117,197, 199,1)",
    data:[]

  }]
}

let index = 0;
let ctx = document.getElementById("canvas2").getContext("2d");
Chart.defaults.global.showTooltips = false;
let lineChart = new Chart(ctx).Line(lineChartData, {
  datasetStrokeWidth:3,
  scaleOverride : true,
  scaleSteps : 10,
  scaleStepWidth : 10,
  scaleStartValue : 0,
  pointDotRadius: 0,
  bezierCurve: true,
  scaleShowVerticalLines: false,
  scaleGridLineColor: "rgba(0,0,0,0.2)",
  responsive: true,
  barValueSpacing: 2
});

engagementRef.on('value', function(snapshot){
  if (index>3) {
    lineChart.removeData();
  }
  lineChart.addData([snapshot.val()], index*10);
  index++;
});
