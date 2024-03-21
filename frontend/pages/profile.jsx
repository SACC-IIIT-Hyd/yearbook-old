import React, { useEffect, useRef, useState } from 'react';
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

  const inputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [degree, setDegree] = useState('');
  const { auth, fetchCookie } = Auth();
  const [fetchProfile, setFetchProfile] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: '',
    email1: '',
    email2: '',
    phone: '',
    hometown: '',
    dob: '',
    degree_type: '',
    join_year: '',
    nick_name: '',
    branch: '',
    rollno: '',
    tagline: '',
    instagram: '',
    linkedin: '',
    photo: '/dummyImage.png'
  });

  useEffect(() => {
    setUserDetails({
      ...userDetails,
      degree_type: degree
    });
  }, [degree]);


  useEffect(() => {
    fetch('http://yearbook-sacc.iiit.ac.in/api/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          console.log("Error in fetching user details");
          return;
        }

        setUserDetails({
          name: data.name,
          email1: data.email1,
          email2: data.email2,
          phone: data.phone,
          hometown: data.hometown,
          dob: data.dob,
          degree_type: data.degree_type,
          join_year: data.join_year,
          nick_name: data.nick_name,
          branch: data.branch,
          rollno: data.roll_no,
          tagline: data.tagline,
          instagram: data.instagram,
          linkedin: data.linkedin,
          photo: data.photo
        });
        setSelectedImage(data.photo || "/dummyImage.png");
        console.log("User details: ", userDetails);
        // console.log("Image: ", selectedImage);
      });
  }, [fetchProfile]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
      setUserDetails({
        ...userDetails,
        photo: reader.result
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleChangeDegree = (event) => {
    setDegree(event.target.value);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(id, value);
    setUserDetails({
      ...userDetails,
      [id]: value
    });
    console.log(userDetails);
  };


  // const submitProfile = () => {
  //   fetchCookie();

  //   if (!auth) {
  //     alert('Please login to submit profile');
  //     return;
  //   }

  //   fetch('http://localhost/api/profile/add', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(userDetails),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('Success:', data);
  //       alert('Profile submitted successfully');
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // };

  const handleButtonClick = () => {
    inputRef.current.click();
  };


  const submitProfile = () => {
    console.log(user_details);

    // call useEffect of auth
    // fetchCookie()

    // console.log("submitting profile")
    // console.log("auth: ", auth)

    // if (!auth) {
    //   // redirect to login
    //   alert("Please login to submit profile")
    //   return

    // }
    console.log("submitting profile")

    fetch('http://yearbook-sacc.iiit.ac.in/api/profile/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        { ...userDetails, }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Uploaded:', data);

        if (data.error) {
          console.log("Error in submitting profile")
          alert("Error in submitting profile")
          return;
        }

        alert("Profile submitted successfully")
        setFetchProfile(!fetchProfile)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


  return (
    <div className={styles.profilePage}>

      <div className={styles.profilePageHead}>
        <h1>Yearbook Profile</h1>
        <h3>Open Your Yearbook Account with Us</h3>
      </div>
      <div className={styles.profilePageBody}>

        <div className={styles.photoArea}>
          <div className={styles.userPhoto}>
            <img src={selectedImage} alt="" style={{ maxWidth: '100%' }} />
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <button onClick={handleButtonClick}>+</button>

          </div>

          <TextField
            required
            id="nick_name"
            label="Nickname"
            value={userDetails.nick_name}
            onChange={handleChange}
            placeholder='@joey'
          />

        </div>

        <div className={styles.detailsArea}>
          <div className={styles.detailSection1}>
            <TextField
              id="name"
              label="Name"
              value={userDetails.name}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />

            <TextField
              id="rollno"
              label="Roll No."
              value={userDetails.rollno}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
          </div>

          <div className={styles.detailSection5}>
            <TextField
              id="email1"
              label="College email"
              value={userDetails.email1}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
              fullWidth
            />

            <TextField
              required
              id="email2"
              label="Personal email"
              fullWidth
              value={userDetails.email2}
              onChange={handleChange}
              placeholder='joey.trib@friends.in'
            />

          </div>


          <div className={styles.detailSection2}>
            <TextField
              required
              id="phone"
              label="Whatsapp number"
              value={userDetails.phone}
              onChange={handleChange}
              placeholder='9876543210'
            />

            <TextField
              id="instagram"
              label="Instagram"
              value={userDetails.instagram}
              onChange={handleChange}
              placeholder='itzjoey'
            />

            <TextField
              id="linkedin"
              label="LinkedIn"
              value={userDetails.linkedin}
              onChange={handleChange}
              placeholder='itzjoey.official'
            />


            <TextField
              sx={{ gridColumnStart: '1', gridColumnEnd: '4' }}
              required
              id="tagline"
              label="Tagline"
              fullWidth
              value={userDetails.tagline}
              onChange={handleChange}
              placeholder="I'm cool"
            />

          </div >


          <div className={styles.detailSection6}>
            <TextField
              required
              id="join_year"
              label="Year of joining"
              value={userDetails.join_year}
              onChange={handleChange}
              placeholder='2020'
            />

            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="degree_label">Degree</InputLabel>
              <Select
                required
                id="degree_type"
                value={userDetails.degree_type}
                label="Degree"
                onChange={handleChangeDegree}
                placeholder='Select an option'
              >
                <MenuItem value={"BTech"}>BTech</MenuItem>
                <MenuItem value={"BTech+MS"}>BTech+MS</MenuItem>
                <MenuItem value={"MS"}>MS</MenuItem>
                <MenuItem value={"MTech"}>MTech</MenuItem>
                <MenuItem value={"PHD"}>PHD</MenuItem>
              </Select>
            </FormControl>


            <TextField
              required
              id="branch"
              label="Branch"
              value={userDetails.branch}
              placeholder='CSE'
              onChange={handleChange}
            />
          </div >


          <div className={styles.detailSection3}>
            <label htmlFor="dob">
              Date of Birth
              <input id="dob" type="date" required value={userDetails.dob} onChange={handleChange} />
            </label>

            <TextField
              id="hometown"
              label="Hometown"
              value={userDetails.hometown}
              onChange={handleChange}
              placeholder='Hyderabad'
            />
          </div>

          <div className={styles.detailSection4}>
            <Button variant="outlined" onClick={submitProfile}>Submit</Button>
          </div >
        </div >

      </div >



    </div >
  )
}

export default user_details