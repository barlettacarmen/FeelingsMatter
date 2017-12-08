let lC5Data = {
  labels:[],
  datasets: [{
    label:"Stress",
    fillColor: "rgba(220,220,220,0)",
    strokeColor: "rgba(156,128,239,1)",
    pointColor: "rgba(156,128,239,1)",
    data:[]

  }]
}

let index5 = 0;
let ctx5 = document.getElementById("canvas12").getContext("2d");
Chart.defaults.global.showTooltips = false;
let lC5 = new Chart(ctx5).Line(lC5Data, {
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

stressRef.on('value', function(snapshot){
  if (index5>3) {
    lC5.removeData();
  }
  lC5.addData([snapshot.val()], index5*10);
  index5++;
});
