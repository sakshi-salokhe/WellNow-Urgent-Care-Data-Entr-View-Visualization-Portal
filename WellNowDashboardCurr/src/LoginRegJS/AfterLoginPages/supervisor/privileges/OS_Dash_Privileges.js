import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';

import IndexHeader from "../../../../IndexHeader";
import SupervisorLogInPage from "../../SupervisorLogInPage"
import OS_Access_emp from "./OS_Access_emp"

class OS_Dash_Privileges extends Component
{
	
	constructor(props)
	{
		super(props);
		this.state = 
		{
			employees: []
		};
		
		this.back = this.back.bind(this);
	}
	
	componentDidMount()
	{
		axios.get("http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_os_access_sup.php?sup_id="+this.props.data.supervisor_id)
		.then(resp => {
			this.setState({ employees: resp.data });
			console.log(resp.data);
		})
		.catch(function(error){
			console.log(error);
		})
	}
	
	back()
	{
		ReactDOM.render(<SupervisorLogInPage user_id = {this.props.data.supervisor_id}/>, document.getElementById('root'));
	}
	
	userList()
	{
		return this.state.employees.map(function(object)
		{
			return <OS_Access_emp key={object.userid} obj={object} />;
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
								<th colSpan="2"> Ready To Print Queue </th>
								<th colSpan="6"> In-Limbo </th>
								<th colSpan="5"> Rejections/Attachments </th>
								<th colSpan="3"> Workbaskets/Email </th>
								<th colSpan="6"> Coding </th>
							</tr>
							<tr>
								<th> Date</th>
								<th> Print Queue Total </th>
								<th> # of WC </th>
								<th> RCM - Ins </th>
								<th> RCM - WC </th>
								<th> **NINS </th>
								<th> **NNF </th>
								<th> **NWC </th>
								<th> **ENL </th>
								<th> WS Prof  </th>
								<th> WS Prof Day </th>
								<th> WS Inst  </th>
								<th> WS Inst Day </th>
								<th> Attachments </th>
								<th> NF Updates </th>
								<th> WC Updates </th>
								<th> OS Email Inbox </th>
								<th> FFS Total </th>
								<th> FFS On-hold </th>
								<th> Coding Queue </th>
								<th> Coding Queue Days </th>
								<th> WS Coding  </th>
								<th> FFS On-hold Rpt </th>
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

export default OS_Dash_Privileges