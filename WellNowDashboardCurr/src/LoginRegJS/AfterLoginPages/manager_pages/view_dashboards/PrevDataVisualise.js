import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import moment from "moment"

import IndexHeader from "../../../../IndexHeader";
import ManagerLogInPage from "../../ManagerLogInPage"
import ViewDashboards from "../ViewDashboards"

import DailyChartwithGoalsAR from './AR/DailyChartwithGoalsAR'
import DailyChartAR from './AR/DailyChartAR'
import WeeklyChartAR from './AR/WeeklyChartAR'
import MonthlyChartAR from './AR/MonthlyChartAR'

import DailyChartwithGoalsOM from './OM/DailyChartwithGoalsOM'
import DailyChartOM from './OM/DailyChartOM'
import WeeklyChartOM from './OM/WeeklyChartOM'
import MonthlyChartOM from './OM/MonthlyChartOM'

import DailyChartwithGoalsOS from './OS/DailyChartwithGoalsOS'
import DailyChartOS from './OS/DailyChartOS'
import WeeklyChartOS from './OS/WeeklyChartOS'
import MonthlyChartOS from './OS/MonthlyChartOS'

class PrevDataVisualise extends Component
{
	constructor(props) //props to be used when get method for db
	{
		super(props);
		
		this.state = 
		{
			startdate : "",
			enddate : "",
			dashboards: "",
			pattern: ""
		}
		this.onchangeStartDate = this.onchangeStartDate.bind(this);
		this.onchangeEndDate = this.onchangeEndDate.bind(this);
		this.onchangedashboards = this.onchangedashboards.bind(this);
		this.onchangepattern = this.onchangepattern.bind(this);
		
		this.submit_data = this.submit_data.bind(this);
	}
	
	onchangedashboards(e)
	{
		this.setState({
			dashboards: e.target.value
		});
	}
	
	onchangeStartDate(e)
	{
		this.setState({
			startdate: e.target.value
		});
	}
	
	onchangeEndDate(e)
	{
		this.setState({
			enddate: e.target.value
		});
	}
	
	onchangepattern(e)
	{
		this.setState({
			pattern: e.target.value
		});
	}
	
	back()
	{
		ReactDOM.render(<ViewDashboards />, document.getElementById('root'));
	}
	
