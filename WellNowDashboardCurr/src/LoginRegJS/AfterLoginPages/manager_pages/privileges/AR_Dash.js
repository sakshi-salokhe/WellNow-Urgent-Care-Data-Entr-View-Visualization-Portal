import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';

import IndexHeader from "../../../../IndexHeader";
import EditDashboardPrivileges from "../EditDashboardPrivileges"
import AR_Access_emp from "./AR_Access_emp"

class AR_Dash extends Component
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
		axios.get("http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_ar_access.php")
		.then(resp => {
			this.setState({ employees: resp.data });
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
			return <AR_Access_emp key={object.userid} obj={object} />;
		});
	}
	
	
	render()
	{
		return (
			
			<div className="container">
				
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
								<th colSpan = "7"> Work Basket </th>
								<th colSpan = "3"> Waystar </th>
								<th colSpan = "2"> </th>
							</tr>
							
							<tr>
								<td> <b> Full Name </b> </td>
								<td> <b> Tech/Other </b> </td>
								<td> <b> Demo / Elig </b> </td>
								<td> <b> Timely Filing </b> </td>
								<td> <b> Coding Replies </b> </td>
								<td> <b> Sup Reviews </b> </td>
								<td> <b> NF Corres </b> </td>
								<td> <b> WC Corres </b> </td>
								<td> <b> Waystar Medc Sec </b> </td>
								<td> <b> Waystar OOB </b> </td>
								<td> <b> Waystar Fidelis TF </b> </td>
								<td> <b> Action </b> </td>
								
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

export default AR_Dash