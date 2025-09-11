import React from 'react';
import './Team.css';
import A from './Teamletters/A.png';
import E from './Teamletters/E.png';
import M from './Teamletters/M.png';
import T from './Teamletters/T.png';
import Arrowuni from './Teamletters/Arrowuni.png';

const teamMembers = [
  { id: 1, name: 'Alice', role: 'Developer', img: A },
  { id: 2, name: 'Ethan', role: 'Designer', img: E },
  { id: 3, name: 'Maya', role: 'Project Manager', img: M },
  { id: 4, name: 'Tom', role: 'QA Engineer', img: T }
];

const Team = () => {
  return (
    <div className="team">
      <h2>Meet the Team</h2>
      <div className="team-members">
        {teamMembers.map(member => (
          <div key={member.id} className="team-member-card">
            <img src={member.img} alt={member.name} className="team-member-img" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
      <div className="team-arrow">
        <img src={Arrowuni} alt="Team Arrow" />
      </div>
    </div>
  );
};

export default Team;
