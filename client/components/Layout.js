import React from "react";
import {Button,IconButton, Grid, Typography, Container, Card} from "@material-ui/core";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import FinnImage from "../static/images/FinnImage.jpg"



const Layout = () =>
{

	return (

		<Container>
		<Grid
			container

			justify={"center"}
			alignContent={"center"}
			alignItems={"center"}
			spacing={2}
			style={{height: "90vh"}}
		>

			<Grid item xs={12}>
				<Card>
					<CardActionArea>
						<CardMedia
							component="img"
							alt="Finn Sizer Image"
							width={"100%"}
							height={"500px"}
							image= {FinnImage}
							title="Finn Sizer"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								Finn Sizer
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								I guess I could write something here, but I'm not sure what it would be.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<IconButton onClick={()=> window.open('https://www.facebook.com/finn.e.sizer/','_blank')}>
							<FacebookIcon >

							</FacebookIcon>
						</IconButton>
						<IconButton onClick={()=> window.open('http://instagram.com/finnsizer','_blank')}>
							<InstagramIcon >

							</InstagramIcon>
						</IconButton>
						<IconButton onClick={()=> window.open('http://linkedin.com/in/finnsizer','_blank')}>
							<LinkedInIcon >

							</LinkedInIcon>
						</IconButton>
						<IconButton onClick={()=> window.open('https://github.com/fillain','_blank')}>
							<GitHubIcon >

							</GitHubIcon>
						</IconButton>
					</CardActions>
				</Card>

			</Grid>

		</Grid>
		</Container>

	)
};

export default Layout;
