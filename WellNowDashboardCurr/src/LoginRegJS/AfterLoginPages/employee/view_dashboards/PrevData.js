import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import moment from "moment"

import IndexHeader from "../../../../IndexHeader";
import EmployeeLogInPage from "../../EmployeeLogInPage"
import ViewData from "../ViewData"

import DataList_AR from "./AR/DataList_AR"
import DataList_OM from "./OM/DataList_OM"
import DataList_OS from "./OS/DataList_OS"
import DataList_PatSup from "./PatSup/DataList_PatSup"

class PrevData extends Component
{
	constructor(props) //props to be used when get method for db
	{
		super(props);
		
		this.state = 
		{
			startdate : "",
			enddate : "",
			dash_id : ""
		}
		this.onchange = this.onchange.bind(this);
		
		this.submit_data = this.submit_data.bind(this);
		this.back = this.back.bind(this);
	}
	
	back(props)
	{
		this.user_id = this.props.user_id;
		ReactDOM.render(<ViewData user_id = {this.user_id} />, document.getElementById('root'));
	}
	onchange(e)
	{
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	
	submit_data(event)
	{
		event.preventDefault();
		const obj = {
					startdate : this.state.startdate,
					enddate : this.state.enddate,
					user_id : this.props.user_id
				};
		
		if(obj.startdate.length == 0 || obj.enddate.length == 0)
		{
			alert("Fill out all the fields!")
		}
		else
		{
			axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_dash_id.php?user_id='+obj.user_id)
			.then(resp => {
				axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_prev_data_emp.php?startdate='+obj.startdate+'&enddate='+obj.enddate+'&user_id='+obj.user_id)
				.then(resp1 => {
					
					if(resp.data.dashboards === 1 || resp.data.dashboards === '1')
					{
						ReactDOM.render(<DataList_AR data = {resp1.data} user_id = {obj.user_id}/>, document.getElementById('root'));
					}
					else if(resp.data.dashboards == 2 || resp.data.dashboards === '2')
					{
						ReactDOM.render(<DataList_OS data = {resp1.data} user_id = {obj.user_id}/>, document.getElementById('root'));
					}
					else if(resp.data.dashboards == 3 || resp.data.dashboards === '3')
					{
						ReactDOM.render(<DataList_OM data = {resp1.data} user_id = {obj.user_id}/>, document.getElementById('root'));
					}
					else if(resp.data.dashboards == 4 || resp.data.dashboards === '4')
					{
						ReactDOM.render(<DataList_PatSup data = {resp1.data} user_id = {obj.user_id}/>, document.getElementById('root'));
					}
				})
			})
		}
		
	}
	
	render()
	{
		var user_id = this.props.user_id;
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