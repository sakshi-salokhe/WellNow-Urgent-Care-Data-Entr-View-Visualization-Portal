import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"

import SupervisorLogInPage from "../../SupervisorLogInPage"

class EnterEditOldDataOM extends Component
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
			
			date: this.props.data.date,
			
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
		
		this.onChangesupport_sp = this.onChangesupport_sp.bind(this)
		this.onChangesupport_enl = this.onChangesupport_enl.bind(this)
		this.onChangesupport_dnu = this.onChangesupport_dnu.bind(this)
		this.onChangesupport_nyucp = this.onChangesupport_nyucp.bind(this)
		this.onChangesupport_nom = this.onChangesupport_nom.bind(this)
		this.onChangesupport_emails = this.onChangesupport_emails.bind(this)
		this.onChangesupport_deposit_pulls = this.onChangesupport_deposit_pulls.bind(this)
		this.onChangesupport_blank_batch_corres = this.onChangesupport_blank_batch_corres.bind(this)
		this.onChangesupport_correspondence = this.onChangesupport_correspondence.bind(this)
		this.onChangesupport_acct_audits = this.onChangesupport_acct_audits.bind(this)
		this.onChangesupport_inv_correct = this.onChangesupport_inv_correct.bind(this)
		this.onChangesupport_phone = this.onChangesupport_phone.bind(this)
		this.onChangesupport_inv_addr = this.onChangesupport_inv_addr.bind(this)
		this.onChangesupport_collects = this.onChangesupport_collects.bind(this)
		this.onChangesuport_medical_records = this.onChangesuport_medical_records.bind(this)
		this.onChangecoding_na = this.onChangecoding_na.bind(this)
		this.onChangecoding_on_holds = this.onChangecoding_on_holds.bind(this)
		this.onChangecoding_coding_queue = this.onChangecoding_coding_queue.bind(this)
		this.onChangecoding_onsites = this.onChangecoding_onsites.bind(this)
		this.onChangecoding_ooa = this.onChangecoding_ooa.bind(this)
		this.onChangear120 = this.onChangear120.bind(this)
		this.onChangear_120percent = this.onChangear_120percent.bind(this)
		this.onChangear_90 = this.onChangear_90.bind(this)
		this.onChangear_voicemails = this.onChangear_voicemails.bind(this)
		this.onChangear_unapplied = this.onChangear_unapplied.bind(this)
		this.onChangear_audit = this.onChangear_audit.bind(this)
		this.onChangear_wbs = this.onChangear_wbs.bind(this)
		
		this.save = this.save.bind(this)
		this.cancel = this.cancel.bind(this)
	
	}
	
	onChangesupport_sp(e)
	{
		this.setState(
		{
			support_sp_val: e.target.value
		})
	}
	
	onChangesupport_enl(e)
	{
		this.setState(
		{
			support_enl_val: e.target.value
		})
	}
	
	onChangesupport_dnu(e)
	{
		this.setState(
		{
			support_dnu_val: e.target.value
		})
	}
	
	onChangesupport_nyucp(e)
	{
		this.setState(
		{
			support_nyucp_val: e.target.value
		})
	}
	
	onChangesupport_emails(e)
	{
		this.setState(
		{
			support_emails_val: e.target.value
		})
	}
	
	onChangesupport_nom(e)
	{
		this.setState(
		{
			support_nom_val: e.target.value
		})
	}
	
	onChangesupport_deposit_pulls(e)
	{
		this.setState(
		{
			support_deposit_pulls_val: e.target.value
		})
	}
	
	onChangesupport_blank_batch_corres(e)
	{
		this.setState(
		{
			support_blank_batch_corres_val: e.target.value
		})
	}
	
	onChangesupport_correspondence(e)
	{
		this.setState(
		{
			support_correspondence_val: e.target.value
		})
	}
	
	onChangesupport_acct_audits(e)
	{
		this.setState(
		{
			support_acct_audits_val: e.target.value
		})
	}
	
	onChangesupport_inv_correct(e)
	{
		this.setState(
		{
			support_inv_correct_val: e.target.value
		})
	}
	
	onChangesupport_phone(e)
	{
		this.setState(
		{
			support_phone_val: e.target.value
		})
	}
	
	onChangesupport_inv_addr(e)
	{
		this.setState(
		{
			support_inv_addr_val: e.target.value
		})
	}
	
	onChangesupport_collects(e)
	{
		this.setState(
		{
			support_collects_val: e.target.value
		})
	}
	
	onChangesuport_medical_records(e)
	{
		this.setState(
		{
			suport_medical_records_val: e.target.value
		})
	}
	
	onChangecoding_na(e)
	{
		this.setState(
		{
			coding_na_val: e.target.value
		})
	}
	
	onChangecoding_on_holds(e)
	{
		this.setState(
		{
			coding_on_holds_val: e.target.value
		})
	}
	
	onChangecoding_coding_queue(e)
	{
		this.setState(
		{
			coding_coding_queue_val: e.target.value
		})
	}
	
	onChangecoding_onsites(e)
	{
		this.setState(
		{
			coding_onsites_val: e.target.value
		})
	}
	
	onChangecoding_ooa(e)
	{
		this.setState(
		{
			coding_ooa_val: e.target.value
		})
	}
	
	onChangear120(e)
	{
		this.setState(
		{
			ar120_val: e.target.value
		})
	}
	
	onChangear_120percent(e)
	{
		this.setState(
		{
			ar_120percent_val: e.target.value
		})
	}
	
	onChangear_90(e)
	{
		this.setState(
		{
			ar_90_val: e.target.value
		})
	}
	
	onChangear_voicemails(e)
	{
		this.setState(
		{
			ar_voicemails_val: e.target.value
		})
	}
	
	onChangear_unapplied(e)
	{
		this.setState(
		{
			ar_unapplied_val: e.target.value
		})
	}
	
	onChangear_audit(e)
	{
		this.setState(
		{
			ar_audit_val: e.target.value
		})
	}
	
	onChangear_wbs(e)
	{
		this.setState(
		{
			ar_wbs_val: e.target.value
		})
	}
	
	save(event)
	{
		event.preventDefault();
		const obj = {
					userid : this.props.data.userid,
					date: this.props.data.date,
					
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
		
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/check_old_om.php?date='+obj.date)
		.then(
			res => {
				//console.log(res.data);
				if(res.data.ans_val == 1)//data exists already , perform update
				{
					axios.post('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/update_old_data_om.php', qs.stringify(obj))
					.then(res => 
						{
							if(res.data.entered == 1)
							{
								alert("Successfully entered your data.")
								ReactDOM.render(<SupervisorLogInPage user_id = {obj.userid} />, document.getElementById('root'));
							}
							else
							{
								alert("There was some error. Please try again later.")
							}
						})
				}
				else //data exists already , perform update
				{
					axios.post('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/insert_old_data_om.php', qs.stringify(obj))
					.then(res => 
						{
							if(res.data.entered == 1)
							{
								alert("Successfully entered your data.")
								ReactDOM.render(<SupervisorLogInPage user_id = {obj.userid} />, document.getElementById('root'));
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
		ReactDOM.render(<SupervisorLogInPage user_id = {obj.userid} />, document.getElementById('root'));
	}
	
	render()
	{
		var data = this.props.data;
		var user_id = this.props.data.userid;
		console.log("uid:",user_id);
		return (
			<div className = "container">
				<h3> Enter Data </h3>
				
				<form className="form-horizontal">
					<h3> Support : </h3>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> SP: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.support_sp_PH} value = {this.state.support_sp_val == null ? null : this.state.support_sp_val} name = "support_sp_val" onChange = {this.onChangesupport_sp} disabled={this.state.support_sp === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> ENL: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.support_enl_PH} value = {this.state.support_enl_val == null ? null : this.state.support_enl_val} name = "support_enl_val" onChange = {this.onChangesupport_enl} disabled={this.state.support_enl === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> DNU: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.support_dnu_PH} value = {this.state.support_dnu_val == null ? null : this.state.support_dnu_val} name = "support_dnu_val" onChange = {this.onChangesupport_dnu} disabled={this.state.support_dnu === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> NYUCP: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.support_nyucp_PH} value = {this.state.support_nyucp_val == null ? null : this.state.support_nyucp_val} name = "support_nyucp_val" onChange = {this.onChangesupport_nyucp} disabled={this.state.support_nyucp === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> NOM: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.support_nom_PH} value = {this.state.support_nom_val == null ? null : this.state.support_nom_val} name = "support_nom_val" onChange = {this.onChangesupport_nom} disabled={this.state.support_nom === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> EMAILS: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.support_emails_PH} value = {this.state.support_emails_val == null ? null : this.state.support_emails_val} name = "support_emails_val" onChange = {this.onChangesupport_emails} disabled={this.state.support_emails === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> DEPOSIT PULLS: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.support_deposit_pulls_PH} value = {this.state.support_deposit_pulls_val == null ? null : this.state.support_deposit_pulls_val} name = "support_deposit_pulls_val" onChange = {this.onChangesupport_deposit_pulls} disabled={this.state.support_deposit_pulls === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> BLANK BATCH CORRES: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.support_blank_batch_corres_PH} value = {this.state.support_blank_batch_corres_val == null ? null : this.state.support_blank_batch_corres_val} name = "support_blank_batch_corres_val" onChange = {this.onChangesupport_blank_batch_corres} disabled={this.state.support_blank_batch_corres === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> CORRESPONDENCE: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.support_correspondence_PH} value = {this.state.support_correspondence_val == null ? null : this.state.support_correspondence_val} name = "support_correspondence_val" onChange = {this.onChangesupport_correspondence} disabled={this.state.support_correspondence === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> ACCT AUDITS: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.support_acct_audits_PH} value = {this.state.support_acct_audits_val == null ? null : this.state.support_acct_audits_val} name = "support_acct_audits_val" onChange = {this.onChangesupport_acct_audits} disabled={this.state.support_acct_audits === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> INV CORRECT: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.support_inv_correct_PH} value = {this.state.support_inv_correct_val == null ? null : this.state.support_inv_correct_val} name = "support_inv_correct_val" onChange = {this.onChangesupport_inv_correct} disabled={this.state.support_inv_correct === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> PHONE: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.support_phone_PH} value = {this.state.support_phone_val == null ? null : this.state.support_phone_val} name = "support_phone_val" onChange = {this.onChangesupport_phone} disabled={this.state.support_phone === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> INV ADDRESS: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.support_inv_addr_PH} value = {this.state.support_inv_addr_val == null ? null : this.state.support_inv_addr_val} name = "support_inv_addr_val" onChange = {this.onChangesupport_inv_addr} disabled={this.state.support_inv_addr === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> COLLECTS: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.support_collects_PH} value = {this.state.support_collects_val == null ? null : this.state.support_collects_val} name = "support_collects_val" onChange = {this.onChangesupport_collects} disabled={this.state.support_collects === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> MEDICAL RECORDS: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.suport_medical_records_PH} value = {this.state.suport_medical_records_val == null ? null : this.state.suport_medical_records_val} name = "suport_medical_records_val" onChange = {this.onChangesuport_medical_records} disabled={this.state.suport_medical_records === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<br />
					<h3> Coding: </h3>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> NA: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.coding_na_PH} value = {this.state.coding_na_val == null ? null : this.state.coding_na_val} name = "coding_na_val" onChange = {this.onChangecoding_na} disabled={this.state.coding_na === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> ON HOLDS: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.coding_on_holds_PH} value = {this.state.coding_on_holds_val == null ? null : this.state.coding_on_holds_val} name = "coding_on_holds_val" onChange = {this.onChangecoding_on_holds} disabled={this.state.coding_on_holds === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> CODING QUEUE: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.coding_coding_queue_PH} value = {this.state.coding_coding_queue_val == null ? null : this.state.coding_coding_queue_val} name = "coding_coding_queue_val" onChange = {this.onChangecoding_coding_queue} disabled={this.state.coding_coding_queue === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> ON-SITES: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.coding_onsites_PH} value = {this.state.coding_onsites_val == null ? null : this.state.coding_onsites_val} name = "coding_onsites_val" onChange = {this.onChangecoding_onsites} disabled={this.state.coding_onsites === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> OOA'S: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.coding_ooa_PH} value = {this.state.coding_ooa_val == null ? null : this.state.coding_ooa_val} name = "coding_ooa_val" onChange = {this.onChangecoding_ooa} disabled={this.state.coding_ooa === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<br/>
					<h3> AR </h3>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> 120+: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.ar120_PH} value = {this.state.ar120_val == null ? null : this.state.ar120_val} name = "ar120_val" onChange = {this.onChangear120} disabled={this.state.ar120 === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> 120+ (%): </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.ar_120percent_PH} value = {this.state.ar_120percent_val == null ? null : this.state.ar_120percent_val} name = "ar_120percent_val" onChange = {this.onChangear_120percent} disabled={this.state.ar_120percent === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> 90+: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.ar_90_PH} value = {this.state.ar_90_val == null ? null : this.state.ar_90_val} name = "ar_90_val" onChange = {this.onChangear_90} disabled={this.state.ar_90 === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> VOICEMAILS: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.ar_voicemails_PH} value = {this.state.ar_voicemails_val == null ? null : this.state.ar_voicemails_val} name = "ar_voicemails_val" onChange = {this.onChangear_voicemails} disabled={this.state.ar_voicemails === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> UNAPPLIED: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.ar_unapplied_PH} value = {this.state.ar_unapplied_val == null ? null : this.state.ar_unapplied_val} name = "ar_unapplied_val" onChange = {this.onChangear_unapplied} disabled={this.state.ar_unapplied === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> AUDIT: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.ar_audit_PH} value = {this.state.ar_audit_val == null ? null : this.state.ar_audit_val} name = "ar_audit_val" onChange = {this.onChangear_audit} disabled={this.state.ar_audit === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> WB's: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.war_wbs_PH} value = {this.state.ar_wbs_val == null ? null : this.state.ar_wbs_val} name = "ar_wbs_val" onChange = {this.onChangear_wbs} disabled={this.state.ar_wbs === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
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

export default EnterEditOldDataOM