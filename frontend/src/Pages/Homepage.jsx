import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Logo from '../assets/Group 1.png';
import Startpic from '../assets/HOME FIRDT SCREEN edirt.png'
import Navbar from '../component/Navbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Homepage = () => {
  return (
    <>
    <Container disableGutters sx={{color: 'black', backgroundColor: 'gray', border: '0px solid black', padding: '0px', margin: '0px', minHeight: '60vh', minWidth: '100%' }}>
    <Navbar />
    <Box sx={{ backgroundPosition: 'left center', backgroundColor: "white", margin: "0px", padding: "0px", backgroundImage: `url(${Startpic})`, bottom: '50px', minHeight: '100vh', backgroundSize: 'cover', height: '100%', width: '100%' }}>
      <Typography sx={{ fontFamily: 'Poppins', fontSize: '2.5rem', fontWeight: 'bold', color: 'white', textAlign: 'left', paddingTop: '30vh', marginLeft: '60px' }}>
        Lorem Ipsum
      </Typography>
      <Typography sx={{ fontFamily: 'Poppins', fontSize: '1.8rem', fontWeight: 10, color: 'white', textAlign: 'left', paddingTop: '5vh', marginLeft: '60px', width: '35%' }}>
        Lorem ipsum dolor sit amet consectetur. Ornare eu non feugiat at nullam.
      </Typography>
      <Button sx={{ fontFamily: 'Poppins', backgroundColor: '#D70000', borderRadius: '40px', textAlign: 'center', fontSize: '1.2rem', fontWeight: 600, color: 'white', marginTop: '25vh', marginLeft: '45%', padding: '8px 35px' , '&:hover': { backgroundColor: '#a90202ff', color: 'white'
      }, }}>VIEW PRODUCTS</Button>
    </Box>
    <Box sx={{ padding: '0px', marginTop: '0px', minHeight: '60vh', background: 'linear-gradient(to bottom, #749670 0%, #ffffff 150%)',  }}>
      
    </Box>
    </Container>
    </>
  )
}

export default Homepage