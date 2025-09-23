import React, { useState } from "react";
import PropTypes from "prop-types";
import teamData from "../../data/team.json";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import "./Team.css";

const Team = () => {
  const { core } = teamData;

  return (
    <section className="team-page">
      <h2 className="team-section-title">Team CyferNauts</h2>
      <div className="core-grid">
        {core.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

const TeamCard = ({ member }) => {
  const [imageError, setImageError] = useState(false);
  const isPresident = member.role === "President";
  const isDirector = member.role === "Director";

  return (
    <div className={`team-card ${isPresident ? 'president' : ''} ${isDirector ? 'director' : ''}`}>
      <div className="team-img">
        {!imageError ? (
          <img
            src={member.img}
            alt={member.name}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="image-error-fallback">
            <div className="fallback-avatar">{member.name.charAt(0)}</div>
          </div>
        )}
        <div className="team-role">{member.role}</div>
      </div>
      <div className="team-info">
        <h3>{member.name}</h3>
        <p className="skills">{member.skills.join(", ")}</p>
      </div>
      <div className="team-socials">
        <SocialIcons socials={member.socials} />
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    img: PropTypes.string.isRequired,
    socials: PropTypes.object.isRequired,
  }).isRequired,
};

const SocialIcons = ({ socials }) => {
  const links = [
    { key: "github", Icon: FaGithub, href: socials.github },
    { key: "linkedin", Icon: FaLinkedin, href: socials.linkedin },
    { key: "twitter", Icon: FaTwitter, href: socials.twitter },
    { key: "whatsapp", Icon: FaWhatsapp, href: socials.whatsapp },
    { key: "instagram", Icon: FaInstagram, href: socials.instagram },
    { key: "discord", Icon: FaDiscord, href: socials.discord },
  ];

  return (
    <>
      {links.map(
        ({ key, Icon, href }) =>
          href && (
            <div className="tooltip-container" key={key}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon />
              </a>
              <span className="tooltip">{key}</span>
            </div>
          )
      )}
    </>
  );
};

SocialIcons.propTypes = {
  socials: PropTypes.object.isRequired,
};

export default Team;
