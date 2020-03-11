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

import EnterEditOldDataAR from './EnterEditOldDataAR'
import EnterEditOldDataOM from './EnterEditOldDataOM'
import EnterEditOldDataOS from './EnterEditOldDataOS'
import EnterEditOldDataPatSup from './EnterEditOldDataPatSup'

class EnterOldData extends Component
{
	constructor(props) //props to be used when get method for db
	{
		super(props);
		
		this.state = 
		{
			olddate : ""
		}
		this.onchangeOldDate = this.onchangeOldDate.bind(this);
		
		this.back = this.back.bind(this);
		this.submit_data = this.submit_data.bind(this);
	}
	
	onchangeOldDate(e)
	{
		this.setState({
			olddate: e.target.value
		});
	}
	
	back()
	{
		ReactDOM.render(<ViewDashboards user_id = {this.props.data.user_id}/>, document.getElementById('root'));
	}
	
	
	submit_data(event)
	{
		event.preventDefault();
		const obj = {
					olddate : this.state.olddate
				};
		
		if(obj.olddate.length == 0)
		{
			alert("Fill out all the fields!");
			ReactDOM.render(<EnterOldData user_id = {this.props.data.user_id}/>, document.getElementById('root'));
		}
		else{
			//console.log(obj);
			axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/enter_old_data_sup.php?olddate='+obj.olddate+'&userid='+this.props.data.user_id)
			.then(resp => {
				console.log("resp.data", resp.data);
				if(resp.data.dashboard === 1 || resp.data.dashboard === '1')
				{
					ReactDOM.render(<EnterEditOldDataAR data = {resp.data}/>, document.getElementById('root'));
				}
				else if(resp.data.dashboard == 2 || resp.data.dashboard === '2')
				{
					ReactDOM.render(<EnterEditOldDataOS data = {resp.data}/>, document.getElementById('root'));
				}
				else if(resp.data.dashboard == 3 || resp.data.dashboard === '3')
				{
					ReactDOM.render(<EnterEditOldDataOM data = {resp.data}/>, document.getElementById('root'));
				}
				else if(resp.data.dashboard == 4 || resp.data.dashboard === '4')
				{
					ReactDOM.render(<EnterEditOldDataPatSup data = {resp.data}/>, document.getElementById('root'));
				}
				})
		}
		

	}
	
	render()
	{
		console.log("data",this.props.data.user_id);
			
		return(
			//take input date range
			<div className = "container">
				<div>
					<IndexHeader />
				</div>
				
				<form className="form-horizontal">
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> choose the old date: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "date" max={moment().format("YYYY-MM-DD")} value = {this.state.olddate} name = "olddate" onChange = {this.onchangeOldDate} /> 
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					
					<div className="form-group">
						<div className="col-lg-10 col-sm-10 col-md-10 col-xs-10">
							<button type="button" className="btn btn-warning" onClick={this.submit_data}> Submit </button>
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

export default EnterOldData