import React from "react";

import { Button, Grid, Typography } from "@material-ui/core";
import SquirrelImage from "../static/images/squirrel.jpg"


const Layout = () =>
{
	let request = {requestType: "postRequest", payload: "Test"};

	return (
		<Grid
			container
			direction={"column"}
			justify={"center"}
			alignContent={"center"}
			alignItems={"center"}
			spacing={2}
			style={{height: "100vh"}}
			>
			<Grid item>
				<Typography variant={"h1"} color={'primary'}>This Website is a Work in Progress!</Typography>
				<Typography variant={"h2"} color={'primary'}>Hello, my name is Finn!</Typography>
				{SquirrelImage}
			</Grid>
			<Grid item>

			</Grid>
		</Grid>
	)
};

export default Layout;
