import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Redirect} from "react-router"
import {Link} from "react-router-dom"
import axios from 'axios'

import IndexHeader from "../../IndexHeader";
import ApproveNewUsersSuper from "./supervisor/ApproveNewUsersSuper"
import DeleteExistingUsers from "./supervisor/DeleteExistingUsers"
import ActivateUsers from "./supervisor/ActivateUsers"
import ViewDashboards from "./supervisor/ViewDashboards"
import ChangePassword from "./supervisor/ChangePassword"
import Logout from "../../Logout"
import EditInfo from "./supervisor/EditInfo"

import AR_Dash_Privileges from "./supervisor/privileges/AR_Dash_Privileges"
import OM_Dash_Privileges from "./supervisor/privileges/OM_Dash_Privileges"
import OS_Dash_Privileges from "./supervisor/privileges/OS_Dash_Privileges"
import PatSup_Dash_Privileges from "./supervisor/privileges/PatSup_Dash_Privileges"


class ManagerLogInPage extends Component 
{
	constructor(props) //props to be used when get method for db
	{
		super(props)
		
		this.state = 
		{
			user_id : ""
		}
		this.approve_new_users = this.approve_new_users.bind(this);
		this.delete_existing_users = this.delete_existing_users.bind(this);
		this.activate_users = this.activate_users.bind(this);
		this.change_password = this.change_password.bind(this);
		this.view_dashboards = this.view_dashboards.bind(this);
		this.edit_page = this.edit_page.bind(this);
	}
		
	approve_new_users()
	{
		ReactDOM.render(<ApproveNewUsersSuper user_id = {this.props.user_id} />, document.getElementById('root'));
	}
	
	delete_existing_users()
	{
		ReactDOM.render(<DeleteExistingUsers user_id = {this.props.user_id} />, document.getElementById('root'));
	}
	
	activate_users()
	{
		ReactDOM.render(<ActivateUsers user_id = {this.props.user_id} />, document.getElementById('root'));
	}
	
	view_dashboards()
	{
		ReactDOM.render(<ViewDashboards user_id = {this.props.user_id} />, document.getElementById('root'));
	}
	
	change_password()
	{
		ReactDOM.render(<ChangePassword user_id = {this.props.user_id} />, document.getElementById('root'));
	}
	
	logout()
	{
		ReactDOM.render(<Logout />, document.getElementById('root'));
	}
	
	edit_page()
	{
		//ReactDOM.render(<AR_Dash_Privileges  user_id = {this.props.user_id} />, document.getElementById('root'));
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_supervisor_dashboard.php?user_id='+this.props.user_id)
		.then(resp => {
			console.log("dash",resp.data);
			if(resp.data.dashboards === 1 || resp.data.dashboards === '1')
			{
				ReactDOM.render(<AR_Dash_Privileges data = {resp.data}/>, document.getElementById('root'));
			}
			else if(resp.data.dashboards == 2 || resp.data.dashboards === '2')
			{
				ReactDOM.render(<OS_Dash_Privileges data = {resp.data}/>, document.getElementById('root'));
			}
			else if(resp.data.dashboards == 3 || resp.data.dashboards === '3')
			{
				ReactDOM.render(<OM_Dash_Privileges data = {resp.data}/>, document.getElementById('root'));
			}
			else if(resp.data.dashboards == 4 || resp.data.dashboards === '4')
			{
				ReactDOM.render(<PatSup_Dash_Privileges data = {resp.data}/>, document.getElementById('root'));
			}
			})
	}
	
	render()
	{
		console.log(this.props.user_id);
		return (
			<div className = "container">
				<IndexHeader />
				
				<div className = "row">
					<div className = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<br/>
						<button className="btn btn-info" onClick={this.approve_new_users}> Approve / Edit/ Delete a New Registered Users </button>
						<br/>
						<br/>
						<button className="btn btn-danger" onClick={this.delete_existing_users}> Delete or Inactivate Existing Users </button>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<button className="btn btn-warning" onClick={this.activate_users}> Activate deactivated Users </button>
						<br/>
						<br/>
						<button className="btn btn-success" onClick={this.view_dashboards}> View dashboards </button>
						<br/>
						<br/>
						<button onClick={this.edit_page} className = "btn btn-primary"> Edit Dashboard Privileges </button>
					</div>
					
					<div className = "col-lg-3 col-md-3 col-sm-3 col-xs-3">
						<button className="btn btn-info" onClick={this.change_password}> Change Password </button> &nbsp; &nbsp; &nbsp;
						<button className="btn btn-warning" onClick={this.logout}> Logout </button>
					</div>
					
					<div className = "col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>
				</div>
			</div>
		)
	}
}

export default ManagerLogInPage