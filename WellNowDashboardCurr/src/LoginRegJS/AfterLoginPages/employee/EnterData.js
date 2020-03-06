import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom"

class EnterData extends Component
{
	render()
	{
		var data = this.props.data;
		return (
			<h3> copy this from the manager view pages once they are done </h3>
		)
	}
}

export default EnterData