import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaInstagram, FaDiscord } from 'react-icons/fa';

const SocialIcons = ({ socials, memberName }) => {
  const socialLinks = [
    { key: 'github', Icon: FaGithub, href: socials.github, label: 'GitHub' },
    { key: 'linkedin', Icon: FaLinkedin, href: socials.linkedin, label: 'LinkedIn' },
    { key: 'twitter', Icon: FaTwitter, href: socials.twitter, label: 'Twitter' },
    { key: 'whatsapp', Icon: FaWhatsapp, href: socials.whatsapp, label: 'WhatsApp' },
    { key: 'instagram', Icon: FaInstagram, href: socials.instagram, label: 'Instagram' },
    { key: 'discord', Icon: FaDiscord, href: socials.discord, label: 'Discord' },
  ];

  return (
    <div className="team-socials">
      {socialLinks.map(({ key, Icon, href, label }) => {
        if (!href) return null;

        return (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${memberName} ${label} profile`}
            title={`${memberName} ${label} profile`}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

SocialIcons.propTypes = {
  socials: PropTypes.shape({
    github: PropTypes.string,
    linkedin: PropTypes.string,
    twitter: PropTypes.string,
    whatsapp: PropTypes.string,
    instagram: PropTypes.string,
    discord: PropTypes.string,
  }).isRequired,
  memberName: PropTypes.string.isRequired,
};

export default SocialIcons;
