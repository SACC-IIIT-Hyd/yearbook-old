import React, { useRef, useState } from 'react';
import styles from '../styles/profile.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';



const user_details = () => {

  // code for choosing profile photo
  // **********************************
  const inputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  // ********************************************

  // code for degree dropdown
  // ************************************************ 
  const [degree, setDegree] = React.useState('');

  const handleChangeDegree = (event) => {
    setDegree(event.target.value);
  };
  // ****************************************************





  return (
    <div className={styles.profilePage}>

      <div className={styles.profilePageHead}>
        <h1>Yearbook profile</h1>
        <h3>Open Your Yearbook Account with Us</h3>
      </div>
      <div className={styles.profilePageBody}>

        <div className={styles.photoArea}>
          <div className={styles.userPhoto}>
            <img src={selectedImage || "/dummyImage.png"} alt="" style={{ maxWidth: '100%' }} />
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <button onClick={handleButtonClick}>+</button>

          </div>

          <TextField id="standard-basic" label="Tagline" variant="standard" defaultValue="...." />



        </div>

        <div className={styles.detailsArea}>
          <div className={styles.detailSection1}>
            <TextField
              id="standard-read-only-input"
              label="CAS NAME"
              defaultValue="CAS NAME"
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              id="standard-read-only-input"
              label="Roll No."
              defaultValue="Roll No."
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              id="standard-read-only-input"
              label="College email"
              defaultValue="College email"
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />


          </div>
          <div className={styles.detailSection2}>
            <TextField
              required
              id="outlined-required"
              label="Nickname"
              defaultValue="..."
            />
            <TextField
              required
              id="outlined-required"
              label="Personal email"
              defaultValue="..."
            />
            <TextField
              required
              id="outlined-required"
              label="Whatsapp no."
              defaultValue="..."
            />
            <TextField

              id="outlined-required"
              label="Alternate no."
              defaultValue="..."
            />

          </div>
          <div className={styles.detailSection3}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Degree</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={degree}
                label="Degree"
                onChange={handleChangeDegree}
                required
              >

                <MenuItem value={"BTech"}>BTech</MenuItem>
                <MenuItem value={"BTech+MS"}>BTech+MS</MenuItem>
                <MenuItem value={"MTech"}>MTech</MenuItem>
                <MenuItem value={"PHD"}>PHD</MenuItem>
              </Select>
            </FormControl>



            <TextField
              required
              id="outlined-required"
              label="Year of joining"
              defaultValue="..."
            />

            <TextField
              required
              id="outlined-required"
              label="Branch"
              defaultValue="..."
            />
            
            <input id="dob" type="date" />

          </div>

          <div className={styles.detailSection4}>
          <Button variant="outlined">Submit</Button>

          </div>
        </div>

      </div>



    </div>
  )
}

export default user_details