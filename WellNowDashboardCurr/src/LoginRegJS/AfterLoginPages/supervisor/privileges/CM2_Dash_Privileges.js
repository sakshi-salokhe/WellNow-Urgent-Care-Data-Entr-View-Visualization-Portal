import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';

import IndexHeader from "../../../../IndexHeader";
import CM_Dash_Privileges from "./CM_Dash_Privileges"
import CM2_Access_emp from "./CM2_Access_emp"

class CM2_Dash_Privileges extends Component
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
		axios.get("http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/get_cm2_access_sup.php?sup_id="+this.props.user_id)
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
			return <CM2_Access_emp key={object.userid} obj={object} />;
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
							{this.userList()}
						</tbody>
					</table>
				</div>
				
			</div>

		);
	}
}

export default CM2_Dash_Privileges