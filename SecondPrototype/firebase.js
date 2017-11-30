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

if(sessionStorage.emotiv){
  sogliaMin=sessionStorage.getItem('min');
  sogliaMax=sessionStorage.getItem('max');
}else{
  sogliaMax=100;
  sogliaMin=0;
}

//What to do after "on" events
function updateButtonValue(name,element,val, glow){
  element.value=name+" "+val+"%"; //da controllare se fa il concatenamento
  if(val>=sogliaMax || val<=sogliaMin){
    element.style.animation=glow+' 1500ms infinite';
    setTimeout(function(){
      element.style.animation='none';
    },4000);
    }

}


//Do the update
var allEmotions=database.ref('emotions');
var engagementRef=database.ref('emotions/engagement');
engagementRef.on('value', function(snapshot){
  updateButtonValue("Engagement",engButton,snapshot.val(), 'glowing1');
});
var excitementRef=database.ref('emotions/excitement');
excitementRef.on('value', function(snapshot){
  updateButtonValue("Excitement",excitButton,snapshot.val(), 'glowing2');
});
var focusRef=database.ref('emotions/focus');
focusRef.on('value', function(snapshot){
  updateButtonValue("Focus",focusButton,snapshot.val(),'glowing3');
});
var interestRef=database.ref('emotions/interest');
interestRef.on('value', function(snapshot){
  updateButtonValue("Interest",interButton,snapshot.val(),'glowing4');
});
var relaxRef=database.ref('emotions/relax');
relaxRef.on('value', function(snapshot){
  updateButtonValue("Relaxation",relaxButton,snapshot.val(),'glowing6');
});
var stressRef=database.ref('emotions/stress');
stressRef.on('value', function(snapshot){
  updateButtonValue("Stress",stressButton,snapshot.val(),'glowing5');
});
