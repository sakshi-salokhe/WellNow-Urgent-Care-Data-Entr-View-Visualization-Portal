import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';

import IndexHeader from "../../../../IndexHeader";
import EditDashboardPrivileges from "../EditDashboardPrivileges"


class Pat_Support extends Component
{
	back()
	{
		ReactDOM.render(<EditDashboardPrivileges />, document.getElementById('root'));
	}
	
	render()
	{
		return (
			<div className = "container">
				
				<IndexHeader />
				<div className = "row">
					<div className = "col-lg-9 col-md-9 col-sm-9 col-xs-9">
						<h5> Patient Support Task Log Dashboard Privileges: </h5>
					</div>
					<div className = "col-lg-3 col-md-3 col-sm-3 col-xs-3">
						<button className="btn btn-info" onClick={this.back}> Back </button>
					</div>
				</div>
				
				<br />
				
				
			</div>
		)
	}
}

export default Pat_Support