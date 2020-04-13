import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"


class CurrentDataViewAR extends Component
{
	render()
	{
		return (
				<tr>
					<td>
						{this.props.obj.when_done}
					</td>
					<td>
						{this.props.obj.wb_tech_other}
					</td>
					<td>
						{this.props.obj.wb_demo_elig}
					</td>
					<td>
						{this.props.obj.wb_timely_filing}
					</td>
					<td>
						{this.props.obj.wb_coding_replies}
					</td>
					<td>
						{this.props.obj.wb_sup_reviews}
					</td>
					<td>
						{this.props.obj.wb_nf_corres }
					</td>
					<td>
						{this.props.obj.wb_wc_corres}
					</td>
					<td>
						{this.props.obj.waystar_medc_sec}
					</td>
					<td>
						{this.props.obj.waystar_oob}
					</td>
					<td>
						{this.props.obj.waystar_fidelis_tf}
					</td>	
				</tr>

		);
	}
}

export default CurrentDataViewAR