import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"

import EnterDataCM from "./EnterDataCM"

class EnterDataCM2 extends Component
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
			
			ilc_pages_val : this.props.data.ilc_pages_PH,
			ilc_completed_val : this.props.data.ilc_completed_PH,
			efts_num_val : this.props.data.efts_num_PH,
			efts_completed_val :this.props.data.efts_completed_PH,
			sc_wcupdates_val : this.props.data.sc_wcupdates_PH,
			sc_wccorr_val : this.props.data.sc_wccorr_PH,
			sc_nfcorr_val : this.props.data.sc_nfcorr_PH,
			sc_to_val : this.props.data.sc_to_PH,
			sc_de_val : this.props.data.sc_de_PH,
			sc_tf_val : this.props.data.sc_tf_PH,
			ccp_total_val : this.props.data.ccp_total_PH,
			ccp_completed_val : this.props.data.ccp_completed_PH,
			iar_nt_val : this.props.data.iar_nt_PH,
			iar_completed_val :this.props.data.iar_completed_PH,
			iar_updates_val : this.props.data.iar_updates_PH,
			iar_completed1_val : this.props.data.iar_completed1_PH,
			wi_tnb_val : this.props.data.wi_tnb_PH,
			wi_addissue_val : this.props.data.wi_addissue_PH,
			wi_worked_val : this.props.data.wi_worked_PH,
			wi_left_val : this.props.data.wi_left_PH
		}
		
		if(this.props.data.ilc_pages == 0)
		{
			this.state.ilc_pages = false 
		}
		else
		{
			this.state.ilc_pages = true
		}
		
		if(props.data.ilc_completed == 0)
		{
			this.state.ilc_completed = false 
		}
		else
		{
			this.state.ilc_completed = true
		}
		
		if(props.data.efts_num == 0)
		{
			this.state.efts_num = false 
		}
		else
		{
			this.state.efts_num = true
		}
		
		if(props.data.efts_completed == 0)
		{
			this.state.efts_completed = false 
		}
		else
		{
			this.state.efts_completed = true
		}
		
		if(props.data.sc_wcupdates == 0)
		{
			this.state.sc_wcupdates = false 
		}
		else
		{
			this.state.sc_wcupdates = true
		}
		
		if(props.data.sc_wccorr == 0)
		{
			this.state.sc_wccorr = false 
		}
		else
		{
			this.state.sc_wccorr = true
		}
		
		if(props.data.sc_nfcorr == 0)
		{
			this.state.sc_nfcorr = false 
		}
		else
		{
			this.state.sc_nfcorr = true
		}
		
		if(props.data.sc_to == 0)
		{
			this.state.sc_to = false 
		}
		else
		{
			this.state.sc_to = true
		}
		
		if(props.data.sc_de == 0)
		{
			this.state.sc_de = false 
		}
		else
		{
			this.state.sc_de = true
		}
		
		if(props.data.sc_tf == 0)
		{
			this.state.sc_tf = false 
		}
		else
		{
			this.state.sc_tf = true
		}
		
		if(this.props.data.ccp_total == 0)
		{
			this.state.ccp_total = false 
		}
		else
		{
			this.state.ccp_total = true
		}
		
		if(props.data.ccp_completed == 0)
		{
			this.state.ccp_completed = false 
		}
		else
		{
			this.state.ccp_completed = true
		}
		
		if(props.data.iar_nt == 0)
		{
			this.state.iar_nt = false 
		}
		else
		{
			this.state.iar_nt = true
		}
		
		if(props.data.iar_completed == 0)
		{
			this.state.iar_completed = false 
		}
		else
		{
			this.state.iar_completed = true
		}
		
		if(props.data.iar_updates == 0)
		{
			this.state.iar_updates = false 
		}
		else
		{
			this.state.iar_updates = true
		}
		
		if(props.data.iar_completed1 == 0)
		{
			this.state.iar_completed1 = false 
		}
		else
		{
			this.state.iar_completed1 = true
		}
		
		if(props.data.wi_tnb == 0)
		{
			this.state.wi_tnb = false 
		}
		else
		{
			this.state.wi_tnb = true
		}
		
		if(props.data.wi_addissue == 0)
		{
			this.state.wi_addissue = false 
		}
		else
		{
			this.state.wi_addissue = true
		}
		
		if(props.data.wi_worked == 0)
		{
			this.state.wi_worked = false 
		}
		else
		{
			this.state.wi_worked = true
		}
		
		if(props.data.wi_left == 0)
		{
			this.state.wi_left = false 
		}
		else
		{
			this.state.wi_left = true
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
					ilc_pages_val : this.state.ilc_pages_val,
					ilc_completed_val : this.state.ilc_completed_val,
					efts_num_val : this.state.efts_num_val,
					efts_completed_val : this.state.efts_completed_val,
					sc_wcupdates_val : this.state.sc_wcupdates_val,
					sc_wccorr_val : this.state.sc_wccorr_val,
					sc_nfcorr_val : this.state.sc_nfcorr_val,
					sc_to_val : this.state.sc_to_val,
					sc_de_val : this.state.sc_de_val,
					sc_tf_val : this.state.sc_tf_val,
					ccp_total_val : this.state.ccp_total_val,
					ccp_completed_val : this.state.ccp_completed_val,
					iar_nt_val : this.state.iar_nt_val,
					iar_completed_val : this.state.iar_completed_val,
					iar_updates_val : this.state.iar_updates_val,
					iar_completed1_val : this.state.iar_completed1_val,
					wi_tnb_val : this.state.wi_tnb_val,
					wi_addissue_val : this.state.wi_addissue_val,
					wi_worked_val : this.state.wi_worked_val,
					wi_left_val : this.state.wi_left_val
				};
		
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/check_cm2.php')
		.then(
			res => {
				
				if(res.data.ans_val == 1)//data exists already , perform update
				{
					
					axios.post('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/update_data_cm2.php', qs.stringify(obj))
					.then(res => 
						{
							
							if(res.data.entered == 1)
							{
								alert("Successfully entered your data.")
								ReactDOM.render(<EnterDataCM user_id = {obj.userid} />, document.getElementById('root'));
							}
							else
							{
								alert("There was some error. Please try again later.")
							}
						})
				}
				else //data exists already , perform update
				{
					axios.post('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/insert_data_cm2.php', qs.stringify(obj))
					.then(res => 
						{
							if(res.data.entered == 1)
							{
								alert("Successfully entered your data.")
								ReactDOM.render(<EnterDataCM user_id = {obj.userid} />, document.getElementById('root'));
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
		ReactDOM.render(<EnterDataCM user_id = {obj.userid} />, document.getElementById('root'));
	}
	
	render()
	{
		var data = this.props.data;
		var user_id = this.props.data.userid;
		
		return (
			<div className = "container-fluid">
			<br />
			<br />
			
				<h3> Enter Data </h3>
				<br />
				<br />
				
				<form>
					<table className="table table-striped table-bordered" style={{marginTop: 20}}>
						<thead>
							<tr>
								<th> </th>
								<th colSpan="2"> INSURANCE LBX CORR </th>
								<th colSpan="2"> EFTS </th>
								<th colSpan="6"> SCANNING </th>
								<th colSpan="2"> CREDIT CARD PROCESSING </th>
								<th colSpan="4"> INVALID ADDRESS/RECD IN MAIL ONLY </th>
								<th colSpan="4"> WAYSTAR INVALIDS </th>
							</tr>
							<tr>
								<th> Date</th>
								<th> # PAGES  </th>
								<th> COMPLETED </th>
								<th> # </th>
								<th> COMPLETED </th>
								<th> W/C UPDATES </th>
								<th> W/C CORR </th>
								<th> NF CORR </th>
								<th> T/O </th>
								<th> D/E </th>
								<th> TIMELY FILING </th>
								<th> # TOTAL  </th>
								<th> completed </th>
								<th> NEEDS TRACED </th>
								<th> COMPLETED </th>
								<th> UPDATES </th>
								<th> COMPLETED </th>
								<th> TOTAL NUMBER IN BATCH </th>
								<th> ADDRESS ISSUES </th>
								<th> # worked </th>
								<th> # left </th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td> 
									{this.props.data.when_done}
								</td>
								
								<td> 
									<input className = "form-control" type = "number" placeholder = {this.props.data.ilc_pages_PH} value = {this.state.ilc_pages_val} name = "ilc_pages_val" onChange = {this.onChange} disabled={this.state.ilc_pages === true ? false : true} />
								</td>
								<td>
									<select className = "form-control" value = {this.state.ilc_completed_val} name = "ilc_completed_val" onChange = {this.onChange} placeholder = {this.props.data.ilc_completed_PH} disabled={this.state.ilc_completed === true ? false : true}>
										<option value="">--Choose value -- </option>
										<option value="Y"> Y </option>
										<option value="N"> N </option>
									</select>
								</td>
								
								<td> 
									<input className = "form-control" type = "number" placeholder = {this.props.data.efts_num_PH} value = {this.state.efts_num_val} name = "efts_num_val" onChange = {this.onChange} disabled={this.state.efts_num === true ? false : true} />
								</td>
								<td>
									<select className = "form-control" value = {this.state.efts_completed_val} name = "efts_completed_val" onChange = {this.onChange} placeholder = {this.props.data.efts_completed_PH} disabled={this.state.efts_completed === true ? false : true}>
										<option value="">--Choose value -- </option>
										<option value="Y"> Y </option>
										<option value="N"> N </option>
									</select>
								</td>
								
								<td>
									<select className = "form-control" value = {this.state.sc_wcupdates_val} name = "sc_wcupdates_val" onChange = {this.onChange} placeholder = {this.props.data.sc_wcupdates_PH} disabled={this.state.sc_wcupdates === true ? false : true}>
										<option value="">--Choose value -- </option>
										<option value="Y"> Y </option>
										<option value="N"> N </option>
									</select>
								</td>
								<td>
									<select className = "form-control" value = {this.state.sc_wccorr_val} name = "sc_wccorr_val" onChange = {this.onChange} placeholder = {this.props.data.sc_wccorr_PH} disabled={this.state.sc_wccorr === true ? false : true}>
										<option value="">--Choose value -- </option>
										<option value="Y"> Y </option>
										<option value="N"> N </option>
									</select>
								</td>
								<td>
									<select className = "form-control" value = {this.state.sc_nfcorr_val} name = "sc_nfcorr_val" onChange = {this.onChange} placeholder = {this.props.data.sc_nfcorr_PH} disabled={this.state.sc_nfcorr === true ? false : true}>
										<option value="">--Choose value -- </option>
										<option value="Y"> Y </option>
										<option value="N"> N </option>
									</select>
								</td>
								<td>
									<select className = "form-control" value = {this.state.sc_to_val} name = "sc_to_val" onChange = {this.onChange} placeholder = {this.props.data.sc_to_PH} disabled={this.state.sc_to === true ? false : true}>
										<option value="">--Choose value -- </option>
										<option value="Y"> Y </option>
										<option value="N"> N </option>
									</select>
								</td>
								<td>
									<select className = "form-control" value = {this.state.sc_de_val} name = "sc_de_val" onChange = {this.onChange} placeholder = {this.props.data.sc_de_PH} disabled={this.state.sc_de === true ? false : true}>
										<option value="">--Choose value -- </option>
										<option value="Y"> Y </option>
										<option value="X"> X </option>
									</select>
								</td>
								<td>
									<select className = "form-control" value = {this.state.sc_tf_val} name = "sc_tf_val" onChange = {this.onChange} placeholder = {this.props.data.sc_tf_PH} disabled={this.state.sc_tf === true ? false : true}>
										<option value="">--Choose value -- </option>
										<option value="Y"> Y </option>
										<option value="N"> N </option>
									</select>
								</td>
								
								<td> 
									<input className = "form-control" type = "number" placeholder = {this.props.data.ccp_total_PH} value = {this.state.ccp_total_val} name = "ccp_total_val" onChange = {this.onChange} disabled={this.state.ccp_total === true ? false : true} />
								</td>
								<td> 
									<input className = "form-control" type = "number" placeholder = {this.props.data.ccp_completed_PH} value = {this.state.ccp_completed_val} name = "ccp_completed_val" onChange = {this.onChange} disabled={this.state.ccp_completed === true ? false : true} />
								</td>
								
								<td> 
									<input className = "form-control" type = "text" placeholder = {this.props.data.iar_nt_PH} value = {this.state.iar_nt_val} name = "iar_nt_val" onChange = {this.onChange} disabled={this.state.iar_nt === true ? false : true} />
								</td>
								<td> 
									<input className = "form-control" type = "text" placeholder = {this.props.data.iar_completed_PH} value = {this.state.iar_completed_val} name = "iar_completed_val" onChange = {this.onChange} disabled={this.state.iar_completed === true ? false : true} />
								</td>
								<td> 
									<input className = "form-control" type = "text" placeholder = {this.props.data.iar_updates_PH} value = {this.state.iar_updates_val} name = "iar_updates_val" onChange = {this.onChange} disabled={this.state.iar_updates === true ? false : true} />
								</td>
								<td> 
									<input className = "form-control" type = "text" placeholder = {this.props.data.iar_completed1_PH} value = {this.state.iar_completed1_val} name = "iar_completed1_val" onChange = {this.onChange} disabled={this.state.iar_completed1 === true ? false : true} />
								</td>
								
								<td> 
									<input className = "form-control" type = "text" placeholder = {this.props.data.wi_tnb_PH} value = {this.state.wi_tnb_val} name = "wi_tnb_val" onChange = {this.onChange} disabled={this.state.wi_tnb === true ? false : true} />
								</td>
								<td> 
									<input className = "form-control" type = "number" placeholder = {this.props.data.wi_addissue_PH} value = {this.state.wi_addissue_val} name = "wi_addissue_val" onChange = {this.onChange} disabled={this.state.wi_addissue === true ? false : true} />
								</td>
								<td> 
									<input className = "form-control" type = "number" placeholder = {this.props.data.wi_worked_PH} value = {this.state.wi_worked_val} name = "wi_worked_val" onChange = {this.onChange} disabled={this.state.wi_worked === true ? false : true} />
								</td>
								<td> 
									<input className = "form-control" type = "number" placeholder = {this.props.data.wi_left_PH} value = {this.state.wi_left_val} name = "wi_left_val" onChange = {this.onChange} disabled={this.state.wi_left === true ? false : true} />
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

export default EnterDataCM2