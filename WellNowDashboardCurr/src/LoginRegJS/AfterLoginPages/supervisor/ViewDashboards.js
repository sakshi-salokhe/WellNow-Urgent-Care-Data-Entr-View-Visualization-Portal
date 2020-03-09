import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"

import IndexHeader from "../../../IndexHeader";
import SupervisorLogInPage from "../SupervisorLogInPage"

import PrevData from "./view_dashboards/PrevData"

import ViewCurrDataAR from "./view_dashboards/AR/ViewCurrDataAR"
import ViewCurrDataOM from "./view_dashboards/OM/ViewCurrDataOM"
import ViewCurrDataOS from "./view_dashboards/OS/ViewCurrDataOS"

import PrevDataVisualise from "./view_dashboards/PrevDataVisualise"

import CurrDataChartAR from "./view_dashboards/AR/CurrDataChartAR"
import CurrDataChartOM from "./view_dashboards/OM/CurrDataChartOM"
import CurrDataChartOS from "./view_dashboards/OS/CurrDataChartOS"

import EnterDataAR from "./Enter Data/EnterDataAR"
import EnterDataOM from "./Enter Data/EnterDataOM"
import EnterDataOS from "./Enter Data/EnterDataOS"

import EnterOldData from "./Enter Old Data/EnterOldData"

import EnterGoalAR from "./Enter Data/EnterGoalAR"
import EnterGoalOM from "./Enter Data/EnterGoalOM"
import EnterGoalOS from "./Enter Data/EnterGoalOS"

import AR_Goals_headers from "./view_dashboards/AR/AR_Goals_headers"
import OM_Goals_headers from "./view_dashboards/OM/OM_Goals_headers"
import OS_Goals_headers from "./view_dashboards/OS/OS_Goals_headers"

import SummaryViewAR from "./view_dashboards/summary/SummaryViewAR"
import SummaryViewOM from "./view_dashboards/summary/SummaryViewOM"
import SummaryViewOS from "./view_dashboards/summary/SummaryViewOS"

class ViewDashboards extends Component
{
	constructor(props)
	{
		super(props);
		this.home = this.home.bind(this);
		this.prevData = this.prevData.bind(this);
		this.currData = this.currData.bind(this);
		this.prevDataChart = this.prevDataChart.bind(this);
		this.currDataChart = this.currDataChart.bind(this);
		
		this.enter_data = this.enter_data.bind(this);
		this.enter_old_data = this.enter_old_data.bind(this);
		this.enter_goal = this.enter_goal.bind(this);
		this.viewGoals = this.viewGoals.bind(this);
		
		this.summary = this.summary.bind(this);
	}
	home()
	{
		ReactDOM.render(<SupervisorLogInPage user_id = {this.props.user_id} />, document.getElementById('root'));
	}
	
	prevData()
	{
		ReactDOM.render(<PrevData user_id = {this.props.user_id} />, document.getElementById('root'));
	}
	
