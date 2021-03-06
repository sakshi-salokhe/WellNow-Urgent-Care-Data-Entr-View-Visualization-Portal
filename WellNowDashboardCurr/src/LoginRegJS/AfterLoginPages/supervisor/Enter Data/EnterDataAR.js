import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"

import SupervisorLogInPage from "../../SupervisorLogInPage"

class EnterDataAR extends Component
{
	
	constructor(props)
	{
		super(props);
		
		this.state = 
		{
			wb_tech_other : false,
			wb_demo_elig : false,
			wb_timely_filing : false,
			wb_coding_replies :false,
			wb_sup_reviews : false,
			wb_nf_corres : false,
			wb_wc_corres : false,
			waystar_medc_sec : false,
			waystar_oob : false,
			waystar_fidelis_tf : false,	
			
			wb_tech_other_val : this.props.data.wb_tech_other_PH,
			wb_demo_elig_val : this.props.data.wb_demo_elig_PH,
			wb_timely_filing_val : this.props.data.wb_timely_filing_PH,
			wb_coding_replies_val :this.props.data.wb_coding_replies_PH,
			wb_sup_reviews_val : this.props.data.wb_sup_reviews_PH,
			wb_nf_corres_val : this.props.data.wb_nf_corres_PH,
			wb_wc_corres_val : this.props.data.wb_wc_corres_PH,
			waystar_medc_sec_val : this.props.data.waystar_medc_sec_PH,
			waystar_oob_val : this.props.data.waystar_oob_PH,
			waystar_fidelis_tf_val : this.props.data.waystar_fidelis_tf_PH
			
		}
		
		if(this.props.data.wb_tech_other == 0)
		{
			this.state.wb_tech_other = false 
		}
		else
		{
			this.state.wb_tech_other = true
		}
		
		if(props.data.wb_demo_elig == 0)
		{
			this.state.wb_demo_elig = false 
		}
		else
		{
			this.state.wb_demo_elig = true
		}
		
		if(props.data.wb_timely_filing == 0)
		{
			this.state.wb_timely_filing = false 
		}
		else
		{
			this.state.wb_timely_filing = true
		}
		
		if(props.data.wb_coding_replies == 0)
		{
			this.state.wb_coding_replies = false 
		}
		else
		{
			this.state.wb_coding_replies = true
		}
		
		if(props.data.wb_sup_reviews == 0)
		{
			this.state.wb_sup_reviews = false 
		}
		else
		{
			this.state.wb_sup_reviews = true
		}
		
		if(props.data.wb_nf_corres == 0)
		{
			this.state.wb_nf_corres = false 
		}
		else
		{
			this.state.wb_nf_corres = true
		}
		
		if(props.data.wb_wc_corres == 0)
		{
			this.state.wb_wc_corres = false 
		}
		else
		{
			this.state.wb_wc_corres = true
		}
		
		if(props.data.waystar_medc_sec == 0)
		{
			this.state.waystar_medc_sec = false 
		}
		else
		{
			this.state.waystar_medc_sec = true
		}
		
		if(props.data.waystar_oob == 0)
		{
			this.state.waystar_oob = false 
		}
		else
		{
			this.state.waystar_oob = true
		}
		
		if(props.data.waystar_fidelis_tf == 0)
		{
			this.state.waystar_fidelis_tf = false 
		}
		else
		{
			this.state.waystar_fidelis_tf = true
		}
		
		console.log("this",this.state.waystar_fidelis_tf);
		
		this.onChangewb_tech_other = this.onChangewb_tech_other.bind(this)
		this.onChangewb_demo_elig = this.onChangewb_demo_elig.bind(this)
		this.onChangewb_timely_filing = this.onChangewb_timely_filing.bind(this)
		this.onChangewb_coding_replies = this.onChangewb_coding_replies.bind(this)
		this.onChangewb_sup_reviews = this.onChangewb_sup_reviews.bind(this)
		this.onChangewb_nf_corres = this.onChangewb_nf_corres.bind(this)
		this.onChangewb_wc_corres = this.onChangewb_wc_corres.bind(this)
		this.onChangewaystar_medc_sec = this.onChangewaystar_medc_sec.bind(this)
		this.onChangewaystar_oob = this.onChangewaystar_oob.bind(this)
		this.onChangewaystar_fidelis_tf = this.onChangewaystar_fidelis_tf.bind(this)
		
		this.save = this.save.bind(this)
		this.cancel = this.cancel.bind(this)
	
	}
	
	onChangewb_tech_other(e)
	{
		this.setState(
		{
			wb_tech_other_val: e.target.value
		})
	}
	
	onChangewb_demo_elig(e)
	{
		this.setState(
		{
			wb_demo_elig_val: e.target.value
		})
	}
	onChangewb_timely_filing(e)
	{
		this.setState(
		{
			wb_timely_filing_val: e.target.value
		})
	}
	onChangewb_coding_replies(e)
	{
		this.setState(
		{
			wb_coding_replies_val: e.target.value
		})
	}
	onChangewb_sup_reviews(e)
	{
		this.setState(
		{
			wb_sup_reviews_val: e.target.value
		})
	}
	onChangewb_nf_corres(e)
	{
		this.setState(
		{
			wb_nf_corres_val: e.target.value
		})
	}
	onChangewb_wc_corres(e)
	{
		this.setState(
		{
			wb_wc_corres_val: e.target.value
		})
	}
	onChangewaystar_medc_sec(e)
	{
		this.setState(
		{
			waystar_medc_sec_val: e.target.value
		})
	}
	onChangewaystar_oob(e)
	{
		this.setState(
		{
			waystar_oob_val: e.target.value
		})
	}
	
