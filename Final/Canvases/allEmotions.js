let allLineData = {
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

let indexAll = 0;
let ctxAll = document.getElementById("canvas14").getContext("2d");
Chart.defaults.global.showTooltips = false;
let allLine = new Chart(ctxAll).Line(allLineData, {

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
  if (indexAll>3) {
    allLine.removeData();
  }
  allLine.addData([snapshot.val().stress,snapshot.val().excitement,snapshot.val().engagement,snapshot.val().focus,snapshot.val().interest,snapshot.val().relax], indexAll*10);
  indexAll++;

});