	summary()
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
		})
	}
	
	currData(event)
	{
		//ReactDOM.render(<CurrData user_id = {this.props.user_id} />, document.getElementById('root'));
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_curr_data_sup.php?user_id='+this.props.user_id)
		.then(resp => {
			console.log("data",resp.data);
			if(resp.data[0].dashboards === 1 || resp.data[0].dashboards === '1')
			{
				ReactDOM.render(<ViewCurrDataAR data = {resp.data}/>, document.getElementById('root'));
			}
			else if(resp.data[0].dashboards == 2 || resp.data[0].dashboards === '2')
			{
				ReactDOM.render(<ViewCurrDataOS data = {resp.data}/>, document.getElementById('root'));
			}
			else if(resp.data[0].dashboards == 3 || resp.data[0].dashboards === '3')
			{
				ReactDOM.render(<ViewCurrDataOM data = {resp.data}/>, document.getElementById('root'));
			}
			})
	}
	
	prevDataChart()
	{
		ReactDOM.render(<PrevDataVisualise user_id = {this.props.user_id} />, document.getElementById('root'));
	}
	
	currDataChart(event)
	{
		//ReactDOM.render(<CurrDataVisualise user_id = {this.props.user_id} />, document.getElementById('root'));
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_curr_data_chart_sup.php?user_id='+this.props.user_id)
		.then(resp => {
			if(resp.data[0].dashboards === 1 || resp.data[0].dashboards === '1')
			{
				ReactDOM.render(<CurrDataChartAR data = {resp.data}/>, document.getElementById('root'));
			}
			else if(resp.data[0].dashboards == 2 || resp.data[0].dashboards === '2')
			{
				ReactDOM.render(<CurrDataChartOS data = {resp.data}/>, document.getElementById('root'));
			}
			else if(resp.data[0].dashboards == 3 || resp.data[0].dashboards === '3')
			{
				ReactDOM.render(<CurrDataChartOM data = {resp.data}/>, document.getElementById('root'));
			}
			})
	}
	
	enter_data(props)
	{
		this.user_id = this.props.user_id;
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/enter_data.php?userid='+this.user_id)
		.then(
			res => {
				if(res.data.dashboard == 1 || res.data.dashboard == '1')
				{
					ReactDOM.render(<EnterDataAR data = {res.data} />, document.getElementById('root'));
				}
				else if(res.data.dashboard == 2 || res.data.dashboard == '2')
				{
					ReactDOM.render(<EnterDataOS data = {res.data} />, document.getElementById('root'));
				}
				else if(res.data.dashboard == 3 || res.data.dashboard == '3')
				{
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
	
	enter_old_data(props)
	{
		this.user_id = this.props.user_id;
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_dash_id.php?user_id='+this.user_id)
		.then(
			res => {
				console.log("THIS:",res.data);
				ReactDOM.render(<EnterOldData data = {res.data} />, document.getElementById('root'));
			})
		.catch(err => console.log(err))
	}
	
	enter_goal(props)
	{
		this.user_id = this.props.user_id;
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_all_goal_sup.php?userid='+this.user_id)
		.then(
			res => {
				if(res.data.dashboard == 1 || res.data.dashboard == '1')
				{
					ReactDOM.render(<EnterGoalAR data = {res.data} />, document.getElementById('root'));
				}
				else if(res.data.dashboard == 2 || res.data.dashboard == '2')
				{
					ReactDOM.render(<EnterGoalOS data = {res.data} />, document.getElementById('root'));
				}
				else if(res.data.dashboard == 3 || res.data.dashboard == '3')
				{
					ReactDOM.render(<EnterGoalOM data = {res.data} />, document.getElementById('root'));
				}
				else
				{
					alert('something wrong');
					//put the other dashboard code here
				}
			})
		.catch(err => console.log(err))
	}
	
	viewGoals(){
		//ReactDOM.render(<CurrData user_id = {this.props.user_id} />, document.getElementById('root'));
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/view_all_goals_sup.php?user_id='+this.props.user_id)
		.then(resp => {
			if(resp.data[0].dashboards === 1 || resp.data[0].dashboards === '1')
			{
				console.log("data",resp.data);
				ReactDOM.render(<AR_Goals_headers data = {resp.data}/>, document.getElementById('root'));
			}
			else if(resp.data[0].dashboards === 2 || resp.data[0].dashboards === '2')
			{
				console.log("data",resp.data);
				ReactDOM.render(<OS_Goals_headers data = {resp.data}/>, document.getElementById('root'));
			}
			else if(resp.data[0].dashboards === 3 || resp.data[0].dashboards === '3')
			{
				console.log("data",resp.data);
				ReactDOM.render(<OM_Goals_headers data = {resp.data}/>, document.getElementById('root'));
			}
			})
	}
	
	render()
	{
		console.log(this.props.user_id);
		return (
			<div className="container">
				
				<IndexHeader />
				
				<div>
					<div className= "row">
						<div className = "col-lg-9 col-md-9 col-sm-9 col-cs-9">
							<h3 align="left"> View / Visualize Data </h3>
						</div>
						<div className = "col-lg-3 col-md-3 col-sm-3 col-cs-3">
							<button className="btn btn-primary" onClick={this.home}> Home </button>
						</div>
					</div>
					<br />
					
					<h5> View Data </h5>
					<br />
					<div className = "row">
						<div className = "col-lg-4 col-md-4 col-sm-4 col-xs-4">
							<button className="btn btn-info" onClick={this.prevData}> Previous Month&#39;s Data </button>
						</div>
						<div className = "col-lg-4 col-md-4 col-sm-4 col-xs-4">
							<button className="btn btn-warning" onClick={this.currData}> Today&#39;s Data </button>
						</div>
						<div className = "col-lg-4 col-md-4 col-sm-4 col-xs-4">
							<button className="btn btn-secondary" onClick={this.summary}> Summary </button>
						</div>
					</div>
					
					<br />
					<br />
					
					<h5> Visualise Graphs from the Data </h5>
					<br />
					<div className = "row">
						<div className = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
							<button className="btn btn-info" onClick={this.prevDataChart}> Charts from Old Month&#39;s Data </button>
						</div>
						<div className = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
							<button className="btn btn-warning" onClick={this.currDataChart}> Charts from Today&#39;s Data </button>
						</div>
					</div>
					
					<br />
					<br />
					
					<h5> Enter or Edit Data </h5>
					<br />
					<div className = "row">
						<div className = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
							<button className="btn btn-success" onClick={this.enter_data}> Enter/Edit Today&#39;s Data </button>
						</div>
						<div className = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
							<button className="btn btn-success" onClick={this.enter_old_data}> Enter/Edit Old Data </button>
						</div>
					</div>
					
					<br />
					<br />
					
					<h5> Enter or Edit Goals </h5>
					<br />
					<div className = "row">
						<div className = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
							<button className="btn btn-secondary" onClick={this.enter_goal}> Enter/Edit the Goal for Current Month&#39;s Data </button>
						</div>
						<div className = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
							<button className="btn btn-warning" onClick={this.viewGoals}> View Goals </button>
						</div>
					</div>
					
				</div>
			</div>
			
		);
	}
}

export default ViewDashboards