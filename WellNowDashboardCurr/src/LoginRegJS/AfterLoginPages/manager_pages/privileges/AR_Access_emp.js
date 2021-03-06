import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';

import IndexHeader from "../../../../IndexHeader";
import AR_Dash from "./AR_Dash"
import EditDashboardPrivileges from "../EditDashboardPrivileges"

class AR_Access_emp extends Component
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			check_wb_tech_other : false,
			wb_demo_elig : false,
			wb_timely_filing : false,
			wb_coding_replies :false,
			wb_sup_reviews : false,
			wb_nf_corres : false,
			wb_wc_corres : false,
			waystar_medc_sec : false,
			waystar_oob : false,
			waystar_fidelis_tf : false,
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
		
		if(this.props.obj.wb_tech_other == 0)
		{
			this.state.check_wb_tech_other = false 
		}
		else
		{
			this.state.check_wb_tech_other = true
		}
		
		if(this.props.obj.wb_demo_elig == 0)
		{
			this.state.wb_demo_elig = false 
		}
		else
		{
			this.state.wb_demo_elig = true
		}
		
		if(this.props.obj.wb_timely_filing == 0)
		{
			this.state.wb_timely_filing = false 
		}
		else
		{
			this.state.wb_timely_filing = true
		}
		
		if(this.props.obj.wb_coding_replies == 0)
		{
			this.state.wb_coding_replies = false 
		}
		else
		{
			this.state.wb_coding_replies = true
		}
		
		if(this.props.obj.wb_sup_reviews == 0)
		{
			this.state.wb_sup_reviews = false 
		}
		else
		{
			this.state.wb_sup_reviews = true
		}
		
		if(this.props.obj.wb_nf_corres == 0)
		{
			this.state.wb_nf_corres = false 
		}
		else
		{
			this.state.wb_nf_corres = true
		}
		
		if(this.props.obj.wb_wc_corres == 0)
		{
			this.state.wb_wc_corres = false 
		}
		else
		{
			this.state.wb_wc_corres = true
		}
		
		if(this.props.obj.waystar_medc_sec == 0)
		{
			this.state.waystar_medc_sec = false 
		}
		else
		{
			this.state.waystar_medc_sec = true
		}
		
		if(this.props.obj.waystar_oob == 0)
		{
			this.state.waystar_oob = false 
		}
		else
		{
			this.state.waystar_oob = true
		}
		
		if(this.props.obj.waystar_fidelis_tf == 0)
		{
			this.state.waystar_fidelis_tf = false 
		}
		else
		{
			this.state.waystar_fidelis_tf = true
		}
		
		this.onCheckChangecheck_wb_tech_other = this.onCheckChangecheck_wb_tech_other.bind(this)
		this.onCheckChangewb_demo_elig = this.onCheckChangewb_demo_elig.bind(this)
		this.onCheckChangewb_timely_filing = this.onCheckChangewb_timely_filing.bind(this)
		this.onCheckChangewb_coding_replies = this.onCheckChangewb_coding_replies.bind(this)
		this.onCheckChangewb_sup_reviews = this.onCheckChangewb_sup_reviews.bind(this)
		this.onCheckChangewb_nf_corres = this.onCheckChangewb_nf_corres.bind(this)
		this.onCheckChangewb_wc_corres = this.onCheckChangewb_wc_corres.bind(this)
		this.onCheckChangewaystar_medc_sec = this.onCheckChangewaystar_medc_sec.bind(this)
		this.onCheckChangewaystar_oob = this.onCheckChangewaystar_oob.bind(this)
		this.onCheckChangewaystar_fidelis_tf = this.onCheckChangewaystar_fidelis_tf.bind(this)
		
		this.save = this.save.bind(this)
	}
	
	save(event)
	{
		event.preventDefault();
		const obj = {
					userid : this.props.obj.userid,
					fullname : this.props.obj.fullname,
					check_wb_tech_other : this.state.check_wb_tech_other,
					wb_demo_elig : this.state.wb_demo_elig,
					wb_timely_filing : this.state.wb_timely_filing,
					wb_coding_replies :this.state.wb_coding_replies,
					wb_sup_reviews : this.state.wb_sup_reviews,
					wb_nf_corres : this.state.wb_nf_corres,
					wb_wc_corres : this.state.wb_wc_corres,
					waystar_medc_sec : this.state.waystar_medc_sec,
					waystar_oob : this.state.waystar_oob,
					waystar_fidelis_tf : this.state.waystar_fidelis_tf,
				};
		console.log(obj);
		
		axios.post('http://localhost:81/wellnowdash_backend/update_ar_access.php', qs.stringify(obj))
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
	
	onCheckChangecheck_wb_tech_other(e)
	{
		this.setState(
		{
			check_wb_tech_other: e.target.checked
		})
	}
	onCheckChangewb_demo_elig(e)
	{
		this.setState(
		{
			wb_demo_elig: e.target.checked
		})
	}
	onCheckChangewb_timely_filing(e)
	{
		this.setState(
		{
			wb_timely_filing: e.target.checked
		})
	}
	onCheckChangewb_coding_replies(e)
	{
		this.setState(
		{
			wb_coding_replies: e.target.checked
		})
	}
	onCheckChangewb_sup_reviews(e)
	{
		this.setState(
		{
			wb_sup_reviews: e.target.checked
		})
	}
	onCheckChangewb_nf_corres(e)
	{
		this.setState(
		{
			wb_nf_corres: e.target.checked
		})
	}
	onCheckChangewb_wc_corres(e)
	{
		this.setState(
		{
			wb_wc_corres: e.target.checked
		})
	}
	onCheckChangewaystar_medc_sec(e)
	{
		this.setState(
		{
			waystar_medc_sec: e.target.checked
		})
	}
	onCheckChangewaystar_oob(e)
	{
		this.setState(
		{
			waystar_oob: e.target.checked
		})
	}
	
	onCheckChangewaystar_fidelis_tf(e)
	{
		console.log(e.target.checked);
		this.setState(
		{
			waystar_fidelis_tf: e.target.checked
		})
	}
	
	cancel()
	{
		ReactDOM.render(<AR_Dash />, document.getElementById('root'));
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
						<input type = "checkbox" name = "check_wb_tech_other" checked = {this.state.check_wb_tech_other} onChange = {this.onCheckChangecheck_wb_tech_other} />
					</td>
					
					<td>
						<input type = "checkbox" name = "wb_demo_elig" checked = {this.state.wb_demo_elig} onChange = {this.onCheckChangewb_demo_elig} />
					</td>
					
					<td>
						<input type = "checkbox" name = "wb_timely_filing" checked = {this.state.wb_timely_filing} onChange = {this.onCheckChangewb_timely_filing} />
					</td>
					
					<td>
						<input type = "checkbox" name = "wb_coding_replies" checked = {this.state.wb_coding_replies} onChange = {this.onCheckChangewb_coding_replies} />
					</td>
					
					<td>
						<input type = "checkbox" name = "wb_sup_reviews" checked = {this.state.wb_sup_reviews} onChange = {this.onCheckChangewb_sup_reviews} />
					</td>
					
					<td>
						<input type = "checkbox" name = "wb_nf_corres" checked = {this.state.wb_nf_corres} onChange = {this.onCheckChangewb_nf_corres} />
					</td>
					
					<td>
						<input type = "checkbox" name = "wb_wc_corres" checked = {this.state.wb_wc_corres} onChange = {this.onCheckChangewb_wc_corres} />
					</td>
					
					<td>
						<input type = "checkbox" name = "waystar_medc_sec" checked = {this.state.waystar_medc_sec} onChange = {this.onCheckChangewaystar_medc_sec} />
					</td>
					
					<td>
						<input type = "checkbox" name = "waystar_oob" checked = {this.state.waystar_oob} onChange = {this.onCheckChangewaystar_oob} />
					</td>
					
					<td>
						<input type = "checkbox" name = "waystar_fidelis_tf" checked = {this.state.waystar_fidelis_tf} onChange = {this.onCheckChangewaystar_fidelis_tf} />
					</td>
					
					<td>
						<button className="btn btn-warning" onClick = {this.save}> Save </button>
					</td>
				</tr>

		);
	}
	
}

export default AR_Access_emp