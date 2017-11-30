let lC4Data = {
  labels:[],
  datasets: [{
    label:"Relaxation",
    fillColor: "rgba(220,220,220,0)",
    strokeColor: "rgba(122,175, 235,1)",
    pointColor: "rgba(122,175, 235,1)",
    data:[]

  }]
}

let index4 = 0;
let ctx4 = document.getElementById("canvas10").getContext("2d");
Chart.defaults.global.showTooltips = false;
let lC4 = new Chart(ctx4).Line(lC4Data, {
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

relaxRef.on('value', function(snapshot){
  if (index4>3) {
    lC4.removeData();
  }
  lC4.addData([snapshot.val()], index4*10);
  index4++;
});
