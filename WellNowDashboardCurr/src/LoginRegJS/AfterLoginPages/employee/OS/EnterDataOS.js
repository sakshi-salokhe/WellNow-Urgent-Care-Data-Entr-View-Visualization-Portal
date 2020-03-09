import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"

import EmployeeLogInPage from "../../EmployeeLogInPage"

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
		console.log("obj",obj);
		
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/check_os.php')
		.then(
			res => {
				//console.log(res.data);
				if(res.data.ans_val == 1)//data exists already , perform update
				{
					console.log("we will update");
					//console.log("obj=",obj);
					axios.post('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/update_data_os.php', qs.stringify(obj))
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
					axios.post('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/insert_data_os.php', qs.stringify(obj))
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
				<h2> Ready to Print Queue</h2>
				
				<form className="form-horizontal">
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> Print Queue Total: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.RPQ_print_queue_total_PH} value = {this.state.RPQ_print_queue_total_val == null ? null : this.state.RPQ_print_queue_total_val} name = "RPQ_print_queue_total_val" onChange = {this.onChange} disabled={this.state.RPQ_print_queue_total === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> # of WC: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.RPQ_num_of_WC_PH} value = {this.state.RPQ_num_of_WC_val} name = "RPQ_num_of_WC_val" onChange = {this.onChange} disabled={this.state.RPQ_num_of_WC === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<h2> In-Limbo </h2>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> RCM-Ins: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.IL_RCM_Ins_PH} value = {this.state.IL_RCM_Ins_val} name = "IL_RCM_Ins_val" onChange = {this.onChange} disabled={this.state.IL_RCM_Ins === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> RCM-WC: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.IL_RCM_WC_PH} value = {this.state.IL_RCM_WC_val} name = "IL_RCM_WC_val" onChange = {this.onChange} disabled={this.state.IL_RCM_WC === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> **NINS: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.IL_NINS_PH} value = {this.state.IL_NINS_val} name = "IL_NINS_val" onChange = {this.onChange} disabled={this.state.IL_NINS === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> **NNF: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.IL_NNF_PH} value = {this.state.IL_NNF_val} name = "IL_NNF_val" onChange = {this.onChange} disabled={this.state.IL_NNF === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> **NWC: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.IL_NWC_PH} value = {this.state.IL_NWC_val} name = "IL_NWC_val" onChange = {this.onChange} disabled={this.state.IL_NWC === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> **ENL: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.IL_ENL_PH} value = {this.state.IL_ENL_val} name = "IL_ENL_val" onChange = {this.onChange} disabled={this.state.IL_ENL === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<h2> Rejections / Attachments</h2>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> WS Prof: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.RA_WS_Prof_PH} value = {this.state.RA_WS_Prof_val} name = "RA_WS_Prof_val" onChange = {this.onChange} disabled={this.state.RA_WS_Prof === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> WS Prof Day: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.RA_WS_Prof_Day_PH} value = {this.state.RA_WS_Prof_Day_val} name = "RA_WS_Prof_Day_val" onChange = {this.onChange} disabled={this.state.RA_WS_Prof_Day === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> WS Inst: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.RA_WS_Inst_PH} value = {this.state.RA_WS_Inst_val} name = "RA_WS_Inst_val" onChange = {this.onChange} disabled={this.state.RA_WS_Inst === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> WS Inst Day: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.RA_WS_Inst_Day_PH} value = {this.state.RA_WS_Inst_Day_val} name = "RA_WS_Inst_Day_val" onChange = {this.onChange} disabled={this.state.RA_WS_Inst_Day === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> Attachments: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.RA_Attachments_PH} value = {this.state.RA_Attachments_val} name = "RA_Attachments_val" onChange = {this.onChange} disabled={this.state.RA_Attachments === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<h2> Workbaskets / email </h2>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> NF Updates: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.WBE_NF_Updates_PH} value = {this.state.WBE_NF_Updates_val} name = "WBE_NF_Updates_val" onChange = {this.onChange} disabled={this.state.WBE_NF_Updates === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> WC Updates: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.WBE_WC_Updates_PH} value = {this.state.WBE_WC_Updates_val} name = "WBE_WC_Updates_val" onChange = {this.onChange} disabled={this.state.WBE_WC_Updates === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> OS Email Inbox: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.WBE_OS_Email_Inbox_PH} value = {this.state.WBE_OS_Email_Inbox_val} name = "WBE_OS_Email_Inbox_val" onChange = {this.onChange} disabled={this.state.WBE_OS_Email_Inbox === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<h2> Coding </h2>
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> FFS Total: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.Coding_FFS_Total_PH} value = {this.state.Coding_FFS_Total_val} name = "Coding_FFS_Total_val" onChange = {this.onChange} disabled={this.state.Coding_FFS_Total === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>	
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> FFS On-Hold: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.Coding_FFS_On_hold_PH} value = {this.state.Coding_FFS_On_hold_val} name = "Coding_FFS_On_hold_val" onChange = {this.onChange} disabled={this.state.Coding_FFS_On_hold === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> Coding Queue: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.Coding_Coding_Queue_PH} value = {this.state.Coding_Coding_Queue_val} name = "Coding_Coding_Queue_val" onChange = {this.onChange} disabled={this.state.Coding_Coding_Queue === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> Coding Queue Days: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.Coding_Coding_Queue_Days_PH} value = {this.state.Coding_Coding_Queue_Days_val} name = "Coding_Coding_Queue_Days_val" onChange = {this.onChange} disabled={this.state.Coding_Coding_Queue_Days === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> WS Coding: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.Coding_WS_Coding_PH} value = {this.state.Coding_WS_Coding_val} name = "Coding_WS_Coding_val" onChange = {this.onChange} disabled={this.state.Coding_WS_Coding === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> FFS On-Hold Rpt: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.Coding_FFS_Onhold_Report_PH} value = {this.state.Coding_FFS_Onhold_Report_val} name = "Coding_FFS_Onhold_Report_val" onChange = {this.onChange} disabled={this.state.Coding_FFS_Onhold_Report === true ? false : true}/>
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

export default EnterDataOS