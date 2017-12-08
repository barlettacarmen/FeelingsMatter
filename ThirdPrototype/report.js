var obj = {
 emotions:[
 {name:"excitement", values:[1,2,3,4,5,6,7,8,9,10,11,12,12,13,14,15,16,17,18,19,20,21,22]},
 {name:"realx", values: [67,1,2,3,5,7,4,8,99,44,22,45,11,10,90,40,66,33,55,89,10,30,23,5]},
 {name:"stress", values:[10,50,88,70,12,59,70,66,88,1,22,44,79,50,2,1,3,4,5,6,78,8,9]},
 {name:"engagement", values: [90,50,88,70,12,59,70,66,88,99,22,44,79,50,2,44,3,4,5,6,78,8,9]},
 {name:"interest", values:[90,50,61,70,12,59,70,66,88,99,22,44,79,50,2,1,60,4,5,6,78,8,9]},
 {name:"focus", values: [55,50,88,70,12,59,70,66,88,100,22,44,79,50,2,1,3,4,5,6,1,2,3]}
]
};
localStorage.setItem('experience', JSON.stringify(obj));
let emoExp=JSON.parse(localStorage.getItem('experience'));
let excData=emoExp.emotions[0].values;
let relData=emoExp.emotions[1].values;
let strData=emoExp.emotions[2].values;
let engData=emoExp.emotions[3].values;
let intData=emoExp.emotions[4].values;
let focData=emoExp.emotions[5].values;
let eng={label:"Engagement",
  fillColor: "rgba(220,220,220,0)",
  strokeColor: "rgba(117,197, 199,1)",
  pointColor: "rgba(117,197, 199,1)",
  data:engData}

let excit={label:"Excitement",
  fillColor: "rgba(220,220,220,0)",
  strokeColor: "rgba(224, 203, 78,1)",
  pointColor: "rgba(224, 203, 78,1)",
  data:excData}

let foc={label:"Focus",
    fillColor: "rgba(220,220,220,0)",
    strokeColor: "rgba(141,224, 130,1)",
    pointColor: "rgba(141,224, 130,1)",
    data:focData}
let inter={label:"Interest",
    fillColor: "rgba(220,220,220,0)",
    strokeColor: "rgba(220,150, 83,1)",
    pointColor: "rgba(220,150, 83,1)",
    data:intData}

let rel={label:"Relaxation",
  fillColor: "rgba(220,220,220,0)",
  strokeColor: "rgba(122,175, 235,1)",
  pointColor: "rgba(122,175, 235,1)",
  data:relData}
let str={
  label:"Stress",
  fillColor: "rgba(220,220,220,0)",
  strokeColor: "rgba(156,128,239,1)",
  pointColor: "rgba(156,128,239,1)",
  data:strData}
let data =[excit,rel,str,eng,inter,foc];
let canva=[];
for(let k=0;k<7;k++)
    canva[k]=document.getElementById('canvas'+k).getContext("2d");
let lc=[];
for(let k=0;k<6;k++)
    lc[k]=new Chart(canva[k]).Line({labels:[],datasets: [data[k]]},
      {
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
lc[6]=new Chart(canva[6]).Line({labels:[],datasets: data},
  {
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
legend(document.getElementById("lineLegend"), {labels:[],datasets: data});
