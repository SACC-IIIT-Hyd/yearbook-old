import React, { useState } from 'react'
import styles from '../styles/aboutme.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
// import VisuallyHiddenInput from './VisuallyHiddenInput';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import CameraAltIcon from '@mui/icons-material/CameraAlt';





const about = () => {
    const handleEditClick = () => {

        const inputs = document.querySelectorAll('input');

        // Loop through each input element and remove the 'disabled' attribute
        inputs.forEach(input => {
            input.removeAttribute('disabled');
        });
    };


   
        const [images, setImages] = useState([]);

        const handleImageUpload = (event) => {
            const files = event.target.files;
            const imagesArray = [];

            for (let i = 0; i < files.length; i++) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    imagesArray.push(e.target.result);
                    if (imagesArray.length === files.length) {
                        setImages(imagesArray);
                    }
                };
                reader.readAsDataURL(files[i]);
            }
        };

        return (
            <div className={styles.aboutPageBackground}>

                <div className={styles.aboutPage}>

                    <div className={styles.profile}>
                    <Stack direction="row" spacing={2}>
                            <Button variant="contained" className={styles.profileEdit}endIcon={<EditIcon />} >
                               
                            </Button>
                        </Stack>
                        <div className={styles.profileImage}>
                            <img src="" alt="" />
                        </div>
                        <div className={styles.profileName}>
                            <span>Nickname</span>
                            <span>"tagline"</span>
                            <span>CAS name</span>

                        </div>
                        <div className={styles.profileContact}>
                            <span>9898989898</span>
                            <span>guptarohan@gmail.com</span>
                        </div>
                    </div>

                    <div className={styles.questionArea}>
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" endIcon={<EditIcon />} onClick={handleEditClick}>
                                EDIT
                            </Button>
                        </Stack>
                        <div className={styles.queAns}>
                            <class className={styles.que}>
                                Q1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, quisquam.
                            </class>

                            <input disabled className={styles.ans} type="text" placeholder='...' />
                        </div>
                        <div className={styles.queAns}>
                            <class className={styles.que}>
                                Q1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, quisquam.
                            </class>

                            <input disabled className={styles.ans} type="text" placeholder='...' />
                        </div>
                        <div className={styles.queAns}>
                            <class className={styles.que}>
                                Q1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, quisquam.
                            </class>

                            <input disabled className={styles.ans} type="text" placeholder='...' />
                        </div>
                        <div className={styles.queAns}>
                            <class className={styles.que}>
                                Q1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, quisquam.
                            </class>

                            <input disabled className={styles.ans} type="text" placeholder='...' />
                        </div>
                        <div className={styles.queAns}>
                            <class className={styles.que}>
                                Q1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, quisquam.
                            </class>

                            <input disabled className={styles.ans} type="text" placeholder='...' />
                        </div>
                        <div className={styles.queAns}>
                            <class className={styles.que}>
                                Q1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, quisquam.
                            </class>

                            <input disabled className={styles.ans} type="text" placeholder='...' />
                        </div>


                    </div>
                    <div className={styles.extraQueArea}>
                        <div className={styles.extraQueAns}>
                            <span>After IIIT???</span>
                            <input disabled type="text" />
                        </div>
                        <div className={styles.extraQueAns}>
                            <span>CLUBS</span>
                            <input disabled type="text" />

                        </div>
                        <div className={styles.extraQueAns}>
                            <span>Achievements</span>
                            <input disabled type="text" />

                        </div>
                    </div>

                    <div className={styles.imageArea}>
                        <div><img src={images[0]} alt="" /></div>
                        <div><img src={images[1]} alt="" /></div>
                        <div><img src={images[2]} alt="" /></div>
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="contained-button-file"
                            multiple
                            type="file"
                            onChange={handleImageUpload}
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" component="span" endIcon={<CameraAltIcon />}>
                                UPLOAD PHOTOS
                            </Button>
                        </label>
                    </div>
                    );






                </div>

            </div>
        )
    }

    export default about