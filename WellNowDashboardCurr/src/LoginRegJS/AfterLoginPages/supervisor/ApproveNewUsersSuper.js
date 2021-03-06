import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import IndexHeader from "../../../IndexHeader";
import EmpList from "./EmpList"
import SupervisorLogInPage from "../SupervisorLogInPage"
import EditInfo from "./EditInfo"

class ApproveNewUsers extends Component
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			employees: []
		};
		this.home = this.home.bind(this);
	}
	
	componentDidMount()
	{
		axios.get("http://localhost:81/wellnowdash_backend/approve_new_users_sup.php?user_id="+this.props.user_id)
		.then(resp => {
			this.setState({ employees: resp.data });
			console.log(resp.data);
		})
		.catch(function(error){
			console.log(error);
		})
	}
	
	userList()
	{
		//console.log("here here here");
		return this.state.employees.map(function(object)
		{
			return <EmpList key={object.userid} obj={object} />;
		});
	}
	
	home()
	{
		ReactDOM.render(<SupervisorLogInPage user_id = {this.props.user_id}/>, document.getElementById('root'));
	}
	
	render()
	{
		return (
			<div className="container">
				
				<IndexHeader />
				
				<div>
					<div className= "row">
						<div className = "col-lg-3 col-md-3 col-sm-3 col-cs-3">
							<button className="btn btn-primary" onClick={this.home}> Home </button>
						</div>
						<div className = "col-lg-9 col-md-9 col-sm-9 col-cs-9">
							<h3 align="center"> Newly Registered Employee List </h3>
						</div>
					</div>
					<table className="table table-striped" style={{marginTop: 20}}>
						<thead>
							<tr>
								<th> Email </th>
								<th> Full Name </th>
								<th> Dashboard </th>
								<th colSpan="3"> Action </th>
							</tr>
						</thead>
						<tbody>
							{this.userList()}
						</tbody>
					</table>
				</div>
				
			</div>

		);
	}
}

export default ApproveNewUsers