import React from 'react';
import './hero.css';
import { Box, Button, Grid, Typography } from '@mui/material';
import Navbar from './Navbar';
import Frame from "../../images/image.png";



const Hero = () => {
    return (
        
        <div className='container'>
            {/* Navbar */}
            <div className='navbar'>
                
                <Box>
                <Navbar />

                </Box>
            </div>
              <Grid container className='Hero-section' spacing={2}>
                {/* Left Content */}
                <Grid item xs={12} md={6} className='left'>
                <Box sx={{ marginLeft: { xs: 0, md: 11 }}}>
                <Typography variant="body1" sx={{ fontWeight: "400", color: "#1F1F1F", fontFamily: "Montserrat", fontSize: { xs: "1rem", md: "1.1rem" }, marginBottom: "25px", textAlign: { xs: "center", md: "justify" } }}>
                            Ux Designer
                        </Typography>
                        <Typography variant="h2" sx={{ marginBottom: "25px", fontWeight: "bold", fontFamily: "Montserrat", fontSize: { xs: "2.5rem", md: "2.7rem" }, wordSpacing: "5px",textAlign: { xs: "center", md: "justify" } }}>
                            Hi There, I'm
                        </Typography>
                        <Typography variant="h2" sx={{ color: "red", marginBottom: "25px",  fontFamily: "Montserrat",fontWeight: "bold", fontSize: { xs: "2.5rem", md: "2.7rem" }, wordSpacing: "5px" ,textAlign: { xs: "center", md: "justify" }}}>
                            Gopal Singh
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: "400", color: "#1F1F1F", fontFamily: "Montserrat", fontSize: { xs: "1.1rem", md: "1.3rem" }, marginBottom: "25px", textAlign: { xs: "center", md: "justify" ,margin:{xs:"0px 25px 25px 25px",md:"0px 0px 25px 0px"}}}}>
                            Welcome to my portfolio of captivating digital experiences. Explore my work and let's create something extraordinary together.
                        </Typography>
                        <Box sx={{ display: "flex", gap: "10%",justifyContent:{xs:"center",md:"normal"} }}>
                            <Button sx={{ color: "white", backgroundColor: "black", borderColor: "black",fontSize: { xs: "0.8rem", md: "1rem" } , '&:hover': { backgroundColor: 'black', borderColor: "black" }, textTransform: "capitalize", letterSpacing: "2px", padding: "0px 30px 0px 30px", borderRadius: "0px", height: "48px", fontWeight: "bold" }} variant="outlined">Hire Me</Button>
                            <Button sx={{ color: "black", backgroundColor: "white", borderColor: "black",fontSize: { xs: "0.8rem", md: "1rem" } , '&:hover': { backgroundColor: 'white', borderColor: "black" }, textTransform: "capitalize", letterSpacing: "2px", padding: "0px 30px 0px 30px", borderRadius: "0px", height: "48px", fontWeight: "bold" }} variant="outlined">Portfolio</Button>

                        </Box>
                    </Box>
                </Grid>
                {/* Right Content */}
                <Grid item xs={12} md={6} className='right'>
                    

        <Box sx={{ maxWidth: "100%", height: "100%",display:'flex',justifyContent:"center"}}>
            <img
                src= {Frame}  // Replace with your image URL
                alt="Placeholder"
                style={{  maxWidth: "80%", height: "100%" }}
            />
        </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Hero