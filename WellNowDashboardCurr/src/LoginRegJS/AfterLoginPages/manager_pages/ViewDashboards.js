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

import PrevData from "./view_dashboards/PrevData"
import CurrData from "./view_dashboards/CurrData"
import PrevDataVisualise from "./view_dashboards/PrevDataVisualise"
import CurrDataVisualise from "./view_dashboards/CurrDataVisualise"
import SummaryVisualise from "./view_dashboards/SummaryVisualise"
import ViewGoals from "./view_dashboards/ViewGoals"
import EnterData from "./view_dashboards/EnterData"
import EnterOldDataAdm from "./view_dashboards/EnterOldDataAdm"

class ViewDashboards extends Component
{
	
	home()
	{
		ReactDOM.render(<ManagerLogInPage />, document.getElementById('root'));
	}
	
	prevData()
	{
		ReactDOM.render(<PrevData />, document.getElementById('root'));
	}
	
	currData()
	{
		ReactDOM.render(<CurrData />, document.getElementById('root'));
	}
	
	prevDataChart()
	{
		ReactDOM.render(<PrevDataVisualise />, document.getElementById('root'));
	}
	
	currDataChart()
	{
		ReactDOM.render(<CurrDataVisualise />, document.getElementById('root'));
	}
	
	summary()
	{
		ReactDOM.render(<SummaryVisualise />, document.getElementById('root'));
	}
	
	viewgoals()
	{
		ReactDOM.render(<ViewGoals />, document.getElementById('root'));
	}
	
	enter_data()
	{
		ReactDOM.render(<EnterData />, document.getElementById('root'));
	}
	
	enter_old_data()
	{
		ReactDOM.render(<EnterOldDataAdm />, document.getElementById('root'));
	}
	
	render()
	{
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
							<button className="btn btn-primary" onClick={this.summary}> Summaries </button>
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
					
					<h5> View Goals </h5>
					<br />
					<div className = "row">
						<div className = "col-lg-4 col-md-4 col-sm-4 col-xs-4">
							<button className="btn btn-info" onClick={this.viewgoals}> View Goals </button>
						</div>
						<div className = "col-lg-4 col-md-4 col-sm-4 col-xs-4">
							<button className="btn btn-info" onClick={this.enter_data}> Enter Today&#39;s Data </button>
						</div>
						<div className = "col-lg-4 col-md-4 col-sm-4 col-xs-4">
							<button className="btn btn-info" onClick={this.enter_old_data}> Enter Old Data </button>
						</div>
					</div>
					
				</div>
			</div>
			
		);
	}
}

export default ViewDashboards