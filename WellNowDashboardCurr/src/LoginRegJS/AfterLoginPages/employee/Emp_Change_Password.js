import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"


import IndexHeader from "../../../IndexHeader";
import Login from "../../Login"
import EmployeeLogInPage from "../EmployeeLogInPage"

class ChangePassword extends Component
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			email: "",
			oldpass: "",
			newpass: "",
			conf_newpass: ""
		};
		
		this.onchangeemail = this.onchangeemail.bind(this);
		this.onchangeoldpass = this.onchangeoldpass.bind(this);
		this.onchangenewpass = this.onchangenewpass.bind(this);
		this.onchangeconf_newpass = this.onchangeconf_newpass.bind(this);
		
		this.changePassword1 = this.changePassword1.bind(this)
		this.home = this.home.bind(this);
	}
	
	onchangeemail(e)
	{
		this.setState({
			email: e.target.value
		});
	}
	
	onchangeoldpass(e)
	{
		this.setState({
			oldpass: e.target.value
		});
	}
	
	onchangenewpass(e)
	{
		this.setState({
			newpass: e.target.value
		});
	}
	
	onchangeconf_newpass(e)
	{
		this.setState({
			conf_newpass: e.target.value
		});
	}
	
	home(props)
	{
		ReactDOM.render(<EmployeeLogInPage user_id = {this.props.user_id} />, document.getElementById('root'));
	}
	
	changePassword1(event)
	{
		event.preventDefault();
		
		const obj = {
					user_id : this.props.user_id,
					email : this.state.email,
					oldpass : this.state.oldpass,
					newpass : this.state.newpass,
					conf_newpass : this.state.conf_newpass,
				};
		console.log("check this", obj);
		if(obj.email.length === 0 || obj.oldpass.length === 0 || obj.newpass.length === 0 || obj.conf_newpass.length === 0)
		{
			alert("Fill out all the fields!")
		}
		else
		{
			const confpassmatch = obj.conf_newpass === obj.newpass
			if(confpassmatch === false)
			{
				alert("New passwords dont match. try again.")
			}
			else
			{
				axios.post('http://localhost:81/wellnowdash_backend/change_password.php', qs.stringify(obj))
				.then(res => 
				{
					console.log(res.data);	
					if(res.data.changed === true)
					{
						alert("succesfully changed your password.");
						ReactDOM.render(<Login />, document.getElementById('root'));
					}
					else if(res.data.changed === "error")
					{
						alert("Please enter YOUR correct email address.");
						ReactDOM.render(<EmployeeLogInPage user_id = {this.props.user_id} />, document.getElementById('root'));
					}
					else
					{
						alert("Please refresh the page or log back in and try again.");
						ReactDOM.render(<EmployeeLogInPage user_id = {this.props.user_id} />, document.getElementById('root'));
					}
				});
			}
		}
		
	}	
	render()
	{
		return (
			<div className = "container">
				<IndexHeader />
				<div className = "row">
					<div className = "col-lg-8 col-md-8 col-sm-8 col-xs-8">
						<h4> Change Password </h4>
					</div>
					
					<div className = "col-lg-4 col-md-4 col-sm-4 col-xs-4">
						<button className="btn btn-info" onClick={this.home}> Back </button>
					</div>
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
						<div className="control-label col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> Current Password: </b></div>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "password" value = {this.state.oldpass} name = "oldpass" placeholder = "*******" onChange = {this.onchangeoldpass} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
					</div>
					
					<div className="form-group">
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> New Password: </b></div>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "password" value = {this.state.newpass} name = "newpass" placeholder = "******" onChange = {this.onchangenewpass} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
					</div>
					
					<h5 style = {{color: "#666666"}}> {this.state.newpass} </h5>
					
					
					<div className="form-group">
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> Confirm New Password:  </b></div>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "password" value = {this.state.conf_newpass} name = "conf_newpass" placeholder = "******" onChange = {this.onchangeconf_newpass} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
					</div>
					
					
					<br />
					
					<button className="btn btn-warning" onClick={this.changePassword1}> Submit New Password </button>
				</form>
				
			</div>
		)
	}
}

export default ChangePassword