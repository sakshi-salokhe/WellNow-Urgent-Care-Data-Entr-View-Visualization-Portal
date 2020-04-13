import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"

import ViewDashboards from "../ViewDashboards"

class EnterDataOS extends Component
{
	
	constructor(props)
	{
		super(props);
		
		this.state = 
		{
			RPQ_print_queue_total : false,
			RPQ_num_of_WC : false,
			IL_RCM_Ins : false,
			IL_RCM_WC :false,
			IL_NINS : false,
			IL_NNF : false,
			IL_NWC : false,
			IL_ENL : false,
			RA_WS_Prof : false,
			RA_WS_Prof_Day : false,	
			RA_WS_Inst : false,	
			RA_WS_Inst_Day : false,	
			RA_Attachments : false,	
			WBE_NF_Updates : false,	
			WBE_WC_Updates : false,	
			WBE_OS_Email_Inbox : false,	
			Coding_FFS_Total : false,	
			Coding_FFS_On_hold : false,	
			Coding_Coding_Queue : false,	
			Coding_Coding_Queue_Days : false,	
			Coding_WS_Coding : false,	
			Coding_FFS_Onhold_Report : false,	
			
			RPQ_print_queue_total_val : this.props.data.RPQ_print_queue_total_PH,
			RPQ_num_of_WC_val : this.props.data.RPQ_num_of_WC_PH,
			IL_RCM_Ins_val : this.props.data.IL_RCM_Ins_PH,
			IL_RCM_WC_val :this.props.data.IL_RCM_WC_PH,
			IL_NINS_val : this.props.data.IL_NINS_PH,
			IL_NNF_val : this.props.data.IL_NNF_PH,
			IL_NWC_val : this.props.data.IL_NWC_PH,
			IL_ENL_val : this.props.data.IL_ENL_PH,
			RA_WS_Prof_val : this.props.data.RA_WS_Prof_PH,
			RA_WS_Prof_Day_val : this.props.data.RA_WS_Prof_Day_PH,	
			RA_WS_Inst_val : this.props.data.RA_WS_Inst_PH,	
			RA_WS_Inst_Day_val : this.props.data.RA_WS_Inst_Day_PH,	
			RA_Attachments_val : this.props.data.RA_Attachments_PH,	
			WBE_NF_Updates_val : this.props.data.WBE_NF_Updates_PH,	
			WBE_WC_Updates_val : this.props.data.WBE_WC_Updates_PH,	
			WBE_OS_Email_Inbox_val : this.props.data.WBE_OS_Email_Inbox_PH,	
			Coding_FFS_Total_val : this.props.data.Coding_FFS_Total_PH,	
			Coding_FFS_On_hold_val : this.props.data.Coding_FFS_On_hold_PH,	
			Coding_Coding_Queue_val : this.props.data.Coding_Coding_Queue_PH,	
			Coding_Coding_Queue_Days_val : this.props.data.Coding_Coding_Queue_Days_PH,	
			Coding_WS_Coding_val : this.props.data.Coding_WS_Coding_PH,	
			Coding_FFS_Onhold_Report_val : this.props.data.Coding_FFS_Onhold_Report_PH,	
		}
		
		if(this.props.data.RPQ_print_queue_total == 0)
		{
			this.state.RPQ_print_queue_total = false 
		}
		else
		{
			this.state.RPQ_print_queue_total = true
		}
		
		if(props.data.RPQ_num_of_WC == 0)
		{
			this.state.RPQ_num_of_WC = false 
		}
		else
		{
			this.state.RPQ_num_of_WC = true
		}
		
		if(props.data.IL_RCM_Ins == 0)
		{
			this.state.IL_RCM_Ins = false 
		}
		else
		{
			this.state.IL_RCM_Ins = true
		}
		
		if(props.data.IL_RCM_WC == 0)
		{
			this.state.IL_RCM_WC = false 
		}
		else
		{
			this.state.IL_RCM_WC = true
		}
		
		if(props.data.IL_NINS == 0)
		{
			this.state.IL_NINS = false 
		}
		else
		{
			this.state.IL_NINS = true
		}
		
		if(props.data.IL_NNF == 0)
		{
			this.state.IL_NNF = false 
		}
		else
		{
			this.state.IL_NNF = true
		}
		
		if(props.data.IL_NWC == 0)
		{
			this.state.IL_NWC = false 
		}
		else
		{
			this.state.IL_NWC = true
		}
		
		if(props.data.IL_ENL == 0)
		{
			this.state.IL_ENL = false 
		}
		else
		{
			this.state.IL_ENL = true
		}
		
		if(props.data.RA_WS_Prof == 0)
		{
			this.state.RA_WS_Prof = false 
		}
		else
		{
			this.state.RA_WS_Prof = true
		}
		
		if(props.data.RA_WS_Prof_Day == 0)
		{
			this.state.RA_WS_Prof_Day = false 
		}
		else
		{
			this.state.RA_WS_Prof_Day = true
		}
		
		if(props.data.RA_WS_Inst == 0)
		{
			this.state.RA_WS_Inst = false 
		}
		else
		{
			this.state.RA_WS_Inst = true
		}
		
		if(props.data.RA_WS_Inst_Day == 0)
		{
			this.state.RA_WS_Inst_Day = false 
		}
		else
		{
			this.state.RA_WS_Inst_Day = true
		}
		
		if(props.data.RA_Attachments == 0)
		{
			this.state.RA_Attachments = false 
		}
		else
		{
			this.state.RA_Attachments = true
		}
		
		if(props.data.WBE_NF_Updates == 0)
		{
			this.state.WBE_NF_Updates = false 
		}
		else
		{
			this.state.WBE_NF_Updates = true
		}
		
		if(props.data.WBE_WC_Updates == 0)
		{
			this.state.WBE_WC_Updates = false 
		}
		else
		{
			this.state.WBE_WC_Updates = true
		}
		
		if(props.data.WBE_OS_Email_Inbox == 0)
		{
			this.state.WBE_OS_Email_Inbox = false 
		}
		else
		{
			this.state.WBE_OS_Email_Inbox = true
		}
		
		if(props.data.Coding_FFS_Total == 0)
		{
			this.state.Coding_FFS_Total = false 
		}
		else
		{
			this.state.Coding_FFS_Total = true
		}
		
		if(props.data.Coding_FFS_On_hold == 0)
		{
			this.state.Coding_FFS_On_hold = false 
		}
		else
		{
			this.state.Coding_FFS_On_hold = true
		}
		
		if(props.data.Coding_Coding_Queue == 0)
		{
			this.state.Coding_Coding_Queue = false 
		}
		else
		{
			this.state.Coding_Coding_Queue = true
		}
		
		if(props.data.Coding_Coding_Queue_Days == 0)
		{
			this.state.Coding_Coding_Queue_Days = false 
		}
		else
		{
			this.state.Coding_Coding_Queue_Days = true
		}
		
		if(props.data.Coding_WS_Coding == 0)
		{
			this.state.Coding_WS_Coding = false 
		}
		else
		{
			this.state.Coding_WS_Coding = true
		}
		
		if(props.data.Coding_FFS_Onhold_Report == 0)
		{
			this.state.Coding_FFS_Onhold_Report = false 
		}
		else
		{
			this.state.Coding_FFS_Onhold_Report = true
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
					
					RPQ_print_queue_total_val : this.state.RPQ_print_queue_total_val,
					RPQ_num_of_WC_val : this.state.RPQ_num_of_WC_val,
					IL_RCM_Ins_val : this.state.IL_RCM_Ins_val,
					IL_RCM_WC_val :this.state.IL_RCM_WC_val,
					IL_NINS_val : this.state.IL_NINS_val,
					IL_NNF_val : this.state.IL_NNF_val,
					IL_NWC_val : this.state.IL_NWC_val,
					IL_ENL_val : this.state.IL_ENL_val,
					RA_WS_Prof_val : this.state.RA_WS_Prof_val,
					RA_WS_Prof_Day_val : this.state.RA_WS_Prof_Day_val,
					RA_WS_Inst_val : this.state.RA_WS_Inst_val,
					RA_WS_Inst_Day_val : this.state.RA_WS_Inst_Day_val,
					RA_Attachments_val : this.state.RA_Attachments_val,
					WBE_NF_Updates_val :this.state.WBE_NF_Updates_val,
					WBE_WC_Updates_val : this.state.WBE_WC_Updates_val,
					WBE_OS_Email_Inbox_val : this.state.WBE_OS_Email_Inbox_val,
					Coding_FFS_Total_val : this.state.Coding_FFS_Total_val,
					Coding_FFS_On_hold_val : this.state.Coding_FFS_On_hold_val,
					Coding_Coding_Queue_val : this.state.Coding_Coding_Queue_val,
					Coding_Coding_Queue_Days_val : this.state.Coding_Coding_Queue_Days_val,
					Coding_WS_Coding_val : this.state.Coding_WS_Coding_val,
					Coding_FFS_Onhold_Report_val : this.state.Coding_FFS_Onhold_Report_val
				};
		
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/check_os.php')
		.then(
			res => {
				if(res.data.ans_val == 1)//data exists already , perform update
				{
					axios.post('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/update_data_os.php', qs.stringify(obj))
					.then(res => 
						{
							if(res.data.entered == 1)
							{
								alert("Successfully entered your data.")
								ReactDOM.render(<ViewDashboards user_id = {obj.userid} />, document.getElementById('root'));
							}
							else
							{
								alert("There was some error. Please try again later.")
							}
						})
				}
				else //data exists already , perform update
				{
					axios.post('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/insert_data_os.php', qs.stringify(obj))
					.then(res => 
						{
							if(res.data.entered == 1)
							{
								alert("Successfully entered your data.")
								ReactDOM.render(<ViewDashboards user_id = {obj.userid} />, document.getElementById('root'));
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
		ReactDOM.render(<ViewDashboards user_id = {obj.userid} />, document.getElementById('root'));
	}
	
	render()
	{
		var data = this.props.data;
		var user_id = this.props.data.userid;
		
		return (
			<div className = "container-fluid">
				<h3> Enter Data {this.props.data.when_done} </h3>
				
				<form>
					<table className="table table-striped table-bordered" style={{marginTop: 20}}>
						<thead>
							<tr>
								<th colSpan="2"> Ready To Print Queue </th>
								<th colSpan="6"> In-Limbo </th>
								<th colSpan="3"> Workbaskets/Email </th>
							</tr>
							<tr>
								<th> Print Queue Total </th>
								<th> # of WC </th>
								<th> RCM - Ins </th>
								<th> RCM - WC </th>
								<th> **NINS </th>
								<th> **NNF </th>
								<th> **NWC </th>
								<th> **ENL </th>
								<th> NF Updates </th>
								<th> WC Updates </th>
								<th> OS Email Inbox </th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.RPQ_print_queue_total_PH} value = {this.state.RPQ_print_queue_total_val == null ? null : this.state.RPQ_print_queue_total_val} name = "RPQ_print_queue_total_val" onChange = {this.onChange} disabled={this.state.RPQ_print_queue_total === true ? false : true} />
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.RPQ_num_of_WC_PH} value = {this.state.RPQ_num_of_WC_val} name = "RPQ_num_of_WC_val" onChange = {this.onChange} disabled={this.state.RPQ_num_of_WC === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.IL_RCM_Ins_PH} value = {this.state.IL_RCM_Ins_val} name = "IL_RCM_Ins_val" onChange = {this.onChange} disabled={this.state.IL_RCM_Ins === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.IL_RCM_WC_PH} value = {this.state.IL_RCM_WC_val} name = "IL_RCM_WC_val" onChange = {this.onChange} disabled={this.state.IL_RCM_WC === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.IL_NINS_PH} value = {this.state.IL_NINS_val} name = "IL_NINS_val" onChange = {this.onChange} disabled={this.state.IL_NINS === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.IL_NNF_PH} value = {this.state.IL_NNF_val} name = "IL_NNF_val" onChange = {this.onChange} disabled={this.state.IL_NNF === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.IL_NWC_PH} value = {this.state.IL_NWC_val} name = "IL_NWC_val" onChange = {this.onChange} disabled={this.state.IL_NWC === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.IL_ENL_PH} value = {this.state.IL_ENL_val} name = "IL_ENL_val" onChange = {this.onChange} disabled={this.state.IL_ENL === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.WBE_NF_Updates_PH} value = {this.state.WBE_NF_Updates_val} name = "WBE_NF_Updates_val" onChange = {this.onChange} disabled={this.state.WBE_NF_Updates === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.WBE_WC_Updates_PH} value = {this.state.WBE_WC_Updates_val} name = "WBE_WC_Updates_val" onChange = {this.onChange} disabled={this.state.WBE_WC_Updates === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.WBE_OS_Email_Inbox_PH} value = {this.state.WBE_OS_Email_Inbox_val} name = "WBE_OS_Email_Inbox_val" onChange = {this.onChange} disabled={this.state.WBE_OS_Email_Inbox === true ? false : true}/>
								</td>
							</tr>
						</tbody>
					</table>
					
					<br />
					
					<table className="table table-striped table-bordered" style={{marginTop: 20}}>
						<thead>
							<tr>
								<th colSpan="5"> Rejections/Attachments </th>
								<th colSpan="6"> Coding </th>
							</tr>
							<tr>
								<th> WS Prof  </th>
								<th> WS Prof Day </th>
								<th> WS Inst  </th>
								<th> WS Inst Day </th>
								<th> Attachments </th>
								<th> FFS Total </th>
								<th> FFS On-hold </th>
								<th> Coding Queue </th>
								<th> Coding Queue Days </th>
								<th> WS Coding  </th>
								<th> FFS On-hold Rpt </th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.RA_WS_Prof_PH} value = {this.state.RA_WS_Prof_val} name = "RA_WS_Prof_val" onChange = {this.onChange} disabled={this.state.RA_WS_Prof === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.RA_WS_Prof_Day_PH} value = {this.state.RA_WS_Prof_Day_val} name = "RA_WS_Prof_Day_val" onChange = {this.onChange} disabled={this.state.RA_WS_Prof_Day === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.RA_WS_Inst_PH} value = {this.state.RA_WS_Inst_val} name = "RA_WS_Inst_val" onChange = {this.onChange} disabled={this.state.RA_WS_Inst === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.RA_WS_Inst_Day_PH} value = {this.state.RA_WS_Inst_Day_val} name = "RA_WS_Inst_Day_val" onChange = {this.onChange} disabled={this.state.RA_WS_Inst_Day === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.RA_Attachments_PH} value = {this.state.RA_Attachments_val} name = "RA_Attachments_val" onChange = {this.onChange} disabled={this.state.RA_Attachments === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.Coding_FFS_Total_PH} value = {this.state.Coding_FFS_Total_val} name = "Coding_FFS_Total_val" onChange = {this.onChange} disabled={this.state.Coding_FFS_Total === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.Coding_FFS_On_hold_PH} value = {this.state.Coding_FFS_On_hold_val} name = "Coding_FFS_On_hold_val" onChange = {this.onChange} disabled={this.state.Coding_FFS_On_hold === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.Coding_Coding_Queue_PH} value = {this.state.Coding_Coding_Queue_val} name = "Coding_Coding_Queue_val" onChange = {this.onChange} disabled={this.state.Coding_Coding_Queue === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.Coding_Coding_Queue_Days_PH} value = {this.state.Coding_Coding_Queue_Days_val} name = "Coding_Coding_Queue_Days_val" onChange = {this.onChange} disabled={this.state.Coding_Coding_Queue_Days === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.Coding_WS_Coding_PH} value = {this.state.Coding_WS_Coding_val} name = "Coding_WS_Coding_val" onChange = {this.onChange} disabled={this.state.Coding_WS_Coding === true ? false : true}/>
								</td>
								<td>
									<input className = "form-control" type = "number" placeholder = {this.props.data.Coding_FFS_Onhold_Report_PH} value = {this.state.Coding_FFS_Onhold_Report_val} name = "Coding_FFS_Onhold_Report_val" onChange = {this.onChange} disabled={this.state.Coding_FFS_Onhold_Report === true ? false : true}/>
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

export default EnterDataOS