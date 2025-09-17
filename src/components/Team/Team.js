import React from "react";
import "./Team.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const lead = [
  {
    id: 1,
    name: "Devansh",
    role: "President",
    skills: ["Django", "Flask", "AI/ML"],
    img: "https://i.pinimg.com/736x/08/0f/2c/080f2c2776caccbe26f40ff656f4e018.jpg",
    socials: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/"
    }
  },
  {
    id: 2,
    name: "Sophia Turner",
    role: "Director",
    skills: ["Figma", "Adobe XD", "Prototyping"],
    img: "https://i.pinimg.com/736x/76/de/88/76de88f69cd9217a2520b27ba797ac59.jpg",
    socials: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/"
    }
  }
];

const core = [
  {
    id: 1,
    name: "Aarav",
    role: "Frontend Developer",
    skills: ["React", "Tailwind", "GSAP"],
    img: "https://i.pinimg.com/736x/8d/9f/14/8d9f14d26c4c44dbad90bbd9e3f1a7a4.jpg",
    socials: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/"
    }
  },
  {
    id: 2,
    name: "Maya",
    role: "Backend Engineer",
    skills: ["Node.js", "Express", "MongoDB"],
    img: "https://i.pinimg.com/736x/2b/61/72/2b61728ac2681b7ac28b77bd1a0e8f87.jpg",
    socials: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/"
    }
  },
  {
    id: 3,
    name: "Karan",
    role: "Security Analyst",
    skills: ["Ethical Hacking", "PenTesting"],
    img: "https://i.pinimg.com/736x/ae/cc/20/aecc20e6f17d9d27f10d410bfa96df67.jpg",
    socials: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/"
    }
  },
  {
    id: 4,
    name: "Elena",
    role: "Product Manager",
    skills: ["Agile", "Scrum", "Leadership"],
    img: "https://i.pinimg.com/736x/8e/12/ab/8e12ab5b192ba09df9f9d83f716fcb11.jpg",
    socials: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/"
    }
  },
  {
    id: 5,
    name: "Rahul",
    role: "Data Scientist",
    skills: ["Python", "TensorFlow", "NLP"],
    img: "https://i.pinimg.com/736x/cd/cf/7e/cdcf7e6e94a8bfc3db3f9a934f5f4120.jpg",
    socials: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/"
    }
  }
];

export default function Team() {
  return (
    <div className="team-page">
      <h2 className="team-section-title">LEAD</h2>
      <div className="lead-grid">
        {lead.map((m) => (
          <div className="team-card lead-card" key={m.id}>
            <div className="team-img">
              <img src={m.img} alt={m.name} />
              <span className="team-role">{m.role}</span>
              <div className="team-socials">
                <a href={m.socials.github}><FaGithub /></a>
                <a href={m.socials.linkedin}><FaLinkedin /></a>
                <a href={m.socials.twitter}><FaTwitter /></a>
              </div>
            </div>
            <div className="team-info">
              <h3>{m.name}</h3>
              <p>{m.skills.join(" • ")}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="team-section-title">CORE TEAM</h2>
      <div className="core-grid">
        {core.map((m) => (
          <div className="team-card core-card" key={m.id}>
            <div className="team-img">
              <img src={m.img} alt={m.name} />
              <span className="team-role">{m.role}</span>
              <div className="team-socials">
                <a href={m.socials.github}><FaGithub /></a>
                <a href={m.socials.linkedin}><FaLinkedin /></a>
                <a href={m.socials.twitter}><FaTwitter /></a>
              </div>
            </div>
            <div className="team-info">
              <h3>{m.name}</h3>
              <p>{m.skills.join(" • ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
