import React, {Component} from "react";
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import IndexHeader from "../../../../../IndexHeader";
import ViewCurrDataCM from "./ViewCurrDataCM"
import PreviousDataViewCM1 from './PreviousDataViewCM1'

class ViewCurrDataCM1 extends Component
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
	userList()
	{
		return this.props.data.map(function(object)
		{
			return <PreviousDataViewCM1 key={object.id} obj={object} />;
		});
	}
	
	back()
	{
		ReactDOM.render(<ViewCurrDataCM user_id = {this.props.user_id}/>, document.getElementById('root'));
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
							<h3 align="center"> CM-REFUNDDASH Dashboard </h3>
						</div>
					</div>
					<table className="table table-striped table-bordered" style={{marginTop: 20}}>
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
		)
	}
}

export default ViewCurrDataCM1