import React from "react";

import IndexHeader from "../../IndexHeader";
import Login from "../Login"

function NotYetApproved()
{
	return (
		<div className = "container">
		{alert("Sorry! You have not yet been approved by the manager. Please try again later.")}
			<Login />
		</div>
	)
}

export default NotYetApproved