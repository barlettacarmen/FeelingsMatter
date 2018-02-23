let lCD = {
  labels:[],
  datasets: [{
    label:"Excitement",
    fillColor: "rgba(220,220,220,0)",
    strokeColor: "rgba(224, 203, 78,1)",
    pointColor: "rgba(224, 203, 78,1)",
    data:[]

  }]
}

let indice = 0;
let ctx1 = document.getElementById("canvas4").getContext("2d");
Chart.defaults.global.showTooltips = false;
let lC = new Chart(ctx1).Line(lCD, {
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
  if (indice>3) {
    lC.removeData();
  }
  lC.addData([snapshot.val().excitement], indice*10);
  indice++;
});
