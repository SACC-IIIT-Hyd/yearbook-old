import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

type MemberBoxProps = {
    name: string;
    imgSrc: string;
    twitterLink: string;
    linkedinLink: string;
    githubLink: string;
  };  

  const Box1 = styled.div`
  flex: 0 0 calc(20% - 60px);
  margin: 3%;
  width: 20%;
  background-color: #01101d;
  color: #fff;
  padding: 20px;
  
  border: 0.1px solid #fff;
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 3rem;
  box-shadow: 0 0 0 0px #fff;
  transition: background-color 0.3s ease, transform 0.3s ease;

  h2 {
    text-align: center;
    font-family: 'anona';
    font-size: 2rem;
  }

  .a_header {
    text-align: right;
  }

  .a_header a {
    color: white;
    margin-right: 5%;
    text-align: right;
  }

  &:hover {
    transform: scale(1.05);
    background-color: #ffd000;
    color: black;
    border: 1px solid black;

    .a_header a {
      color: black;
    }
  }
`;

  const MemberBox: React.FC<MemberBoxProps> = ({ name, imgSrc, twitterLink, linkedinLink, githubLink }) => {
  return (
    <Box1 className='Box'>
      <img src={imgSrc} alt="Box 1 Image" style={{
        width: '100%',
        maxHeight: '275px',
        height: '90%',
        objectFit: 'cover',
        borderRadius: '8px',
        marginBottom: '10px'
        }}/>
      <h2>{name}</h2>
      <div className="a_header">
        <a href={twitterLink}>
          <svg stroke="currentColor" fill="none" stroke-width="1" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"  font-size="1.5rem" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"  ><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
        </a>
        <a href={linkedinLink}>
          <svg stroke="currentColor" fill="none" stroke-width="1" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"   font-size="1.5rem" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"  ><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a href={githubLink}>
          <svg stroke="currentColor" fill="none" stroke-width="1" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"   font-size="1.5rem" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"  ><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
      </div>
    </Box1>
  );
};

export default MemberBox;