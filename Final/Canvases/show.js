var canvas1=document.getElementById('canvas1');
var canvas2=document.getElementById('canvas2');
var canvas3=document.getElementById('canvas3');
var canvas4=document.getElementById('canvas4');
var canvas5=document.getElementById('canvas5');
var canvas6=document.getElementById('canvas6');
var canvas7=document.getElementById('canvas7');
var canvas8=document.getElementById('canvas8');
var canvas9=document.getElementById('canvas9');
var canvas10=document.getElementById('canvas10');
var canvas11=document.getElementById('canvas11');
var canvas12=document.getElementById('canvas12');
var canvas13=document.getElementById('canvas13');
var canvas14=document.getElementById('canvas14');
swapCanvases1();
swapCanvases2();
swapCanvases3();
swapCanvases4();
swapCanvases5();
swapCanvases6();
swapCanvases7();

var button1=document.getElementById("b1");
button1.onclick=function(){
  swapCanvases1();
};
var button2= document.getElementById("b2");
button2.onclick=function(){
  swapCanvases2();
};
var button3= document.getElementById("b3");
button3.onclick=function(){
  swapCanvases3();
};
var button4= document.getElementById("b4");
button4.onclick=function(){
  swapCanvases4();
};
var button5= document.getElementById("b5");
button5.onclick=function(){
  swapCanvases5();
};
var button6= document.getElementById("b6");
button6.onclick=function(){
  swapCanvases6();
};
var button7= document.getElementById("b7");
button7.onclick=function(){
  swapCanvases7();
};

function swapCanvases1(){
  if(canvas1.style.visibility=='visible'){
    canvas1.style.visibility='hidden';
    canvas2.style.visibility='visible';
    if(canvas14.style.visibility=='visible'){
      canvas13.style.visibility='visible';
      canvas14.style.visibility='hidden';
    }
  }else{
    canvas1.style.visibility='visible';
    canvas2.style.visibility='hidden';
  }
}

function swapCanvases2(){
    if(canvas3.style.visibility=='visible'){
      canvas3.style.visibility='hidden';
      canvas4.style.visibility='visible';
      if(canvas14.style.visibility=='visible'){
        canvas13.style.visibility='visible';
        canvas14.style.visibility='hidden';
      }

    }else{
      canvas3.style.visibility='visible';
      canvas4.style.visibility='hidden';
    }
}
function swapCanvases3(){
    if(canvas5.style.visibility=='visible'){
      canvas5.style.visibility='hidden';
      canvas6.style.visibility='visible';
      if(canvas14.style.visibility=='visible'){
        canvas13.style.visibility='visible';
        canvas14.style.visibility='hidden';
      }
    }else{
      canvas5.style.visibility='visible';
      canvas6.style.visibility='hidden';
    }
}
function swapCanvases4(){
    if(canvas7.style.visibility=='visible'){
      canvas7.style.visibility='hidden';
      canvas8.style.visibility='visible';
      if(canvas14.style.visibility=='visible'){
        canvas13.style.visibility='visible';
        canvas14.style.visibility='hidden';
      }
    }else{
      canvas7.style.visibility='visible';
      canvas8.style.visibility='hidden';
    }
}
function swapCanvases5(){
    if(canvas9.style.visibility=='visible'){
      canvas9.style.visibility='hidden';
      canvas10.style.visibility='visible';
      if(canvas14.style.visibility=='visible'){
        canvas13.style.visibility='visible';
        canvas14.style.visibility='hidden';
      }
    }else{
      canvas9.style.visibility='visible';
      canvas10.style.visibility='hidden';
    }
}
function swapCanvases6(){
    if(canvas11.style.visibility=='visible'){
      canvas11.style.visibility='hidden';
      canvas12.style.visibility='visible';
      if(canvas14.style.visibility=='visible'){
        canvas13.style.visibility='visible';
        canvas14.style.visibility='hidden';
      }
    }else{
      canvas11.style.visibility='visible';
      canvas12.style.visibility='hidden';
    }
}
function swapCanvases7(){
  if(canvas13.style.visibility=='visible'){
    for(let i=1; i<=12; i++){
        var can= eval("canvas"+(i+1));
      if(can.style.visibility=='visible'){
          can.style.visibility='hidden';
      }
    }
    canvas13.style.visibility='hidden';
    canvas14.style.visibility='visible';
}else{
  canvas13.style.visibility='visible';
  canvas14.style.visibility='hidden';
}

}
