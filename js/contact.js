
// Reference messages collection
const messagesRef = firebase.firestore();
// Listen for form submit
document.addEventListener("DOMContentLoaded", function () {

document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();
    
    const name = getInputVal('name');
    const email = getInputVal('email');
    const topic = getInputVal('topic');
    const movie = getInputVal('movie');
    const message = getInputVal('message');

    //save message
    saveMessage(name, email, topic, movie, message);

    //show alert
    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

  document.getElementById('contactForm').reset();  
}

// function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, topic, movie, message){
    messagesRef.collection("messages").add({
        name: name,
        email: email,
        topic: topic,
        movie: movie,
        message: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(function (docRef){
        console.log("Contact Us message written with ID:",docRef.id);
    }).catch(function (error){
        console.error("Error sending your message",error);
    });


   
}

});