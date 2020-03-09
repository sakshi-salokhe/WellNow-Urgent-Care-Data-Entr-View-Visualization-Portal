import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"

import EmployeeLogInPage from "../../EmployeeLogInPage"

class EnterDataPatSup extends Component
{
	
	constructor(props)
	{
		super(props);
		
		this.state = 
		{
			saf_mvp_sod : false,
			saf_mvp_eod : false,
			saf_inval_addr_sod : false,
			saf_inval_addr_eod : false,
			ash_attachments_sod : false,
			ash_attachments_eod : false,
			ash_wc_mailing_sod : false,
			ash_wc_mailing_eod : false,
			ash_wc_deleted_sod : false,
			ash_wc_deleted_eod : false,
			ash_acc_type_sod : false,
			ash_acc_type_eod : false,
			ash_last_addr_sod : false,
			ash_last_addr_eod : false,
			bailey_indep_health_sod : false,
			bailey_indep_health_eod : false,
			bailey_bcbs_sod : false,
			bailey_bcbs_eod : false,
			bailey_emails_sod : false,
			bailey_emails_eod : false,
			justin_ndc_num_sod : false,
			justin_ndc_num_eod : false,
			justin_medicare_loc_sod: false,
			justin_medicare_loc_eod : false,
			justin_medicare_sec_sod: false,
			justin_medicare_sec_eod : false,			 
			
			saf_mvp_sod_val : this.props.data.saf_mvp_sod_PH,
			saf_mvp_eod_val : this.props.data.saf_mvp_eod_PH,
			saf_inval_addr_sod_val : this.props.data.saf_inval_addr_sod_PH,
			saf_inval_addr_eod_val : this.props.data.saf_inval_addr_eod_PH,
			ash_attachments_sod_val : this.props.data.ash_attachments_sod_PH,
			ash_attachments_eod_val : this.props.data.ash_attachments_eod_PH,
			ash_wc_mailing_sod_val : this.props.data.ash_wc_mailing_sod_PH,
			ash_wc_mailing_eod_val : this.props.data.ash_wc_mailing_eod_PH,
			ash_wc_deleted_sod_val : this.props.data.ash_wc_deleted_sod_PH,
			ash_wc_deleted_eod_val : this.props.data.ash_wc_deleted_eod_PH,
			ash_acc_type_sod_val : this.props.data.ash_acc_type_sod_PH,
			ash_acc_type_eod_val : this.props.data.ash_acc_type_eod_PH,
			ash_last_addr_sod_val : this.props.data.ash_last_addr_sod_PH,
			ash_last_addr_eod_val : this.props.data.ash_last_addr_eod_PH,
			bailey_indep_health_sod_val : this.props.data.bailey_indep_health_sod_PH,
			bailey_indep_health_eod_val : this.props.data.bailey_indep_health_eod_PH,
			bailey_bcbs_sod_val : this.props.data.bailey_bcbs_sod_PH,
			bailey_bcbs_eod_val : this.props.data.bailey_bcbs_eod_PH,
			bailey_emails_sod_val : this.props.data.bailey_emails_sod_PH,
			bailey_emails_eod_val : this.props.data.bailey_emails_eod_PH,
			justin_ndc_num_sod_val : this.props.data.justin_ndc_num_sod_PH,
			justin_ndc_num_eod_val : this.props.data.justin_ndc_num_eod_PH,
			justin_medicare_loc_sod_val : this.props.data.justin_medicare_loc_sod_PH,
			justin_medicare_loc_eod_val : this.props.data.justin_medicare_loc_eod_PH,
			justin_medicare_sec_sod_val : this.props.data.justin_medicare_sec_sod_PH,
			justin_medicare_sec_eod_val : this.props.data.justin_medicare_sec_eod_PH,
			
		}
		
		if(this.props.data.saf_mvp_sod_total == 0)
		{
			this.state.saf_mvp_sod_total = false 
		}
		else
		{
			this.state.saf_mvp_sod_total = true
		}
		
		if(this.props.data.saf_mvp_eod_total == 0)
		{
			this.state.saf_mvp_eod_total = false 
		}
		else
		{
			this.state.saf_mvp_eod_total = true
		}
		
		if(this.props.data.saf_inval_addr_sod_total == 0)
		{
			this.state.saf_inval_addr_sod_total = false 
		}
		else
		{
			this.state.saf_inval_addr_sod_total = true
		}
		
		if(this.props.data.saf_inval_addr_eod_total == 0)
		{
			this.state.saf_inval_addr_eod_total = false 
		}
		else
		{
			this.state.saf_inval_addr_eod_total = true
		}
		
		if(this.props.data.ash_attachments_sod_total == 0)
		{
			this.state.ash_attachments_sod_total = false 
		}
		else
		{
			this.state.ash_attachments_sod_total = true
		}
		
		if(this.props.data.ash_attachments_eod_total == 0)
		{
			this.state.ash_attachments_eod_total = false 
		}
		else
		{
			this.state.ash_attachments_eod_total = true
		}
		
		if(this.props.data.ash_wc_mailing_sod_total == 0)
		{
			this.state.ash_wc_mailing_sod_total = false 
		}
		else
		{
			this.state.ash_wc_mailing_sod_total = true
		}
		
		if(this.props.data.ash_wc_mailing_eod_total == 0)
		{
			this.state.ash_wc_mailing_eod_total = false 
		}
		else
		{
			this.state.ash_wc_mailing_eod_total = true
		}
		
		if(this.props.data.ash_wc_deleted_sod_total == 0)
		{
			this.state.ash_wc_deleted_sod_total = false 
		}
		else
		{
			this.state.ash_wc_deleted_sod_total = true
		}
		
		if(this.props.data.ash_wc_deleted_eod_total == 0)
		{
			this.state.ash_wc_deleted_eod_total = false 
		}
		else
		{
			this.state.ash_wc_deleted_eod_total = true
		}
		
		if(this.props.data.ash_acc_type_sod_total == 0)
		{
			this.state.ash_acc_type_sod_total = false 
		}
		else
		{
			this.state.ash_acc_type_sod_total = true
		}
		
		if(this.props.data.ash_acc_type_eod_total == 0)
		{
			this.state.ash_acc_type_eod_total = false 
		}
		else
		{
			this.state.ash_acc_type_eod_total = true
		}
		
		if(this.props.data.ash_last_addr_sod_total == 0)
		{
			this.state.ash_last_addr_sod_total = false 
		}
		else
		{
			this.state.ash_last_addr_sod_total = true
		}
		
		if(this.props.data.ash_last_addr_eod_total == 0)
		{
			this.state.ash_last_addr_eod_total = false 
		}
		else
		{
			this.state.ash_last_addr_eod_total = true
		}
		
		if(this.props.data.bailey_indep_health_sod_total == 0)
		{
			this.state.bailey_indep_health_sod_total = false 
		}
		else
		{
			this.state.bailey_indep_health_sod_total = true
		}
		
		if(this.props.data.bailey_indep_health_eod_total == 0)
		{
			this.state.bailey_indep_health_eod_total = false 
		}
		else
		{
			this.state.bailey_indep_health_eod_total = true
		}
		
		if(this.props.data.bailey_bcbs_sod_total == 0)
		{
			this.state.bailey_bcbs_sod_total = false 
		}
		else
		{
			this.state.bailey_bcbs_sod_total = true
		}
		
		if(this.props.data.bailey_bcbs_eod_total == 0)
		{
			this.state.bailey_bcbs_eod_total = false 
		}
		else
		{
			this.state.bailey_bcbs_eod_total = true
		}
		
		if(this.props.data.bailey_emails_sod_total == 0)
		{
			this.state.bailey_emails_sod_total = false 
		}
		else
		{
			this.state.bailey_emails_sod_total = true
		}
		
		if(this.props.data.bailey_emails_eod_total == 0)
		{
			this.state.bailey_emails_eod_total = false 
		}
		else
		{
			this.state.bailey_emails_eod_total = true
		}
		
		if(this.props.data.justin_ndc_num_sod_total == 0)
		{
			this.state.justin_ndc_num_sod_total = false 
		}
		else
		{
			this.state.justin_ndc_num_sod_total = true
		}
		
		if(this.props.data.justin_ndc_num_eod_total == 0)
		{
			this.state.justin_ndc_num_eod_total = false 
		}
		else
		{
			this.state.justin_ndc_num_eod_total = true
		}
		
		if(this.props.data.justin_medicare_loc_sod_total == 0)
		{
			this.state.justin_medicare_loc_sod_total = false 
		}
		else
		{
			this.state.justin_medicare_loc_sod_total = true
		}
		
		if(this.props.data.justin_medicare_loc_eod_total == 0)
		{
			this.state.justin_medicare_loc_eod_total = false 
		}
		else
		{
			this.state.justin_medicare_loc_eod_total = true
		}
		
		if(this.props.data.justin_medicare_sec_sod_total == 0)
		{
			this.state.justin_medicare_sec_sod_total = false 
		}
		else
		{
			this.state.justin_medicare_sec_sod_total = true
		}
		
		if(this.props.data.justin_medicare_sec_eod_total == 0)
		{
			this.state.justin_medicare_sec_eod_total = false 
		}
		else
		{
			this.state.justin_medicare_sec_eod_total = true
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
					saf_mvp_sod_val : this.state.saf_mvp_sod_val,
					saf_mvp_eod_val : this.state.saf_mvp_eod_val,
					saf_inval_addr_sod_val : this.state.saf_inval_addr_sod_val,
					saf_inval_addr_eod_val : this.state.saf_inval_addr_eod_val,
					ash_attachments_sod_val : this.state.ash_attachments_sod_val,
					ash_attachments_eod_val : this.state.ash_attachments_eod_val,
					ash_wc_mailing_sod_val : this.state.ash_wc_mailing_sod_val,
					ash_wc_mailing_eod_val : this.state.ash_wc_mailing_eod_val,
					ash_wc_deleted_sod_val : this.state.ash_wc_deleted_sod_val,
					ash_wc_deleted_eod_val : this.state.ash_wc_deleted_eod_val,
					ash_acc_type_sod_val : this.state.ash_acc_type_sod_val,
					ash_acc_type_eod_val : this.state.ash_acc_type_eod_val,
					ash_last_addr_sod_val : this.state.ash_last_addr_sod_val,
					ash_last_addr_eod_val : this.state.ash_last_addr_eod_val,
					bailey_indep_health_sod_val : this.state.bailey_indep_health_sod_val,
					bailey_indep_health_eod_val : this.state.bailey_indep_health_eod_val,
					bailey_bcbs_sod_val : this.state.bailey_bcbs_sod_val,
					bailey_bcbs_eod_val : this.state.bailey_bcbs_eod_val,
					bailey_emails_sod_val : this.state.bailey_emails_sod_val,
					bailey_emails_eod_val : this.state.bailey_emails_eod_val,
					justin_ndc_num_sod_val : this.state.justin_ndc_num_sod_val,
					justin_ndc_num_eod_val : this.state.justin_ndc_num_eod_val,
					justin_medicare_loc_sod_val : this.state.justin_medicare_loc_sod_val,
					justin_medicare_loc_eod_val : this.state.justin_medicare_loc_eod_val,
					justin_medicare_sec_sod_val : this.state.justin_medicare_sec_sod_val,
					justin_medicare_sec_eod_val : this.state.justin_medicare_sec_eod_val,
					
				};
		console.log("obj",obj);
		
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
							console.log("update data",res.data);
							if(res.data.entered == 1)
							{
								alert("Successfully entered your data.")
								ReactDOM.render(<EmployeeLogInPage user_id = {obj.userid} />, document.getElementById('root'));
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
							console.log("insert data",res.data);
							if(res.data.entered == 1)
							{
								alert("Successfully entered your data.")
								ReactDOM.render(<EmployeeLogInPage user_id = {obj.userid} />, document.getElementById('root'));
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
		ReactDOM.render(<EmployeeLogInPage user_id = {obj.userid} />, document.getElementById('root'));
	}
	
	render()
	{
		var data = this.props.data;
		var user_id = this.props.data.userid;
		
		return (
			<div className = "container">
				<h3> Enter Data </h3>
				<hr />
				
				<table className="table table-striped table-bordered" style={{marginTop: 20}}>
						<thead>
							<tr>
								<th> </th>
								<th> </th>
								<th colSpan="2"> Safiyyah </th>
								<th colSpan="5"> Ashley Standish </th>
								<th colSpan="3"> Bailea </th>
								<th colSpan="3"> Justin </th>
							</tr>
							<tr>
								<th> Date</th>
								<th> </th>
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
								<td rowspan="2">
									{this.props.obj.when_done}
								</td>
								<td>
									SOD
								</td>
								<td>
									{this.props.obj.saf_mvp_sod}
								</td>
								<td>
									{this.props.obj.saf_inval_addr_sod}
								</td>
								<td>
									{this.props.obj.ash_attachments_sod}
								</td>
								<td>
									{this.props.obj.ash_wc_mailing_sod}
								</td>
								<td>
									{this.props.obj.ash_wc_deleted_sod }
								</td>
								<td>
									{this.props.obj.ash_acc_type_sod}
								</td>
								<td>
									{this.props.obj.ash_last_addr_sod}
								</td>
								<td>
									{this.props.obj.bailey_indep_health_sod}
								</td>
								<td>
									{this.props.obj.bailey_bcbs_sod}
								</td>	
								<td>
									{this.props.obj.bailey_emails_sod}
								</td>
								<td>
									{this.props.obj.justin_ndc_num_sod}
								</td>
								<td>
									{this.props.obj.justin_medicare_loc_sod}
								</td>
								<td>
									{this.props.obj.justin_medicare_sec_sod}
								</td>
							</tr>
							
							<tr>
								<td>
									EOD
								</td>
								<td>
									{this.props.obj.saf_mvp_eod}
								</td>
								<td>
									{this.props.obj.saf_inval_addr_eod}
								</td>
								<td>
									{this.props.obj.ash_attachments_eod}
								</td>
								<td>
									{this.props.obj.ash_wc_mailing_eod}
								</td>
								<td>
									{this.props.obj.ash_wc_deleted_eod }
								</td>
								<td>
									{this.props.obj.ash_acc_type_eod}
								</td>
								<td>
									{this.props.obj.ash_last_addr_eod}
								</td>
								<td>
									{this.props.obj.bailey_indep_health_eod}
								</td>
								<td>
									{this.props.obj.bailey_bcbs_eod}
								</td>
								<td>
									{this.props.obj.bailey_emails_eod}
								</td>
								<td>
									{this.props.obj.justin_ndc_num_eod}
								</td>
								<td>
									{this.props.obj.justin_medicare_loc_eod}
								</td>
								<td>
									{this.props.obj.justin_medicare_sec_eod}
								</td>								
							</tr>
						</tbody>
					</table>
			
			</div>
		)
	}
}

export default EnterDataPatSup