import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {Box} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useEffect } from 'react';

const pages = ['About', 'Services', 'Portfolio', "Blog"];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
   

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        if (scrollTop > 0 && !isScrolled) {
            setIsScrolled(true);
        } else if (scrollTop === 0 && isScrolled) {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolled]);


    return (
        <AppBar  sx={{
            backgroundColor: "#FFD4D0",
            position: isScrolled ? 'fixed' : 'relative',
            top: 0,
            transition: '0.3s',
        }} elevation={0} >
            <Container maxWidth="xl" sx={{}}>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 40,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'red',
                            textDecoration: 'none',
                            ml:5
                        }}
                    >
                        <span style={{ color: "black" }}>S</span>J Design
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                     
                                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,gap:"6%",zIndex:1000000}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'black',
                                    display: 'block',
                                    fontWeight: "bold",
                                    textTransform: "capitalize",

                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                    <Button sx={{ color: "white", backgroundColor: "black", borderColor: "black", '&:hover': { backgroundColor: 'white', color: "black", borderColor: "black" }, textTransform: "capitalize", fontSize: { xs: "0.8rem", md: "1rem" } ,marginLeft:"10px"}} variant="outlined">Let's Talk</Button>

                    
                    </Box>
                    <Box className='background-circle' sx={{display:{xs:"none",md:"block"}}}>

                </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
