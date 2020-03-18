import React, {Component} from "react";
import ReactDOM from "react-dom";
import axios from "axios"

import IndexHeader from "./IndexHeader";
import Login from "./LoginRegJS/Login"

class Logout extends Component
{
	constructor(props)
	{
		super(props);
	}
	
	componentDidMount()
	{
		axios.get("http://localhost:81/WellNow-Urgent-Care-Data-Entr-View-Visualization-Portal/wellnowdash_backend/logout.php")
		.then(res => console.log(res.data));
	}
	
	render()
	{
		return (
			<Login />
		)
	}
}

export default Logout