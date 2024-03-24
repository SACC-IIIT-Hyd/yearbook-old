// import { Card, CardContent, Typography } from '@mui/material';
'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DraggableCard from './draggableCard';
import Button from '@mui/material/Button';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const BasicCard = () => {
  // Your data (e.g., Pratyush Rathore's info)
  const [cards, setCards] = React.useState([
    { id: 1, title: '-A', content: 'a benevolent smile dkhfbgkhdfbvkfdjv uhgi dfvhfidvhldrunhgukv bgkdhgvkuhdkgbkjbv ehtgkegcfkhcseickxgnhdgn heskv uvbgsnckefhvgbnfumdonbgnfihmdo' },
    { id: 2, title: '-B', content: 'a mischievious smile' },
    { id: 3, title: '-C', content: 'a malevolent smile' },
    { id: 4, title: '-D', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam. Sed vulputate mi sit amet mauris. Dolor purus non enim praesent elementum facilisis leo vel.' },
    { id: 5, title: '-E', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam. Sed vulputate mi sit amet mauris. Dolor purus non enim praesent elementum facilisis leo vel.' },
    { id: 6, title: '-F', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam. Sed vulputate mi sit amet mauris. Dolor purus non enim praesent elementum facilisis leo vel.' },
    { id: 7, title: '-G', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam. Sed vulputate mi sit amet mauris. Dolor purus non enim praesent elementum facilisis leo vel.' },
    { id: 8, title: '-H', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam. Sed vulputate mi sit amet mauris. Dolor purus non enim praesent elementum facilisis leo vel.' },
    { id: 9, title: '-I', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam. Sed vulputate mi sit amet mauris. Dolor purus non enim praesent elementum facilisis leo vel.' },
    { id: 10, title: '-J', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam. Sed vulputate mi sit amet mauris. Dolor purus non enim praesent elementum facilisis leo vel.' },
    { id: 11, title: '-K', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam. Sed vulputate mi sit amet mauris. Dolor purus non enim praesent elementum facilisis leo vel.' },
    { id: 12, title: '-L', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam. Sed vulputate mi sit amet mauris. Dolor purus non enim praesent elementum facilisis leo vel.' },
    { id: 13, title: '-M', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam. Sed vulputate mi sit amet mauris. Dolor purus non enim praesent elementum facilisis leo vel.' },
    { id: 14, title: '-N', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam. Sed vulputate mi sit amet mauris. Dolor purus non enim praesent elementum facilisis leo vel.' },
    { id: 15, title: '-O', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam. Sed vulputate mi sit amet mauris. Dolor purus non enim praesent elementum facilisis leo vel.' },
    { id: 16, title: '-P', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam. Sed vulputate mi sit amet mauris. Dolor purus non enim praesent elementum facilisis leo vel.' },
    { id: 17, title: '-Q', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam. Sed vulputate mi sit amet mauris. Dolor purus non enim praesent elementum facilisis leo vel.' },
    { id: 18, title: '-R', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam. Sed vulputate mi sit amet mauris. Dolor purus non enim praesent elementum facilisis leo vel.' },
    { id: 19, title: '-S', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam. Sed vulputate mi sit amet mauris. Dolor purus non enim praesent elementum facilisis leo vel.' },
    { id: 20, title: '-T', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam. Sed vulputate mi sit amet mauris. Dolor purus non enim praesent elementum facilisis leo vel.' },
    // Add more cards as needed
  ]);

  const [isDropCalled, setIsDropCalled] = React.useState(false);

  const handleDragStart = (e, cardId) => {
    e.dataTransfer.setData('text/plain', cardId);
  };

  const handleDrop = (e, dropIndex) => {
    e.stopPropagation();

    const draggedId = e.dataTransfer.getData('text/plain');
    const draggedIndex = cards.findIndex(card => card.id === Number(draggedId));
  
    // Copy the cards array
    const newCards = [...cards];
  
    // Swap the cards
    const temp = newCards[draggedIndex];
    newCards[draggedIndex] = newCards[dropIndex];
    newCards[dropIndex] = temp;
  
    // Update the state
    setCards(newCards);
    setIsDropCalled(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSaveClick = () => {
    const cardIds = cards.map(card => card.id);
    console.log(cardIds);
  };

  return (
    <Box>
        <Box sx={{ position: 'sticky', top: 15, zIndex: 1, background: "#0C0018" }}>
          <Typography 
            paddingTop={"3rem"} 
            variant="h2" 
            align="center" 
            sx={{ 
              fontFamily: "GabrielWeissFriends", 
              background: 'linear-gradient(45deg, #e09223 30%, #f600bb 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }} 
            gutterBottom
          >
            Your Testimonials
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
      
              <Button variant="contained" onClick={handleSaveClick} disabled={!isDropCalled} sx={{ '&:hover': {backgroundColor: 'transparent',color: '#e4783e', border: !isDropCalled ? 'none' : "1px solid #e4783e",}, backgroundColor: 'transparent',color:"#e85b5d", fontSize:"larger", marginBottom: 2, border: !isDropCalled ? 'none' : "1px solid #e85b5d"}}>
                  Save
              </Button>
          </Box>
        </Box>
        <Grid container justifyContent="center" alignItems="center" spacing={2} marginBlockStart={4} paddingLeft={65} paddingRight={65}>
        {cards.map((card, index) => (
            <Grid item xs={12} sm={6} key={card.id} sx={{ width: '25%' }}>
            <DraggableCard 
                key={card.id}
                content={card.content}
                title={card.title}
                onDragStart={(e) => handleDragStart(e, card.id)}
                onDrop={(e) => handleDrop(e, index)}
                onDragOver={handleDragOver}
            />
            </Grid>
        ))}
        </Grid>
        
    </Box>
  );
};

export default BasicCard;
