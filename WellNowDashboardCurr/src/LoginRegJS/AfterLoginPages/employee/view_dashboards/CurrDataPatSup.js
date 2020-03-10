import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import IndexHeader from "../../../../IndexHeader";
import EmployeeLogInPage from "../../EmployeeLogInPage"
import ViewData from "../ViewData"


import PreviousDataViewPatSup from './PatSup/PreviousDataViewPatSup'

class CurrDataPatSup extends Component
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
		ReactDOM.render(<ViewData user_id = {this.user_id} />, document.getElementById('root'));
	}
	
	componentDidMount()
	{
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_dash_id.php?user_id='+this.props.user_id)
		.then(res=>
			{
				this.setState({ dash: res.data.dashboards });
				axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_curr_data_emp.php?dashboards='+res.data.dashboards+"&user_id="+this.props.user_id)
					.then(resp => {
							
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
			return <PreviousDataViewPatSup key={object.userid} obj={object} />;
		});
	}
	
	render()
	{
		var user_id = this.props.user_id;
		return (
			<div className="container-fluid">
				
				<IndexHeader />
					<div className= "row">
						<div className = "col-lg-3 col-md-3 col-sm-3 col-cs-3">
							<button className="btn btn-primary" onClick={this.back}> Back </button>
						</div>
						<div className = "col-lg-9 col-md-9 col-sm-9 col-cs-9">
							<h3 align="center"> Today's Data for Patient Support Dashboard </h3>
						</div>
					</div>
					<table className="table table-striped table-bordered" style={{marginTop: 20}}>
						<thead>
							<tr>
								<th> </th>
								<th> </th>
								<th colSpan="2"> Safiyyah </th>
								<th colSpan="5"> Ashley Standish </th>
								<th colSpan="3"> Bailea </th>
								<th colSpan="3"> Justin </th>
							</tr>
							<tr>
								<th> Date</th>
								<th> </th>
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
		)
		
	}
}

export default CurrDataPatSup