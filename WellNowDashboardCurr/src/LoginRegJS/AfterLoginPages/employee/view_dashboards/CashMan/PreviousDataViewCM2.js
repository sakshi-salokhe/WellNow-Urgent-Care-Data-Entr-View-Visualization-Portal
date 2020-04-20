import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"

class PreviousDataViewCM2 extends Component
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
						{this.props.obj.ilc_pages}
					</td>
					<td>
						{this.props.obj.ilc_completed}
					</td>
					<td>
						{this.props.obj.efts_num}
					</td>
					<td>
						{this.props.obj.efts_completed}
					</td>
					<td>
						{this.props.obj.sc_wcupdates}
					</td>
					<td>
						{this.props.obj.sc_wccorr }
					</td>
					<td>
						{this.props.obj.sc_nfcorr}
					</td>
					<td>
						{this.props.obj.sc_to}
					</td>
					<td>
						{this.props.obj.sc_de}
					</td>
					<td>
						{this.props.obj.sc_tf}
					</td>
					<td>
						{this.props.obj.ccp_total}
					</td>
					<td>
						{this.props.obj.ccp_completed}
					</td>
					<td>
						{this.props.obj.iar_nt}
					</td>
					<td>
						{this.props.obj.iar_completed}
					</td>
					<td>
						{this.props.obj.iar_updates}
					</td>
					<td>
						{this.props.obj.iar_completed1 }
					</td>
					<td>
						{this.props.obj.wi_tnb}
					</td>
					<td>
						{this.props.obj.wi_addissue}
					</td>
					<td>
						{this.props.obj.wi_worked}
					</td>
					<td>
						{this.props.obj.wi_left}
					</td>					
				</tr>

		);
	}
}

export default PreviousDataViewCM2