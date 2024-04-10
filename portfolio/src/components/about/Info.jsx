import { Box, Typography } from '@mui/material'
import React from 'react'

const Info = ({title,desc}) => {
    return (
        <>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <Typography variant="h2" sx={{ color: " #FFD4D0" , fontWeight: "700", fontFamily: "Montserrat", fontSize: { xs: "3.8rem", md: "4rem" }, textAlign:"center",letterSpacing:"5px" }}>
                 {title}
            </Typography>
            <Typography variant="h2" sx={{ color: " #FFD4D0", marginBottom: "25px" , fontFamily: "Montserrat", fontSize: { xs: ".9rem", md: "1.1rem" }, wordSpacing: "5px "}}>
                {desc}
            </Typography>
        </Box>
           
            
        </>
    )
}

export default Info