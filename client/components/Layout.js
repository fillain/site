import React from "react";

import { Button, Grid, Typography } from "@material-ui/core";


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
				<Typography variant={"h2"}>Hello, my name is Finn!</Typography>
			</Grid>
			<Grid item>

			</Grid>
		</Grid>
	)
};

export default Layout;
