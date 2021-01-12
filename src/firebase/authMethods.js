import firebase from './config';

/* 
    Add functions 
    1) create user and password
    2) sign in with user and password
    3) signout
*/

function createUserPassword(email,password){
	const promise= auth.createUserWithEmailAndPassword(email,password);
  promise.catch(e => alert(e.message));

	alert("Signed Up");
}

function signInUserPassword(email,password){
	const promise= auth.signInUserWithEmailAndPassword(email,password);
  promise.catch(e => alert(e.message));

	alert("Signed In");
}

function signOut() {
	auth.signOut();
	alert("Signed Out");
}

auth.onStateChanged(function(user){
	if(user){
	var email=user.email;
	alert("Active user"+email);
	//is signed in
	}else{
	//no user is signed it
	alert("No active user");
	}
});
