import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"

import EnterData from "../EnterData"

class EnterDataOM extends Component
{
	
	constructor(props)
	{
		super(props);
		
		this.state = 
		{
			support_sp : false,	
			support_enl : false,	
			support_dnu : false,	
			support_nyucp : false,	
			support_nom : false,	
			support_emails : false,	
			support_deposit_pulls : false,	
			support_blank_batch_corres : false,	
			support_correspondence : false,	
			support_acct_audits : false,	
			support_inv_correct : false,	
			support_phone : false,	
			support_inv_addr : false,	
			support_collects : false,	
			suport_medical_records : false,	
			coding_na : false,	
			coding_on_holds : false,	
			coding_coding_queue : false,	
			coding_onsites : false,	
			coding_ooa : false,	
			ar120 : false,	
			ar_120percent : false,	
			ar_90 : false,	
			ar_voicemails : false,	
			ar_unapplied : false,	
			ar_audit : false,	
			ar_wbs : false,	
			
			support_sp_val : this.props.data.support_sp_PH,	
			support_enl_val : this.props.data.support_enl_PH,	
			support_dnu_val : this.props.data.support_dnu_PH,	
			support_nyucp_val : this.props.data.support_nyucp_PH,	
			support_nom_val : this.props.data.support_nom_PH,	
			support_emails_val : this.props.data.support_emails_PH,	
			support_deposit_pulls_val : this.props.data.support_deposit_pulls_PH,	
			support_blank_batch_corres_val : this.props.data.support_blank_batch_corres_PH,	
			support_correspondence_val : this.props.data.support_correspondence_PH,	
			support_acct_audits_val : this.props.data.support_acct_audits_PH,	
			support_inv_correct_val : this.props.data.support_inv_correct_PH,	
			support_phone_val : this.props.data.support_phone_PH,	
			support_inv_addr_val : this.props.data.support_inv_addr_PH,	
			support_collects_val : this.props.data.support_collects_PH,	
			suport_medical_records_val : this.props.data.suport_medical_records_PH,	
			
			coding_na_val : this.props.data.coding_na_PH,	
			coding_on_holds_val : this.props.data.coding_on_holds_PH,	
			coding_coding_queue_val : this.props.data.coding_coding_queue_PH,	
			coding_onsites_val : this.props.data.coding_onsites_PH,	
			coding_ooa_val : this.props.data.coding_ooa_PH,	
			
			ar120_val : this.props.data.ar120_PH,	
			ar_120percent_val : this.props.data.ar_120percent_PH,	
			ar_90_val : this.props.data.ar_90_PH,	
			ar_voicemails_val : this.props.data.ar_voicemails_PH,	
			ar_unapplied_val : this.props.data.ar_unapplied_PH,	
			ar_audit_val : this.props.data.ar_audit_PH,	
			ar_wbs_val : this.props.data.ar_wbs_PH,
			
		}
		
		if(this.props.data.support_sp == 0)
		{
			this.state.support_sp = false 
		}
		else
		{
			this.state.support_sp = true
		}
		
		if(props.data.support_enl == 0)
		{
			this.state.support_enl = false 
		}
		else
		{
			this.state.support_enl = true
		}
		
		if(props.data.support_dnu == 0)
		{
			this.state.support_dnu = false 
		}
		else
		{
			this.state.support_dnu = true
		}
		
		if(props.data.support_nyucp == 0)
		{
			this.state.support_nyucp = false 
		}
		else
		{
			this.state.support_nyucp = true
		}
		
		if(props.data.support_nom == 0)
		{
			this.state.support_nom = false 
		}
		else
		{
			this.state.support_nom = true
		}
		
		if(props.data.support_emails == 0)
		{
			this.state.support_emails = false 
		}
		else
		{
			this.state.support_emails = true
		}
		
		if(props.data.support_deposit_pulls == 0)
		{
			this.state.support_deposit_pulls = false 
		}
		else
		{
			this.state.support_deposit_pulls = true
		}
		
		if(props.data.support_blank_batch_corres == 0)
		{
			this.state.support_blank_batch_corres = false 
		}
		else
		{
			this.state.support_blank_batch_corres = true
		}
		
		if(props.data.support_correspondence == 0)
		{
			this.state.support_correspondence = false 
		}
		else
		{
			this.state.support_correspondence = true
		}
		
		if(props.data.support_acct_audits == 0)
		{
			this.state.support_acct_audits = false 
		}
		else
		{
			this.state.support_acct_audits = true
		}
		
		if(props.data.support_inv_correct == 0)
		{
			this.state.support_inv_correct = false 
		}
		else
		{
			this.state.support_inv_correct = true
		}
		
		if(props.data.support_phone == 0)
		{
			this.state.support_phone = false 
		}
		else
		{
			this.state.support_phone = true
		}
		
		if(props.data.support_inv_addr == 0)
		{
			this.state.support_inv_addr = false 
		}
		else
		{
			this.state.support_inv_addr = true
		}
		
		if(props.data.support_collects == 0)
		{
			this.state.support_collects = false 
		}
		else
		{
			this.state.support_collects = true
		}
		
		if(props.data.suport_medical_records == 0)
		{
			this.state.suport_medical_records = false 
		}
		else
		{
			this.state.suport_medical_records = true
		}
		
		if(props.data.coding_na == 0)
		{
			this.state.coding_na = false 
		}
		else
		{
			this.state.coding_na = true
		}
		
		if(props.data.coding_on_holds == 0)
		{
			this.state.coding_on_holds = false 
		}
		else
		{
			this.state.coding_on_holds = true
		}
		
		if(props.data.coding_coding_queue == 0)
		{
			this.state.coding_coding_queue = false 
		}
		else
		{
			this.state.coding_coding_queue = true
		}
		
		if(props.data.coding_onsites == 0)
		{
			this.state.coding_onsites = false 
		}
		else
		{
			this.state.coding_onsites = true
		}
		
		if(props.data.coding_ooa == 0)
		{
			this.state.coding_ooa = false 
		}
		else
		{
			this.state.coding_ooa = true
		}
		
		if(props.data.ar120 == 0)
		{
			this.state.ar120 = false 
		}
		else
		{
			this.state.ar120 = true
		}
		
		if(props.data.ar_120percent == 0)
		{
			this.state.ar_120percent = false 
		}
		else
		{
			this.state.ar_120percent = true
		}
		
		if(props.data.ar_90 == 0)
		{
			this.state.ar_90 = false 
		}
		else
		{
			this.state.ar_90 = true
		}
		
		if(props.data.ar_voicemails == 0)
		{
			this.state.ar_voicemails = false 
		}
		else
		{
			this.state.ar_voicemails = true
		}
		
		if(props.data.ar_unapplied == 0)
		{
			this.state.ar_unapplied = false 
		}
		else
		{
			this.state.ar_unapplied = true
		}
		
		if(props.data.ar_audit == 0)
		{
			this.state.ar_audit = false 
		}
		else
		{
			this.state.ar_audit = true
		}
		
		if(props.data.ar_wbs == 0)
		{
			this.state.ar_wbs = false 
		}
		else
		{
			this.state.ar_wbs = true
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
					support_sp_val : this.state.support_sp_val,	
					support_enl_val : this.state.support_enl_val,	
					support_dnu_val : this.state.support_dnu_val,	
					support_nyucp_val : this.state.support_nyucp_val,	
					support_nom_val : this.state.support_nom_val,	
					support_emails_val : this.state.support_emails_val,	
					support_deposit_pulls_val : this.state.support_deposit_pulls_val,	
					support_blank_batch_corres_val : this.state.support_blank_batch_corres_val,	
					support_correspondence_val : this.state.support_correspondence_val,	
					support_acct_audits_val : this.state.support_acct_audits_val,	
					support_inv_correct_val : this.state.support_inv_correct_val,	
					support_phone_val : this.state.support_phone_val,	
					support_inv_addr_val : this.state.support_inv_addr_val,	
					support_collects_val : this.state.support_collects_val,	
					suport_medical_records_val : this.state.suport_medical_records_val,	
					
					coding_na_val : this.state.coding_na_val,	
					coding_on_holds_val : this.state.coding_on_holds_val,	
					coding_coding_queue_val : this.state.coding_coding_queue_val,	
					coding_onsites_val : this.state.coding_onsites_val,	
					coding_ooa_val : this.state.coding_ooa_val,	
					
					ar120_val : this.state.ar120_val,	
					ar_120percent_val : this.state.ar_120percent_val,	
					ar_90_val : this.state.ar_90_val,	
					ar_voicemails_val : this.state.ar_voicemails_val,	
					ar_unapplied_val : this.state.ar_unapplied_val,	
					ar_audit_val : this.state.ar_audit_val,	
					ar_wbs_val : this.state.ar_wbs_val,
				};
		
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/check_om.php')
		.then(
			res => {
				if(res.data.ans_val == 1)//data exists already , perform update
				{
					axios.post('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/update_data_om.php', qs.stringify(obj))
					.then(res => 
						{
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
					axios.post('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/insert_data_om.php', qs.stringify(obj))
					.then(res => 
						{
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
			<div className = "container-fluid">
				<h2> Enter Data : {this.props.data.when_done}</h2>
				<br />
				<form>
					<table className="table table-striped table-bordered" style={{marginTop: 20}}>
						<thead>
							<tr>
								<th colSpan="15"> Support </th>
							</tr>
							<tr>
								<th> SP </th>
								<th> ENL </th>
								<th> DNU </th>
								<th> NYUCP </th>
								<th> NOM </th>
								<th> EMAILS </th>
								<th> DEPOSIT PULLS </th>
								<th> BLANK BATCH CORRES </th>
								<th> CORRESPON - DENCE </th>
								<th> ACCT AUDITS </th>
								<th> INV CORRECT </th>
								<th> PHONE </th>
								<th> INV ADDR </th>
								<th> COLLECTS </th>
								<th> MEDICAL RECORDS </th>
							</tr>
						</thead>
						<tbody>
							<tr> 
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.support_sp_PH} value = {this.state.support_sp_val == null ? null : this.state.support_sp_val} name = "support_sp_val" onChange = {this.onChange} disabled={this.state.support_sp === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.support_enl_PH} value = {this.state.support_enl_val == null ? null : this.state.support_enl_val} name = "support_enl_val" onChange = {this.onChange} disabled={this.state.support_enl === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.support_dnu_PH} value = {this.state.support_dnu_val == null ? null : this.state.support_dnu_val} name = "support_dnu_val" onChange = {this.onChange} disabled={this.state.support_dnu === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.support_nyucp_PH} value = {this.state.support_nyucp_val == null ? null : this.state.support_nyucp_val} name = "support_nyucp_val" onChange = {this.onChange} disabled={this.state.support_nyucp === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.support_nom_PH} value = {this.state.support_nom_val == null ? null : this.state.support_nom_val} name = "support_nom_val" onChange = {this.onChange} disabled={this.state.support_nom === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.support_emails_PH} value = {this.state.support_emails_val == null ? null : this.state.support_emails_val} name = "support_emails_val" onChange = {this.onChange} disabled={this.state.support_emails === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.support_deposit_pulls_PH} value = {this.state.support_deposit_pulls_val == null ? null : this.state.support_deposit_pulls_val} name = "support_deposit_pulls_val" onChange = {this.onChange} disabled={this.state.support_deposit_pulls === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.support_blank_batch_corres_PH} value = {this.state.support_blank_batch_corres_val == null ? null : this.state.support_blank_batch_corres_val} name = "support_blank_batch_corres_val" onChange = {this.onChange} disabled={this.state.support_blank_batch_corres === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.support_correspondence_PH} value = {this.state.support_correspondence_val == null ? null : this.state.support_correspondence_val} name = "support_correspondence_val" onChange = {this.onChange} disabled={this.state.support_correspondence === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.support_acct_audits_PH} value = {this.state.support_acct_audits_val == null ? null : this.state.support_acct_audits_val} name = "support_acct_audits_val" onChange = {this.onChange} disabled={this.state.support_acct_audits === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.support_inv_correct_PH} value = {this.state.support_inv_correct_val == null ? null : this.state.support_inv_correct_val} name = "support_inv_correct_val" onChange = {this.onChange} disabled={this.state.support_inv_correct === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.support_phone_PH} value = {this.state.support_phone_val == null ? null : this.state.support_phone_val} name = "support_phone_val" onChange = {this.onChange} disabled={this.state.support_phone === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.support_inv_addr_PH} value = {this.state.support_inv_addr_val == null ? null : this.state.support_inv_addr_val} name = "support_inv_addr_val" onChange = {this.onChange} disabled={this.state.support_inv_addr === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.support_collects_PH} value = {this.state.support_collects_val == null ? null : this.state.support_collects_val} name = "support_collects_val" onChange = {this.onChange} disabled={this.state.support_collects === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.suport_medical_records_PH} value = {this.state.suport_medical_records_val == null ? null : this.state.suport_medical_records_val} name = "suport_medical_records_val" onChange = {this.onChange} disabled={this.state.suport_medical_records === true ? false : true} />
								</td>
							</tr>
						</tbody>
					</table>
					<br/>
					<table className="table table-striped table-bordered" style={{marginTop: 20}}>
						<thead>
							<tr>
								<th colSpan="5"> Coding </th>
							</tr>
							<tr>
								<th> NA </th>
								<th> ON HOLDS </th>
								<th> CODING QUEUE </th>
								<th> ON SITES </th>
								<th> OOA'S </th>
							</tr>
						</thead>
						<tbody>
							<tr> 
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.coding_na_PH} value = {this.state.coding_na_val == null ? null : this.state.coding_na_val} name = "coding_na_val" onChange = {this.onChange} disabled={this.state.coding_na === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.coding_on_holds_PH} value = {this.state.coding_on_holds_val == null ? null : this.state.coding_on_holds_val} name = "coding_on_holds_val" onChange = {this.onChange} disabled={this.state.coding_on_holds === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.coding_coding_queue_PH} value = {this.state.coding_coding_queue_val == null ? null : this.state.coding_coding_queue_val} name = "coding_coding_queue_val" onChange = {this.onChange} disabled={this.state.coding_coding_queue === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.coding_onsites_PH} value = {this.state.coding_onsites_val == null ? null : this.state.coding_onsites_val} name = "coding_onsites_val" onChange = {this.onChange} disabled={this.state.coding_onsites === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.coding_ooa_PH} value = {this.state.coding_ooa_val == null ? null : this.state.coding_ooa_val} name = "coding_ooa_val" onChange = {this.onChange} disabled={this.state.coding_ooa === true ? false : true} />
								</td>
							</tr>
						</tbody>
					</table>
					
					<br />
					<table className="table table-striped table-bordered" style={{marginTop: 20}}>
						<thead>
							<tr>
								<th colSpan="7"> AR </th>
							</tr>
							<tr>
								<th> 120+ </th>
								<th> 120+ (%) </th>
								<th> 90+ </th>
								<th> VOICEMAILS </th>
								<th> UNAPPLIED </th>
								<th> AUDIT </th>
								<th> WB's </th>
							</tr>
						</thead>
						<tbody>
							<tr> 
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.ar120_PH} value = {this.state.ar120_val == null ? null : this.state.ar120_val} name = "ar120_val" onChange = {this.onChange} disabled={this.state.ar120 === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.ar_120percent_PH} value = {this.state.ar_120percent_val == null ? null : this.state.ar_120percent_val} name = "ar_120percent_val" onChange = {this.onChange} disabled={this.state.ar_120percent === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.ar_90_PH} value = {this.state.ar_90_val == null ? null : this.state.ar_90_val} name = "ar_90_val" onChange = {this.onChange} disabled={this.state.ar_90 === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.ar_voicemails_PH} value = {this.state.ar_voicemails_val == null ? null : this.state.ar_voicemails_val} name = "ar_voicemails_val" onChange = {this.onChange} disabled={this.state.ar_voicemails === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.ar_unapplied_PH} value = {this.state.ar_unapplied_val == null ? null : this.state.ar_unapplied_val} name = "ar_unapplied_val" onChange = {this.onChange} disabled={this.state.ar_unapplied === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.ar_audit_PH} value = {this.state.ar_audit_val == null ? null : this.state.ar_audit_val} name = "ar_audit_val" onChange = {this.onChange} disabled={this.state.ar_audit === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.war_wbs_PH} value = {this.state.ar_wbs_val == null ? null : this.state.ar_wbs_val} name = "ar_wbs_val" onChange = {this.onChange} disabled={this.state.ar_wbs === true ? false : true} />
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

export default EnterDataOM