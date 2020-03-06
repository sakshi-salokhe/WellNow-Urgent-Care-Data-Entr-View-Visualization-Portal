import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"


import IndexHeader from "../../../../IndexHeader";
import ManagerLogInPage from "../../ManagerLogInPage"

import EnterDataAR from "./enter_data/EnterDataAR"
import EnterDataOS from "./enter_data/EnterDataOS"
import EnterDataOM from "./enter_data/EnterDataOM"
//import EnterDataPat_Support from "./enter_data/EnterDataPat_Support"

class EditDashboardPrivileges extends Component
{
	constructor(props)
	{
		super(props);
		
		this.EnterDataAR = this.EnterDataAR.bind(this);
		this.EnterDataOM = this.EnterDataOM.bind(this);
	}
	
	home()
	{
		ReactDOM.render(<ManagerLogInPage />, document.getElementById('root'));
	}
	
	EnterDataAR()
	{
		axios.get('http://localhost:81/wellnowdash_backend/enter_data_admin.php?dashboards=1')
		.then(
			res => {
				if(res.data.dashboard == 1 || res.data.dashboard == '1')
				{
					console.log(res.data);
					ReactDOM.render(<EnterDataAR data = {res.data}/>, document.getElementById('root'));
				}
				else
				{
					alert('something wrong');
					//put the other dashboard code here
				}
			})
		.catch(err => console.log(err))
	}
	
	EnterDataOS()
	{
		axios.get('http://localhost:81/wellnowdash_backend/enter_data_admin.php?dashboards=2')
		.then(
			res => {
				if(res.data.dashboard == 2 || res.data.dashboard == '2')
				{
					console.log(res.data);
					ReactDOM.render(<EnterDataOS data = {res.data}/>, document.getElementById('root'));
				}
				else
				{
					alert('something wrong');
					//put the other dashboard code here
				}
			})
		.catch(err => console.log(err))
	}
	
	EnterDataOM()
	{
		axios.get('http://localhost:81/wellnowdash_backend/enter_data_admin.php?dashboards=3')
		.then(
			res => {
				if(res.data.dashboard == 3 || res.data.dashboard == '3')
				{
					console.log(res.data);
					ReactDOM.render(<EnterDataOM data = {res.data}/>, document.getElementById('root'));
				}
				else
				{
					alert('something wrong');
					//put the other dashboard code here
				}
			})
		.catch(err => console.log(err))
	}
	
	EnterDataPat_Support()
	{
		//ReactDOM.render(<EnterDataPat_Support />, document.getElementById('root'));
	}
	
	
	render()
	{
		return (
			<div className = "container">
				
				<IndexHeader />
				<div className = "row">
					<div className = "col-lg-9 col-md-9 col-sm-9 col-xs-9">
						<h5> Choose a Dashboard to enter the data: </h5>
					</div>
					<div className = "col-lg-3 col-md-3 col-sm-3 col-xs-3">
						<button className="btn btn-info" onClick={this.home}> Home </button>
					</div>
				</div>
				
				<br />
				
				<div className = "row">
					<div className = "col-lg-3 col-md-3 col-sm-3 col-xs-3">
						<button className="btn btn-info" onClick={this.EnterDataAR}> Data for AR Dashboard </button>
					</div>
					
					<div className = "col-lg-3 col-md-3 col-sm-3 col-xs-3">
						<button className="btn btn-warning" onClick={this.EnterDataOS}> Data for OS Dashboard </button>
					</div>
					
					<div className = "col-lg-3 col-md-3 col-sm-3 col-xs-3">
						<button className="btn btn-success" onClick={this.EnterDataOM}> Data for OM Dashboard </button>
					</div>
					
					<div className = "col-lg-3 col-md-3 col-sm-3 col-xs-3">
						<button className="btn btn-primary" onClick={this.EnterDataPat_Support}> Data for Patient Support Task Log </button>
					</div>
					
				</div>
			</div>
		)
	}
}

export default EditDashboardPrivileges