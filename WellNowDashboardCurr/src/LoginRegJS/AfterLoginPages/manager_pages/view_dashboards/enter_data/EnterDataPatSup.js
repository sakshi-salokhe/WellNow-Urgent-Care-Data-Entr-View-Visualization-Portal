import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"

import EnterData from "../EnterData"

class EnterDataPatSup extends Component
{
	
	constructor(props)
	{
		super(props);
		
		this.state = 
		{
			saf_mvp_sod : false,
			saf_inval_addr_sod : false,
			ash_attachments_sod : false,
			ash_wc_mailing_sod : false,
			ash_wc_deleted_sod : false,
			ash_acc_type_sod : false,
			ash_last_addr_sod : false,
			bailey_indep_health_sod : false,
			bailey_bcbs_sod : false,
			bailey_emails_sod : false,
			justin_ndc_num_sod : false,
			justin_medicare_loc_sod: false,
			justin_medicare_sec_sod: false,		
			
			saf_mvp_sod_val : this.props.data.saf_mvp_sod_PH,
			saf_inval_addr_sod_val : this.props.data.saf_inval_addr_sod_PH,
			ash_attachments_sod_val : this.props.data.ash_attachments_sod_PH,
			ash_wc_mailing_sod_val : this.props.data.ash_wc_mailing_sod_PH,
			ash_wc_deleted_sod_val : this.props.data.ash_wc_deleted_sod_PH,
			ash_acc_type_sod_val : this.props.data.ash_acc_type_sod_PH,
			ash_last_addr_sod_val : this.props.data.ash_last_addr_sod_PH,
			bailey_indep_health_sod_val : this.props.data.bailey_indep_health_sod_PH,
			bailey_bcbs_sod_val : this.props.data.bailey_bcbs_sod_PH,
			bailey_emails_sod_val : this.props.data.bailey_emails_sod_PH,
			justin_ndc_num_sod_val : this.props.data.justin_ndc_num_sod_PH,
			justin_medicare_loc_sod_val : this.props.data.justin_medicare_loc_sod_PH,
			justin_medicare_sec_sod_val : this.props.data.justin_medicare_sec_sod_PH,
			
		}
		
		if(this.props.data.saf_mvp_sod == 0)
		{
			this.state.saf_mvp_sod = false 
		}
		else
		{
			this.state.saf_mvp_sod = true
		}
		
		if(this.props.data.saf_inval_addr_sod == 0)
		{
			this.state.saf_inval_addr_sod = false 
		}
		else
		{
			this.state.saf_inval_addr_sod = true
		}
		
		if(this.props.data.ash_attachments_sod == 0)
		{
			this.state.ash_attachments_sod = false 
		}
		else
		{
			this.state.ash_attachments_sod = true
		}
		
		if(this.props.data.ash_wc_mailing_sod == 0)
		{
			this.state.ash_wc_mailing_sod = false 
		}
		else
		{
			this.state.ash_wc_mailing_sod = true
		}
		
		if(this.props.data.ash_wc_deleted_sod == 0)
		{
			this.state.ash_wc_deleted_sod = false 
		}
		else
		{
			this.state.ash_wc_deleted_sod = true
		}
		
		if(this.props.data.ash_acc_type_sod == 0)
		{
			this.state.ash_acc_type_sod = false 
		}
		else
		{
			this.state.ash_acc_type_sod = true
		}
		
		if(this.props.data.ash_last_addr_sod == 0)
		{
			this.state.ash_last_addr_sod = false 
		}
		else
		{
			this.state.ash_last_addr_sod = true
		}
		
		if(this.props.data.bailey_indep_health_sod == 0)
		{
			this.state.bailey_indep_health_sod = false 
		}
		else
		{
			this.state.bailey_indep_health_sod = true
		}
		
		if(this.props.data.bailey_bcbs_sod == 0)
		{
			this.state.bailey_bcbs_sod = false 
		}
		else
		{
			this.state.bailey_bcbs_sod = true
		}
		
		if(this.props.data.bailey_emails_sod == 0)
		{
			this.state.bailey_emails_sod = false 
		}
		else
		{
			this.state.bailey_emails_sod = true
		}
		
		if(this.props.data.justin_ndc_num_sod == 0)
		{
			this.state.justin_ndc_num_sod = false 
		}
		else
		{
			this.state.justin_ndc_num_sod = true
		}
		
		if(this.props.data.justin_medicare_loc_sod == 0)
		{
			this.state.justin_medicare_loc_sod = false 
		}
		else
		{
			this.state.justin_medicare_loc_sod = true
		}
		
		if(this.props.data.justin_medicare_sec_sod == 0)
		{
			this.state.justin_medicare_sec_sod = false 
		}
		else
		{
			this.state.justin_medicare_sec_sod = true
		}
		
		this.onchange = this.onchange.bind(this)
		
		this.save = this.save.bind(this)
		this.cancel = this.cancel.bind(this)
	
	}
	
