import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"


class ActiveEmpList extends Component
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			redirect: false
		};
		
		this.delete_user = this.delete_user.bind(this);
		this.make_user_inactive = this.make_user_inactive.bind(this);
	}
	
	delete_user()
	{
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/delete_user_permanently.php?userid='+this.props.obj.userid)
		.then(
			this.setState({ redirect: true })
		)
		.catch(err => console.log(err))

	}
	
	make_user_inactive()
	{
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/make_user_inactive.php?userid='+this.props.obj.userid)
		.then(
			this.setState({ redirect: true })
		)
		.catch(err => console.log(err))

	}
	
	
	
	
	render()
	{
		const { redirect } = this.state;
		console.log("redirecting to delete existing user suppervisor:", this.props.obj.$supervisor_id);
		if(redirect)
		{
			return (
			<Router>
			
				<Route>
					<Redirect to='DeleteExistingUsers' user_id = {this.props.obj.$supervisor_id}/>
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
						<button className="btn btn-warning" onClick = {this.make_user_inactive}> Make User Inactive </button>
					</td>
					<td>
						<button className="btn btn-secondary" onClick={this.delete_user}> Delete </button>
					</td>
					
				</tr>

		);
	}
}

export default ActiveEmpList