import * as firebase from 'firebase';

export class AuthService {
	token: string;

	signupUser(email: string, password: string) {
		firebase.auth().createUserWithEmailAndPassword(email,password)
		.catch(
			error => console.log(error)
		)
	}

	signinUser(email: string, password: string){
		firebase.auth().signInWithEmailAndPassword(email,password)
		.then(
			resp => {
				console.log(resp)
				this.token = "siHubo"
			},
			response => {
				firebase.auth().currentUser.getToken()
				.then(
					(token: string) => this.token
				)
			}
		)
		.catch(
			error => console.log(error)
		)
	}

	getToken() {
		firebase.auth().currentUser.getToken()
		.then(
			(token: string) => this.token
		)
		return this.token;
	}

	isAuthenticated() {
		return this.token != null;
	}
}