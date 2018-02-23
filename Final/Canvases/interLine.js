let lC3Data = {
  labels:[],
  datasets: [{
    label:"Interest",
    fillColor: "rgba(220,220,220,0)",
    strokeColor: "rgba(220,150, 83,1)",
    pointColor: "rgba(220,150, 83,1)",
    data:[]
  }]
}

let index3 = 0;
let ctx3 = document.getElementById("canvas8").getContext("2d");
Chart.defaults.global.showTooltips = false;
let lC3 = new Chart(ctx3).Line(lC3Data, {
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

allEmotions.on('value', function(snapshot){
  if (index3>3) {
    lC3.removeData();
  }
  lC3.addData([snapshot.val().interest], index3*10);
  index3++;
});
