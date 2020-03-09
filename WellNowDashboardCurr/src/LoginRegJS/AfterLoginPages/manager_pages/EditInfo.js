import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom";

import IndexHeader from "../../../IndexHeader"
import ApproveNewUsers from "./ApproveNewUsers"

class EditInfo extends Component
{
	constructor(props)
	{
		super(props)
		this.state = 
		{
			email : "",
			fullname : "",
			dashboards : "",
			isManager : ""
		}
		
		this.onchangeemail = this.onchangeemail.bind(this);
		this.onchangefullname = this.onchangefullname.bind(this);
		this.onchangedashboards = this.onchangedashboards.bind(this);
		this.onchangeisManager = this.onchangeisManager.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		//this.cancel = this.cancel.bind(this);
	}
	
	componentDidMount()
	{
	this.setState({
		email : this.props.userid.email,
		fullname : this.props.userid.fullname,
		dashboards : this.props.userid.dashboard,
		isManager : this.props.userid.isManager
	})
	}
	
	onchangeemail(e)
	{
		this.setState({
			email: e.target.value
		});
	}
	
	onchangefullname(e)
	{
		this.setState({
			fullname: e.target.value
		});
	}
	
	onchangedashboards(e)
	{
		this.setState({
			dashboards: e.target.value
		});
	}
	
	onchangeisManager(e)
	{
		this.setState({
			isManager: e.target.value
		});
	}
	
	handleSubmit(event)
	{
		event.preventDefault();
		const obj = {
					userid : this.props.userid.userid,
					email : this.state.email,
					fullname : this.state.fullname,
					dashboards: this.state.dashboards,
					isManager: this.state.isManager,
				};
		if(obj.fullname.length === 0 || obj.dashboards.length === 0 || obj.email.length === 0 || obj.isManager.length === 0)
		{
			alert("Fill out all the fields!")
		}
		else
		{
			axios.post('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/update_after_editing.php', qs.stringify(obj))
			.then(res => 
			{
				console.log(res.data);	
				if(res.data.done === 1)
				{
					alert("Successfully updated user information.");
					ReactDOM.render(<ApproveNewUsers />, document.getElementById('root'));
				}
				else
				{
					alert("sorry! Something went wrong!");
					ReactDOM.render(<ApproveNewUsers />, document.getElementById('root'));
				}
			});
		}
	}
	
	cancel()
	{
		ReactDOM.render(<ApproveNewUsers />, document.getElementById('root'));
	}
	
	render()
	{
		console.log("editing",this.props);
		return (
			<div className = "container">
					<div>
						<IndexHeader />
					</div>
					
					
					<form>
						<div className="form-group">
							<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> Email: </b></div>
							
							<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
								<input className = "form-control" type = "email" value = {this.state.email} name = "email" placeholder = {this.props.userid.email} onChange = {this.onchangeemail} />
							</div>
							
							<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
							
						</div>
						
						<div className="form-group">
							<div className="control-label col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> Full Name: </b></div>
							
							<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
								<input className = "form-control" type = "text" value = {this.state.fullname} name = "fullname" placeholder = {this.props.userid.fullname} onChange = {this.onchangefullname} />
							</div>
							
							<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						</div>
						
						
						<div className="form-group">
							<div className="col-lg-3 col-sm-3 col-md-3 col-xs-3"><b> Choose your dashboard: </b></div>
							
							<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
								<select className = "form-control" value = {this.state.dashboards} name = "dashboards" onChange = {this.onchangedashboards} placeholder = {this.props.userid.dash_name}>
									<option value="">--Please Choose your dashboard -- </option>
									<option value="1"> AR Dashboard </option>
									<option value="2"> OS Dashboard </option>
									<option value="3"> OM Dashboard </option>
									<option value="4"> Patient Support Task Log </option>
									<option value="5"> Manager </option>
								</select>
							</div>
							
							<div className="col-lg-1 col-sm-1 col-md-1 col-xs-1"> </div>
						</div>
						<div className="form-group">
							<div className="col-lg-3 col-sm-3 col-md-3 col-xs-3"><b> Is he/she a Manager? </b></div>
							
							<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
								<select className = "form-control" value = {this.state.isManager} name = "isManager" onChange = {this.onchangeisManager} placeholder = {this.props.userid.isManager}>
									<option value="">--Please Choose your dashboard -- </option>
									<option value="1"> Yes </option>
									<option value="0"> No </option>
									
								</select>
							</div>
							
							<div className="col-lg-1 col-sm-1 col-md-1 col-xs-1"> </div>
						</div>
						<br />
						
						&nbsp;&nbsp;&nbsp;<button className="btn btn-info" onClick={this.handleSubmit}> Save </button>&nbsp;&nbsp;<button className="btn btn-warning" onClick={this.cancel}> Cancel </button>
					</form>
			
				</div>
		)
	}
}

export default EditInfo