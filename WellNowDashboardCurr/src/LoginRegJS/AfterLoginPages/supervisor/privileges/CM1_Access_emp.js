import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';

import IndexHeader from "../../../../IndexHeader";
import CM_Dash_Privileges from "./CM_Dash_Privileges"
import CM1_Dash_Privileges from "./CM1_Dash_Privileges"

class CM1_Access_emp extends Component
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			un_total : false,
			un_worked : false,
			dtr_tw : false,
			dtr_issuelog :false,
			prw_total : false,
			prw_worked : false,
			prw_left : false,
			ncoa_refund : false,
			ncoa_updates : false,
			ncoa_skiptrace : false,
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
		
		if(this.props.obj.un_total == 0)
		{
			this.state.un_total = false 
		}
		else
		{
			this.state.un_total = true
		}
		
		if(this.props.obj.un_worked == 0)
		{
			this.state.un_worked = false 
		}
		else
		{
			this.state.un_worked = true
		}
		
		if(this.props.obj.dtr_tw == 0)
		{
			this.state.dtr_tw = false 
		}
		else
		{
			this.state.dtr_tw = true
		}
		
		if(this.props.obj.dtr_issuelog == 0)
		{
			this.state.dtr_issuelog = false 
		}
		else
		{
			this.state.dtr_issuelog = true
		}
		
		if(this.props.obj.prw_total == 0)
		{
			this.state.prw_total = false 
		}
		else
		{
			this.state.prw_total = true
		}
		
		if(this.props.obj.prw_worked == 0)
		{
			this.state.prw_worked = false 
		}
		else
		{
			this.state.prw_worked = true
		}
		
		if(this.props.obj.prw_left == 0)
		{
			this.state.prw_left = false 
		}
		else
		{
			this.state.prw_left = true
		}
		
		if(this.props.obj.ncoa_refund == 0)
		{
			this.state.ncoa_refund = false 
		}
		else
		{
			this.state.ncoa_refund = true
		}
		
		if(this.props.obj.ncoa_updates == 0)
		{
			this.state.ncoa_updates = false 
		}
		else
		{
			this.state.ncoa_updates = true
		}
		
		if(this.props.obj.ncoa_skiptrace == 0)
		{
			this.state.ncoa_skiptrace = false 
		}
		else
		{
			this.state.ncoa_skiptrace = true
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
					un_total : this.state.un_total,
					un_worked : this.state.un_worked,
					dtr_tw : this.state.dtr_tw,
					dtr_issuelog :this.state.dtr_issuelog,
					prw_total : this.state.prw_total,
					prw_worked : this.state.prw_worked,
					prw_left : this.state.prw_left,
					ncoa_refund : this.state.ncoa_refund,
					ncoa_updates : this.state.ncoa_updates,
					ncoa_skiptrace : this.state.ncoa_skiptrace,
				};
		
		axios.post('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/update_cm1_access_sup.php', qs.stringify(obj))
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
						<input type = "checkbox" name = "un_total" checked = {this.state.un_total} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "un_worked" checked = {this.state.un_worked} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "dtr_tw" checked = {this.state.dtr_tw} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "dtr_issuelog" checked = {this.state.dtr_issuelog} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "prw_total" checked = {this.state.prw_total} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "prw_worked" checked = {this.state.prw_worked} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "prw_left" checked = {this.state.prw_left} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "ncoa_refund" checked = {this.state.ncoa_refund} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "ncoa_updates" checked = {this.state.ncoa_updates} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<input type = "checkbox" name = "ncoa_skiptrace" checked = {this.state.ncoa_skiptrace} onChange = {this.onCheckChange} />
					</td>
					
					<td>
						<button className="btn btn-warning" onClick = {this.save}> Save </button>
					</td>
				</tr>

		);
	}
	
}

export default CM1_Access_emp