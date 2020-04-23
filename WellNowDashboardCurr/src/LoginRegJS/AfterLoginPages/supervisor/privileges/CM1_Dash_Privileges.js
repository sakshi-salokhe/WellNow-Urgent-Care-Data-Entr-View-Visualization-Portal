import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';

import IndexHeader from "../../../../IndexHeader";
import CM_Dash_Privileges from "./CM_Dash_Privileges"
import CM1_Access_emp from "./CM1_Access_emp"

class CM1_Dash_Privileges extends Component
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
		axios.get("http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_cm1_access_sup.php?sup_id="+this.props.user_id)
		.then(resp => {
			this.setState({ employees: resp.data });
		})
		.catch(function(error){
			console.log(error);
		})
	}
	
	back()
	{
		ReactDOM.render(<CM_Dash_Privileges user_id = {this.props.user_id}/>, document.getElementById('root'));
	}
	
	userList()
	{
		return this.state.employees.map(function(object)
		{
			return <CM1_Access_emp key={object.userid} obj={object} />;
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
								<th colSpan="2"> Unapplied </th>
								<th colSpan="2"> Due To Refund </th>
								<th colSpan="3"> Patient Refund Workbasket </th>
								<th colSpan="3"> NCOA Refund /Thursdays ONLY </th>
							</tr>
							<tr>
								<th> Date</th>
								<th> Total  </th>
								<th> # worked </th>
								<th> Total Worked </th>
								<th> #added to issues log </th>
								<th> Total </th>
								<th> #worked </th>
								<th> #left </th>
								<th> # REFUNDS </th>
								<th> UPDATES </th>
								<th> SKIP TRACE </th>
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

export default CM1_Dash_Privileges