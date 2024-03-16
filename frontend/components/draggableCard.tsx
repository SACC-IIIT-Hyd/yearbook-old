// components/DraggableCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface coms {
    title: string;
    content: string;
    onDragStart: (e: React.DragEvent) => void;
    onDrop: (e: React.DragEvent) => void;
    onDragOver: (e: React.DragEvent) => void;
}

const DraggableCard: React.FC<coms> = ({ title, content, onDragStart, onDrop, onDragOver }) => {
  return (
    <Card sx={{ maxWidth: '90%', 
    minWidth: 150, 
    justifyContent: "center",
    backgroundImage: `url('https://t4.ftcdn.net/jpg/02/13/46/69/360_F_213466974_95542yVO3ByjNj9hzWswPxTVWcw77y77.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    border: "1px solid red",}}
    draggable onDragStart={onDragStart} onDrop={onDrop} onDragOver={onDragOver}>
      <CardContent sx={{ minHeight:"15rem",  display: 'flex', flexDirection: 'column', padding:"3%", paddingTop:"0", wordWrap:"break-word"}}>
        <img src="./pin.png" style={{ height: '80px', maxWidth: "50px", marginLeft: "auto", marginBottom:"0", paddingBottom:"0"}} />
      <p>
        {content}
      </p>
      <div style={{ marginLeft:"auto", fontFamily: "GabrielWeissFriends", fontSize: '1.25rem', fontWeight: 500, marginTop: 'auto' }}>
        {title}
      </div>
    </CardContent>
    </Card>
  );
};

export default DraggableCard;