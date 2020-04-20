import React, {Component} from "react"
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import ViewData from '../../ViewData';
import CM1_curr from './CM1_curr';
import CM2_curr from './CM2_curr';

class CMM_curr_data extends Component
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
		ReactDOM.render(<ViewData user_id = {obj.userid} />, document.getElementById('root'));
	}
	
	cm_refund_dash(props)
	{
		this.user_id = this.props.user_id;
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/enter_data_cm1_emp.php?userid='+this.user_id)
		.then(
			res => {
				ReactDOM.render(<CM1_curr user_id = {this.user_id} />, document.getElementById('root'));
			})
		.catch(err => console.log(err))
	}
	
	judy_dash(props)
	{
		this.user_id = this.props.user_id;
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/enter_data_cm2_emp.php?userid='+this.user_id)
		.then(
			res => {
				ReactDOM.render(<CM2_curr user_id = {this.user_id} />, document.getElementById('root'));
			})
		.catch(err => console.log(err))
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
						<button className = "btn btn-warning" onClick = {this.cm_refund_dash}> View Today&#39;s Data for CM-REFUNDDASH </button>
						<br />
						<br />
						<button className = "btn btn-primary" onClick = {this.judy_dash} > View Today&#39;s Data for JUDY DASH </button>
					</div>
					
					<div className = "col-lg-4 col-md-4 col-sm-4 col-xs-4">
					</div>
					
					<div className = "col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>
				</div>	
			</div>

		)
	}
		
}

export default CMM_curr_data