import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import moment from "moment"

import IndexHeader from "../../../../../IndexHeader";
import PrevData from "../PrevData"
import PreviousDataViewAR from './PreviousDataViewAR'

class DataList_onDateRangeAR extends Component
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
			return <PreviousDataViewAR key={object.id} obj={object} />;
		});
	}
	
	back()
	{
		ReactDOM.render(<PrevData user_id = {this.props.data[0].supervisor_id}/>, document.getElementById('root'));
	}
	
	render()
	{
		return (
			<div className="container">
				
				<IndexHeader />
				
				<div>
					<div className= "row">
						<div className = "col-lg-3 col-md-3 col-sm-3 col-cs-3">
							<button className="btn btn-primary" onClick={this.back}> Back </button>
						</div>
						<div className = "col-lg-9 col-md-9 col-sm-9 col-cs-9">
							<h3 align="center"> Previous Data for AR Dashboard </h3>
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

export default DataList_onDateRangeAR