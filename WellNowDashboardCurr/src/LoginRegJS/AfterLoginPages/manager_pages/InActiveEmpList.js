import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"


class InActiveEmpList extends Component
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			redirect: false
		};
		
		this.make_user_active = this.make_user_active.bind(this);
	}
	
	
	make_user_active()
	{
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/make_user_active.php?userid='+this.props.obj.userid)
		.then(
			this.setState({ redirect: true })
		)
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
					<Redirect to='ActivateUsers' />
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
						<button className="btn btn-warning" onClick = {this.make_user_active}> Activate User </button>
					</td>
					
				</tr>

		);
	}
}

export default InActiveEmpList