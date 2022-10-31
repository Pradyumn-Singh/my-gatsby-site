import * as React from "react";
import Button from '@mui/material/Button';
import { Box, Container } from "@mui/system";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Grid, Paper } from "@mui/material";
import Image from '../images/camo-pattern.jpeg';
import Image1 from '../images/guns-card.webp';
import Image2 from '../images/arbourder-card.jpg';
import Image3 from '../images/artillary-card.jpg';
import Image4 from '../images/drones-card.webp';
import Image5 from '../images/missile-card.jpg';
import Image6 from '../images/tanks-card.webp';
import CardMedia from '@mui/material/CardMedia';

const pageStyles = {
  color: "#ffffff",
  padding: 50,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundImage: `url(${Image})`,
  marginTop: -8,
  marginRight: -8,
  marginBottom: -8,
  marginLeft: -8,

}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const contentCard = {
  backgroundColor: 'rgba(190, 125, 70, 0.5)',
  color: 'rgba(255, 255, 255, 1)',
  fontWeight: 'bold',
  height: 120,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

const content_section = (props) => (
  <Paper
    style={{
      backgroundColor: 'blue',
      color: "white",
      width: "100",
      height: "100"
    }}
  >
    props.content_value
  </Paper>
);

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Box
        sx={{
          backgroundColor: 'rgba(155, 155, 155, 0.5)',
          '& .MuiTextField-root': { m: 5, width: '55ch' },
          padding: 8
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center" }} gutterBottom>
          Weaponary Info
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={6} md={6} >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image='../images/guns-card.webp'
                alt="alt_image"
              />
              <CardContent>
                <Typography variant='h4'> Guns </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={6} >
            <Card style={contentCard}>
              <CardMedia
                component="img"
                height="140"
                image='../images/guns-card.webp'
                alt="alt_image"
              />
              <CardContent>
                <Typography variant='h4'> Missiles </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={6} >
            <Card style={contentCard}>
              <CardMedia
                component="img"
                height="140"
                image='../images/guns-card.webp'
                alt="alt_image"
              />
              <CardContent>
                <Typography variant='h4'> Artilary </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={6} >
            <Card style={contentCard}>
              <CardMedia
                component="img"
                height="140"
                image='../images/guns-card.webp'
                alt="alt_image"
              />
              <CardContent>
                <Typography variant='h4'> Tanks </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={6} >
            <Card style={contentCard}>
              <CardMedia
                component="img"
                height="140"
                image='../images/guns-card.webp'
                alt="alt_image"
              />
              <CardContent>
                <Typography variant='h4'> Armoured Vehicles </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={6} >
            <Card style={contentCard}>
              <CardMedia
                component="img"
                height="140"
                image='../images/guns-card.webp'
                alt="alt_image"
              />
              <CardContent>
                <Typography variant='h4'> Drones </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
