import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import moment from "moment"

import IndexHeader from "../../../../IndexHeader";
import ViewDashboards from "../ViewDashboards"
import PrevDataChartAR from './AR/PrevDataChartAR'

import DailyChartAR from './AR/DailyChartAR'
import WeeklyChartAR from './AR/WeeklyChartAR'
import MonthlyChartAR from './AR/MonthlyChartAR'
import DailyChartwithGoalsAR from './AR/DailyChartwithGoalsAR'

import DailyChartOM from './OM/DailyChartOM'
import WeeklyChartOM from './OM/WeeklyChartOM'
import MonthlyChartOM from './OM/MonthlyChartOM'
import DailyChartwithGoalsOM from './OM/DailyChartwithGoalsOM'

import DailyChartOS from './OS/DailyChartOS'
import WeeklyChartOS from './OS/WeeklyChartOS'
import MonthlyChartOS from './OS/MonthlyChartOS'
import DailyChartwithGoalsOS from './OS/DailyChartwithGoalsOS'

import DailyChartPatSup from './PatSup/DailyChartPatSup'
import WeeklyChartPatSup from './PatSup/WeeklyChartPatSup'
import MonthlyChartPatSup from './PatSup/MonthlyChartPatSup'
import DailyChartwithGoalsPatSup from './PatSup/DailyChartwithGoalsPatSup'

class PrevDataVisualise extends Component
{
	constructor(props) //props to be used when get method for db
	{
		super(props);
		
		this.state = 
		{
			startdate : "",
			enddate : "",
			pattern: ""
		}
		this.onchange = this.onchange.bind(this);
		
		this.back = this.back.bind(this);
		this.submit_data = this.submit_data.bind(this);
	}
	
	onchange(e)
	{
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	
	back()
	{
		ReactDOM.render(<ViewDashboards user_id = {this.props.user_id}/>, document.getElementById('root'));
	}
	
	submit_data(event)
	{
		event.preventDefault();
		const obj = {
					startdate: this.state.startdate,
					enddate: this.state.enddate,
					pattern: this.state.pattern
				};
		
		if(obj.startdate.length == 0 || obj.enddate.length == 0 || obj.pattern.length == 0)
		{
			alert("Please fill out all the fields!")
		}
		else
		{
			if(obj.pattern == 1 || obj.pattern == '1')
			{
				axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_prev_data_daily_chart_sup.php?startdate='+obj.startdate+'&enddate='+obj.enddate+'&user_id='+this.props.user_id)
				.then(resp => {
					if(resp.data[0].dashboards === 1 || resp.data[0].dashboards === '1')
					{
						ReactDOM.render(<DailyChartAR data = {resp.data}/>, document.getElementById('root'));
					}
					else if(resp.data[0].dashboards == 2 || resp.data[0].dashboards === '2')
					{
						ReactDOM.render(<DailyChartOS data = {resp.data}/>, document.getElementById('root'));
					}
					else if(resp.data[0].dashboards == 3 || resp.data[0].dashboards === '3')
					{
						ReactDOM.render(<DailyChartOM data = {resp.data}/>, document.getElementById('root'));
					}
					else if(resp.data[0].dashboards == 4 || resp.data[0].dashboards === '4')
					{
						ReactDOM.render(<DailyChartPatSup data = {resp.data}/>, document.getElementById('root'));
					}
				})
			}
			else if(obj.pattern == 2 || obj.pattern == '2')
			{
				axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_prev_data_weekly_chart_sup.php?startdate='+obj.startdate+'&enddate='+obj.enddate+'&user_id='+this.props.user_id)
				.then(resp => {
					if(resp.data[0].dashboards === 1 || resp.data[0].dashboards === '1')
					{
						ReactDOM.render(<WeeklyChartAR data = {resp.data}/>, document.getElementById('root'));
					}
					else if(resp.data[0].dashboards == 2 || resp.data[0].dashboards === '2')
					{
						ReactDOM.render(<WeeklyChartOS data = {resp.data}/>, document.getElementById('root'));
					}
					else if(resp.data[0].dashboards == 3 || resp.data[0].dashboards === '3')
					{
						ReactDOM.render(<WeeklyChartOM data = {resp.data}/>, document.getElementById('root'));
					}
					else if(resp.data[0].dashboards == 4 || resp.data[0].dashboards === '4')
					{
						ReactDOM.render(<WeeklyChartPatSup data = {resp.data}/>, document.getElementById('root'));
					}
				})
			}
			else if(obj.pattern == 3 || obj.pattern == '3')
			{
				axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_prev_data_monthly_chart_sup.php?startdate='+obj.startdate+'&enddate='+obj.enddate+'&user_id='+this.props.user_id)
				.then(resp => {
					if(resp.data[0].dashboards === 1 || resp.data[0].dashboards === '1')
					{
						ReactDOM.render(<MonthlyChartAR data = {resp.data}/>, document.getElementById('root'));
					}
					else if(resp.data[0].dashboards == 2 || resp.data[0].dashboards === '2')
					{
						ReactDOM.render(<MonthlyChartOS data = {resp.data}/>, document.getElementById('root'));
					}
					else if(resp.data[0].dashboards == 3 || resp.data[0].dashboards === '3')
					{
						ReactDOM.render(<MonthlyChartOM data = {resp.data}/>, document.getElementById('root'));
					}
					else if(resp.data[0].dashboards == 4 || resp.data[0].dashboards === '4')
					{
						ReactDOM.render(<MonthlyChartPatSup data = {resp.data}/>, document.getElementById('root'));
					}
				})
			}
			else if(obj.pattern == 4 || obj.pattern == '4')
			{
				axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_prev_data_daily_chart_sup.php?startdate='+obj.startdate+'&enddate='+obj.enddate+'&user_id='+this.props.user_id)
				.then(resp => {
					if(resp.data[0].dashboards === 1 || resp.data[0].dashboards === '1')
					{
						ReactDOM.render(<DailyChartwithGoalsAR data = {resp.data}/>, document.getElementById('root'));
					}
					else if(resp.data[0].dashboards == 2 || resp.data[0].dashboards === '2')
					{
						ReactDOM.render(<DailyChartwithGoalsOS data = {resp.data}/>, document.getElementById('root'));
					}
					else if(resp.data[0].dashboards == 3 || resp.data[0].dashboards === '3')
					{
						ReactDOM.render(<DailyChartwithGoalsOM data = {resp.data}/>, document.getElementById('root'));
					}
					else if(resp.data[0].dashboards == 4 || resp.data[0].dashboards === '4')
					{
						ReactDOM.render(<DailyChartwithGoalsPatSup data = {resp.data}/>, document.getElementById('root'));
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
							<input className = "form-control" type = "date" max={moment().format("YYYY-MM-DD")} value = {this.state.startdate} name = "startdate" onChange = {this.onchange} /> 
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> End Date: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "date" min={this.state.startdate} max={moment().format("YYYY-MM-DD")} value = {this.state.enddate} name = "enddate" onChange = {this.onchange} /> 
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
					</div>
					
					
					<div className="form-group">
							<div className="col-lg-3 col-sm-3 col-md-3 col-xs-3"><b> How do you want to visualise? : </b></div>
							
							<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
								<select className = "form-control" value = {this.state.pattern} name = "pattern" onChange = {this.onchange}>
									<option value="">--Please Choose your pattern -- </option>
									<option value="1"> Daily </option>
									<option value="2"> Weekly </option>
									<option value="3"> Monthly </option>
									<option value="4"> Daily Data with Goals </option>
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