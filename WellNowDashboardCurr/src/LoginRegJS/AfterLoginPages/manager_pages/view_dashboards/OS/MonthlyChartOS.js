import React, {Component} from "react";
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Bar, Line} from 'react-chartjs-2';

import IndexHeader from "../../../../../IndexHeader";
import ManagerLogInPage from "../../../ManagerLogInPage"
import PrevDataVisualise from '../PrevDataVisualise'

class MonthlyChartOS extends Component
{
	constructor(props)
	{
		super(props);
		
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
		
		/*/*
		for(var i = 0; i<= 26; i++)
		{
			a_name.pop(); //remove goal anmes --  we do not need that here
		}		
		*/
		
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
		var a11 = [];
		var a12 = [];
		var a13 = [];
		var a14 = [];
		var a15 = [];
		var a16 = [];
		var a17 = [];
		var a18 = [];
		var a19 = [];
		var a20 = [];
		var a21 = [];
		var a22 = [];
		
		var dynamicColors = function() {
			var r = Math.floor(Math.random() * 255);
			var g = Math.floor(Math.random() * 255);
			var b = Math.floor(Math.random() * 255);
			var opacity = 0.4;
			return "rgb(" + r + "," + g + "," + b +  "," + opacity +")";
		}
		
		for(var i = 0; i <  num; i++)
		{
			var val1 = this.props.data[i].when_done;
			
			if(val1 == '1')
			{
				var val = "January";
			}
			else if(val1 == '2')
			{
				var val = "February";
			}
			else if(val1 == '3')
			{
				var val = "March";
			}
			else if(val1 == '4')
			{
				var val = "April";
			}
			else if(val1 == '5')
			{
				var val = "May";
			}
			else if(val1 == '6')
			{
				var val = "June";
			}
			else if(val1 == '7')
			{
				var val = "July";
			}
			else if(val1 == '8')
			{
				var val = "August";
			}
			else if(val1 == '9')
			{
				var val = "September";
			}
			else if(val1 == '10')
			{
				var val = "October";
			}
			else if(val1 == '11')
			{
				var val = "November";
			}
			else 
			{
				var val = "December";
			}
			
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
				else if(g == 9)
				{
					a10.push(d1[g]);
				}
				else if(g == 10)
				{
					a11.push(d1[g]);
				}
				else if(g == 11)
				{
					
					a12.push(d1[g]);
				}
				else if(g == 12)
				{
					a13.push(d1[g]);
				}
				else if(g == 13)
				{
					a14.push(d1[g]);
				}
				else if(g == 14)
				{
					a15.push(d1[g]);
				}
				else if(g == 15)
				{
					a16.push(d1[g]);
				}
				else if(g == 16)
				{
					a17.push(d1[g]);
				}
				else if(g == 17)
				{
					a18.push(d1[g]);
				}
				else if(g == 18)
				{
					a19.push(d1[g]);
				}
				else if(g == 19)
				{
					a20.push(d1[g]);
				}
				else if(g == 20)
				{
					a21.push(d1[g]);
				}
				else if(g == 21)
				{
					
					a22.push(d1[g]);
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
			},
			{
			label: a_name[10],
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
			data:a11,
			backgroundColor: dynamicColors(),
			pointRadius: 15,
			pointHitRadius: 10,
			order: 1
			},
			{
			label: a_name[11],
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
			data:a12,
			backgroundColor: dynamicColors(),
			pointRadius: 15,
			pointHitRadius: 10,
			order: 1
			},
			{
			label: a_name[12],
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
			data:a13,
			backgroundColor: dynamicColors(),
			pointRadius: 15,
			pointHitRadius: 10,
			order: 1
			},
			{
			label: a_name[13],
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
			data:a14,
			backgroundColor: dynamicColors(),
			pointRadius: 15,
			pointHitRadius: 10,
			order: 1
			},
			{
			label: a_name[14],
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
			data:a15,
			backgroundColor: dynamicColors(),
			pointRadius: 15,
			pointHitRadius: 10,
			order: 1
			},
			{
			label: a_name[15],
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
			data:a16,
			backgroundColor: dynamicColors(),
			pointRadius: 15,
			pointHitRadius: 10,
			order: 1
			},
			{
			label: a_name[16],
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
			data:a17,
			backgroundColor: dynamicColors(),
			pointRadius: 15,
			pointHitRadius: 10,
			order: 1
			},
			{
			label: a_name[17],
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
			data:a18,
			backgroundColor: dynamicColors(),
			pointRadius: 15,
			pointHitRadius: 10,
			order: 1
			},
			{
			label: a_name[18],
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
			data:a19,
			backgroundColor: dynamicColors(),
			pointRadius: 15,
			pointHitRadius: 10,
			order: 1
			},
			{
			label: a_name[19],
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
			data:a20,
			backgroundColor: dynamicColors(),
			pointRadius: 15,
			pointHitRadius: 10,
			order: 1
			},
			{
			label: a_name[20],
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
			data:a21,
			backgroundColor: dynamicColors(),
			pointRadius: 15,
			pointHitRadius: 10,
			order: 1
			},
			{
			label: a_name[21],
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
			data:a22,
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
		ReactDOM.render(<PrevDataVisualise />, document.getElementById('root'));
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
						title:{ display: true, text: 'Monthly OS Dashboard Data Visualisation'},
						scales: {yAxes: [{stacked: false}]}
					}} />
				</div>
			</div>
		)
	}
}

export default MonthlyChartOS