import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"

import Emp_Change_Password from "./employee/Emp_Change_Password"
import Logout from "../../Logout"
import IndexHeader from "../../IndexHeader";

import ViewData from "./employee/ViewData"
import EnterData from "./employee/EnterData"

import EnterDataAR from "./employee/AR/EnterDataAR"
import EnterDataOM from "./employee/OM/EnterDataOM"
import EnterDataOS from "./employee/OS/EnterDataOS"



function logout()
{
	ReactDOM.render(<Logout />, document.getElementById('root'));
}

class EmployeeLogInPage extends Component
{
		
	constructor(props) //props to be used when get method for db
	{
		super(props)
		
		this.state = 
		{
			user_id : ""
		}
		this.view_data = this.view_data.bind(this);
		this.enter_data = this.enter_data.bind(this);
		this.change_pass = this.change_pass.bind(this);
	}
	
	change_pass(props)
	{
		ReactDOM.render(<Emp_Change_Password user_id = {this.props.user_id} />, document.getElementById('root'));
	}

	view_data(props)
	{
		this.user_id = this.props.user_id;
		ReactDOM.render(<ViewData user_id = {this.user_id} />, document.getElementById('root'));
	}
	
	enter_data(props)
	{
		this.user_id = this.props.user_id;
		axios.get('http://localhost:81/wellnowdash_backend/enter_data.php?userid='+this.user_id)
		.then(
			res => {
				if(res.data.dashboard == 1 || res.data.dashboard == '1')
				{
					ReactDOM.render(<EnterDataAR data = {res.data} />, document.getElementById('root'));
				}
				else if(res.data.dashboard == 2 || res.data.dashboard == '2')
				{
					console.log("Data :", res.data);
					ReactDOM.render(<EnterDataOS data = {res.data} />, document.getElementById('root'));
				}
				else if(res.data.dashboard == 3 || res.data.dashboard == '3')
				{
					console.log("Data :", res.data);
					ReactDOM.render(<EnterDataOM data = {res.data} />, document.getElementById('root'));
				}
				else
				{
					alert('something wrong');
					//put the other dashboard code here
				}
			})
		.catch(err => console.log(err))
	}
	
	
	render()
	{
		var user_id = this.props.user_id;
		
		return (
			
			<div className = "container">
				
				<IndexHeader />
				
				<div className= "row">	
					<div className = "col-lg-5 col-md-5 col-sm-5 col-xs-5">
						<button className = "btn btn-warning" onClick = {this.view_data}> View Data </button>
						<br />
						<br />
						<button className = "btn btn-primary" onClick = {this.enter_data} > ENTER or Edit Today's Data </button>
						
					</div>
					
					<div className = "col-lg-4 col-md-4 col-sm-4 col-xs-4">
						<button className = "btn btn-info" onClick = {this.change_pass} > Change Password </button> &nbsp;&nbsp;&nbsp;
						<button className = "btn btn-warning" onClick = {logout}> Logout </button>
					</div>
					
					<div className = "col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>
				</div>	
			</div>

		)
	}
		
}

export default EmployeeLogInPage