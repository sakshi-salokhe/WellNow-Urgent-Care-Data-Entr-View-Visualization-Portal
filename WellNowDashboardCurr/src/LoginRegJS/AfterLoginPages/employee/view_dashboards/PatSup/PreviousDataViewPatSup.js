import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"


class PreviousDataViewPatSup extends Component
{
	render()
	{
		return (
			<tbody>
				<tr>
					<td rowspan="2">
						{this.props.obj.when_done}
					</td>
					<td>
						SOD
					</td>
					<td>
						{this.props.obj.saf_mvp_sod}
					</td>
					<td>
						{this.props.obj.saf_inval_addr_sod}
					</td>
					<td>
						{this.props.obj.ash_attachments_sod}
					</td>
					<td>
						{this.props.obj.ash_wc_mailing_sod}
					</td>
					<td>
						{this.props.obj.ash_wc_deleted_sod}
					</td>
					<td>
						{this.props.obj.ash_acc_type_sod}
					</td>
					<td>
						{this.props.obj.ash_last_addr_sod}
					</td>
					<td>
						{this.props.obj.bailey_indep_health_sod}
					</td>
					<td>
						{this.props.obj.bailey_bcbs_sod}
					</td>	
					<td>
						{this.props.obj.bailey_emails_sod}
					</td>
					<td>
						{this.props.obj.justin_ndc_num_sod}
					</td>
					<td>
						{this.props.obj.justin_medicare_loc_sod}
					</td>
					<td>
						{this.props.obj.justin_medicare_sec_sod}
					</td>
				</tr>
				
				<tr>
					<td>
						EOD
					</td>
					<td>
						{this.props.obj.saf_mvp_eod}
					</td>
					<td>
						{this.props.obj.saf_inval_addr_eod}
					</td>
					<td>
						{this.props.obj.ash_attachments_eod}
					</td>
					<td>
						
					</td>
					<td>
						
					</td>
					<td>
						
					</td>
					<td>
						
					</td>
					<td>
						{this.props.obj.bailey_indep_health_eod}
					</td>
					<td>
						{this.props.obj.bailey_bcbs_eod}
					</td>	
					<td>
						{this.props.obj.bailey_emails_eod}
					</td>
					<td>
						{this.props.obj.justin_ndc_num_eod}
					</td>
					<td>
						{this.props.obj.whejustin_medicare_loc_eodn_done}
					</td>
					<td>
						{this.props.obj.justin_medicare_sec_eod}
					</td>						
				</tr>
			</tbody>
		);
	}
}

export default PreviousDataViewPatSup