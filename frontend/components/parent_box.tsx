import React from 'react';
import MemberBox from './member_box';
// import "./parent_box.css"

type MemberBoxProps = {
  name: string;
  imgSrc: string;
  twitterLink: string;
  linkedinLink: string;
  githubLink: string;
};

type ParentBoxProps = {
  title: string;
  members: MemberBoxProps[];
};

const ParentBox: React.FC<ParentBoxProps> = ({ title, members }) => {
    return (
      <div style={{ margin:'0', padding: '0'}}>
        <h1 style={{ textAlign: 'center', fontFamily: "GabrielWeiss", paddingTop: "2rem", fontSize: "3rem"}}>{title}</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {members.slice(0, 100).map((member, index) => (
          <MemberBox 
            key={index}
            name={member.name} 
            imgSrc={member.imgSrc} 
            twitterLink={member.twitterLink} 
            linkedinLink={member.linkedinLink} 
            githubLink={member.githubLink} 
          />
        ))}
      </div>
      </div>
    );
  };
export default ParentBox;