import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Bar, Line} from 'react-chartjs-2';

import IndexHeader from "../../../../../IndexHeader";
import ViewDashboards from '../../ViewDashboards'

class CurrDataChartAR extends Component
{
	constructor(props)
	{
		super(props);
		this.back = this.back.bind(this);
		
		var dynamicColors = function() {
			var r = Math.floor(Math.random() * 255);
			var g = Math.floor(Math.random() * 255);
			var b = Math.floor(Math.random() * 255);
			return "rgb(" + r + "," + g + "," + b + ")";
		}
		
		this.state = {
			chartData:{
				labels : ['wb_tech_other', 'wb_demo_elig','wb_timely_filing','wb_coding_replies','wb_sup_reviews','wb_nf_corres','wb_wc_corres','waystar_medc_sec','waystar_oob','waystar_fidelis_tf'],
				datasets : [{
					label: this.props.data[0].when_done,
					fill: false,
					linetension: 0.1,
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle:  'miter',
					pointBorderWidth: 10,
					pointHoverRadius: 5,
					pointHoverBorderWidth: 2,
					pointHoverBorderColor: 'rgba(0, 0, 0)',
					data:[this.props.data[0].wb_tech_other, this.props.data[0].wb_demo_elig,this.props.data[0].wb_timely_filing,this.props.data[0].wb_coding_replies,this.props.data[0].wb_sup_reviews,this.props.data[0].wb_nf_corres,this.props.data[0].wb_wc_corres,this.props.data[0].waystar_medc_sec,this.props.data[0].waystar_oob,this.props.data[0].waystar_fidelis_tf],
					backgroundColor:dynamicColors(),
					pointRadius: 15,
					pointHitRadius: 10,
					order: 2
				},
				{
					label: this.props.data[0].curr_mon,
					fill: false,
					linetension: 0.5,
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle:  'miter',
					pointBorderWidth: 10,
					pointHoverRadius: 5,
					pointHoverBorderWidth: 2,
					pointHoverBorderColor: 'rgba(0, 0, 0)',
					data:[this.props.data[0].wb_tech_other_goals, this.props.data[0].wb_demo_elig_goals,this.props.data[0].wb_timely_filing_goals,this.props.data[0].wb_coding_replies_goals,this.props.data[0].wb_sup_reviews_goals,this.props.data[0].wb_nf_corres_goals,this.props.data[0].wb_wc_corres_goals,this.props.data[0].waystar_medc_sec_goals,this.props.data[0].waystar_oob_goals,this.props.data[0].waystar_fidelis_tf_goals],
					type: 'bubble',
					backgroundColor:dynamicColors(),
					pointRadius: 5,
					pointHitRadius: 10,
					order: 1
				}]
			}
			
		}
	}
	
	back()
	{
		ReactDOM.render(<ViewDashboards user_id = {this.props.data[0].supervisor_id}/>, document.getElementById('root'));
	}
	
	render()
	{
		const data = this.props.data;
		console.log("here todays data in supervisor",data);
		
		const labels = ['wb_tech_other', 'wb_demo_elig','wb_timely_filing','wb_coding_replies','wb_sup_reviews','wb_nf_corres','wb_wc_corres','waystar_medc_sec','waystar_oob','waystar_fidelis_tf'];
		
		return(
			<div className = "container">
				<br />
				<br />
				<br />
				<div className="form-group">
					<div className="col-lg-10 col-sm-10 col-md-10 col-xs-10">
						<button type="button" className="btn btn-primary" onClick={this.back}> Back </button>
					</div>
					
					<div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"> </div>
						
				</div>
				
				<br />
				<br />
				<div classname = "chart">
					<Bar data = {this.state.chartData} options = {{
						title:{ display: true, text: 'AR Dashboard Data Visualisation for today'},
						scales: {yAxes: [{stacked: true}]}
					}} />
				</div>
			</div>
		)
	}
}

export default CurrDataChartAR