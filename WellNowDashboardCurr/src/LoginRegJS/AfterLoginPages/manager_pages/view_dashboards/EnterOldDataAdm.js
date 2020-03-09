import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"


import IndexHeader from "../../../../IndexHeader";
import ManagerLogInPage from "../../ManagerLogInPage"

import EnterOldDataAR from "./enter_old_data/EnterOldDataAR"
import EnterOldDataOS from "./enter_old_data/EnterOldDataOS"
import EnterOldDataOM from "./enter_old_data/EnterOldDataOM"
//import EnterOldDataPat_Support from "./enter_old_data/EnterOldDataPat_Support"

class EnterOldDataAdm extends Component
{
	constructor(props)
	{
		super(props);
		
		this.EnterOldDataAR = this.EnterOldDataAR.bind(this);
		this.EnterOldDataOM = this.EnterOldDataOM.bind(this);
		
		this.submit_data = this.submit_data.bind(this);
		
		this.state = 
		{
			olddate : "",
			dashboards: "",
		}
		this.onchangeOldDate = this.onchangeOldDate.bind(this);
		this.onchangedashboards = this.onchangedashboards.bind(this);
	}
	
	home()
	{
		ReactDOM.render(<ManagerLogInPage />, document.getElementById('root'));
	}
	
	onchangeOldDate(e)
	{
		this.setState({
			olddate: e.target.value
		});
	}
	
	onchangedashboards(e)
	{
		this.setState({
			dashboards: e.target.value
		});
	}
	
	submit_data()
	{
		const obj = {
				olddate : this.state.olddate,
				dashboards: this.state.dashboards
			};
		if(obj.olddate.length == 0 || obj.dashboards.length == 0)
		{
			alert("Fill out all the fields!");
		}
		if(obj.dashboards == 1 || obj.dashboards == '1')
		{
			axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/enter_old_data_admin.php?dashboards=1&olddate='+obj.olddate)
			.then(
				res => {
					if(res.data.dashboard == 1 || res.data.dashboard == '1')
					{
						console.log(res.data);
						ReactDOM.render(<EnterOldDataAR data = {res.data}/>, document.getElementById('root'));
					}
					else
					{
						alert('something wrong');
						//put the other dashboard code here
					}
				})
			.catch(err => console.log(err))
		}
		else if(obj.dashboards == 2 || obj.dashboards == '2')
		{
			axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/enter_old_data_admin.php?dashboards=2&olddate='+obj.olddate)
			.then(
				res => {
					console.log("res:", res);
					if(res.data.dashboard == 2 || res.data.dashboard == '2')
					{
						console.log(res.data);
						ReactDOM.render(<EnterOldDataOS data = {res.data}/>, document.getElementById('root'));
					}
					else
					{
						alert('something wrong');
						//put the other dashboard code here
					}
				})
			.catch(err => console.log(err))
		}
		else if(obj.dashboards == 3 || obj.dashboards == '3')
		{
			axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/enter_old_data_admin.php?dashboards=3&olddate='+obj.olddate)
			.then(
				res => {
					console.log("res:", res);
					if(res.data.dashboard == 3 || res.data.dashboard == '3')
					{
						console.log(res.data);
						ReactDOM.render(<EnterOldDataOM data = {res.data}/>, document.getElementById('root'));
					}
					else
					{
						alert('something wrong');
						//put the other dashboard code here
					}
				})
			.catch(err => console.log(err))
		}
		else{
			alert('need to code other dashboards');
		}
		
	}
	
	EnterOldDataAR()
	{
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/enter_data_admin.php?dashboards=')
		.then(
			res => {
				if(res.data.dashboard == 1 || res.data.dashboard == '1')
				{
					console.log(res.data);
					ReactDOM.render(<EnterOldDataAR data = {res.data}/>, document.getElementById('root'));
				}
				else
				{
					alert('something wrong');
					//put the other dashboard code here
				}
			})
		.catch(err => console.log(err))
	}
	
	EnterOldDataOS()
	{
		//ReactDOM.render(<EnterOldDataOS />, document.getElementById('root'));
	}
	
	EnterOldDataOM()
	{
		axios.get('http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/enter_data_admin.php?dashboards=')
		.then(
			res => {
				if(res.data.dashboard == 3 || res.data.dashboard == '3')
				{
					console.log(res.data);
					ReactDOM.render(<EnterOldDataOM data = {res.data}/>, document.getElementById('root'));
				}
				else
				{
					alert('something wrong');
					//put the other dashboard code here
				}
			})
		.catch(err => console.log(err))
	}
	
	EnterOldDataPat_Support()
	{
		//ReactDOM.render(<EnterOldDataPat_Support />, document.getElementById('root'));
	}
	
	
	render()
	{
		return (
			<div className = "container">
				
				<IndexHeader />
				<div className = "row">
					<div className = "col-lg-9 col-md-9 col-sm-9 col-xs-9">
						<h5> Choose a Dashboard to enter the data: </h5>
					</div>
					<div className = "col-lg-3 col-md-3 col-sm-3 col-xs-3">
						<button className="btn btn-info" onClick={this.home}> Home </button>
					</div>
				</div>
				
				<br />
				
				<form className="form-horizontal">
					<div className="form-group">
						<div className="col-lg-3 col-sm-3 col-md-3 col-xs-3"><b> Choose your dashboard: </b></div>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<select className = "form-control" value = {this.state.dashboards} name = "dashboards" onChange = {this.onchangedashboards}>
								<option value="">--Please Choose your dashboard -- </option>
								<option value="1"> AR Dashboard </option>
								<option value="2"> OS Dashboard </option>
								<option value="3"> OM Dashboard </option>
								<option value="4"> Patient Support Task Log </option>
							</select>
						</div>
						
						<div className="col-lg-1 col-sm-1 col-md-1 col-xs-1"> </div>
					</div>
					
					<div className="form-group">
						<label className="col-lg-2 col-sm-2 col-md-2 col-xs-2"><b> Choose the date : </b></label>
						
						<div className="col-lg-8 col-sm-8 col-md-8 col-xs-8">
							<input className = "form-control" type = "date" value = {this.state.olddate} name = "olddate" onChange = {this.onchangeOldDate} /> 
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
					
					<div className="form-group">
						<div className="col-lg-10 col-sm-10 col-md-10 col-xs-10">
							<button type="button" className="btn btn-warning" onClick={this.submit_data}> Submit </button>
							&nbsp;&nbsp;&nbsp;
							<button type="button" className="btn btn-primary" onClick={this.home}> Cancel </button>
						</div>
						
						<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
					</div>
				</form>
			</div>
		)
	}
}

export default EnterOldDataAdm