	onChangewaystar_fidelis_tf(e)
	{
		this.setState(
		{
			waystar_fidelis_tf_val: e.target.value
		})
	}
	
	save(event)
	{
		event.preventDefault();
		const obj = {
					userid : this.props.data.userid,
					wb_tech_other_val : this.state.wb_tech_other_val,
					wb_demo_elig_val : this.state.wb_demo_elig_val,
					wb_timely_filing_val : this.state.wb_timely_filing_val,
					wb_coding_replies_val :this.state.wb_coding_replies_val,
					wb_sup_reviews_val : this.state.wb_sup_reviews_val,
					wb_nf_corres_val : this.state.wb_nf_corres_val,
					wb_wc_corres_val : this.state.wb_wc_corres_val,
					waystar_medc_sec_val : this.state.waystar_medc_sec_val,
					waystar_oob_val : this.state.waystar_oob_val,
					waystar_fidelis_tf_val : this.state.waystar_fidelis_tf_val
				};
		console.log(obj);
		
		axios.get('http://localhost:81/wellnowdash_backend/check_ar.php')
		.then(
			res => {
				//console.log(res.data);
				if(res.data.ans_val == 1)//data exists already , perform update
				{
					console.log("we will update");
					//console.log("obj=",obj);
					axios.post('http://localhost:81/wellnowdash_backend/update_data_ar.php', qs.stringify(obj))
					.then(res => 
						{
							console.log(res.data);
							if(res.data.entered == 1)
							{
								alert("Successfully entered your data.")
								ReactDOM.render(<SupervisorLogInPage user_id = {obj.userid} />, document.getElementById('root'));
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
					axios.post('http://localhost:81/wellnowdash_backend/insert_data_ar.php', qs.stringify(obj))
					.then(res => 
						{
							console.log(res.data);
							if(res.data.entered == 1)
							{
								alert("Successfully entered your data.")
								ReactDOM.render(<SupervisorLogInPage user_id = {obj.userid} />, document.getElementById('root'));
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
		ReactDOM.render(<SupervisorLogInPage user_id = {obj.userid} />, document.getElementById('root'));
	}
	
	render()
	{
		var data = this.props.data;
		var user_id = this.props.data.userid;
		
		return (
			<div className = "container">
				<h3> Enter Data </h3>
				
				<form className="form-horizontal">
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> wb_tech_other_val: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.wb_tech_other_PH} value = {this.state.wb_tech_other_val} name = "wb_tech_other_val" onChange = {this.onChangewb_tech_other} disabled={this.state.wb_tech_other === true ? false : true} />
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> wb_demo_elig_val: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.wb_demo_elig_PH} value = {this.state.wb_demo_elig_val} name = "wb_demo_elig_val" onChange = {this.onChangewb_demo_elig} disabled={this.state.wb_demo_elig === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> wb_timely_filing_val: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.wb_timely_filing_PH} value = {this.state.wb_timely_filing_val} name = "wb_timely_filing_val" onChange = {this.onChangewb_timely_filing} disabled={this.state.wb_timely_filing === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> wb_coding_replies_val: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.wb_coding_replies_PH} value = {this.state.wb_coding_replies_val} name = "wb_coding_replies_val" onChange = {this.onChangewb_coding_replies} disabled={this.state.wb_coding_replies === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> wb_sup_reviews_val: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.wb_sup_reviews_PH} value = {this.state.wb_sup_reviews_val} name = "wb_sup_reviews_val" onChange = {this.onChangewb_sup_reviews} disabled={this.state.wb_sup_reviews === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> wb_nf_corres_val: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.wb_nf_corres_PH} value = {this.state.wb_nf_corres_val} name = "wb_nf_corres_val" onChange = {this.onChangewb_nf_corres} disabled={this.state.wb_nf_corres === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> wb_wc_corres_val: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.wb_wc_corres_PH} value = {this.state.wb_wc_corres_val} name = "wb_wc_corres_val" onChange = {this.onChangewb_wc_corres} disabled={this.state.wb_wc_corres === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> waystar_medc_sec_val: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.waystar_medc_sec_PH} value = {this.state.waystar_medc_sec_val} name = "waystar_medc_sec_val" onChange = {this.onChangewaystar_medc_sec} disabled={this.state.waystar_medc_sec === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> waystar_oob_val: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.waystar_oob_PH} value = {this.state.waystar_oob_val} name = "waystar_oob_val" onChange = {this.onChangewaystar_oob} disabled={this.state.waystar_oob === true ? false : true}/>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> waystar_fidelis_tf_val: </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "number" placeholder = {this.props.data.waystar_fidelis_tf_PH} value = {this.state.waystar_fidelis_tf_val} name = "waystar_fidelis_tf_val" onChange = {this.onChangewaystar_fidelis_tf} disabled={this.state.waystar_fidelis_tf === true ? false : true}/>
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

export default EnterDataAR