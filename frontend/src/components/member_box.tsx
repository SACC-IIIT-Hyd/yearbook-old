import React, { useMemo } from 'react'; 
import { Box, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

type MemberBoxProps = {
  name: string;
  imgSrc: string;
  InstagramLink: string;
  linkedinLink: string;
  githubLink: string;
};

const MemberBox: React.FC<MemberBoxProps> = ({ name, imgSrc, InstagramLink, linkedinLink, githubLink }) => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down('sm'));

  // Use useMemo to only recalculate when compnent is re-rendered
  const borderColor = useMemo(() => {
    const colors = ['#ffadad', '#bdb2ff', '#a8d1d1', '#ffb9eb', '#8bc9ff']; 
    const randomIndex = Math.floor(Math.random() * colors.length); 
    return colors[randomIndex]; 
  }, []); // Empty dependency array so this only runs once

  return (
    <Box
      sx={{
        flex: '0 0 calc(80% - 60px)',
        margin: '6%',
        width: '80%',
        backgroundColor: '#01101d',
        color: '#fff',
        padding: '20px',
        border: '0.1px solid #fff',
        borderRadius: '8px',
        boxSizing: 'border-box',
        marginBottom: '4rem',
        boxShadow: '0 0 0 0px #fff',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          backgroundColor: '#ffd000',
          color: 'black',
          border: '1px solid black',
          '& .icon': {
            color: 'black',
          },
        },
      }}
    >
      <img
        src={imgSrc}
        alt="Box 1 Image"
        style={{
          width: '100%',
          maxHeight: isPhone ? '200px' : '275px', 
          height: '90%',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '20px',
        }}
      />
      <Typography variant="h2" align="center" sx={{ fontFamily: 'anona', fontSize: isPhone ? '1.5rem' : '2rem', marginBottom: '2rem' }}>
        {name}
      </Typography>
      <Box
        sx={{
          textAlign: 'right',
          '& a': {
            color: 'white',
            marginRight: '5%',
            '&:hover': {
              color: 'black',
            },
          },
        }}
      >
        <IconButton href={InstagramLink} color="inherit" className="icon">
        <InstagramIcon />
        </IconButton>
        <IconButton href={linkedinLink} color="inherit" className="icon">
          <LinkedInIcon />
        </IconButton>
        <IconButton href={githubLink} color="inherit" className="icon">
          <GitHubIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default MemberBox;