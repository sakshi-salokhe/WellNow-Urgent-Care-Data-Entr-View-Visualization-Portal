import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"


import IndexHeader from "../../../IndexHeader";
import EmployeeLogInPage from "../EmployeeLogInPage"
import PrevData from "./view_dashboards/PrevData.js"

import CurrDataAR from "./view_dashboards/CurrDataAR.js"
import CurrDataOM from "./view_dashboards/CurrDataOM.js"
import CurrDataOS from "./view_dashboards/CurrDataOS.js"
import CurrDataPatSup from "./view_dashboards/CurrDataPatSup"

import SummaryViewAR from "./view_dashboards/SummaryViewAR.js"
import SummaryViewOS from "./view_dashboards/SummaryViewOS.js"
import SummaryViewOM from "./view_dashboards/SummaryViewOM.js"


class ViewData extends Component
{
	constructor(props) //props to be used when get method for db
	{
		super(props)
		
		this.state = 
		{
			user_id : ""
		}
		this.home = this.home.bind(this);
		this.prevData = this.prevData.bind(this);
		this.currData = this.currData.bind(this);
		this.Summary = this.Summary.bind(this);
	}
	
	home(props)
	{
		this.user_id = this.props.user_id;
		ReactDOM.render(<EmployeeLogInPage user_id = {this.user_id} />, document.getElementById('root'));
	}
	
	prevData(props)
	{
		this.user_id = this.props.user_id;
		ReactDOM.render(<PrevData user_id = {this.user_id} />, document.getElementById('root'));
	}
	
	currData(props)
	{
		this.user_id = this.props.user_id;
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_dash_id.php?user_id='+this.user_id)
		.then(
		res => {
			if(res.data.dashboards == 1 || res.data.dashboards == '1')
			{
				ReactDOM.render(<CurrDataAR user_id = {this.user_id} />, document.getElementById('root'));
			}
			else if(res.data.dashboards == 2 || res.data.dashboards == '2')
			{
				ReactDOM.render(<CurrDataOS user_id = {this.user_id} />, document.getElementById('root'));
			}
			else if(res.data.dashboards == 3 || res.data.dashboards == '3')
			{
				ReactDOM.render(<CurrDataOM user_id = {this.user_id} />, document.getElementById('root'));
			}
			else if(res.data.dashboards == 4 || res.data.dashboards == '4')
			{
				ReactDOM.render(<CurrDataPatSup user_id = {this.user_id} />, document.getElementById('root'));
			}
		})
		
	}
	
	Summary(props)
	{
		this.user_id = this.props.user_id;
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_dash_id.php?user_id='+this.user_id)
		.then(
		res => {
			if(res.data.dashboards == 1 || res.data.dashboards == '1')
			{
				ReactDOM.render(<SummaryViewAR user_id = {this.user_id} />, document.getElementById('root'));
			}
			else if(res.data.dashboards == 2 || res.data.dashboards == '2')
			{
				ReactDOM.render(<SummaryViewOS user_id = {this.user_id} />, document.getElementById('root'));
			}
			else if(res.data.dashboards == 3 || res.data.dashboards == '3')
			{
				ReactDOM.render(<SummaryViewOM user_id = {this.user_id} />, document.getElementById('root'));
			}
			else if(res.data.dashboards == 4 || res.data.dashboards == '4')
			{
				alert("There is no Summary page for Patient Support Dashboard");
			}
		})
	}
	
	render()
	{
		var user_id = this.props.user_id;
		
		return (
			<div className="container">
				
				<IndexHeader />
				
				<div className= "row">
					<div className = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<h3 align="left"> View Data </h3>
					</div>
					<div className = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<button className="btn btn-primary" onClick={this.home}> Home </button>
					</div>
				</div>
				<br />
				
				<h5> View Data </h5>
				<br />
				<div className = "row">
					<div className = "col-lg-4 col-md-4 col-sm-4 col-xs-4">
						<button className="btn btn-info" onClick={this.prevData}> View Older Data </button>
					</div>
					<div className = "col-lg-4 col-md-4 col-sm-4 col-xs-4">
						<button className="btn btn-warning" onClick={this.currData}> Today&#39;s Data </button>
					</div>
					<div className = "col-lg-4 col-md-4 col-sm-4 col-xs-4">
						<button className="btn btn-warning" onClick={this.Summary}> Summary </button>
					</div>
				</div>
				
			</div>
		)
	}
}

export default ViewData