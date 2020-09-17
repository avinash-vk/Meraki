import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import './App.css';
import Arrow from './arrow.png';
class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			fullname: '',
			contact: '',
			email: '',
			location: '',
      username: '',
      password: '',
      buttonDisabled: false,
    };
  }

  setInputValue(property, val) {
    val = val.trim();
    if (val.length > 12) {
      return;
    }
    this.setState({
      [property]: val,
    });
  }

	setInputValueForUserDetails(property, val) {
    val = val.trim();
    if (val.length > 30) {
      return;
    }
    this.setState({
      [property]: val,
    });
  }

  resetForm() {
    this.setState({
			fullname: '',
			contact: '',
			email: '',
			location: '',
      username: '',
      password: '',
      buttonDisabled: false,
    });
  }

  async doLogin() {
    /*if(!this.state.username){
			return;
		}
		if(!this.state.password){
			return;
		}

		this.setState({
			buttonDisabled: true
		})	
		
		try{
			let res=await fetch('/login', {
				method: 'post',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					username: this.state.username,
					password: this.state.password
				})
			});
			
			let result= await res.json();

			if(result && result.success) {
				UserStore.isLoggedIn=true;
				UserStore.username=result.username;
			}
			
			else if(result && result.success===false) {
				this.resetForm();
				alert(result.msg);
			}
		}

		catch(e) {
			console.log(e);
			this.resetForm();
		}*/
  }

  render() {
    return (
      <div className="loginForm">
        <div class="split left">

          <div class="centered">
            <h1 class="signin">Sign Up</h1>
          </div>
          <div>
            <div class="line"></div>
          </div>
        </div>
        <div class="split right">
          <div class="onTheLine dot">
            <img class="arrow" src={Arrow} background-colour="#F5564E"></img>
          </div>
          <div class="centered">
						<InputField
              type="text"
              placeholder="Full Name"
              value={this.state.fullname ? this.state.fullname : ''}
              onChange={(val) => this.setInputValueForUserDetails('fullname', val)}
            />

						<InputField
              type="tel"
              placeholder="Contact"
              value={this.state.contact ? this.state.contact : ''}
              onChange={(val) => this.setInputValue('contact', val)}
            />

						<InputField
              type="email"
              placeholder="Email"
              value={this.state.email ? this.state.email : ''}
              onChange={(val) => this.setInputValueForUserDetails('email', val)}
            />

						<InputField
              type="text"
              placeholder="Location"
              value={this.state.location ? this.state.location : ''}
              onChange={(val) => this.setInputValueForUserDetails('location', val)}
            />

            <InputField
              type="text"
              placeholder="Username"
              value={this.state.username ? this.state.username : ''}
              onChange={(val) => this.setInputValue('username', val)}
            />

            <InputField
              type="password"
              placeholder="Password"
              value={this.state.password ? this.state.password : ''}
              onChange={(val) => this.setInputValue('password', val)}
            />

            <SubmitButton
              text="Sign Up"
              disable={this.state.buttonDisabled}
              onClick={() => this.doLogin()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
