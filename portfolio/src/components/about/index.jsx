import React from 'react';
import "./about.css"
import { Box, Typography } from '@mui/material';
import Info from './Info';

const About = () => {
    return (
        <div className='about-section'>
            <Box sx={{margin:{xs:"0px",md:"0px 100px",lg:"0px 150px"}}}>
                <Typography variant="h2" sx={{ color: "white", marginBottom: "25px", fontWeight: "700",fontFamily:"Montserrat", fontSize: { xs: "2.5rem", md: "2.7rem" }, wordSpacing: "5px", textAlign: { xs: "center", md: "center" } }}>
                    About Me 
                </Typography>
                <Typography variant="h2" sx={{ color: "white", marginBottom: "25px" ,fontFamily:"Montserrat", fontSize: { xs: "1rem", md: "1.2rem" }, wordSpacing: "5px", textAlign: { xs: "center", md: "center" } }}>
                     I'm Sara Jones, a UI/UX designer dedicated to crafting intuitive and visually stunning digital experiences. With a passion for user-centric design, I transform ideas into functional and beautiful interfaces. Let's collaborate and shape the future of design together.
                </Typography>
            </Box>
            <Box sx={{margin:{xs:"0px",md:"10px 50px 20px 10px"},display:{xs:"block",md:"flex",justifyContent:"space-around",alignItems:"center "}}}>
           <Info title={"502"} desc={"Projects Done"}/>
           <Info  title={"10+"} desc={"Years of Experience"}/>
           <Info  title={"273+"} desc={"Clients Served"}/>
            </Box>
            <Box>

            </Box>

            <Box className='about-circle'>

</Box>
        </div>
    )
}

export default About