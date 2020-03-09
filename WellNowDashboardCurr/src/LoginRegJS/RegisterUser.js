import React, {Component} from "react"
import ReactDOM from "react-dom"
import qs from "qs"
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Login from "./Login"
import IndexHeader from "../IndexHeader"


class RegisterUser extends Component
{
	constructor(props)
	{
		super(props)
		this.state = 
		{
			email : "",
			fullname : "",
			password1 : "",
			conf_password : "",
			dashboards : "",
			isManager : ""
		}
		
		this.onchangeemail = this.onchangeemail.bind(this);
		this.onchangefullname = this.onchangefullname.bind(this);
		this.onchangepassword1 = this.onchangepassword1.bind(this);
		this.onchangeconf_password = this.onchangeconf_password.bind(this);
		this.onchangedashboards = this.onchangedashboards.bind(this);
		this.onchangeisManager = this.onchangeisManager.bind(this);
		
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	
	
	onchangeemail(e)
	{
		this.setState({
			email: e.target.value
		});
	}
	
	onchangefullname(e)
	{
		this.setState({
			fullname: e.target.value
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
	
	onchangedashboards(e)
	{
		this.setState({
			dashboards: e.target.value
		});
	}
	
	onchangeisManager(e)
	{
		this.setState({
			isManager: e.target.value
		});
	}
	
	handleLogin()
	{
		ReactDOM.render(<Login />, document.getElementById('root'));
	}
	
	
	handleSubmit(event)
	{
		event.preventDefault();
		
		const obj = {
					email : this.state.email,
					fullname : this.state.fullname,
					password1 : this.state.password1,
					conf_password : this.state.conf_password,
					dashboards: this.state.dashboards,
					isManager: this.state.isManager
				};

		var domain = obj.email.substring(obj.email.lastIndexOf("@") +1);
		
		if(obj.fullname.length === 0 || obj.dashboards.length === 0 || obj.email.length === 0 || obj.password1.length === 0 || obj.conf_password.length === 0 || obj.isManager.length == 0)
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
				axios.post('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/insert_registeration.php', qs.stringify(obj))
				.then(res => 
				{
					console.log(res.data.registered);	
					if(res.data.registered == true || res.data.registered == 'true')
					{
						alert("Registeration sucessful. Please check your email.");
						ReactDOM.render(<Login />, document.getElementById('root'));
					}
					else
					{
						alert("The email id already exists!");
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
					
					
					<form>
						<div className="form-group">
							<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> Email: </b></div>
							
							<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
								<input className = "form-control" type = "email" value = {this.state.email} name = "email" placeholder = "username@wellnow.com" onChange = {this.onchangeemail} />
							</div>
							
							<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
							
						</div>
						
						<div className="form-group">
							<div className="control-label col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> Full Name: </b></div>
							
							<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
								<input className = "form-control" type = "text" value = {this.state.fullname} name = "fullname" placeholder = "John Smith" onChange = {this.onchangefullname} />
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
							<div className="col-lg-3 col-sm-3 col-md-3 col-xs-3"><b> Choose your dashboard: </b></div>
							
							<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
								<select className = "form-control" value = {this.state.dashboards} name = "dashboards" onChange = {this.onchangedashboards}>
									<option value="">--Please Choose your dashboard -- </option>
									<option value="1"> AR Dashboard </option>
									<option value="2"> OS Dashboard </option>
									<option value="3"> OM Dashboard </option>
									<option value="4"> Patient Support Task Log </option>
									<option value="5"> All </option>
								</select>
							</div>
							
							<div className="col-lg-1 col-sm-1 col-md-1 col-xs-1"> </div>
						</div>
						
						<div className="form-group">
							<div className="col-lg-3 col-sm-3 col-md-3 col-xs-3"><b> Are you a Manager of the Dashboard chosen? </b></div>
							
							<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
								<select className = "form-control" value = {this.state.isManager} name = "isManager" onChange = {this.onchangeisManager}>
									<option value="">--Please Choose your designation -- </option>
									<option value="1"> Yes </option>
									<option value="0"> No </option>
									
								</select>
							</div>
							
							<div className="col-lg-1 col-sm-1 col-md-1 col-xs-1"> </div>
						</div>
						<br />
						
						
						&nbsp;&nbsp;&nbsp;<button className="btn btn-info" onClick={this.handleSubmit}> Register </button>&nbsp;&nbsp;<button className="btn btn-warning" onClick={this.handleLogin}> Go back to Login? </button>
					</form>
			
				</div>
		)
	}
}

export default RegisterUser