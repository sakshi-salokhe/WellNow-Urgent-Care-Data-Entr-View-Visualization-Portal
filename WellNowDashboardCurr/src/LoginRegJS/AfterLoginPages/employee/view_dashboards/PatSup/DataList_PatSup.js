import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import moment from "moment"

import IndexHeader from "../../../../../IndexHeader";
import EmployeeLogInPage from "../../../EmployeeLogInPage"
import ViewData from "../../ViewData"
import PreviousDataViewPatSup from './PreviousDataViewPatSup'
import PrevData from '../PrevData'

class DataList_PatSup extends Component
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			employees: []
		};
		
		this.back = this.back.bind(this);
		this.userList = this.userList.bind(this);
	
	}
	userList()
	{
		return this.props.data.map(function(object)
		{
			return <PreviousDataViewPatSup key={object.id} obj={object} />;
		});
	}
	
	back(props)
	{
		this.user_id = this.props.user_id;
		ReactDOM.render(<PrevData user_id = {this.user_id} />, document.getElementById('root'));
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
							{this.userList()}
					</table>
				</div>
				
			</div>
		)
	}
}

export default DataList_PatSup