	onchange(e)
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
					saf_mvp_sod_val : this.state.saf_mvp_sod_val,
					saf_inval_addr_sod_val : this.state.saf_inval_addr_sod_val,
					ash_attachments_sod_val : this.state.ash_attachments_sod_val,
					ash_wc_mailing_sod_val : this.state.ash_wc_mailing_sod_val,
					ash_wc_deleted_sod_val : this.state.ash_wc_deleted_sod_val,
					ash_acc_type_sod_val : this.state.ash_acc_type_sod_val,
					ash_last_addr_sod_val : this.state.ash_last_addr_sod_val,
					bailey_indep_health_sod_val : this.state.bailey_indep_health_sod_val,
					bailey_bcbs_sod_val : this.state.bailey_bcbs_sod_val,
					bailey_emails_sod_val : this.state.bailey_emails_sod_val,
					justin_ndc_num_sod_val : this.state.justin_ndc_num_sod_val,
					justin_medicare_loc_sod_val : this.state.justin_medicare_loc_sod_val,
					justin_medicare_sec_sod_val : this.state.justin_medicare_sec_sod_val,
				};
		console.log(obj);
		
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/check_patsup.php')
		.then(
			res => {
				//console.log(res.data);
				if(res.data.ans_val == 1)//data exists already , perform update
				{
					console.log("we will update");
					//console.log("obj=",obj);
					axios.post('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/update_data_patsup.php', qs.stringify(obj))
					.then(res => 
						{
							console.log(res.data);
							if(res.data.entered == 1)
							{
								alert("Successfully entered your data.")
								ReactDOM.render(<EnterData />, document.getElementById('root'));
							}
							else
							{
								alert("There was some error. Please try again later.")
							}
						})
				}
				else //data exists already , perform update
				{
					console.log("we will insert");
					axios.post('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/insert_data_patsup.php', qs.stringify(obj))
					.then(res => 
						{
							console.log(res.data);
							if(res.data.entered == 1)
							{
								alert("Successfully entered your data.")
								ReactDOM.render(<EnterData />, document.getElementById('root'));
							}
							else{
								alert("There was some error. Please try again later.")
							}
						})
				}
			})
		.catch(err => console.log(err))
		
	}
	
	cancel()
	{
		ReactDOM.render(<EnterData />, document.getElementById('root'));
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
								<th colSpan="2"> Safiyyah </th>
								<th colSpan="5"> Ashley Standish </th>
								<th colSpan="3"> Bailea </th>
								<th colSpan="3"> Justin </th>
							</tr>
							<tr>
								<th> Date</th>
								<th> MVP </th>
								<th> Invalid Address (oldest date open) </th>
								<th> Attachments </th>
								<th> WC Mailing (yes/no) </th>
								<th> WC deleted claims to archived (yes/no) </th>
								<th> Accident Type (WC/NF) (yes/no) </th>
								<th> Last Address given Worked (last date finished) </th>
								<th> Indep Health </th>
								<th> BCBS of WNY </th>
								<th> Emails </th>
								<th> NDC Numbers </th>
								<th> Medicare Facility Location </th>
								<th> Medicare Secondary to be original </th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td> 
									{this.props.data.when_done}
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.saf_mvp_sod_PH} value = {this.state.saf_mvp_sod_val} name = "saf_mvp_sod_val" onChange = {this.onchange} disabled={this.state.saf_mvp_sod === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "date" placeholder = {this.props.data.saf_inval_addr_sod_PH} value = {this.state.saf_inval_addr_sod_val} name = "saf_inval_addr_sod_val" onChange = {this.onchange} disabled={this.state.saf_inval_addr_sod === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.ash_attachments_sod_PH} value = {this.state.ash_attachments_sod_val} name = "ash_attachments_sod_val" onChange = {this.onchange} disabled={this.state.ash_attachments_sod === true ? false : true}/>
								</td>
								<td>
									<select className = "form-control" value = {this.state.ash_wc_mailing_sod_val} name = "ash_wc_mailing_sod_val" onChange = {this.onchange} placeholder = {this.props.data.ash_wc_mailing_sod_PH} disabled={this.state.ash_wc_mailing_sod === true ? false : true}>
										<option value="">--Choose value -- </option>
										<option value="yes"> Yes </option>
										<option value="no"> No </option>
									</select>
								</td>
								<td>
									<select className = "form-control" value = {this.state.ash_wc_deleted_sod_val} name = "ash_wc_deleted_sod_val" onChange = {this.onchange} placeholder = {this.props.data.ash_wc_deleted_sod_PH} disabled={this.state.ash_wc_deleted_sod === true ? false : true}>
										<option value="">--Choose value -- </option>
										<option value="yes"> Yes </option>
										<option value="no"> No </option>
									</select>
								</td>
								<td>
									<select className = "form-control" value = {this.state.ash_acc_type_sod_val} name = "ash_acc_type_sod_val" onChange = {this.onchange} placeholder = {this.props.data.ash_acc_type_sod_PH} disabled={this.state.ash_acc_type_sod === true ? false : true}>
										<option value="">--Choose value -- </option>
										<option value="yes"> Yes </option>
										<option value="no"> No </option>
									</select>
								</td>
								<td>
									<input className = "form-control" type = "date" placeholder = {this.props.data.ash_last_addr_sod_PH} value = {this.state.ash_last_addr_sod_val} name = "ash_last_addr_sod_val" onChange = {this.onchange} disabled={this.state.ash_last_addr_sod === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.bailey_indep_health_sod_PH} value = {this.state.bailey_indep_health_sod_val} name = "bailey_indep_health_sod_val" onChange = {this.onchange} disabled={this.state.bailey_indep_health_sod === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.bailey_bcbs_sod_PH} value = {this.state.bailey_bcbs_sod_val} name = "bailey_bcbs_sod_val" onChange = {this.onchange} disabled={this.state.bailey_bcbs_sod === true ? false : true}/>
								</td>	
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.bailey_emails_sod_PH} value = {this.state.bailey_emails_sod_val} name = "bailey_emails_sod_val" onChange = {this.onchange} disabled={this.state.bailey_emails_sod === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.justin_ndc_num_sod_PH} value = {this.state.justin_ndc_num_sod_val} name = "justin_ndc_num_sod_val" onChange = {this.onchange} disabled={this.state.justin_ndc_num_sod === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.justin_medicare_loc_sod_PH} value = {this.state.justin_medicare_loc_sod_val} name = "justin_medicare_loc_sod_val" onChange = {this.onchange} disabled={this.state.justin_medicare_loc_sod === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.justin_medicare_sec_sod_PH} value = {this.state.justin_medicare_sec_sod_val} name = "justin_medicare_sec_sod_val" onChange = {this.onchange} disabled={this.state.justin_medicare_sec_sod === true ? false : true}/>
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

export default EnterDataPatSup