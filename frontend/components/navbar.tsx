import React from 'react'


import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Stack, stackClasses } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';

const navbar = () => {
  return (
    <Box sx={{ width: '100%',display:'flex',alignItems:'center',justifyContent:'space-evenly',backgroundColor:'#0b1120',borderBottom:'1px solid #1565c0'}}>
      <Stack sx={{minHeight:'4rem'}} direction='row' alignItems='center'justifyContent='space-evenly' >
        <img src="/logo.png" alt="logo" width='60px' />
        <Typography variant='h3' color='white'>SACC</Typography> 
      </Stack>
      <Stack>
      <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button>Home</Button>
      <Button>Profile</Button>
      <Button>About Me</Button>
      <Button>Photo Wall</Button>
      <Button>Testimonials</Button>
    </ButtonGroup>

      </Stack>
      <Stack>
      <Button variant="outlined">Log In</Button>
      </Stack>
    
    </Box>
  )
}

export default navbar