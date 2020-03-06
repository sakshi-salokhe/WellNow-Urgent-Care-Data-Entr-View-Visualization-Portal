import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Login from "./LoginRegJS/Login"
import EditInfo from "./LoginRegJS/AfterLoginPages/manager_pages/EditInfo"

function App()
{
	return (
		<div>
			 <Login /> 
		</div>
	)
}

export default App