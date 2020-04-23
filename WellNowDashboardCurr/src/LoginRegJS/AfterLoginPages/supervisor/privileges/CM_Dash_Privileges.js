import React, {Component} from "react"
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import SupervisorLogInPage from '../../SupervisorLogInPage';
import CM1_Dash_Privileges from './CM1_Dash_Privileges';
import CM2_Dash_Privileges from './CM2_Dash_Privileges';

class CM_Dash_Privileges extends Component
{
		
	constructor(props) //props to be used when get method for db
	{
		super(props)
		
		this.state = 
		{
			user_id : ""
		}
		
		this.back = this.back.bind(this);
		this.cm_refund_dash = this.cm_refund_dash.bind(this);
		this.judy_dash = this.judy_dash.bind(this);
	}
	
	back(event)
	{
		event.preventDefault();
		const obj = {
					userid : this.props.user_id
		}
		ReactDOM.render(<SupervisorLogInPage user_id = {obj.userid} />, document.getElementById('root'));
	}
	
	cm_refund_dash(props)
	{
		this.user_id = this.props.user_id;
		ReactDOM.render(<CM1_Dash_Privileges user_id = {this.user_id} />, document.getElementById('root'));
	}
	
	judy_dash(props)
	{
		this.user_id = this.props.user_id;
		ReactDOM.render(<CM2_Dash_Privileges user_id = {this.user_id} />, document.getElementById('root'));
	}
	
	
	render()
	{
		var user_id = this.props.user_id;
		
		return (
			
			<div className = "container">
				<br />
				<br />
				<br />
				<h3> Choose the correct Cash Mail Management Dashboard from below: </h3>
				
				<br />
				<br />
				<div className= "row">	
					<div className = "col-lg-5 col-md-5 col-sm-5 col-xs-5">
						
					</div>
					
					<div className = "col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>
					
					<div className = "col-lg-4 col-md-4 col-sm-4 col-xs-4">
						<button className = "btn btn-info" onClick = {this.back} > Back </button>
					</div>
				</div>	
				
				<br />
				<br />
				
				<div className= "row">	
					<div className = "col-lg-5 col-md-5 col-sm-5 col-xs-5">
						<button className = "btn btn-warning" onClick = {this.cm_refund_dash}> Set privileges for CM-REFUNDDASH </button>
						<br />
						<br />
						<button className = "btn btn-primary" onClick = {this.judy_dash} > Set privileges for JUDY DASH </button>
					</div>
					
					<div className = "col-lg-4 col-md-4 col-sm-4 col-xs-4">
					</div>
					
					<div className = "col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>
				</div>	
			</div>

		)
	}
		
}

export default CM_Dash_Privileges