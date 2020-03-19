import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"


import IndexHeader from "../../../IndexHeader";
import ManagerLogInPage from "../ManagerLogInPage"

import AR_Dash from "./privileges/AR_Dash"
import OS_Dash from "./privileges/OS_Dash"
import OM_Dash from "./privileges/OM_Dash"
import PatSup_Dash from "./privileges/PatSup_Dash"

class EditDashboardPrivileges extends Component
{
	home()
	{
		ReactDOM.render(<ManagerLogInPage />, document.getElementById('root'));
	}
	
	AR_Dash()
	{
		ReactDOM.render(<AR_Dash />, document.getElementById('root'));
	}
	
	OS_Dash()
	{
		ReactDOM.render(<OS_Dash />, document.getElementById('root'));
	}
	
	OM_Dash()
	{
		ReactDOM.render(<OM_Dash />, document.getElementById('root'));
	}
	
	PatSup_Dash()
	{
		ReactDOM.render(<PatSup_Dash />, document.getElementById('root'));
	}
	
	render()
	{
		return (
			<div className = "container">
				
				<IndexHeader />
				<div className = "row">
					<div className = "col-lg-9 col-md-9 col-sm-9 col-xs-9">
						<h5> Choose a Dashboard to see the active users and change their privileges: </h5>
					</div>
					<div className = "col-lg-3 col-md-3 col-sm-3 col-xs-3">
						<button className="btn btn-info" onClick={this.home}> Home </button>
					</div>
				</div>
				
				<br />
				
				<div className = "row">
					<div className = "col-lg-3 col-md-3 col-sm-3 col-xs-3">
						<button className="btn btn-info" onClick={this.AR_Dash}> AR Dashboard </button>
					</div>
					
					<div className = "col-lg-3 col-md-3 col-sm-3 col-xs-3">
						<button className="btn btn-warning" onClick={this.OS_Dash}> OS Dashboard </button>
					</div>
					
					<div className = "col-lg-3 col-md-3 col-sm-3 col-xs-3">
						<button className="btn btn-secondary" onClick={this.OM_Dash}> OM Dashboard </button>
					</div>
					
					<div className = "col-lg-3 col-md-3 col-sm-3 col-xs-3">
						<button className="btn btn-primary" onClick={this.PatSup_Dash}> Patient Support Task Log </button>
					</div>
					
				</div>
			</div>
		)
	}
}

export default EditDashboardPrivileges