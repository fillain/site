import React from "react";

import { Button, Grid, Typography, Container} from "@material-ui/core";
import Squirrel from "../static/images/squirrel.jpg"
import FinnImage from "../static/images/FinnImage.jpg"



const Layout = () =>
{

	return (

		<Container>
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
				<Typography variant={"h2"} >Finn Sizer</Typography>
			</Grid>
			<Grid item>
				<img src={FinnImage} alt={"Finn Image"} height={"auto"} width={"100%"}/>

			</Grid>
		</Grid>
		</Container>

	)
};

export default Layout;
