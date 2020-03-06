import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"


class PreviousDataViewOS extends Component
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
						{this.props.obj.RPQ_print_queue_total}
					</td>
					<td>
						{this.props.obj.RPQ_num_of_WC}
					</td>
					<td>
						{this.props.obj.IL_RCM_Ins}
					</td>
					<td>
						{this.props.obj.IL_RCM_WC}
					</td>
					<td>
						{this.props.obj.IL_NINS}
					</td>
					<td>
						{this.props.obj.IL_NNF}
					</td>
					<td>
						{this.props.obj.IL_NWC}
					</td>
					<td>
						{this.props.obj.IL_ENL}
					</td>
					<td>
						{this.props.obj.RA_WS_Prof}
					</td>
					<td>
						{this.props.obj.RA_WS_Prof_Day}
					</td>
					<td>
						{this.props.obj.RA_WS_Inst}
					</td>	
					<td>
						{this.props.obj.RA_WS_Inst_Day}
					</td>
					<td>
						{this.props.obj.RA_Attachments}
					</td>
					<td>
						{this.props.obj.WBE_NF_Updates}
					</td>
					<td>
						{this.props.obj.WBE_WC_Updates}
					</td>
					<td>
						{this.props.obj.WBE_OS_Email_Inbox}
					</td>
					<td>
						{this.props.obj.Coding_FFS_Total}
					</td>
					<td>
						{this.props.obj.Coding_FFS_On_hold}
					</td>
					<td>
						{this.props.obj.Coding_Coding_Queue}
					</td>
					<td>
						{this.props.obj.Coding_Coding_Queue_Days}
					</td>
					<td>
						{this.props.obj.Coding_WS_Coding}
					</td>
					<td>
						{this.props.obj.Coding_FFS_Onhold_Report}
					</td>
				</tr>

		);
	}
}

export default PreviousDataViewOS