	submit_data(event)
	{
		event.preventDefault();
		const obj = {
					startdate: this.state.startdate,
					enddate: this.state.enddate,
					dashboards: this.state.dashboards,
					pattern: this.state.pattern
				};
		//console.log(obj);
		if(obj.startdate.length == 0 || obj.enddate.length == 0 || obj.dashboards.length == 0 || obj.pattern.length == 0)
		{
			alert("Please fill out all the fields!")
		}
		else
		{
			if(obj.pattern == 1 || obj.pattern == '1')
			{
				axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_prev_data_daily_chart.php?startdate='+obj.startdate+'&enddate='+obj.enddate+'&dashboards='+obj.dashboards)
				.then(resp => {
					console.log("before going to chart file",resp.data);
					if(obj.dashboards === 1 || obj.dashboards === '1')
					{
						ReactDOM.render(<DailyChartAR data = {resp.data}/>, document.getElementById('root'));
					}
					else if(resp.data.dashboards == 2 || obj.dashboards === '2')
					{
						ReactDOM.render(<DailyChartOS data = {resp.data}/>, document.getElementById('root'));
					}
					else if(resp.data.dashboards == 3 || obj.dashboards === '3')
					{
						ReactDOM.render(<DailyChartOM data = {resp.data}/>, document.getElementById('root'));
					}
				})
			}
			else if(obj.pattern == 2 || obj.pattern == '2')
			{
				axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_prev_data_weekly_chart.php?startdate='+obj.startdate+'&enddate='+obj.enddate+'&dashboards='+obj.dashboards)
				.then(resp => {
					console.log("before going to chart file",resp.data);
					if(obj.dashboards === 1 || obj.dashboards === '1')
					{
						console.log(resp.data);
						ReactDOM.render(<WeeklyChartAR data = {resp.data}/>, document.getElementById('root'));
					}
					else if(obj.dashboards == 2 || obj.dashboards === '2')
					{
						ReactDOM.render(<WeeklyChartOS data = {resp.data}/>, document.getElementById('root'));
					}
					else if(obj.dashboards == 3 || obj.dashboards === '3')
					{
						ReactDOM.render(<WeeklyChartOM data = {resp.data}/>, document.getElementById('root'));
					}
				})
			}
			else if(obj.pattern == 3 || obj.pattern == '3')
			{
				axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_prev_data_monthly_chart.php?startdate='+obj.startdate+'&enddate='+obj.enddate+'&dashboards='+obj.dashboards)
				.then(resp => {
					if(obj.dashboards === 1 || obj.dashboards === '1')
					{
						console.log(resp.data);
						ReactDOM.render(<MonthlyChartAR data = {resp.data}/>, document.getElementById('root'));
					}
					else if(obj.dashboards == 2 || obj.dashboards === '2')
					{
						ReactDOM.render(<MonthlyChartOS data = {resp.data}/>, document.getElementById('root'));
					}
					else if(obj.dashboards == 3 || obj.dashboards === '3')
					{
						ReactDOM.render(<MonthlyChartOM data = {resp.data}/>, document.getElementById('root'));
					}
				})
			}
			else if(obj.pattern == 4 || obj.pattern == '4')
			{
				axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_prev_data_daily_chart.php?startdate='+obj.startdate+'&enddate='+obj.enddate+'&dashboards='+obj.dashboards)
				.then(resp => {
					if(obj.dashboards === 1 || obj.dashboards === '1')
					{
						console.log(resp.data);
						ReactDOM.render(<DailyChartwithGoalsAR data = {resp.data}/>, document.getElementById('root'));
					}
					else if(obj.dashboards === 2 || obj.dashboards === '2')
					{
						ReactDOM.render(<DailyChartwithGoalsOS data = {resp.data}/>, document.getElementById('root'));
					}
					else if(obj.dashboards === 3 || obj.dashboards === '3')
					{
						console.log(resp.data);
						ReactDOM.render(<DailyChartwithGoalsOM data = {resp.data}/>, document.getElementById('root'));
					}
				})
			}
		}
	}
	
	render()
	{
		return(
			<div className = "container">
				<div>
					<IndexHeader />
				</div>
				
				<form className="form-horizontal">
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> Start Date: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "date" max={moment().format("YYYY-MM-DD")} value = {this.state.startdate} name = "startdate" onChange = {this.onchangeStartDate} /> 
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> End Date: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "date" min={this.state.startdate} max={moment().format("YYYY-MM-DD")} value = {this.state.enddate} name = "enddate" onChange = {this.onchangeEndDate} /> 
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
								</select>
							</div>
							
							<div className="col-lg-1 col-sm-1 col-md-1 col-xs-1"> </div>
					</div>
					
					<div className="form-group">
							<div className="col-lg-3 col-sm-3 col-md-3 col-xs-3"><b> How do you want to visualise? : </b></div>
							
							<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
								<select className = "form-control" value = {this.state.pattern} name = "pattern" onChange = {this.onchangepattern}>
									<option value="">--Please Choose your pattern -- </option>
									<option value="1"> Daily </option>
									<option value="2"> Weekly </option>
									<option value="3"> Monthly </option>
									<option value="4"> Daily with Goals </option>
								</select>
							</div>
							
							<div className="col-lg-1 col-sm-1 col-md-1 col-xs-1"> </div>
					</div>
					
					<div className="form-group">
						<div className="col-lg-10 col-sm-10 col-md-10 col-xs-10">
							<button type="button" className="btn btn-warning" onClick={this.submit_data}> Submit Date Range </button>
							&nbsp;&nbsp;&nbsp;
							<button type="button" className="btn btn-primary" onClick={this.back}> Cancel </button>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
				</form>
				
			</div>
		)
	}
}

export default PrevDataVisualise