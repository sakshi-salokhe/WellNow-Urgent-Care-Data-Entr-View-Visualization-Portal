import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import moment from "moment"

import IndexHeader from "../../../../../IndexHeader";
import ViewDashboards from "../../ViewDashboards"
import PreviousDataViewPatSup from './PreviousDataViewPatSup'

class DataList_onDateRangePatSup extends Component
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			employees: []
		};
		this.back = this.back.bind(this);
	}
	userList()
	{
		return this.props.data.map(function(object)
		{
			return <PreviousDataViewPatSup key={object.id} obj={object} />;
		});
	}
	
	back()
	{
		ReactDOM.render(<ViewDashboards user_id = {this.props.data[0].supervisor_id}/>, document.getElementById('root'));
	}
	
	render()
	{
		console.log("check this",this.props.data[0]);
		return (
			<div className="container-fluid">
				
				<IndexHeader />
				
				<div>
					<div className= "row">
						<div className = "col-lg-3 col-md-3 col-sm-3 col-cs-3">
							<button className="btn btn-primary" onClick={this.back}> Back </button>
						</div>
						<div className = "col-lg-9 col-md-9 col-sm-9 col-cs-9">
							<h3 align="center"> Previous Data for Patient Support Dashboard </h3>
						</div>
					</div>
					<table className="table table-striped table-bordered" style={{marginTop: 20}}>
						<thead>
							<tr>
								<th> </th>
								<th colSpan="2"> Safiyyah </th>
								<th colSpan="5"> Ashley Standish </th>
								<th colSpan="3"> Bailea </th>
								<th colSpan="3"> Justin </th>
							</tr>
							<tr>
								<th> Date</th>
								<th> MVP </th>
								<th> Invalid Address (oldest date open) </th>
								<th> Attachments </th>
								<th> WC Mailing (yes/no) </th>
								<th> WC deleted claims to archived (yes/no) </th>
								<th> Accident Type (WC/NF) (yes/no) </th>
								<th> Last Address given Worked (last date finished) </th>
								<th> Indep Health </th>
								<th> BCBS of WNY </th>
								<th> Emails </th>
								<th> NDC Numbers </th>
								<th> Medicare Facility Location </th>
								<th> Medicare Secondary to be original </th>
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

export default DataList_onDateRangePatSup