import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"

import IndexHeader from "../IndexHeader"
import Login  from "./Login"

class ResetPassword extends Component
{
	constructor(props)
	{
		super(props)
		this.state = 
		{
			email : "",
			password1 : "",
			conf_password : "",
			unique_code : ""
		}
		
		this.onchangeemail = this.onchangeemail.bind(this);
		this.onchangepassword1 = this.onchangepassword1.bind(this);
		this.onchangeconf_password = this.onchangeconf_password.bind(this);
		this.onchangeunique_code = this.onchangeunique_code.bind(this);
		
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	
	onchangeunique_code(e)
	{
		this.setState({
			unique_code: e.target.value
		});
	}
	
	onchangeemail(e)
	{
		this.setState({
			email: e.target.value
		});
	}
	
	onchangepassword1(e)
	{
		this.setState({
			password1: e.target.value
		});
	}
	
	onchangeconf_password(e)
	{
		this.setState({
			conf_password: e.target.value
		});
	}
	
	back()
	{
		ReactDOM.render(<Login />, document.getElementById('root'));
	}
	
	handleSubmit(event)
	{
		event.preventDefault();
		
		const obj = {
					email : this.state.email,
					password1 : this.state.password1,
					conf_password : this.state.conf_password,
					unique_code: this.state.unique_code,
				};

		var domain = obj.email.substring(obj.email.lastIndexOf("@") +1);
		
		if(obj.unique_code.length === 0 || obj.email.length === 0 || obj.password1.length === 0 || obj.conf_password.length === 0)
		{
			alert("Fill out all the fields!")
		}
		else if(domain.toLowerCase() !== "wellnow.com")
		{
			alert("Only WellNow Emails Allowed!")
		}
		else
		{
			const confpassmatch = obj.conf_password === obj.password1
			if(confpassmatch === false)
			{
				alert("Passwords dont match. try again.")
			}
			else
			{
				axios.post('http://localhost:81/wellnowdash_backend/resetpassword.php', qs.stringify(obj))
				.then(res => 
				{
					console.log(res.data);	
					if(res.data.result == 'success')
					{
						alert("Successfully changed the password.");
						ReactDOM.render(<Login />, document.getElementById('root'));
					}
					else
					{
						alert("Soemthing went wrong. Please re-try!");
						ReactDOM.render(<Login />, document.getElementById('root'));
					}
				});
			}
		}
		
	}
	
	render()
	{
		return (
			<div className = "container">
				<div>
					<IndexHeader />
				</div>
				
				<form className="form-horizontal">
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> Email: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "email" value = {this.state.email} name = "email" placeholder = "username@wellnow.com" onChange = {this.onchangeemail} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> Unique code from the email we sent you: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "text" value = {this.state.unique_code} name = "unique_code" placeholder = "code from email" onChange = {this.onchangeunique_code} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
							<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> Password: </b></div>
							
							<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
								<input className = "form-control" type = "password" value = {this.state.password1} name = "password1" placeholder = "******" onChange = {this.onchangepassword1} />
							</div>
							
							<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						</div>
					
					<h5 style = {{color: "#666666"}}> {this.state.password1} </h5>
					
					<div className="form-group">
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> Confirm Password:  </b></div>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "password" value = {this.state.conf_password} name = "conf_password" placeholder = "******" onChange = {this.onchangeconf_password} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
					</div>
					
					
					<div className="form-group">
						<div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<button className="btn btn-info" onClick = {this.handleSubmit}><b> Reset Password </b></button>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<button className="btn btn-warning" onClick = {this.back}><b> Cancel </b></button>
						</div>
						
					</div>
				</form>
			</div>

		)
	}
	
}

export default ResetPassword