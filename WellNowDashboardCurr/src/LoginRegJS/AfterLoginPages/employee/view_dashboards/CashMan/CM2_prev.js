import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import moment from "moment"

import IndexHeader from "../../../../../IndexHeader";
import CMM_prev_data from "./CMM_prev_data"
import PreviousDataViewCM2 from './PreviousDataViewCM2'

class CM2_prev extends Component
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
			return <PreviousDataViewCM2 key={object.id} obj={object} />;
		});
	}
	
	back(props)
	{
		this.user_id = this.props.user_id;
		ReactDOM.render(<CMM_prev_data user_id = {this.user_id} />, document.getElementById('root'));
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
							<h3 align="center"> Previous Data for JUDY Dashboard </h3>
						</div>
					</div>
					<table className="table table-striped table-bordered" style={{marginTop: 20}}>
						<thead>
							<tr>
								<th> </th>
								<th colSpan="2"> INSURANCE LBX CORR </th>
								<th colSpan="2"> EFTS </th>
								<th colSpan="6"> SCANNING </th>
								<th colSpan="2"> CREDIT CARD PROCESSING </th>
								<th colSpan="4"> INVALID ADDRESS/RECD IN MAIL ONLY </th>
								<th colSpan="4"> WAYSTAR INVALIDS </th>
							</tr>
							<tr>
								<th> Date</th>
								<th> # PAGES  </th>
								<th> COMPLETED </th>
								<th> # </th>
								<th> COMPLETED </th>
								<th> W/C UPDATES </th>
								<th> W/C CORR </th>
								<th> NF CORR </th>
								<th> T/O </th>
								<th> D/E </th>
								<th> TIMELY FILING </th>
								<th> # TOTAL  </th>
								<th> completed </th>
								<th> NEEDS TRACED </th>
								<th> COMPLETED </th>
								<th> UPDATES </th>
								<th> COMPLETED </th>
								<th> TOTAL NUMBER IN BATCH </th>
								<th> ADDRESS ISSUES </th>
								<th> # worked </th>
								<th> # left </th>
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

export default CM2_prev