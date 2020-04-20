import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import CMM_curr_data from "./CMM_curr_data"
import PreviousDataViewCM2 from './PreviousDataViewCM2'

class CM2_curr extends Component
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
		ReactDOM.render(<CMM_curr_data user_id = {this.user_id} />, document.getElementById('root'));
	}
	
	componentDidMount()
	{
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_dash_id.php?user_id='+this.props.user_id)
		.then(res=>
			{
				this.setState({ dash: res.data.dashboards });
				axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_curr_data_emp_cm2.php?dashboards='+res.data.dashboards+"&user_id="+this.props.user_id)
					.then(resp => {
							this.setState({ employees: resp.data });
						})
			})
	}
	
	userList()
	{
		return this.state.employees.map(function(object)
		{
			return <PreviousDataViewCM2 key={object.userid} obj={object} />;
		});
	}
	
	render()
	{
		var user_id = this.props.user_id;
		return (
			<div className="container-fluid">
				
				<br />
				
				<div>
					<div className= "row">
						<div className = "col-lg-2 col-md-2 col-sm-2 col-cs-2">
							<button className="btn btn-primary" onClick={this.back}> Back </button>
						</div>
						<div className = "col-lg-10 col-md-10 col-sm-10 col-cs-10">
							<h3 align="center"> Today's Data for Cash Mail Management - JUDY Dashboard </h3>
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

export default CM2_curr