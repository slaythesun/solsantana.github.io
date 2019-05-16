// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDrLI6ahlfGrWufsoWIiUSFPKZeKtSb2eY",
  authDomain: "porfolioss-7947b.firebaseapp.com",
  databaseURL: "https://porfolioss-7947b.firebaseio.com",
  projectId: "porfolioss-7947b",
  storageBucket: "porfolioss-7947b.appspot.com",
  messagingSenderId: "748850033998",
  appId: "1:748850033998:web:5ab2be620db46e1b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('Messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message\
  if(name == '' || email == '' || message == '')
  {
    alert("Empty Input. Submission Failed.");
  } else {
    saveMessage(name, email, message);
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('message').value='';
  }
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebasejs
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
      name: name,
      email: email,
      message: message
  });
}
