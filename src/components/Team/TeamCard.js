import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SocialIcons from './SocialIcons';

const TeamCard = ({ member }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  return (
    <div className="team-card core-card">
      <div className="team-img">
        {imageLoading && (
          <div className="image-loading-skeleton">
            <div className="skeleton-pulse"></div>
          </div>
        )}
        {!imageError ? (
          <img
            src={member.img}
            alt={`${member.name} - ${member.role}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ display: imageLoading ? 'none' : 'block' }}
          />
        ) : (
          <div className="image-error-fallback">
            <div className="fallback-avatar">
              {member.name.charAt(0).toUpperCase()}
            </div>
          </div>
        )}
        <div className="team-role">{member.role}</div>
      </div>
      <div className="team-info">
        <h3>{member.name}</h3>
        <p>{member.skills.join(', ')}</p>
      </div>
      <SocialIcons socials={member.socials} memberName={member.name} />
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
    socials: PropTypes.shape({
      github: PropTypes.string,
      linkedin: PropTypes.string,
      twitter: PropTypes.string,
      whatsapp: PropTypes.string,
      instagram: PropTypes.string,
      discord: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default TeamCard;
