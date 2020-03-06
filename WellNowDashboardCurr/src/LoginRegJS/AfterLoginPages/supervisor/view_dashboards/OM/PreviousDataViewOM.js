import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"


class PreviousDataViewOM extends Component
{
	render()
	{
		console.log("FINALLY",this.props);
		const condition = this.props.obj.when_done === 'Total' || this.props.obj.when_done === 'Average';
		return (
				<tr style = {{backgroundColor : condition ? "lightgray" : "white"}}>
					<td>
						{this.props.obj.when_done}
					</td>
					<td>
						{this.props.obj.support_sp}
					</td>
					<td>
						{this.props.obj.support_enl}
					</td>
					<td>
						{this.props.obj.support_dnu}
					</td>
					<td>
						{this.props.obj.support_nyucp}
					</td>
					<td>
						{this.props.obj.support_nom}
					</td>
					<td>
						{this.props.obj.support_emails}
					</td>
					<td>
						{this.props.obj.support_deposit_pulls}
					</td>
					<td>
						{this.props.obj.support_blank_batch_corres}
					</td>
					<td>
						{this.props.obj.support_correspondence}
					</td>
					<td>
						{this.props.obj.support_acct_audits}
					</td>
					<td>
						{this.props.obj.support_inv_correct}
					</td>	
					<td>
						{this.props.obj.support_phone}
					</td>
					<td>
						{this.props.obj.support_inv_addr}
					</td>
					<td>
						{this.props.obj.support_collects}
					</td>
					<td>
						{this.props.obj.suport_medical_records}
					</td>
					<td>
						{this.props.obj.coding_na}
					</td>
					<td>
						{this.props.obj.coding_on_holds}
					</td>
					<td>
						{this.props.obj.coding_coding_queue}
					</td>
					<td>
						{this.props.obj.coding_onsites}
					</td>
					<td>
						{this.props.obj.coding_ooa}
					</td>
					<td>
						{this.props.obj.ar120}
					</td>
					<td>
						{this.props.obj.ar_120percent}
					</td>
					<td>
						{this.props.obj.ar_90}
					</td>
					<td>
						{this.props.obj.ar_voicemails}
					</td>
					<td>
						{this.props.obj.ar_unapplied}
					</td>
					<td>
						{this.props.obj.ar_audit}
					</td>
					<td>
						{this.props.obj. ar_wbs}
					</td>
				</tr>

		);
	}
}

export default PreviousDataViewOM