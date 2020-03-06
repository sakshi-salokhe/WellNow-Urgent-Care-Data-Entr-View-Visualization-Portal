import React, {Component} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import qs from "qs"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from "react-router"
import {Link} from "react-router-dom";

class EditData extends Component
{
	render()
	{
		var user_id = this.props.user_id;
		return (
			<h3> copy this from the manager view pages once they are done </h3>
		)
	}
}

export default EditData