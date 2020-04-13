import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import RegisterUser from "./RegisterUser"
import IndexHeader from "../IndexHeader"
import Invalidcreds from "./AfterLoginPages/Invalidcreds"
import NotYetApproved from "./AfterLoginPages/NotYetApproved"
import EmployeeLogInPage from "./AfterLoginPages/EmployeeLogInPage"
import ManagerLogInPage from "./AfterLoginPages/ManagerLogInPage"
import SupervisorLogInPage from "./AfterLoginPages/SupervisorLogInPage"
import ForgotPassword from "./ForgotPassword"

class Login extends Component
{
	constructor(props) //props to be used when get method for db
	{
		super(props)
		
		this.state = 
		{
			email : "",
			password1 : "",
		}
		this.onchange = this.onchange.bind(this);
		
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleNewUser = this.handleNewUser.bind(this)
	}
	
	onchange(e)
	{
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	
	handleNewUser()
	{
		ReactDOM.render(<RegisterUser />, document.getElementById('root'));
	}
	
	redirection_invalidcreds()
	{
		ReactDOM.render(<Invalidcreds />, document.getElementById('root'));
	}
	
	redirection_employee_not_yet_approved()
	{
		ReactDOM.render(<NotYetApproved />, document.getElementById('root'));
	}
	
	
	
	forgot_password()
	{
		ReactDOM.render(<ForgotPassword />, document.getElementById('root'));
	}
	
	handleSubmit(event)
	{
		event.preventDefault();
		const obj = {
					email : this.state.email,
					password1 : this.state.password1,
				};
		
		if(obj.email.length === 0 || obj.password1.length === 0)
		{
			alert("Fill out all the fields!")
		}
		else
		{
			axios.post('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/insert_login.php', qs.stringify(obj))
			.then(res => 
				{
					if(res.data.logged == true && res.data.dash === "5" && res.data.isManager == "1")
					{
						ReactDOM.render(<ManagerLogInPage user_id = {res.data.user_id} />, document.getElementById('root'));
					}
					else if(res.data.logged == true && res.data.dash !== "5" && res.data.isManager == "1")
					{
						ReactDOM.render(<SupervisorLogInPage user_id = {res.data.user_id}/>, document.getElementById('root'));
					}
					else if(res.data.logged == true && res.data.dash !== "5" && res.data.isManager == "0")
					{
						ReactDOM.render(<EmployeeLogInPage user_id = {res.data.user_id}/>, document.getElementById('root'));
					}
					else if(res.data.logged == false && res.data.dash !== "5" && res.data.dash !== "-1")
					{
						this.redirection_employee_not_yet_approved();
					}
					else if(res.data.logged == false && res.data.dash === "-1")
					{
						this.redirection_invalidcreds();
					}
						
				})
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
							<input className = "form-control" type = "email" value = {this.state.email} name = "email" placeholder = "username@wellnow.com" onChange = {this.onchange} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> Password: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "password" value = {this.state.password1} name = "password1" placeholder = "******" onChange = {this.onchange} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<h5 style = {{color: "#666666"}}> {this.state.password1} </h5>
					
					<div className="form-group">
						<div className="col-lg-10 col-sm-10 col-md-10 col-xs-10">
							<button type="button" className="btn btn-link" onClick={this.forgot_password}> Forgot Password ?</button>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<button className="btn btn-info" onClick = {this.handleSubmit}><b> Login -> </b></button>
							&nbsp;&nbsp;&nbsp;
							<button className="btn btn-warning" onClick = {this.handleNewUser}>Not a user yet? click to register </button>
						</div>
						
					</div>
				</form>
			</div>

		)
	}
	
}

export default Login