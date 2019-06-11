// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC_mLy1qwXWlSWkXcr1gXRpYcmedOgHrqM",
    authDomain: "contactform-92144.firebaseapp.com",
    databaseURL: "https://contactform-92144.firebaseio.com",
    projectId: "contactform-92144",
    storageBucket: "contactform-92144.appspot.com",
    messagingSenderId: "628238719008",
    appId: "1: 628238719008: web: a36982e78afc6758"
  };
  // Initialize Firebase
  firebase.initializeApp (firebaseConfig);
//Reference messages collection
var messagesRef = firebase.database().ref('messages');
//listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
//Get Values
var name = getInputVal('name');
var phone = getInputVal('phone');
var email = getInputVal('email');
var message = getInputVal('message');
// save message
saveMessage(name, phone, email, message);

//show alert
document.querySelector('.alert').style.display = 'block';
//hide alert

setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
},3000)

}

//Function to get Get Form values
function getInputVal(id){
return document.getElementById(id).value;
}

//Save the message to firebase

function saveMessage(name, phone, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        phone:phone,
        email:email,
        message:message

    });
}


// Timing 

const time = document.getElementById('time'),
greeting = document.getElementById('greeting');

//show Time
function showTime(){
    let today = new Date(),
       hour = today.getHours(),
       min = today.getMinutes(),
       sec = today.getSeconds();
// set AM or PM
 const amPm = hour >= 12 ? 'PM' : 'AM';

 // 12hr Format
 hour = hour % 12 || 12;
 //output time

 time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
 setTimeout(showTime, 1000);

 // Add Zeros
 function addZero(n){
  return (parseInt(n, 10) < 10 ? '0' : '') +n ;
 }
}
function setGreet(){
    let today = new Date(),
      hour = today.getHours;
  
      if(hour < 12){
          // Morning
       greeting.textContent = "Good Morning";
      } else if (hour < 18 ){
          //Good Afternoon
       greeting.textContent = "Good Afternoon";
      } else {
          // Good Evening
       greeting.textContent = "Good Evening";
      }
  
   }
showTime();
setGreet();