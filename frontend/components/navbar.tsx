import React from 'react'
import Link from 'next/link';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Stack, stackClasses } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';

const navbar = () => {
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: '#0b1120', borderBottom: '1px solid #1565c0' }}>
      <Stack sx={{ minHeight: '4rem' }} direction='row' alignItems='center' justifyContent='space-evenly' >
        <img src="/logo.png" alt="logo" width='60px' />
        <Typography sx={{}} variant='h5' color='white'>SACC-IIIT H</Typography>
      </Stack>
      <Stack>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Link href='/'><Button>Home</Button></Link>
          <Link href='/aboutme'><Button>About Me</Button></Link>
          <Link href='/photowall'><Button>Photo Wall</Button></Link>
          <Link href='/Testimonials'><Button>Testimonials</Button></Link>
          <Link href='/devs'><Button>Devs</Button></Link>


        </ButtonGroup>

      </Stack>
      <Stack>
        <Button variant="outlined">Log In</Button>
      </Stack>

    </Box>
  )
}

export default navbar