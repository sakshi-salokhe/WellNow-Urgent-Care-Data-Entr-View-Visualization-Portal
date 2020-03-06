import React from "react";

import IndexHeader from "../../IndexHeader";
import Login from "../Login"

function Invalidcreds()
{
	return (
		<div className = "container">
		{alert("Sorry! Wrong credentials. Please try again.")}
			<Login />
		</div>
	)
}

export default Invalidcreds