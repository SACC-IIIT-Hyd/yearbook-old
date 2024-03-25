import Head from 'next/head';
import ParentBox from '../../components/parent_box';
const ameyimg = "/amey.png";

export default function Home() {
  const members = [
    {
      name: "Amey Karan",
      imgSrc: ameyimg,
      twitterLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
    {
      name: "Ashna Dua",
      imgSrc: "/Ashna.jpeg",
      twitterLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
    {
      name: "Shubham Goel",
      imgSrc: "/Shubham.jpeg",
      twitterLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
    {
      name: "Kriti Gupta",
      imgSrc: "/Kriti.jpg",
      twitterLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
    {
      name: "Bhav Beri",
      imgSrc: "/Bhav.jpg",
      twitterLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
    {
      name: "Rohan Gupta",
      imgSrc: "/Rohan.jpeg",
      twitterLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
    // Add more members as needed
  ];
  const other_contributers = [
    {
      name: "Deekshitha",
      imgSrc: "Deekshitha.jpg",
      twitterLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
    {
      name: "Gnaneswar",
      imgSrc: "Gnaneswar.jpeg",
      twitterLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
    {
      name: "Pratyush",
      imgSrc: "Pratyush.jpg",
      twitterLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
    {
      name: "Kunal Angadi",
      imgSrc: "Kunal.jpg",
      twitterLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
    {
      name: "Bipasha Garg",
      imgSrc: "Bipasha.jpg",
      twitterLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
  ];
  const special_mentions = [
    {
      name: "Clubs Council",
      imgSrc: "Clubs_Council.jpeg",
      twitterLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
    {
      name: "Aditya Jain Pansari",
      imgSrc: "Aditya.jpeg",
      twitterLink: "#",
      linkedinLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <div style={{ backgroundColor: '#001120', margin: '0', padding: '0', color: 'white'}}>
      <ParentBox title="Meet the team" members={members} />
      <ParentBox title="Other Contributers" members={other_contributers} />
      <ParentBox title="Special Mentions" members={special_mentions} />
    </div>
  );
}