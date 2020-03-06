import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Redirect} from "react-router"
import {Link} from "react-router-dom"

import IndexHeader from "../../IndexHeader";
import ApproveNewUsers from "./manager_pages/ApproveNewUsers"
import DeleteExistingUsers from "./manager_pages/DeleteExistingUsers"
import ActivateUsers from "./manager_pages/ActivateUsers"
import ViewDashboards from "./manager_pages/ViewDashboards"
import ChangePassword from "./manager_pages/ChangePassword"
import Logout from "../../Logout"
import EditInfo from "./manager_pages/EditInfo"
import EditDashboardPrivileges from "./manager_pages/EditDashboardPrivileges"

import ApproveNewEmps from "./manager_pages/ApproveNewEmps"

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
		this.approve_new_user_emp = this.approve_new_user_emp.bind(this);
		this.delete_existing_users = this.delete_existing_users.bind(this);
		this.activate_users = this.activate_users.bind(this);
		this.change_password = this.change_password.bind(this);
		this.edit_page = this.edit_page.bind(this);
	}
		
	approve_new_users()
	{
		ReactDOM.render(<ApproveNewUsers user_id = {this.props.user_id} />, document.getElementById('root'));
	}
	
	approve_new_user_emp()
	{
		ReactDOM.render(<ApproveNewEmps user_id = {this.props.user_id} />, document.getElementById('root'));
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
		ReactDOM.render(<ViewDashboards />, document.getElementById('root'));
	}
	
	change_password()
	{
		ReactDOM.render(<ChangePassword user_id = {this.props.user_id}/>, document.getElementById('root'));
	}
	
	logout()
	{
		ReactDOM.render(<Logout />, document.getElementById('root'));
	}
	
	edit_page()
	{
		ReactDOM.render(<EditDashboardPrivileges  user_id = {this.props.user_id} />, document.getElementById('root'));
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
						<button className="btn btn-info" onClick={this.approve_new_users}> Approve / Edit/ Delete a New Registered Managers </button>
						
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
						<br/>
						<br/>
						<button className="btn btn-info" onClick={this.approve_new_user_emp}> Approve / Edit/ Delete a New Registered Employees </button>
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