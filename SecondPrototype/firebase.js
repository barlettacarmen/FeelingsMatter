// Initialize Firebase
var config = {
  apiKey: "AIzaSyA6p4PeUCemy40bVDlXNHTWoCePh3ZCCTs",
  authDomain: "emotiv-4ed78.firebaseapp.com",
  databaseURL: "https://emotiv-4ed78.firebaseio.com",
  projectId: "emotiv-4ed78",
  storageBucket: "emotiv-4ed78.appspot.com",
  messagingSenderId: "511920732832"
};
firebase.initializeApp(config);
var database=firebase.database();
//Take ref to all html elements to update
var sogliaMax;
var sogliaMin;
var engButton=document.getElementById("b1");
var excitButton=document.getElementById("b2");
var focusButton=document.getElementById("b3");
var interButton=document.getElementById("b4");
var stressButton=document.getElementById("b6");
var relaxButton=document.getElementById("b5");

if(sessionStorage.getItem('emotiv')){
  sogliaMin=Number(sessionStorage.getItem('min'));
  sogliaMax=Number(sessionStorage.getItem('max'));
//  window.alert(" "+sogliaMax+" "+sogliaMin);
}else{
  sogliaMax=100;
  sogliaMin=0;
}
//window.alert(" "+sogliaMax+" "+sogliaMin+" "+sessionStorage.getItem('emotiv'));
//What to do after "on" events
function updateButtonValue(name,element,val, glow){
  element.value=name+" "+val+"%"; //da controllare se fa il concatenamento
  if(val>=sogliaMax || val<=sogliaMin){
    element.style.animation=glow+' 1500ms infinite';
    setTimeout(function(){
      element.style.animation='none';
    },5000);
    }

}
//Alerts
function tempAlert(msg,duration)
{
     var el = document.createElement("div");
     el.setAttribute("style","position:relative;width:200px;top:40%;left:85%;margin:3px;background-color:#ff6600;font-family: Arial;font-size: 16px;color: #FFFFFF;");
     el.innerHTML = msg;
     setTimeout(function(){
      el.parentNode.removeChild(el);
     },duration);
     document.body.appendChild(el);
}

//Do the update and trigger alerts
var allEmotions=database.ref('emotions');
/*allEmotions.on('value', function(snapshot){
  window.alert(snapshot.val().stress);
});*/
var engagementRef=database.ref('emotions/engagement');
engagementRef.on('value', function(snapshot){
  updateButtonValue("Engagement",engButton,snapshot.val(), 'glowing1');
  if(snapshot.val()>=sogliaMax || snapshot.val()<=sogliaMin)
    tempAlert("Info! Engagement value: "+snapshot.val()+"% outside the normal range",5000);
});
var excitementRef=database.ref('emotions/excitement');
excitementRef.on('value', function(snapshot){
  updateButtonValue("Excitement",excitButton,snapshot.val(), 'glowing2');
  if(snapshot.val()>=sogliaMax || snapshot.val()<=sogliaMin)
    tempAlert("Info! Excitement value: "+snapshot.val()+"% outside the normal range",5000);
});
var focusRef=database.ref('emotions/focus');
focusRef.on('value', function(snapshot){
  updateButtonValue("Focus",focusButton,snapshot.val(),'glowing3');
  if(snapshot.val()>=sogliaMax || snapshot.val()<=sogliaMin)
    tempAlert("Info! Focus value: "+snapshot.val()+"% outside the normal range",5000);
});
var interestRef=database.ref('emotions/interest');
interestRef.on('value', function(snapshot){
  updateButtonValue("Interest",interButton,snapshot.val(),'glowing4');
  if(snapshot.val()>=sogliaMax || snapshot.val()<=sogliaMin)
    tempAlert("Info! Interest value: "+snapshot.val()+"% outside the normal range",5000);
});
var relaxRef=database.ref('emotions/relax');
relaxRef.on('value', function(snapshot){
  updateButtonValue("Relaxation",relaxButton,snapshot.val(),'glowing6');
  if(snapshot.val()>=sogliaMax || snapshot.val()<=sogliaMin)
    tempAlert("Info! Relax value: "+snapshot.val()+"% outside the normal range",5000);
});
var stressRef=database.ref('emotions/stress');
stressRef.on('value', function(snapshot){
  updateButtonValue("Stress",stressButton,snapshot.val(),'glowing5');
  if(snapshot.val()>=sogliaMax || snapshot.val()<=sogliaMin)
    tempAlert("Info! Stress value: "+snapshot.val()+"% outside the normal range",5000);
});

var obj = {
 emotions:[
 {name:"excitement", values:[]},
 {name:"realx", values: []},
 {name:"stress", values:[]},
 {name:"engagement", values: []},
 {name:"interest", values:[]},
 {name:"focus", values: []}
]
};
if(localStorage.getItem('experience')!=null){
    let emo=JSON.parse(localStorage.getItem('experience'));
    for(let k=0;k<6;k++)
    obj.emotions[k].values=obj.emotions[k].values.concat(emo.emotions[k].values);}

allEmotions.on('value', function(snapshot){
  obj.emotions[0].values.push(snapshot.val().excitement);
  obj.emotions[1].values.push(snapshot.val().relax);
  obj.emotions[2].values.push(snapshot.val().stress);
  obj.emotions[3].values.push(snapshot.val().engagement);
  obj.emotions[4].values.push(snapshot.val().interest);
  obj.emotions[5].values.push(snapshot.val().focus);


  localStorage.setItem('experience', JSON.stringify(obj));

  //window.alert(""+localStorage.getItem('experience'));
  //localStorage.clear();
});



//Video

  function BeginListening(){
   //After the first load, we can begin listening for new values.
   setTimeout(function(){
   var play = database.ref('/Play');
   var videoId = database.ref('/videoID/ID');
   videoId.on('value', function(snapshot){
     gameInstance.SendMessage('360VideoPlayer','PlayYoutubeVideo', snapshot.val());
   });


   play.on('value', function(snapshot){
     gameInstance.SendMessage('360VideoPlayer', 'PlayButtonFirebase', snapshot.val());
   });

   var cameraRotation = database.ref('cameraRotation');
   cameraRotation.on('value', function(snapshot){
     gameInstance.SendMessage('Main Camera', 'setTempX', snapshot.child('X').val());
     gameInstance.SendMessage('Main Camera', 'setTempY', snapshot.child('Y').val());
     gameInstance.SendMessage('Main Camera', 'UpdateFromFirebase');
   });
 }, 5000);
 }
