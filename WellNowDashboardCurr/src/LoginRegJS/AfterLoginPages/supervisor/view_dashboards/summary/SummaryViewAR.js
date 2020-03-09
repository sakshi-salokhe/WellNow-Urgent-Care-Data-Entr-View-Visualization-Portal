import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import IndexHeader from "../../../../../IndexHeader";
import SupervisorLogInPage from "../../../SupervisorLogInPage"
import ViewDashboards from "../../ViewDashboards"

import PreviousDataViewAR from '../AR/PreviousDataViewAR'


class SummaryViewAR extends Component
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			dash : "",
			employees: []
		};
		
		this.back = this.back.bind(this);
	}
	
	
	back(props)
	{
		this.user_id = this.props.user_id;
		ReactDOM.render(<ViewDashboards user_id = {this.user_id} />, document.getElementById('root'));
	}
	
	componentDidMount()
	{
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_dash_id.php?user_id='+this.props.user_id)
		.then(res=>
			{
				this.setState({ dash: res.data.dashboards });
				axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/summary_view_emp.php?dashboards='+res.data.dashboards+"&user_id="+this.props.user_id)
					.then(resp => {
							console.log("monhtly avg :", resp.data);
							//ReactDOM.render(<ViewCurrDataAR data = {resp.data}/>, document.getElementById('root'));
							this.setState({ employees: resp.data });
						})
			})
	}
	
	userList()
	{
		//console.log("here here here");
		return this.state.employees.map(function(object)
		{
			return <PreviousDataViewAR key={object.userid} obj={object} />;
		});
	}
	
	render()
	{
		var user_id = this.props.user_id;
		return (
			<div className="container">
				
				<IndexHeader />
				
				<div>
					<div className= "row">
						<div className = "col-lg-3 col-md-3 col-sm-3 col-cs-3">
							<button className="btn btn-primary" onClick={this.back}> Back </button>
						</div>
						<div className = "col-lg-9 col-md-9 col-sm-9 col-cs-9">
							<h3 align="center"> Today's Data for AR Dashboard </h3>
						</div>
					</div>
					<table className="table table-striped table-bordered" style={{marginTop: 20}}>
						<thead>
							<tr>
								<th> </th>
								<th colSpan="7"> Workbasket </th>
								<th colSpan="3"> Waystar </th>
							</tr>
							<tr>
								<th> Date</th>
								<th> Tech/Other </th>
								<th> Demo / Elig </th>
								<th> Timely Filing </th>
								<th> Coding Replies </th>
								<th> Sup Reviews </th>
								<th> NF Corres </th>
								<th> WC Corres </th>
								<th> Medc Sec </th>
								<th> OOB </th>
								<th> Fidelis TF </th>
							</tr>
						</thead>
						<tbody>
							{this.userList()}
						</tbody>
					</table>
				</div>
				
			</div>
		)
		
	}
}

export default SummaryViewAR