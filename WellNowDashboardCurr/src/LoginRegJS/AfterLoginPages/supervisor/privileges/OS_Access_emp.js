import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';

import IndexHeader from "../../../../IndexHeader";
import SupervisorLogInPage from "../../SupervisorLogInPage"
import OS_Dash_Privileges from "./OS_Dash_Privileges"

class OS_Access_emp extends Component
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			RPQ_print_queue_total : false,
			RPQ_num_of_WC : false,
			IL_RCM_Ins : false,
			IL_RCM_WC : false,
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
		
		if(this.props.obj.RPQ_print_queue_total == 0)
		{
			this.state.RPQ_print_queue_total = false 
		}
		else
		{
			this.state.RPQ_print_queue_total = true
		}
		
		if(this.props.obj.RPQ_num_of_WC == 0)
		{
			this.state.RPQ_num_of_WC = false 
		}
		else
		{
			this.state.RPQ_num_of_WC = true
		}
		
		if(this.props.obj.IL_RCM_Ins == 0)
		{
			this.state.IL_RCM_Ins = false 
		}
		else
		{
			this.state.IL_RCM_Ins = true
		}
		
		if(this.props.obj.IL_RCM_WC == 0)
		{
			this.state.IL_RCM_WC = false 
		}
		else
		{
			this.state.IL_RCM_WC = true
		}
		
		if(this.props.obj.IL_NINS == 0)
		{
			this.state.IL_NINS = false 
		}
		else
		{
			this.state.IL_NINS = true
		}
		
		if(this.props.obj.IL_NNF == 0)
		{
			this.state.IL_NNF = false 
		}
		else
		{
			this.state.IL_NNF = true
		}
		
		if(this.props.obj.IL_NWC == 0)
		{
			this.state.IL_NWC = false 
		}
		else
		{
			this.state.IL_NWC = true
		}
		
		if(this.props.obj.IL_ENL == 0)
		{
			this.state.IL_ENL = false 
		}
		else
		{
			this.state.IL_ENL = true
		}
		
		if(this.props.obj.RA_WS_Prof == 0)
		{
			this.state.RA_WS_Prof = false 
		}
		else
		{
			this.state.RA_WS_Prof = true
		}
		
		if(this.props.obj.RA_WS_Prof_Day == 0)
		{
			this.state.RA_WS_Prof_Day = false 
		}
		else
		{
			this.state.RA_WS_Prof_Day = true
		}
		
		if(this.props.obj.RA_WS_Inst == 0)
		{
			this.state.RA_WS_Inst = false 
		}
		else
		{
			this.state.RA_WS_Inst = true
		}
		
		if(this.props.obj.RA_WS_Inst_Day == 0)
		{
			this.state.RA_WS_Inst_Day = false 
		}
		else
		{
			this.state.RA_WS_Inst_Day = true
		}
		
		if(this.props.obj.RA_Attachments == 0)
		{
			this.state.RA_Attachments = false 
		}
		else
		{
			this.state.RA_Attachments = true
		}
		
		if(this.props.obj.WBE_NF_Updates == 0)
		{
			this.state.WBE_NF_Updates = false 
		}
		else
		{
			this.state.WBE_NF_Updates = true
		}
		
		if(this.props.obj.WBE_WC_Updates == 0)
		{
			this.state.WBE_WC_Updates = false 
		}
		else
		{
			this.state.WBE_WC_Updates = true
		}
		
		if(this.props.obj.WBE_OS_Email_Inbox == 0)
		{
			this.state.WBE_OS_Email_Inbox = false 
		}
		else
		{
			this.state.WBE_OS_Email_Inbox = true
		}
		
		if(this.props.obj.Coding_FFS_Total == 0)
		{
			this.state.Coding_FFS_Total = false 
		}
		else
		{
			this.state.Coding_FFS_Total = true
		}
		
		if(this.props.obj.Coding_FFS_On_hold == 0)
		{
			this.state.Coding_FFS_On_hold = false 
		}
		else
		{
			this.state.Coding_FFS_On_hold = true
		}
		
		if(this.props.obj.Coding_Coding_Queue == 0)
		{
			this.state.Coding_Coding_Queue = false 
		}
		else
		{
			this.state.Coding_Coding_Queue = true
		}
		
		if(this.props.obj.Coding_Coding_Queue_Days == 0)
		{
			this.state.Coding_Coding_Queue_Days = false 
		}
		else
		{
			this.state.Coding_Coding_Queue_Days = true
		}
		
		if(this.props.obj.Coding_WS_Coding == 0)
		{
			this.state.Coding_WS_Coding = false 
		}
		else
		{
			this.state.Coding_WS_Coding = true
		}
		
		if(this.props.obj.Coding_FFS_Onhold_Report == 0)
		{
			this.state.Coding_FFS_Onhold_Report = false 
		}
		else
		{
			this.state.Coding_FFS_Onhold_Report = true
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
					
					RPQ_print_queue_total : this.state.RPQ_print_queue_total,
					RPQ_num_of_WC : this.state.RPQ_num_of_WC,
					IL_RCM_Ins : this.state.IL_RCM_Ins,
					IL_RCM_WC : this.state.IL_RCM_WC,
					IL_NINS : this.state.IL_NINS,
					IL_NNF : this.state.IL_NNF,
					IL_NWC : this.state.IL_NWC,
					IL_ENL : this.state.IL_ENL,
					RA_WS_Prof : this.state.RA_WS_Prof,
					RA_WS_Prof_Day : this.state.RA_WS_Prof_Day,
					RA_WS_Inst : this.state.RA_WS_Inst,
					RA_WS_Inst_Day : this.state.RA_WS_Inst_Day,
					RA_Attachments : this.state.RA_Attachments,
					WBE_NF_Updates : this.state.WBE_NF_Updates,
					WBE_WC_Updates : this.state.WBE_WC_Updates,
					WBE_OS_Email_Inbox : this.state.WBE_OS_Email_Inbox,
					Coding_FFS_Total : this.state.Coding_FFS_Total,
					Coding_FFS_On_hold : this.state.Coding_FFS_On_hold,
					Coding_Coding_Queue : this.state.Coding_Coding_Queue,
					Coding_Coding_Queue_Days : this.state.Coding_Coding_Queue_Days,
					Coding_WS_Coding : this.state.Coding_WS_Coding,
					Coding_FFS_Onhold_Report : this.state.Coding_FFS_Onhold_Report
					
				};
		console.log(obj);
		
		axios.post('http://localhost:81/wellnowdash_backend/update_os_access_sup.php', qs.stringify(obj))
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
		ReactDOM.render(<OS_Dash_Privileges user_id = {this.props.obj.supervisor_id}/>, document.getElementById('root'));
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
						<input type = "checkbox" name = "RPQ_print_queue_total" checked = {this.state.RPQ_print_queue_total} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "RPQ_num_of_WC" checked = {this.state.RPQ_num_of_WC} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "IL_RCM_Ins" checked = {this.state.IL_RCM_Ins} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "IL_RCM_WC" checked = {this.state.IL_RCM_WC} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "IL_NINS" checked = {this.state.IL_NINS} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "IL_NNF" checked = {this.state.IL_NNF} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "IL_NWC" checked = {this.state.IL_NWC} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "IL_ENL" checked = {this.state.IL_ENL} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "RA_WS_Prof" checked = {this.state.RA_WS_Prof} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "RA_WS_Prof_Day" checked = {this.state.RA_WS_Prof_Day} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "RA_WS_Inst" checked = {this.state.RA_WS_Inst} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "RA_WS_Inst_Day" checked = {this.state.RA_WS_Inst_Day} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "RA_Attachments" checked = {this.state.RA_Attachments} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "WBE_NF_Updates" checked = {this.state.WBE_NF_Updates} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "WBE_WC_Updates" checked = {this.state.WBE_WC_Updates} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "WBE_OS_Email_Inbox" checked = {this.state.WBE_OS_Email_Inbox} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "Coding_FFS_Total" checked = {this.state.Coding_FFS_Total} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "Coding_FFS_On_hold" checked = {this.state.Coding_FFS_On_hold} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "Coding_Coding_Queue" checked = {this.state.Coding_Coding_Queue} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "Coding_Coding_Queue_Days" checked = {this.state.Coding_Coding_Queue_Days} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "Coding_WS_Coding" checked = {this.state.Coding_WS_Coding} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "Coding_FFS_Onhold_Report" checked = {this.state.Coding_FFS_Onhold_Report} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<button className="btn btn-warning" onClick = {this.save}> Save </button>
					</td>
				</tr>

		);
	}
	
}

export default OS_Access_emp