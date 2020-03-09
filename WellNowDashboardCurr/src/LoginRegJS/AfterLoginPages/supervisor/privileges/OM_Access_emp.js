import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';

import IndexHeader from "../../../../IndexHeader";
import SupervisorLogInPage from "../../SupervisorLogInPage"
import OM_Dash_Privileges from "./OM_Dash_Privileges"

class OM_Access_emp extends Component
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			support_sp : false,
			support_enl : false,
			support_dnu : false,
			support_nyucp :false,
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
			
			//waystar_fidelis_tf : false,
			isActive : 0	
		}
		
		if(this.props.obj.isActive == -1)
		{
			this.state.isActive = -1
		}
		else if(this.props.obj.isActive == 0)
		{
			this.state.isActive = 0
		}
		else 
		{
			this.state.isActive = 1
		}
		
		if(this.props.obj.support_sp == 0)
		{
			this.state.support_sp = false 
		}
		else
		{
			this.state.support_sp = true
		}
		
		if(this.props.obj.support_enl == 0)
		{
			this.state.support_enl = false 
		}
		else
		{
			this.state.support_enl = true
		}
		
		if(this.props.obj.support_dnu == 0)
		{
			this.state.support_dnu = false 
		}
		else
		{
			this.state.support_dnu = true
		}
		
		if(this.props.obj.support_nyucp == 0)
		{
			this.state.support_nyucp = false 
		}
		else
		{
			this.state.support_nyucp = true
		}
		
		if(this.props.obj.support_nom == 0)
		{
			this.state.support_nom = false 
		}
		else
		{
			this.state.support_nom = true
		}
		
		if(this.props.obj.support_emails == 0)
		{
			this.state.support_emails = false 
		}
		else
		{
			this.state.support_emails = true
		}
		
		if(this.props.obj.support_deposit_pulls == 0)
		{
			this.state.support_deposit_pulls = false 
		}
		else
		{
			this.state.support_deposit_pulls = true
		}
		
		if(this.props.obj.support_blank_batch_corres == 0)
		{
			this.state.support_blank_batch_corres = false 
		}
		else
		{
			this.state.support_blank_batch_corres = true
		}
		
		if(this.props.obj.support_correspondence == 0)
		{
			this.state.support_correspondence = false 
		}
		else
		{
			this.state.support_correspondence = true
		}
		
		if(this.props.obj.support_acct_audits == 0)
		{
			this.state.support_acct_audits = false 
		}
		else
		{
			this.state.support_acct_audits = true
		}
		
		if(this.props.obj.support_inv_correct == 0)
		{
			this.state.support_inv_correct = false 
		}
		else
		{
			this.state.support_inv_correct = true
		}
		
		if(this.props.obj.support_phone == 0)
		{
			this.state.support_phone = false 
		}
		else
		{
			this.state.support_phone = true
		}
		
		if(this.props.obj.support_inv_addr == 0)
		{
			this.state.support_inv_addr = false 
		}
		else
		{
			this.state.support_inv_addr = true
		}
		
		if(this.props.obj.support_collects == 0)
		{
			this.state.support_collects = false 
		}
		else
		{
			this.state.support_collects = true
		}
		
		if(this.props.obj.suport_medical_records == 0)
		{
			this.state.suport_medical_records = false 
		}
		else
		{
			this.state.suport_medical_records = true
		}
		
		if(this.props.obj.coding_na == 0)
		{
			this.state.coding_na = false 
		}
		else
		{
			this.state.coding_na = true
		}
		
		if(this.props.obj.coding_on_holds == 0)
		{
			this.state.coding_on_holds = false 
		}
		else
		{
			this.state.coding_on_holds = true
		}
		
		if(this.props.obj.coding_coding_queue == 0)
		{
			this.state.coding_coding_queue = false 
		}
		else
		{
			this.state.coding_coding_queue = true
		}
		
		if(this.props.obj.coding_onsites == 0)
		{
			this.state.coding_onsites = false 
		}
		else
		{
			this.state.coding_onsites = true
		}
		
		if(this.props.obj.coding_ooa == 0)
		{
			this.state.coding_ooa = false 
		}
		else
		{
			this.state.coding_ooa = true
		}
		
		if(this.props.obj.ar120 == 0)
		{
			this.state.ar120 = false 
		}
		else
		{
			this.state.ar120 = true
		}
		
		if(this.props.obj.ar_120percent == 0)
		{
			this.state.ar_120percent = false 
		}
		else
		{
			this.state.ar_120percent = true
		}
		
		if(this.props.obj.ar_90 == 0)
		{
			this.state.ar_90 = false 
		}
		else
		{
			this.state.ar_90 = true
		}
		
		if(this.props.obj.ar_voicemails == 0)
		{
			this.state.ar_voicemails = false 
		}
		else
		{
			this.state.ar_voicemails = true
		}
		
		if(this.props.obj.ar_unapplied == 0)
		{
			this.state.ar_unapplied = false 
		}
		else
		{
			this.state.ar_unapplied = true
		}
		
		if(this.props.obj.ar_audit == 0)
		{
			this.state.ar_audit = false 
		}
		else
		{
			this.state.ar_audit = true
		}
		
		if(this.props.obj.ar_wbs == 0)
		{
			this.state.ar_wbs = false 
		}
		else
		{
			this.state.ar_wbs = true
		}
		
		
		this.onCheckChange = this.onCheckChange.bind(this)
		
		
		this.cancel = this.cancel.bind(this);
		this.save = this.save.bind(this)
	}
	
	save(event)
	{
		event.preventDefault();
		const obj = {
					sup_id: this.props.obj.supervisor_id,
					userid : this.props.obj.userid,
					fullname : this.props.obj.fullname,
					
					support_sp : this.state.support_sp,	
					support_enl : this.state.support_enl,	
					support_dnu : this.state.support_dnu,	
					support_nyucp : this.state.support_nyucp,	
					support_nom : this.state.support_nom,	
					support_emails : this.state.support_emails,	
					support_deposit_pulls : this.state.support_deposit_pulls,	
					support_blank_batch_corres : this.state.support_blank_batch_corres,	
					support_correspondence : this.state.support_correspondence,	
					support_acct_audits : this.state.support_acct_audits,	
					support_inv_correct : this.state.support_inv_correct,	
					support_phone : this.state.support_phone,	
					support_inv_addr : this.state.support_inv_addr,	
					support_collects : this.state.support_collects,	
					suport_medical_records : this.state.suport_medical_records,	
					
					coding_na : this.state.coding_na,	
					coding_on_holds : this.state.coding_on_holds,	
					coding_coding_queue : this.state.coding_coding_queue,	
					coding_onsites : this.state.coding_onsites,	
					coding_ooa : this.state.coding_ooa,	
					
					ar120 : this.state.ar120,	
					ar_120percent : this.state.ar_120percent,	
					ar_90 : this.state.ar_90,	
					ar_voicemails : this.state.ar_voicemails,	
					ar_unapplied : this.state.ar_unapplied,	
					ar_audit : this.state.ar_audit,	
					ar_wbs : this.state.ar_wbs,
				};
		console.log(obj);
		
		axios.post('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/update_om_access_sup.php', qs.stringify(obj))
		.then(res => 
		{
			console.log(res.data);	
			if(res.data.done == true)
			{
				ReactDOM.render(<SupervisorLogInPage user_id = {this.props.obj.supervisor_id}/>, document.getElementById('root'));
			}
			else
			{
				alert("Something went wrong. Please try again later! If problem persist, contact Sakshi.");
				ReactDOM.render(<SupervisorLogInPage user_id = {this.props.obj.supervisor_id}/>, document.getElementById('root'));
			}
		});
	}
	
	onCheckChange(e)
	{
		this.setState(
		{
			[e.target.name]: e.target.checked
		})
	}

	
	cancel()
	{
		ReactDOM.render(<OM_Dash_Privileges user_id = {this.props.obj.supervisor_id}/>, document.getElementById('root'));
	}
	
	render()
	{
		const condition = this.state.isActive === -1;
		console.log("here",this.props.obj);
		return (
				
				<tr style={{ backgroundColor: condition ? "#ff8080" : "white" }} >
					<td>
						{this.props.obj.fullname}
					</td>
					
					<td>
						<input type = "checkbox" name = "support_sp" checked = {this.state.support_sp} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "support_enl" checked = {this.state.support_enl} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "support_dnu" checked = {this.state.support_dnu} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "support_nyucp" checked = {this.state.support_nyucp} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "support_nom" checked = {this.state.support_nom} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "support_emails" checked = {this.state.support_emails} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "support_deposit_pulls" checked = {this.state.support_deposit_pulls} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "support_blank_batch_corres" checked = {this.state.support_blank_batch_corres} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "support_correspondence" checked = {this.state.support_correspondence} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "support_acct_audits" checked = {this.state.support_acct_audits} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "support_inv_correct" checked = {this.state.support_inv_correct} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "support_phone" checked = {this.state.support_phone} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "support_inv_addr" checked = {this.state.support_inv_addr} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "support_collects" checked = {this.state.support_collects} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "suport_medical_records" checked = {this.state.suport_medical_records} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "coding_na" checked = {this.state.coding_na} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "coding_on_holds" checked = {this.state.coding_on_holds} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "coding_coding_queue" checked = {this.state.coding_coding_queue} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "coding_onsites" checked = {this.state.coding_onsites} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "coding_ooa" checked = {this.state.coding_ooa} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "ar120" checked = {this.state.ar120} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "ar_120percent" checked = {this.state.ar_120percent} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "ar_90" checked = {this.state.ar_90} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "ar_voicemails" checked = {this.state.ar_voicemails} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "ar_unapplied" checked = {this.state.ar_unapplied} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "ar_audit" checked = {this.state.ar_audit} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "ar_wbs" checked = {this.state.ar_wbs} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<button className="btn btn-warning" onClick = {this.save}> Save </button>
					</td>
				</tr>

		);
	}
	
}

export default OM_Access_emp