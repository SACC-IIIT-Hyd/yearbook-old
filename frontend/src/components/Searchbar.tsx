'use client'
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, Box, Typography, List, ListItem, Modal } from '@mui/material';

export default function Searchbar() {
  const [files, setFiles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const handleConfirm = () => {
    console.log('Uploaded Image Details:', uploadedFile); // Log details to console
    setFiles([]); // Reset files array
    setUploadedFile(null); // Reset uploaded file
    closePopup();
  };

  const handleNewImageUpload = (acceptedFiles) => {
    const newFile = acceptedFiles[0];
    setFiles([newFile]); // Update displayed files list
    setUploadedFile(newFile); // Update uploaded file state
    console.log('New Image Details:', newFile); // Log new image details
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: 'image/jpeg, image/png', // Allow JPEG and PNG images
    onDrop: handleNewImageUpload, // Handle new image upload within popup
    noClick: true, // Disables click events on the dropzone
    noKeyboard: true, // Disables keyboard events on the dropzone
  });

  return (
    <Box sx={{ color: '#fff', top: '0', position: 'sticky', zIndex: '10', backgroundColor: '#0b1120' }}>
      <Typography variant="h1" align="center" sx={{ margin:"2rem", fontFamily: 'gabrielweissfriends', fontSize: '5rem', background: 'linear-gradient(to right, #ff9a00, #f3c00c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Photowall</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="outlined"  onClick={openPopup} style={{color: 'white', marginBottom: '1rem'}}>Upload Image</Button>
      </Box>
      {/* {files.length > 0 && (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h4">Files</Typography>
          <List>{files.map((file) => <ListItem key={file.path}>{file.path} - {file.size} bytes</ListItem>)}</List>
        </Box>
      )} */}
      <Modal open={showPopup} onClose={closePopup}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {uploadedFile ? (
                <img src={URL.createObjectURL(uploadedFile)} alt="Uploaded Preview" style={{ width: '150px', height: 'auto', marginTop: '20rem' }} />
            ) : (
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '100vh', 
                    textAlign: "center", 
                    color: "white"
                }}>
                    <input {...getInputProps()} />
                    <Typography sx={{marginBottom:"5vh"}} variant='h5'>Drag & drop a new image here, or click to select one.</Typography>
                    <Box {...getRootProps({ className: 'new-image-dropzone' })}>
                        <input {...getInputProps()} />
                        <Button variant="outlined" onClick={open} style={{color: 'white'}}>Select Image</Button>
                    </Box>
                </Box>
            )}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: "center" }}>
                <Typography variant="h4">Files</Typography>
                <List>{files.map((file) => <ListItem key={file.path}>{file.path} - {file.size} bytes</ListItem>)}</List>
            </Box>
            {uploadedFile && (
                <Button onClick={handleConfirm} style={{color: 'white'}}>Confirm</Button>
            )}
        </Box>
    </Modal>
    </Box>
  );
}