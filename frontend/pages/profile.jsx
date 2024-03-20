import React, { useRef, useState } from 'react';
import styles from '../styles/profile.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import Auth from '../src/auth';
import { Link } from '@mui/material';
import { red } from '@mui/material/colors';


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


  const { auth, fetchCookie } = Auth();

  const submitProfile = () => {
    // call useEffect of auth
    fetchCookie()

    console.log("submitting profile")
    console.log("auth: ", auth)
    
    if (!auth) {
      // redirect to login
      alert("Please login to submit profile")
      return

    }
    console.log("submitting profile")

    fetch('http://localhost:3000/api/profile/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          "email1": "amey.k@iiit.ac.in",
          "email2": "amek@gmail.com",
          "phone": "7904735718",
          "home": "Cbe",
          "dob": "2005-12-31",
          "degree_type": "Btech",
          "join_year": "2022",
          "nick_name": "Minor",
          "branch": "CSD"
        }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert("Profile submitted successfully")
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }



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
            <Button variant="outlined" onClick={submitProfile}>Submit</Button>

          </div>
        </div>

      </div>



    </div>
  )
}

export default user_details