let lC2Data = {
  labels:[],
  datasets: [{
    label:"Focus",
    fillColor: "rgba(220,220,220,0)",
    strokeColor: "rgba(141,224, 130,1)",
    pointColor: "rgba(141,224, 130,1)",
    data:[]

  }]
}

let indice2 = 0;
let ctx2 = document.getElementById("canvas6").getContext("2d");
Chart.defaults.global.showTooltips = false;
let lC2 = new Chart(ctx2).Line(lC2Data, {
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
  if (indice2>3) {
    lC2.removeData();
  }
  lC2.addData([snapshot.val().focus], indice2*10);
  indice2++;
});
