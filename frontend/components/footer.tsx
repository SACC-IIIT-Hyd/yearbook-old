import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Stack, stackClasses } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';

const footer = () => {
  return (
    <Box sx={{ width: '100%',display:'flex',alignItems:'center',justifyContent:'space-evenly',backgroundColor:'#0b1120',borderTop:'1px solid #1565c0',padding:'2rem' }}>
    <Stack>
      <img src="/logo.png" alt="" />
    </Stack>
    <Stack alignItems='center' justifyContent='center' width='30%'>
        <Typography color='white' variant='h3' gutterBottom>About SACC</Typography>
        <Typography color='white' variant='subtitle1' textAlign='center' gutterBottom>Student Alumni Connect Cell (SACC) is a student-run organization that aims to foster connections between students, alumni, and the Institute. SACC provides mentorship, organizes events, and offers resources to help students and alumni engage with their alma mater and fellow alumni.</Typography>

    </Stack>
    <Stack direction='row' gap='1rem'>
        <FacebookIcon color='primary' fontSize='large'></FacebookIcon>
        <InstagramIcon color='primary' fontSize='large'></InstagramIcon>
        <LinkedInIcon color='primary' fontSize='large'></LinkedInIcon>
        <EmailIcon color='primary' fontSize='large'></EmailIcon>
    </Stack>
  
  </Box>
  )
}

export default footer