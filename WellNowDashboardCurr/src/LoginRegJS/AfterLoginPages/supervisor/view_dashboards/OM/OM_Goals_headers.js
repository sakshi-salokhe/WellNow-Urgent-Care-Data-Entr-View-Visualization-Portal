import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import moment from "moment"

import IndexHeader from "../../../../../IndexHeader";
import ViewDashboards from "../../ViewDashboards"
import GoalsViewOM from './GoalsViewOM'

class OM_Goals_headers extends Component
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
			return <GoalsViewOM key={object.id} obj={object} />;
		});
	}
	
	back()
	{
		console.log("here:back: ",this.props.data[0].userid);
		ReactDOM.render(<ViewDashboards user_id = {this.props.data[0].userid}/>, document.getElementById('root'));
	}
	
	render()
	{
		return (
			<div className="container-fluid">
				
				<IndexHeader />
				
				<div>
					<div className= "row">
						<div className = "col-lg-3 col-md-3 col-sm-3 col-cs-3">
							<button className="btn btn-primary" onClick={this.back}> Back </button>
						</div>
						<div className = "col-lg-9 col-md-9 col-sm-9 col-cs-9">
							<h3 align="center"> Goals for OM Dashboard </h3>
						</div>
					</div>
					<table className="table table-striped table-bordered" style={{marginTop: 20}}>
						<thead>
							<tr>
								<th> </th>
								<th colSpan="15"> Support </th>
								<th colSpan="5"> Coding </th>
								<th colSpan="7"> AR </th>
							</tr>
							<tr>
								<th> Date</th>
								<th> SP </th>
								<th> ENL </th>
								<th> DNU </th>
								<th> NYUCP </th>
								<th> NOM </th>
								<th> EMAILS </th>
								<th> DEPOSIT PULLS </th>
								<th> BLANK BATCH CORRES </th>
								<th> CORRESPON - DENCE </th>
								<th> ACCT AUDITS </th>
								<th> INV CORRECT </th>
								<th> PHONE </th>
								<th> INV ADDR </th>
								<th> COLLECTS </th>
								<th> MEDICAL RECORDS </th>
								<th> NA </th>
								<th> ON HOLDS </th>
								<th> CODING QUEUE </th>
								<th> ON SITES </th>
								<th> OOA'S </th>
								<th> 120+ </th>
								<th> 120+ (%) </th>
								<th> 90+ </th>
								<th> VOICEMAILS </th>
								<th> UNAPPLIED </th>
								<th> AUDIT </th>
								<th> WB's </th>
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

export default OM_Goals_headers