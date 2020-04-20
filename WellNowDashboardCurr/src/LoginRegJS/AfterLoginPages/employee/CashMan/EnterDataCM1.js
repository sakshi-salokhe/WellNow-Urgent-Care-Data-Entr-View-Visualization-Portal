import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"

import EnterDataCM from "./EnterDataCM"

class EnterDataCM1 extends Component
{
	constructor(props)
	{
		super(props);
		
		this.state = 
		{
			un_total : false,
			un_worked : false,
			dtr_tw : false,
			dtr_issuelog :false,
			prw_total : false,
			prw_worked : false,
			prw_left : false,
			ncoa_refund : false,
			ncoa_updates : false,
			ncoa_skiptrace : false,	
			
			un_total_val : this.props.data.un_total_PH,
			un_worked_val : this.props.data.un_worked_PH,
			dtr_tw_val : this.props.data.dtr_tw_PH,
			dtr_issuelog_val :this.props.data.dtr_issuelog_PH,
			prw_total_val : this.props.data.prw_total_PH,
			prw_worked_val : this.props.data.prw_worked_PH,
			prw_left_val : this.props.data.prw_left_PH,
			ncoa_refund_val : this.props.data.ncoa_refund_PH,
			ncoa_updates_val : this.props.data.ncoa_updates_PH,
			ncoa_skiptrace_val : this.props.data.ncoa_skiptrace_PH
		}
		
		if(this.props.data.un_total == 0)
		{
			this.state.un_total = false 
		}
		else
		{
			this.state.un_total = true
		}
		
		if(props.data.un_worked == 0)
		{
			this.state.un_worked = false 
		}
		else
		{
			this.state.un_worked = true
		}
		
		if(props.data.dtr_tw == 0)
		{
			this.state.dtr_tw = false 
		}
		else
		{
			this.state.dtr_tw = true
		}
		
		if(props.data.dtr_issuelog == 0)
		{
			this.state.dtr_issuelog = false 
		}
		else
		{
			this.state.dtr_issuelog = true
		}
		
		if(props.data.prw_total == 0)
		{
			this.state.prw_total = false 
		}
		else
		{
			this.state.prw_total = true
		}
		
		if(props.data.prw_worked == 0)
		{
			this.state.prw_worked = false 
		}
		else
		{
			this.state.prw_worked = true
		}
		
		if(props.data.prw_left == 0)
		{
			this.state.prw_left = false 
		}
		else
		{
			this.state.prw_left = true
		}
		
		if(props.data.ncoa_refund == 0)
		{
			this.state.ncoa_refund = false 
		}
		else
		{
			this.state.ncoa_refund = true
		}
		
		if(props.data.ncoa_updates == 0)
		{
			this.state.ncoa_updates = false 
		}
		else
		{
			this.state.ncoa_updates = true
		}
		
		if(props.data.ncoa_skiptrace == 0)
		{
			this.state.ncoa_skiptrace = false 
		}
		else
		{
			this.state.ncoa_skiptrace = true
		}
		
		this.onChange = this.onChange.bind(this)
		
		this.save = this.save.bind(this)
		this.cancel = this.cancel.bind(this)
	}
	
	onChange(e)
	{
		this.setState(
		{
			[e.target.name]: e.target.value
		})
	}
	
	
	save(event)
	{
		event.preventDefault();
		const obj = {
					userid : this.props.data.userid,
					un_total_val : this.state.un_total_val,
					un_worked_val : this.state.un_worked_val,
					dtr_tw_val : this.state.dtr_tw_val,
					dtr_issuelog_val : this.state.dtr_issuelog_val,
					prw_total_val : this.state.prw_total_val,
					prw_worked_val : this.state.prw_worked_val,
					prw_left_val : this.state.prw_left_val,
					ncoa_refund_val : this.state.ncoa_refund_val,
					ncoa_updates_val : this.state.ncoa_updates_val,
					ncoa_skiptrace_val : this.state.ncoa_skiptrace_val,
				};
		
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/check_cm1.php')
		.then(
			res => {
				
				if(res.data.ans_val == 1)//data exists already , perform update
				{
					
					axios.post('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/update_data_cm1.php', qs.stringify(obj))
					.then(res => 
						{
							
							if(res.data.entered == 1)
							{
								alert("Successfully entered your data.")
								ReactDOM.render(<EnterDataCM data = {{"userid":obj.userid}} />, document.getElementById('root'));
							}
							else
							{
								alert("There was some error. Please try again later.")
							}
						})
				}
				else //data exists already , perform update
				{
					axios.post('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/insert_data_cm1.php', qs.stringify(obj))
					.then(res => 
						{
							if(res.data.entered == 1)
							{
								alert("Successfully entered your data.")
								ReactDOM.render(<EnterDataCM data = {{"userid":obj.userid}} />, document.getElementById('root'));
							}
							else{
								alert("There was some error. Please try again later.")
							}
						})
				}
			})
		.catch(err => console.log(err))
		
	}
	
