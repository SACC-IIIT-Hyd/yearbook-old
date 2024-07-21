import React, { useState } from "react";
import styles from "../styles/aboutme.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
// import VisuallyHiddentextarea from './VisuallyHiddentextarea';
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Link from "next/link";

const about = () => {
  const handleEditClick = () => {
    const textareas = document.querySelectorAll("textarea");

    // Loop through each textarea element and remove the 'disabled' attribute
    textareas.forEach((textarea) => {
      textarea.removeAttribute("disabled");
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
            <Button
              variant="contained"
              className={styles.profileEdit}
              endIcon={<EditIcon />}
            ></Button>
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
            <Button
              variant="contained"
              endIcon={<EditIcon />}
              onClick={handleEditClick}
            >
              EDIT
            </Button>
          </Stack>
          <div className={styles.queAns}>
            <class className={styles.que}>Q1 My first day in campus</class>

            <textarea
              disabled
              className={styles.ans}
              type="text"
              placeholder="Amazing"
            />
          </div>
          <div className={styles.queAns}>
            <class className={styles.que}>Q2 My favorite campus memory</class>

            <textarea
              disabled
              className={styles.ans}
              type="text"
              placeholder="Felicity"
            />
          </div>
          <div className={styles.queAns}>
            <class className={styles.que}>
              Q3 One thing you will miss the most
            </class>

            <textarea
              disabled
              className={styles.ans}
              type="text"
              placeholder="JC"
            />
          </div>
          <div className={styles.queAns}>
            <class className={styles.que}>
              Q4 Best thing you learned from here
            </class>

            <textarea
              disabled
              className={styles.ans}
              type="text"
              placeholder="Time management"
            />
          </div>
          <div className={styles.queAns}>
            <class className={styles.que}>
              Q5 My favorite place in campus and my favorite prof
            </class>

            <textarea
              disabled
              className={styles.ans}
              type="text"
              placeholder="BBC and Prof. PJN"
            />
          </div>
        </div>
        <div className={styles.extraQueArea}>
          <div className={styles.extraQueAns}>
            <span>After IIIT???</span>
            <textarea disabled type="text" />
          </div>
          <div className={styles.extraQueAns}>
            <span>CLUBS</span>
            <textarea disabled type="text" />
          </div>
          <div className={styles.extraQueAns}>
            <span>Achievements</span>
            <textarea disabled type="text" />
          </div>
        </div>
        <div className={styles.imageArea}>
          <div>
            <img src={images[0]} alt="" />
          </div>
          <div>
            <img src={images[1]} alt="" />
          </div>
          <div>
            <img src={images[2]} alt="" />
          </div>
          <textarea
            accept="image/*"
            style={{ display: "none" }}
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleImageUpload}
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              component="span"
              endIcon={<CameraAltIcon />}
            >
              UPLOAD PHOTOS
            </Button>
          </label>
        </div>
        );
      </div>
    </div>
  );
};

export default about;
