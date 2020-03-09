import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"

import IndexHeader from "../IndexHeader"
import ResetPassword from "./ResetPassword"
import Login  from "./Login"

class ForgotPassword extends Component
{
	constructor(props)
	{
		super(props)
		this.state = 
		{
			email : "",
		}
		
		this.onchangeemail = this.onchangeemail.bind(this);
		
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	
	onchangeemail(e)
	{
		this.setState({
			email: e.target.value
		});
	}
	
	handleSubmit(event)
	{
		event.preventDefault();
		const obj = {
					email : this.state.email,
				};
		
		axios.post('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/forgotpassword.php', qs.stringify(obj))
		.then(res => 
			{
				console.log(res.data);
				console.log(res.status);
				if(res.data.status1 == 'success')
				{
					alert("Please check your email for the unique code.");
					ReactDOM.render(<ResetPassword />, document.getElementById('root'));
				}
				else
				{
					alert("something went wrong.");
					ReactDOM.render(<Login />, document.getElementById('root'));
				}
				
			})

	}
	
	back()
	{
		ReactDOM.render(<Login />, document.getElementById('root'));
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

export default ForgotPassword