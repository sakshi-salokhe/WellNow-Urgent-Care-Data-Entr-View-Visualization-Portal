import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';

import IndexHeader from "../../../../IndexHeader";
import CM_Dash_Privileges from "./CM_Dash_Privileges"
import CM2_Dash_Privileges from "./CM2_Dash_Privileges"

class CM2_Access_emp extends Component
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			ilc_pages : false,
			ilc_completed : false,
			efts_num : false,
			efts_completed :false,
			sc_wcupdates : false,
			sc_wccorr : false,
			sc_nfcorr : false,
			sc_to : false,
			sc_de : false,
			sc_tf : false,
			ccp_total : false,
			ccp_completed : false,
			iar_nt : false,
			iar_completed :false,
			iar_updates : false,
			iar_completed1 : false,
			wi_tnb : false,
			wi_addissue : false,
			wi_worked : false,
			wi_left : false,
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
		
		if(this.props.obj.ilc_pages == 0)
		{
			this.state.ilc_pages = false 
		}
		else
		{
			this.state.ilc_pages = true
		}
		
		if(this.props.obj.ilc_completed == 0)
		{
			this.state.ilc_completed = false 
		}
		else
		{
			this.state.ilc_completed = true
		}
		
		if(this.props.obj.efts_num == 0)
		{
			this.state.efts_num = false 
		}
		else
		{
			this.state.efts_num = true
		}
		
		if(this.props.obj.efts_completed == 0)
		{
			this.state.efts_completed = false 
		}
		else
		{
			this.state.efts_completed = true
		}
		
		if(this.props.obj.sc_wcupdates == 0)
		{
			this.state.sc_wcupdates = false 
		}
		else
		{
			this.state.sc_wcupdates = true
		}
		
		if(this.props.obj.sc_wccorr == 0)
		{
			this.state.sc_wccorr = false 
		}
		else
		{
			this.state.sc_wccorr = true
		}
		
		if(this.props.obj.sc_nfcorr == 0)
		{
			this.state.sc_nfcorr = false 
		}
		else
		{
			this.state.sc_nfcorr = true
		}
		
		if(this.props.obj.sc_to == 0)
		{
			this.state.sc_to = false 
		}
		else
		{
			this.state.sc_to = true
		}
		
		if(this.props.obj.sc_de == 0)
		{
			this.state.sc_de = false 
		}
		else
		{
			this.state.sc_de = true
		}
		
		if(this.props.obj.sc_tf == 0)
		{
			this.state.sc_tf = false 
		}
		else
		{
			this.state.sc_tf = true
		}
		
		if(this.props.obj.ccp_total == 0)
		{
			this.state.ccp_total = false 
		}
		else
		{
			this.state.ccp_total = true
		}
		
		if(this.props.obj.ccp_completed == 0)
		{
			this.state.ccp_completed = false 
		}
		else
		{
			this.state.ccp_completed = true
		}
		
		if(this.props.obj.iar_nt == 0)
		{
			this.state.iar_nt = false 
		}
		else
		{
			this.state.iar_nt = true
		}
		
		if(this.props.obj.iar_completed == 0)
		{
			this.state.iar_completed = false 
		}
		else
		{
			this.state.iar_completed = true
		}
		
		if(this.props.obj.iar_updates == 0)
		{
			this.state.iar_updates = false 
		}
		else
		{
			this.state.iar_updates = true
		}
		
		if(this.props.obj.iar_completed1 == 0)
		{
			this.state.iar_completed1 = false 
		}
		else
		{
			this.state.iar_completed1 = true
		}
		
		if(this.props.obj.wi_tnb == 0)
		{
			this.state.wi_tnb = false 
		}
		else
		{
			this.state.wi_tnb = true
		}
		
		if(this.props.obj.wi_addissue == 0)
		{
			this.state.wi_addissue = false 
		}
		else
		{
			this.state.wi_addissue = true
		}
		
		if(this.props.obj.wi_worked == 0)
		{
			this.state.wi_worked = false 
		}
		else
		{
			this.state.wi_worked = true
		}
		
		if(this.props.obj.wi_left == 0)
		{
			this.state.wi_left = false 
		}
		else
		{
			this.state.wi_left = true
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
					ilc_pages : this.state.ilc_pages,
					ilc_completed : this.state.ilc_completed,
					efts_num : this.state.efts_num,
					efts_completed :this.state.efts_completed,
					sc_wcupdates : this.state.sc_wcupdates,
					sc_wccorr : this.state.sc_wccorr,
					sc_nfcorr : this.state.sc_nfcorr,
					sc_to : this.state.sc_to,
					sc_de : this.state.sc_de,
					sc_tf : this.state.sc_tf,
					ccp_total : this.state.ccp_total,
					ccp_completed : this.state.ccp_completed,
					iar_nt : this.state.iar_nt,
					iar_completed :this.state.iar_completed,
					iar_updates : this.state.iar_updates,
					iar_completed1 : this.state.iar_completed1,
					wi_tnb : this.state.wi_tnb,
					wi_addissue : this.state.wi_addissue,
					wi_worked : this.state.wi_worked,
					wi_left : this.state.wi_left,
				};
		
		axios.post('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/update_cm2_access_sup.php', qs.stringify(obj))
		.then(res => 
		{
			if(res.data.done == true)
			{
				ReactDOM.render(<CM_Dash_Privileges user_id = {this.props.obj.supervisor_id}/>, document.getElementById('root'));
			}
			else
			{
				alert("Something went wrong. Please try again later! If problem persist, contact Sakshi.");
				ReactDOM.render(<CM_Dash_Privileges user_id = {this.props.obj.supervisor_id}/>, document.getElementById('root'));
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
		ReactDOM.render(<CM_Dash_Privileges user_id = {this.props.obj.supervisor_id}/>, document.getElementById('root'));
	}
	
	render()
	{
		const condition = this.state.isActive === -1;
		
		return (
				
				<tr style={{ backgroundColor: condition ? "#ff8080" : "white" }} >
					<td>
						{this.props.obj.fullname}
					</td>
					
					<td>
						<input type = "checkbox" name = "ilc_pages" checked = {this.state.ilc_pages} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "ilc_completed" checked = {this.state.ilc_completed} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "efts_num" checked = {this.state.efts_num} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "efts_completed" checked = {this.state.efts_completed} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "sc_wcupdates" checked = {this.state.sc_wcupdates} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "sc_wccorr" checked = {this.state.sc_wccorr} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "sc_nfcorr" checked = {this.state.sc_nfcorr} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "sc_to" checked = {this.state.sc_to} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "sc_de" checked = {this.state.sc_de} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "sc_tf" checked = {this.state.sc_tf} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "ccp_total" checked = {this.state.ccp_total} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "ccp_completed" checked = {this.state.ccp_completed} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "iar_nt" checked = {this.state.iar_nt} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "iar_completed" checked = {this.state.iar_completed} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "iar_updates" checked = {this.state.iar_updates} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "iar_completed1" checked = {this.state.iar_completed1} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "wi_tnb" checked = {this.state.wi_tnb} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "wi_addissue" checked = {this.state.wi_addissue} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "wi_worked" checked = {this.state.wi_worked} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "wi_left" checked = {this.state.wi_left} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<button className="btn btn-warning" onClick = {this.save}> Save </button>
					</td>
				</tr>

		);
	}
	
}

export default CM2_Access_emp