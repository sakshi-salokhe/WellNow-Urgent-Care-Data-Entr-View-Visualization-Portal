import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import moment from "moment"

import IndexHeader from "../../../../IndexHeader";
import SupervisorLogInPage from "../../SupervisorLogInPage"
import ViewDashboards from "../ViewDashboards"

import DataList_onDateRangeAR from "./AR/DataList_onDateRangeAR"
import DataList_onDateRangeOM from "./OM/DataList_onDateRangeOM"
import DataList_onDateRangeOS from "./OS/DataList_onDateRangeOS"

class PrevData extends Component
{
	constructor(props) //props to be used when get method for db
	{
		super(props);
		
		this.state = 
		{
			startdate : "",
			enddate : "",
		}
		this.onchangeStartDate = this.onchangeStartDate.bind(this);
		this.onchangeEndDate = this.onchangeEndDate.bind(this);
		
		this.back = this.back.bind(this);
		this.submit_data = this.submit_data.bind(this);
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
	
	back()
	{
		ReactDOM.render(<ViewDashboards user_id = {this.props.user_id}/>, document.getElementById('root'));
	}
	
	
	submit_data(event)
	{
		event.preventDefault();
		const obj = {
					startdate : this.state.startdate,
					enddate : this.state.enddate,
				};
		
		if(obj.startdate.length == 0 || obj.enddate.length == 0)
		{
			alert("Fill out all the fields!");
		}
		else{
			//console.log(obj);
			axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_prev_data_sup.php?startdate='+obj.startdate+'&enddate='+obj.enddate+'&user_id='+this.props.user_id)
			.then(resp => {
				console.log(resp.data[0].dashboards);
				if(resp.data[0].dashboards === 1 || resp.data[0].dashboards === '1')
				{
					ReactDOM.render(<DataList_onDateRangeAR data = {resp.data}/>, document.getElementById('root'));
				}
				else if(resp.data[0].dashboards == 2 || resp.data[0].dashboards === '2')
				{
					ReactDOM.render(<DataList_onDateRangeOS data = {resp.data}/>, document.getElementById('root'));
				}
				else if(resp.data[0].dashboards == 3 || resp.data[0].dashboards === '3')
				{
					ReactDOM.render(<DataList_onDateRangeOM data = {resp.data}/>, document.getElementById('root'));
				}
				})
		}
		

	}
	
	render()
	{
		console.log(this.props.user_id);
		return(
			//take input date range
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
						<div className="col-lg-10 col-sm-10 col-md-10 col-xs-10">
							<button type="button" className="btn btn-warning" onClick={this.submit_data}> Submit Date Range </button>
							&nbsp;&nbsp;&nbsp;
							<button type="button" className="btn btn-primary" onClick={this.back}> Cancel </button>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
				</form>
				
			</div>
		);
	}
}

export default PrevData