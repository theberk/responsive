const userBttn = document.getElementById("userBttn");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("login-message");

userBttn.onclick = function(event) {
	const promise = firebase.auth().createUserWithEmailAndPassword(emailInput.value, passwordInput.value);
	promise.catch(function(error) {
		message.textContent = error.message;
	});
    
    promis.then(function(credential){
    console.log(credential)
    createUser.credential.user.uid();
    });
    
    function createUser(uid){
    const db = firebase.database();
    const ref = db.ref("user").child(uid);
    const promise = ref.update({
        displayName: userInput.value
    });
        
        promise.then(function() {
        location.herf = "index.html";
        });
        
}
