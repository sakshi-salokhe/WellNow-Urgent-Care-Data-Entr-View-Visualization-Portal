import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';

import IndexHeader from "../../../../IndexHeader";
import EditDashboardPrivileges from "../EditDashboardPrivileges"
import OM_Access_emp from "./OM_Access_emp"

class OM_Dash extends Component
{
	
	constructor(props)
	{
		super(props);
		this.state = 
		{
			employees: []
		};
	}
	
	componentDidMount()
	{
		axios.get("http://localhost:81/wellnowdash_backend/get_om_access.php")
		.then(resp => {
			this.setState({ employees: resp.data });
			console.log("get om access data",resp.dta);
		})
		.catch(function(error){
			console.log(error);
		})
	}
	
	back()
	{
		ReactDOM.render(<EditDashboardPrivileges />, document.getElementById('root'));
	}
	
	userList()
	{
		return this.state.employees.map(function(object)
		{
			return <OM_Access_emp key={object.userid} obj={object} />;
		});
	}
	
	
	render()
	{
		return (
			
			<div className="container-fluid">
				
				<IndexHeader />
				
				<div>
					<div className= "row">
						<div className = "col-lg-3 col-md-3 col-sm-3 col-cs-3">
							<button className="btn btn-primary" onClick={this.back}> Back </button>
						</div>
						<div className = "col-lg-9 col-md-9 col-sm-9 col-cs-9">
							<h3 align="center"> Active Employee List </h3>
						</div>
					</div>
					
					<table className="table table-striped table-bordered" style={{marginTop: 20 }}>
						<thead>
							<tr>
								<th> </th>
								<th colSpan="15"> Support </th>
								<th colSpan="5"> Coding </th>
								<th colSpan="7"> AR </th>
							</tr>
							<tr>
								<th> Date</th>
								<th> SP </th>
								<th> ENL </th>
								<th> DNU </th>
								<th> NYUCP </th>
								<th> NOM </th>
								<th> EMAILS </th>
								<th> DEPOSIT PULLS </th>
								<th> BLANK BATCH CORRES </th>
								<th> CORRESPON - DENCE </th>
								<th> ACCT AUDITS </th>
								<th> INV CORRECT </th>
								<th> PHONE </th>
								<th> INV ADDR </th>
								<th> COLLECTS </th>
								<th> MEDICAL RECORDS </th>
								<th> NA </th>
								<th> ON HOLDS </th>
								<th> CODING QUEUE </th>
								<th> ON SITES </th>
								<th> OOA'S </th>
								<th> 120+ </th>
								<th> 120+ (%) </th>
								<th> 90+ </th>
								<th> VOICEMAILS </th>
								<th> UNAPPLIED </th>
								<th> AUDIT </th>
								<th> WB's </th>
							</tr>
						</thead>
						<tbody>
							{this.userList()}
						</tbody>
					</table>
				</div>
				
			</div>

		);
	}
}

export default OM_Dash