import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import IndexHeader from "../../../../IndexHeader";
import ManagerLogInPage from "../../ManagerLogInPage"
import ViewDashboards from "../ViewDashboards"

import ViewCurrDataAR from './AR/ViewCurrDataAR'
import ViewCurrDataOM from './OM/ViewCurrDataOM'
import ViewCurrDataOS from './OS/ViewCurrDataOS'
import ViewCurrDataPatSup from './PatSup/ViewCurrDataPatSup'

class CurrData extends Component
{
	constructor(props) //props to be used when get method for db
	{
		super(props);
		
		this.state = 
		{
			dashboards: ""
		}
		this.onchangedashboards = this.onchangedashboards.bind(this);
		
		this.submit_data = this.submit_data.bind(this);
	}
	
	onchangedashboards(e)
	{
		this.setState({
			dashboards: e.target.value
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
					dashboards: this.state.dashboards
				};
		
		if(obj.dashboards.length == 0)
		{
			alert("Choose the dashboard of you choice!")
		}
		else{
			axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_curr_data.php?dashboards='+obj.dashboards)
			.then(resp => {
				if(obj.dashboards === 1 || obj.dashboards === '1')
				{
					ReactDOM.render(<ViewCurrDataAR data = {resp.data}/>, document.getElementById('root'));
				}
				else if(obj.dashboards == 2 || obj.dashboards === '2')
				{
					ReactDOM.render(<ViewCurrDataOS data = {resp.data}/>, document.getElementById('root'));
				}
				else if(obj.dashboards == 3 || obj.dashboards === '3')
				{
					ReactDOM.render(<ViewCurrDataOM data = {resp.data}/>, document.getElementById('root'));
				}
				else if(obj.dashboards == 4 || obj.dashboards === '4')
				{
					ReactDOM.render(<ViewCurrDataPatSup data = {resp.data}/>, document.getElementById('root'));
				}
				})
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

export default CurrData