	cancel(event)
	{
		event.preventDefault();
		const obj = {
					userid : this.props.data.userid
		}
		ReactDOM.render(<EnterDataCM data = {{"userid":obj.userid}} />, document.getElementById('root'));
	}
	
	render()
	{
		var data = this.props.data;
		var user_id = this.props.data.userid;
		
		return (
			<div className = "container">
				<h3> Enter Data </h3>
				
				<form>
					<table className="table table-striped table-bordered" style={{marginTop: 20}}>
						<thead>
							<tr>
								<th> </th>
								<th colSpan="2"> Unapplied </th>
								<th colSpan="2"> Due To Refund </th>
								<th colSpan="3"> Patient Refund Workbasket </th>
								<th colSpan="3"> NCOA Refund /Thursdays ONLY </th>
							</tr>
							<tr>
								<th> Date</th>
								<th> Total  </th>
								<th> # worked </th>
								<th> Total Worked </th>
								<th> #added to issues log </th>
								<th> Total </th>
								<th> #worked </th>
								<th> #left </th>
								<th> # REFUNDS </th>
								<th> UPDATES </th>
								<th> SKIP TRACE </th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td> 
									{this.props.data.when_done}
								</td>
								<td> 
									<input className = "form-control" type = "number" placeholder = {this.props.data.un_total_PH} value = {this.state.un_total_val} name = "un_total_val" onChange = {this.onChange} disabled={this.state.un_total === true ? false : true} />
								</td>
								<td> 
									<input className = "form-control" type = "number" placeholder = {this.props.data.un_worked_PH} value = {this.state.un_worked_val} name = "un_worked_val" onChange = {this.onChange} disabled={this.state.un_worked === true ? false : true}/>
								</td>
								<td> 
									<input className = "form-control" type = "number" placeholder = {this.props.data.dtr_tw_PH} value = {this.state.dtr_tw_val} name = "dtr_tw_val" onChange = {this.onChange} disabled={this.state.dtr_tw === true ? false : true}/>
								</td>
								<td> 
									<input className = "form-control" type = "number" placeholder = {this.props.data.dtr_issuelog_PH} value = {this.state.dtr_issuelog_val} name = "dtr_issuelog_val" onChange = {this.onChange} disabled={this.state.dtr_issuelog === true ? false : true}/>
								</td>
								<td> 
									<input className = "form-control" type = "number" placeholder = {this.props.data.prw_total_PH} value = {this.state.prw_total_val} name = "prw_total_val" onChange = {this.onChange} disabled={this.state.prw_total === true ? false : true}/>
								</td>
								<td> 
									<input className = "form-control" type = "number" placeholder = {this.props.data.prw_worked_PH} value = {this.state.prw_worked_val} name = "prw_worked_val" onChange = {this.onChange} disabled={this.state.prw_worked === true ? false : true}/>
								</td>
								<td> 
									<input className = "form-control" type = "number" placeholder = {this.props.data.prw_left_PH} value = {this.state.prw_left_val} name = "prw_left_val" onChange = {this.onChange} disabled={this.state.prw_left === true ? false : true}/>
								</td>
								<td> 
									<input className = "form-control" type = "number" placeholder = {this.props.data.ncoa_refund_PH} value = {this.state.ncoa_refund_val} name = "ncoa_refund_val" onChange = {this.onChange} disabled={this.state.ncoa_refund === true ? false : true}/>
								</td>
								<td> 
									<input className = "form-control" type = "number" placeholder = {this.props.data.ncoa_updates_PH} value = {this.state.ncoa_updates_val} name = "ncoa_updates_val" onChange = {this.onChange} disabled={this.state.ncoa_updates === true ? false : true}/>
								</td>
								<td> 
									<input className = "form-control" type = "number" placeholder = {this.props.data.ncoa_skiptrace_PH} value = {this.state.ncoa_skiptrace_val} name = "ncoa_skiptrace_val" onChange = {this.onChange} disabled={this.state.ncoa_skiptrace === true ? false : true}/>
								</td>
							</tr>
						</tbody>
					</table>
					
					<div className="form-group">
						<div>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<button className="btn btn-info" onClick = {this.save}><b> Enter  </b></button>
							&nbsp;&nbsp;&nbsp;
							<button className="btn btn-warning" onClick = {this.cancel}> Cancel </button>
						</div>
						
					</div>
				</form>
			
			</div>
		)
	}
}

export default EnterDataCM1