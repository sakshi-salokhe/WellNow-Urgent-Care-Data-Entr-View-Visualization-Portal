import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';

import IndexHeader from "../../../../IndexHeader";
import PatSup_Dash from "./PatSup_Dash"
import EditDashboardPrivileges from "../EditDashboardPrivileges"

class PatSup_Access_emp extends Component
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
		
		if(this.props.obj.saf_mvp_sod == 0)
		{
			this.state.saf_mvp_sod = false 
		}
		else
		{
			this.state.saf_mvp_sod = true
		}
		
		if(this.props.obj.saf_inval_addr_sod == 0)
		{
			this.state.saf_inval_addr_sod = false 
		}
		else
		{
			this.state.saf_inval_addr_sod = true
		}
		
		if(this.props.obj.ash_attachments_sod == 0)
		{
			this.state.ash_attachments_sod = false 
		}
		else
		{
			this.state.ash_attachments_sod = true
		}
		
		if(this.props.obj.ash_wc_mailing_sod == 0)
		{
			this.state.ash_wc_mailing_sod = false 
		}
		else
		{
			this.state.ash_wc_mailing_sod = true
		}
		
		if(this.props.obj.ash_wc_deleted_sod == 0)
		{
			this.state.ash_wc_deleted_sod = false 
		}
		else
		{
			this.state.ash_wc_deleted_sod = true
		}
		
		if(this.props.obj.ash_acc_type_sod == 0)
		{
			this.state.ash_acc_type_sod = false 
		}
		else
		{
			this.state.ash_acc_type_sod = true
		}
		
		if(this.props.obj.ash_last_addr_sod == 0)
		{
			this.state.ash_last_addr_sod = false 
		}
		else
		{
			this.state.ash_last_addr_sod = true
		}
		
		if(this.props.obj.bailey_indep_health_sod == 0)
		{
			this.state.bailey_indep_health_sod = false 
		}
		else
		{
			this.state.bailey_indep_health_sod = true
		}
		
		if(this.props.obj.bailey_bcbs_sod == 0)
		{
			this.state.bailey_bcbs_sod = false 
		}
		else
		{
			this.state.bailey_bcbs_sod = true
		}
		
		if(this.props.obj.bailey_emails_sod == 0)
		{
			this.state.bailey_emails_sod = false 
		}
		else
		{
			this.state.bailey_emails_sod = true
		}
		
		if(this.props.obj.justin_ndc_num_sod == 0)
		{
			this.state.justin_ndc_num_sod = false 
		}
		else
		{
			this.state.justin_ndc_num_sod = true
		}
		
		if(this.props.obj.justin_medicare_loc_sod == 0)
		{
			this.state.justin_medicare_loc_sod = false 
		}
		else
		{
			this.state.justin_medicare_loc_sod = true
		}
		
		if(this.props.obj.justin_medicare_sec_sod == 0)
		{
			this.state.justin_medicare_sec_sod = false 
		}
		else
		{
			this.state.justin_medicare_sec_sod = true
		}
		
		this.onCheckChange = this.onCheckChange.bind(this)
		
		this.save = this.save.bind(this)
	}
	
	save(event)
	{
		event.preventDefault();
		const obj = {
					userid : this.props.obj.userid,
					fullname : this.props.obj.fullname,
					saf_mvp_sod : this.state.saf_mvp_sod,
					saf_inval_addr_sod : this.state.saf_inval_addr_sod,
					ash_attachments_sod : this.state.ash_attachments_sod,
					ash_wc_mailing_sod : this.state.ash_wc_mailing_sod,
					ash_wc_deleted_sod : this.state.ash_wc_deleted_sod,
					ash_acc_type_sod : this.state.ash_acc_type_sod,
					ash_last_addr_sod : this.state.ash_last_addr_sod,
					bailey_indep_health_sod : this.state.bailey_indep_health_sod,
					bailey_bcbs_sod : this.state.bailey_bcbs_sod,
					bailey_emails_sod : this.state.bailey_emails_sod,
					justin_ndc_num_sod : this.state.justin_ndc_num_sod,
					justin_medicare_loc_sod : this.state.justin_medicare_loc_sod,
					justin_medicare_sec_sod : this.state.justin_medicare_sec_sod,
				};
		console.log(obj);
		
		axios.post('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/update_patsup_access.php', qs.stringify(obj))
		.then(res => 
		{
			console.log(res.data);	
			if(res.data.done == true)
			{
				ReactDOM.render(<EditDashboardPrivileges />, document.getElementById('root'));
			}
			else
			{
				alert("Something went wrong. Please try again later! If problem persist, contact Sakshi.");
				ReactDOM.render(<EditDashboardPrivileges />, document.getElementById('root'));
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
		ReactDOM.render(<PatSup_Dash />, document.getElementById('root'));
	}
	
	render()
	{
		const condition = this.state.isActive === -1;
		console.log("here",this.state.isActive);
		return (
				
				<tr style={{ backgroundColor: condition ? "#ff8080" : "white" }} >
					<td>
						{this.props.obj.fullname}
					</td>
					
					<td>
						<input type = "checkbox" name = "saf_mvp_sod" checked = {this.state.saf_mvp_sod} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "saf_inval_addr_sod" checked = {this.state.saf_inval_addr_sod} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "ash_attachments_sod" checked = {this.state.ash_attachments_sod} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "ash_wc_mailing_sod" checked = {this.state.ash_wc_mailing_sod} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "ash_wc_deleted_sod" checked = {this.state.ash_wc_deleted_sod} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "ash_acc_type_sod" checked = {this.state.ash_acc_type_sod} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "ash_last_addr_sod" checked = {this.state.ash_last_addr_sod} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "bailey_indep_health_sod" checked = {this.state.bailey_indep_health_sod} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "bailey_bcbs_sod" checked = {this.state.bailey_bcbs_sod} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "bailey_emails_sod" checked = {this.state.bailey_emails_sod} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "justin_ndc_num_sod" checked = {this.state.justin_ndc_num_sod} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "justin_medicare_loc_sod" checked = {this.state.justin_medicare_loc_sod} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "justin_medicare_sec_sod" checked = {this.state.justin_medicare_sec_sod} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<button className="btn btn-warning" onClick = {this.save}> Save </button>
					</td>
				</tr>

		);
	}
	
}

export default PatSup_Access_emp