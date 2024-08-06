'use client';
import Head from 'next/head';
import ParentBox from '../../components/parent_box';
import { Box, CssBaseline, Container } from '@mui/material';
const ameyimg = "/amey.png";

export default function Home() {
  const members = [
    {
      name: "Amey Karan",
      imgSrc: ameyimg,
      InstagramLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
    {
      name: "Ashna Dua",
      imgSrc: "/Ashna.jpeg",
      InstagramLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
    {
      name: "Shubham Goel",
      imgSrc: "/Shubham.jpeg",
      InstagramLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
    {
      name: "Kriti Gupta",
      imgSrc: "/Kriti.jpg",
      InstagramLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
    {
      name: "Bhav Beri",
      imgSrc: "/Bhav.jpg",
      InstagramLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
    {
      name: "Rohan Gupta",
      imgSrc: "/Rohan.jpeg",
      InstagramLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
    // Add more members as needed
  ];
  const other_contributers = [
    {
      name: "Deekshitha",
      imgSrc: "Deekshitha.jpg",
      InstagramLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
    {
      name: "Gnaneswar",
      imgSrc: "Gnaneswar.jpeg",
      InstagramLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
    {
      name: "Pratyush",
      imgSrc: "Pratyush.jpg",
      InstagramLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
    {
      name: "Kunal Angadi",
      imgSrc: "Kunal.jpg",
      InstagramLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
    {
      name: "Bipasha Garg",
      imgSrc: "Bipasha.jpg",
      InstagramLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
  ];
  const special_mentions = [
    {
      name: "Clubs Council",
      imgSrc: "Clubs_Council.jpeg",
      InstagramLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
    {
      name: "Aditya Jain Pansari",
      imgSrc: "Aditya.jpeg",
      InstagramLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#001120', color: 'white', minHeight: '100vh' }}>
      <CssBaseline />
        <ParentBox title="Meet the team" members={members} />
        <ParentBox title="Other Contributers" members={other_contributers} />
        <ParentBox title="Special Mentions" members={special_mentions} />
    </Box>
  );
}