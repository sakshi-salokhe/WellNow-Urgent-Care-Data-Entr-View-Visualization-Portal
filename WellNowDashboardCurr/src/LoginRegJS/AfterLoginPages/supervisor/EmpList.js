import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"

import EditInfo from "./EditInfo"
import ApproveNewUsersSuper from "./ApproveNewUsersSuper"

class EmpList extends Component
{
	constructor(props)
	{
		super(props);
		this.delete_user = this.delete_user.bind(this);
		this.approve_user = this.approve_user.bind(this);
		this.edit_user = this.edit_user.bind(this);
		this.state = {
			email : "",
			fullname : "",
			redirect: false
		}
		
	}

	
	delete_user()
	{
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/delete_user.php?userid='+this.props.obj.userid)
		.then(
			this.setState({ redirect: true })
		)
		.catch(err => console.log(err))

	}
	
	approve_user()
	{
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/approve_finally.php?userid='+this.props.obj.userid)
		.then(
			res => {
				console.log(res.data);
				this.setState({ redirect: true });
		})
		.catch(err => console.log(err))
	}
	
	edit_user()
	{
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_details_for_editing_sup.php?userid='+this.props.obj.userid+'&supervisor_id='+this.props.obj.supervisor_id)
		.then(
			res => {
				ReactDOM.render(<EditInfo userid = {res.data} />, document.getElementById('root'));
			})
		.catch(err => console.log(err))
	}
	
	render()
	{
		const { redirect } = this.state;
		
		if(redirect)
		{
			return (
			<Router>
			
				<Route>
					<Redirect to='ApproveNewUsersSuper' user_id = {this.props.obj.supervisor_id}/>
				</Route>
			</Router>)
		}
		
		return (
				<tr>
					<td>
						{this.props.obj.$email1}
					</td>
					<td>
						{this.props.obj.$fullname1}
					</td>
					<td>
						{this.props.obj.$dashboards1}
					</td>
					<td>
						<button className="btn btn-info" onClick = {this.edit_user}>Edit </button>
					</td>
					<td>
						<button className="btn btn-warning" onClick = {this.approve_user}> Approve </button>
					</td>
					<td>
						<button className="btn btn-danger" onClick={this.delete_user}> Delete </button>
					</td>
				</tr>

		);
	}
}
export default EmpList