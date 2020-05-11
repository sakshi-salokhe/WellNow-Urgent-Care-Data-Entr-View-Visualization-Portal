import React, {Component} from "react"
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class PreviousDataViewCM1 extends Component
{
	render()
	{
		const condition = this.props.obj.when_done === 'Total' || this.props.obj.when_done === 'Average';
		return (
				<tr style = {{backgroundColor : condition ? "lightgray" : "white"}}>
					<td>
						{this.props.obj.when_done}
					</td>
					<td>
						{this.props.obj.un_total}
					</td>
					<td>
						{this.props.obj.un_worked}
					</td>
					<td>
						{this.props.obj.dtr_tw}
					</td>
					<td>
						{this.props.obj.dtr_issuelog}
					</td>
					<td>
						{this.props.obj.prw_total}
					</td>
					<td>
						{this.props.obj.prw_worked }
					</td>
					<td>
						{this.props.obj.prw_left}
					</td>
					<td>
						{this.props.obj.ncoa_refund}
					</td>
					<td>
						{this.props.obj.ncoa_updates}
					</td>
					<td>
						{this.props.obj.ncoa_skiptrace}
					</td>	
				</tr>
		);
	}
}

export default PreviousDataViewCM1