import React, {Component} from "react"
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import moment from 'moment'

import ViewData from '../../ViewData';
import CM1_prev from './CM1_prev';
import CM2_prev from './CM2_prev';

class CMM_prev_data extends Component
{
		
	constructor(props) //props to be used when get method for db
	{
		super(props)
		
		this.state = 
		{
			user_id : "",
			startdate : "",
			enddate : "",
			dash_id : ""
		}
		
		this.onchange = this.onchange.bind(this);
		this.back = this.back.bind(this);
		this.cm_refund_dash = this.cm_refund_dash.bind(this);
		this.judy_dash = this.judy_dash.bind(this);
	}
	
	onchange(e)
	{
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	
	back(event)
	{
		event.preventDefault();
		const obj = {
					userid : this.props.user_id
		}
		ReactDOM.render(<ViewData user_id = {obj.userid} />, document.getElementById('root'));
	}
	
	cm_refund_dash(event)
	{
		event.preventDefault();
		const obj = {
					startdate : this.state.startdate,
					enddate : this.state.enddate,
					user_id : this.props.user_id
				};
		console.log(obj);
		if(obj.startdate.length == 0 || obj.enddate.length == 0)
		{
			alert("Fill out all the fields!")
		}
		else
		{
			axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_dash_id.php?user_id='+obj.user_id)
			.then(resp => {
				axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_prev_data_emp_cm1.php?startdate='+obj.startdate+'&enddate='+obj.enddate+'&user_id='+obj.user_id)
				.then(resp1 => {
					ReactDOM.render(<CM1_prev data = {resp1.data} user_id = {obj.user_id} />, document.getElementById('root'));
				})
			})
		}			
	}
	
	judy_dash(event)
	{
		event.preventDefault();
		const obj = {
					startdate : this.state.startdate,
					enddate : this.state.enddate,
					user_id : this.props.user_id
				};
		console.log(obj);
		if(obj.startdate.length == 0 || obj.enddate.length == 0)
		{
			alert("Fill out all the fields!")
		}
		else
		{
			axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_dash_id.php?user_id='+obj.user_id)
			.then(resp => {
				axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_prev_data_emp_cm2.php?startdate='+obj.startdate+'&enddate='+obj.enddate+'&user_id='+obj.user_id)
				.then(resp1 => {
					ReactDOM.render(<CM2_prev data = {resp1.data} user_id = {obj.user_id} />, document.getElementById('root'));
				})
			})
		}
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
				
				<form className="form-horizontal">
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> Start Date: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "date" max={moment().format("YYYY-MM-DD")} value = {this.state.startdate} name = "startdate" onChange = {this.onchange} /> 
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> End Date: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "date" min={this.state.startdate} max={moment().format("YYYY-MM-DD")} value = {this.state.enddate} name = "enddate" onChange = {this.onchange} /> 
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
					</div>

					
					<div className="form-group">
						<div className="col-lg-10 col-sm-10 col-md-10 col-xs-10">
							<button type="button" className="btn btn-warning" onClick={this.cm_refund_dash}> View Previous Data for CM-REFUNDDASH </button>
							&nbsp;&nbsp;&nbsp;
							<button type="button" className="btn btn-primary" onClick={this.judy_dash}> View Previous Data for JUDY DASH </button>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
				</form>
			</div>

		)
	}
		
}

export default CMM_prev_data