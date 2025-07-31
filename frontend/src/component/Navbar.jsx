import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Logo from '../assets/Group 1.png';


const Navbar = () => {
  return (
    <>
    <AppBar sx={{ backgroundColor: 'transparent', boxShadow: 'none', marginTop: '0px',  }}>
        <Toolbar sx={{ backgroundColor: 'transparent', color: 'black' }}>
          <Link sx={{cursor: 'pointer'}}><img src={Logo} style={{ width: "40px", height: "50px" }} alt="Logo" /></Link>
          <Link
    href="#"
    color="inherit"
    sx={{
      ml: 60,
      mr: 5,
      textDecoration: 'none',
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      cursor: 'pointer',
      position: 'relative',
      backgroundImage: 'linear-gradient(#D70000, #D70000)',
      backgroundPosition: '0 100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '0% 4px',
      transition: 'color 0.2s, background-size 0.3s',
      '&:hover': {
        color: '#D70000',
        backgroundSize: '100% 4px',
      },
    }}
  >
    HOME
  </Link>
  <Link
    href="#"
    color="inherit"
    sx={{
      mr: 5,
      textDecoration: 'none',
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      cursor: 'pointer',
      position: 'relative',
      backgroundImage: 'linear-gradient(#D70000, #D70000)',
      backgroundPosition: '0 100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '0% 4px',
      transition: 'color 0.2s, background-size 0.3s',
      '&:hover': {
        color: '#D70000',
        backgroundSize: '100% 4px',
      },
    }}
  >
    PRODUCTS
  </Link>
  <Link
    href="#"
    color="inherit"
    sx={{
      mr: 5,
      textDecoration: 'none',
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      cursor: 'pointer',
      position: 'relative',
      backgroundImage: 'linear-gradient(#D70000, #D70000)',
      backgroundPosition: '0 100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '0% 4px',
      transition: 'color 0.2s, background-size 0.3s',
      '&:hover': {
        color: '#D70000',
        backgroundSize: '100% 4px',
      },
    }}
  >
    ABOUT
  </Link>
  <Link
    href="#"
    color="inherit"
    sx={{
      mr: 5,
      textDecoration: 'none',
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      cursor: 'pointer',
      position: 'relative',
      backgroundImage: 'linear-gradient(#D70000, #D70000)',
      backgroundPosition: '0 100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '0% 4px',
      transition: 'color 0.2s, background-size 0.3s',
      '&:hover': {
        color: '#D70000',
        backgroundSize: '100% 4px',
      },
    }}
  >
    CONTACT US
  </Link>
  <Link
    href="#"
    color="inherit"
    sx={{
      textDecoration: 'none',
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      cursor: 'pointer',
      position: 'relative',
      backgroundImage: 'linear-gradient(#D70000, #D70000)',
      backgroundPosition: '0 100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '0% 4px',
      transition: 'color 0.2s, background-size 0.3s',
      '&:hover': {
        color: '#D70000',
        backgroundSize: '100% 4px',
      },
    }}
  >
    FAQs
  </Link>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar