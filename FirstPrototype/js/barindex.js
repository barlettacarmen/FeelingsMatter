var dData = function() {
  return Math.round(Math.random() * 90) + 10
};

var barChartData = {
  labels: ["Stress Excitement Engagement Focus Interest Relaxation"],

  datasets: [{
    label: "Stress",
    fillColor:  "rgba(156,128,239,1)",
    data: [0]
  },{
    label: "Excitement",
    fillColor: "rgba(224, 203, 78,1)",
    data: [0]
  },{
    label:"Engagement",
    fillColor: "rgba(117,197, 199,1)",
    data: [0]
  },{
    label:"Focus",
    fillColor: "rgba(141,224, 130,1)",
    data: [0]
  },{
    label:"Interest",
    fillColor: "rgba(220,150, 83,1)",
    data: [0]
  },{
    label:"Relaxation",
    fillColor: "rgba(122,175, 235,1)",
    data: [0]
  }]
}

Chart.defaults.global.showTooltips = false;

var ctx = document.getElementById("canvas2").getContext("2d");
var barChartDemo = new Chart(ctx).Bar(barChartData, {

  animation: false,
  scaleOverride : true,
  scaleSteps : 10,
  scaleStepWidth : 10,
  scaleStartValue : 0,
  responsive: true,
  barValueSpacing: 2
});
document.getElementById('js-legend').innerHTML = lineChart.generateLegend();
setInterval(function() {
  barChartDemo.removeData();
  barChartDemo.addData([dData(), dData(),dData(),dData(),dData(),dData()],"Stress Excitement Engagement Focus Interest Relaxation");

}, 3000);
