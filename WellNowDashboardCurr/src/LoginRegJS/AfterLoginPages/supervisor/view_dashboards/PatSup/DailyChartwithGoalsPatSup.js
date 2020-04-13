import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Bar, Line} from 'react-chartjs-2';

import IndexHeader from "../../../../../IndexHeader";
import PrevDataVisualise from '../PrevDataVisualise'

class DailyChartwithGoalsPatSup extends Component
{
	constructor(props)
	{
		super(props);
		this.back = this.back.bind(this);
		
		var ds = [];
		var num = this.props.data.length;
		
		var dlabel = [];
		var dlabel1 = [];
		var d_temp = [];
		var d1 = [];
		var d2 = [];
		
		var dynamicColors = function() {
			var r = Math.floor(Math.random() * 255);
			var g = Math.floor(Math.random() * 255);
			var b = Math.floor(Math.random() * 255);
			var opacity = 0.4;
			return "rgb(" + r + "," + g + "," + b +  "," + opacity +")";
		}
		
		for(var i=0; i< num-1; i++)
		{
			for(var key in this.props.data[i])
			{
				d_temp.push(this.props.data[i][key]);
			}
			d_temp.shift();
			d_temp.shift();
			d_temp.shift();
			d_temp.shift();
			d_temp.pop();
			
			var len = d_temp.length;
			
			for(var k = 0; k < (len/2); k++)
			{
				d1.push(d_temp[k]);
			}
			
			for(var k = (len/2); k < (len); k++)
			{
				d2.push(d_temp[k]);
			}
			
			ds.push({
			label: this.props.data[i].when_done,
			fill: true,
			linetension: 0.1,
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle:  'miter',
			pointBorderWidth: 10,
			pointBorderColor: 'rgba(0,0,0,1)',
			pointHoverRadius: 5,
			pointHoverBorderWidth: 2,
			pointHoverBorderColor: 'rgba(0,0,0,1)',
			data:d1,
			backgroundColor: dynamicColors(),
			pointRadius: 15,
			pointHitRadius: 10,
			order: 2
			},
			{
				label: this.props.data[i].mon,
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
			});
			
			dlabel = [];
			d1 = [];
			d2 = [];
			d_temp = [];
		}
		
		for(var key in this.props.data[0])
		{
			dlabel.push(key);
		}	
		dlabel.shift();
		dlabel.shift();
		dlabel.shift();
		dlabel.shift();
		dlabel.pop();
		
		for(var k = 0; k < (dlabel.length/2); k++)
		{
			dlabel1.push(dlabel[k]);
		}	
				
		this.state = {
			chartData:{
				labels : dlabel1,
				datasets : ds
			}
		}
	}
	
	back()
	{
		ReactDOM.render(<PrevDataVisualise user_id = {this.props.data[0].supervisor_id}/>, document.getElementById('root'));
	}
	
	render()
	{
		
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
						title:{ display: true, text: 'Patient Support Dashboard Data Visualisation for today'}
					}} />
				</div>
			</div>
		)
	}
}

export default DailyChartwithGoalsPatSup