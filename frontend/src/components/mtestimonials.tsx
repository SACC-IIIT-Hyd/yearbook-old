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

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, cardId: number) => {
    e.dataTransfer.setData('text/plain', cardId.toString());
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
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

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleSaveClick = () => {
    const cardIds = cards.map(card => card.id);
    console.log(cardIds);
  };

  return (
    <Box sx={{ background: "#0b1120", paddingBottom: "5vh" }}>
        <Box sx={{ position: 'sticky', top: 15, zIndex: 1, background: "#0b1120" }}>
          <Typography 
            paddingTop={"3rem"} 
            variant="h2" 
            align="center" 
            sx={{ 
              fontFamily: "GabrielWeissFriends", 
              // background: 'linear-gradient(45deg, #e09223 30%, #f600bb 90%)',
              background: "linear-gradient(59deg, rgba(21,101,192,1) 35%, rgba(246,0,187,1) 64%)",
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }} 
            gutterBottom
          >
            Your Testimonials
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
      
              <Button variant="contained" 
                onClick={handleSaveClick} 
                disabled={!isDropCalled} 
                sx={{ '&:hover': {backgroundColor: 'transparent',color: '#f600bb', border: !isDropCalled ? 'none' : "1px solid #f600bb",}, backgroundColor: 'transparent',color:"#1565c0", fontSize:"larger", marginBottom: 2, border: !isDropCalled ? 'none' : "1px solid #1565c0"}}>
                  Save
              </Button>
          </Box>
        </Box>
        <Grid container justifyContent="center" alignItems="center"  marginBlockStart={4} 
          sx={{
                paddingLeft: { xs: 5, sm: 6, md: 6, lg: 25 },
                paddingRight: { xs: 1, sm: 2, md: 3, lg: 21 },
                margin: '0 auto',
                maxWidth: '100%'
                
          }}>
            {cards.map((card, index) => (
                <Grid item xs={12} sm={6} md={4} key={card.id} paddingTop={ 5 }>
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
