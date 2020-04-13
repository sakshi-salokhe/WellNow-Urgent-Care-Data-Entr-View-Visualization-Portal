import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Bar, Line} from 'react-chartjs-2';

import IndexHeader from "../../../../../IndexHeader";
import PrevDataVisualise from '../PrevDataVisualise'

class WeeklyChartAR extends Component
{
	constructor(props)
	{
		super(props);
		this.back = this.back.bind(this);
		
		var ds = [];
		
		var dlabel = [];
		
		var d_temp = [];
		var a_name = [];
		
		var d1 = [];
		var d2 = [];
		
		var num = Object.keys(this.props.data).length;
		
		for(var key in this.props.data[0])
		{
			a_name.push(key);
		}
		
		//remove id and everything since we only need the names of attributes
		a_name.shift();
		a_name.shift();
		a_name.shift();
		a_name.pop();
		
		/*for(var i = 0; i<= 9; i++)
		{
			a_name.pop(); //remove goal anmes --  we do not need that here
		}	*/	
		var a1 = [];
		var a2 = [];
		var a3 = [];
		var a4 = [];
		var a5 = [];
		var a6 = [];
		var a7 = [];
		var a8 = [];
		var a9 = [];
		var a10 = [];
		
		var dynamicColors = function() {
			var r = Math.floor(Math.random() * 255);
			var g = Math.floor(Math.random() * 255);
			var b = Math.floor(Math.random() * 255);
			var opacity = 0.4;
			return "rgb(" + r + "," + g + "," + b +  "," + opacity +")";
		}
		
		for(var i = 0; i <  num; i++)
		{
			var val = this.props.data[i].when_done;
			dlabel.push(val);
		}
		
		for(var i=0; i< num; i++)
		{
			for(var key in this.props.data[i])
			{
				d_temp.push(this.props.data[i][key]);
			}
			
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
			
			for(var g = 0; g < d1.length; g++)
			{
				if(g == 0)
				{
					a1.push(d1[g]);
				}
				else if(g == 1)
				{
					a2.push(d1[g]);
				}
				else if(g == 2)
				{
					a3.push(d1[g]);
				}
				else if(g == 3)
				{
					a4.push(d1[g]);
				}
				else if(g == 4)
				{
					a5.push(d1[g]);
				}
				else if(g == 5)
				{
					a6.push(d1[g]);
				}
				else if(g == 6)
				{
					a7.push(d1[g]);
				}
				else if(g == 7)
				{
					a8.push(d1[g]);
				}
				else if(g == 8)
				{
					a9.push(d1[g]);
				}
				else
				{
					a10.push(d1[g]);
				}
			}
			
			d1 = [];
			d2 = [];
			d_temp = [];
		}
		
		ds.push({
			label: a_name[0],
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
			data:a1,
			backgroundColor: dynamicColors(),
			pointRadius: 15,
			pointHitRadius: 10,
			order: 1
			},
			{
			label: a_name[1],
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
			data:a2,
			backgroundColor: dynamicColors(),
			pointRadius: 15,
			pointHitRadius: 10,
			order: 1
			},
			{
			label: a_name[2],
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
			data:a3,
			backgroundColor: dynamicColors(),
			pointRadius: 15,
			pointHitRadius: 10,
			order: 1
			},
			{
			label: a_name[3],
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
			data:a4,
			backgroundColor: dynamicColors(),
			pointRadius: 15,
			pointHitRadius: 10,
			order: 1
			},
			{
			label: a_name[4],
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
			data:a5,
			backgroundColor: dynamicColors(),
			pointRadius: 15,
			pointHitRadius: 10,
			order: 1
			},
			{
			label: a_name[5],
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
			data:a6,
			backgroundColor: dynamicColors(),
			pointRadius: 15,
			pointHitRadius: 10,
			order: 1
			},
			{
			label: a_name[6],
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
			data:a7,
			backgroundColor: dynamicColors(),
			pointRadius: 15,
			pointHitRadius: 10,
			order: 1
			},
			{
			label: a_name[7],
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
			data:a8,
			backgroundColor: dynamicColors(),
			pointRadius: 15,
			pointHitRadius: 10,
			order: 1
			},
			{
			label: a_name[8],
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
			data:a9,
			backgroundColor: dynamicColors(),
			pointRadius: 15,
			pointHitRadius: 10,
			order: 1
			},
			{
			label: a_name[9],
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
			data:a10,
			backgroundColor: dynamicColors(),
			pointRadius: 15,
			pointHitRadius: 10,
			order: 1
			});
			
		this.state = {
			chartData:{
				labels : dlabel,
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
						title:{ display: true, text: 'Weekly AR Dashboard Data Visualisation'},
						scales: {yAxes: [{stacked: false}]}
					}} />
				</div>
			</div>
		)
	}
}

export default WeeklyChartAR