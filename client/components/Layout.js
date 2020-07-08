import React from "react";

import { Button, Grid, Typography } from "@material-ui/core";
import Squirrel from "../static/images/squirrel.jpg"


const Layout = () =>
{

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
				<Typography variant={"h2"} color={'primary'}>Hello, my name is Finn!</Typography>
			</Grid>
			<Grid item>
				<img src={Squirrel} alt={"Squirrel Image"} height={400} width={400}/>
			</Grid>
		</Grid>

	)
};

export default Layout;
