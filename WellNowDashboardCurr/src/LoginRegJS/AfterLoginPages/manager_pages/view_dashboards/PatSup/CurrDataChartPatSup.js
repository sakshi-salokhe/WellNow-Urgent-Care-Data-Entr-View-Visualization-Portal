import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Bar, Line} from 'react-chartjs-2';

import IndexHeader from "../../../../../IndexHeader";
import ManagerLogInPage from "../../../ManagerLogInPage"
import CurrDataVisualise from '../CurrDataVisualise'

class CurrDataChartPatSup extends Component
{
	constructor(props)
	{
		super(props);
		
		var dynamicColors = function() {
			var r = Math.floor(Math.random() * 255);
			var g = Math.floor(Math.random() * 255);
			var b = Math.floor(Math.random() * 255);
			var opacity = 0.4;
			return "rgb(" + r + "," + g + "," + b +  "," + opacity +")";
		}
		var dlabel = [];
		var dlabel1 = [];
		var d_temp = [];
		var d1 = [];
		var d2 = [];
		
		for(var key in this.props.data[0])
		{
			dlabel.push(key);
		}	
		dlabel.shift();
		dlabel.shift();
		dlabel.shift();
		
		dlabel.pop();
		
		for(var k = 0; k < (dlabel.length/2); k++)
		{
			dlabel1.push(dlabel[k]);
		}
		
		for(var key in this.props.data[0])
		{
			//dlabel.push(key);
			d_temp.push(this.props.data[0][key]);
		}
		
		console.log("dtemp before: ", d_temp);
		
		d_temp.shift();
		d_temp.shift();
		d_temp.shift();
		
		d_temp.pop();
		
		console.log("dtemp after: ", d_temp);
		
		
		var len = d_temp.length;
			
		for(var k = 0; k < (len/2); k++)
		{
			d1.push(d_temp[k]);
			//dlabel1.push(dlabel[k]);
		}
		
		for(var k = (len/2); k < (len); k++)
		{
			d2.push(d_temp[k]);
		}
		
		this.state = {
			chartData:{
				labels : dlabel1,
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
					data:d1,
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
					data:d2,
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
		ReactDOM.render(<CurrDataVisualise />, document.getElementById('root'));
	}
	
	render()
	{
		const data = this.props.data;
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
						title:{ display: true, text: 'Patient Support Dashboard Data Visualisation for today'},
						scales: {yAxes: [{stacked: false}]}
					}} />
				</div>
			</div>
		)
	}
}

export default CurrDataChartPatSup