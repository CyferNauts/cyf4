import React from "react";
import "./Links.css";

// You can use SVGs from a CDN or local files. Here are SVGs as React components:
const GithubIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.93.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.12 3.02.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56A10.99 10.99 0 0023.5 12c0-6.27-5.23-11.5-11.5-11.5z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm5.13.88a1.13 1.13 0 110 2.25 1.13 1.13 0 010-2.25z"/>
  </svg>
);

const LinkIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17 7a5 5 0 00-7.07 0l-3.54 3.54a5 5 0 007.07 7.07l1.06-1.06a1 1 0 10-1.42-1.42l-1.06 1.06a3 3 0 01-4.24-4.24l3.54-3.54a3 3 0 014.24 4.24l-1.06 1.06a1 1 0 101.42 1.42l1.06-1.06A5 5 0 0017 7z"/>
  </svg>
);

const BrochureIcon = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <rect x="4" y="3" width="16" height="18" rx="3" fill="#181f2b" opacity="0.92"/>
    <rect x="7" y="6" width="10" height="2" rx="1" fill="#13bcff"/>
    <rect x="7" y="10" width="10" height="2" rx="1" fill="#13bcff"/>
    <rect x="7" y="14" width="6" height="2" rx="1" fill="#13bcff"/>
    <rect x="15" y="14" width="2" height="2" rx="1" fill="#46c5e5"/>
    <rect x="7" y="18" width="10" height="1.2" rx="0.6" fill="#1d7db5"/>
    <rect x="7" y="19.5" width="6" height="1.2" rx="0.6" fill="#13bcff"/>
  </svg>
);
const links = [
    { href: "https://cyfernode.netlify.app/brochure", label: "Events Brochure", icon: <BrochureIcon /> },
  { href: "https://github.com/cyfernauts", label: "GitHub", icon: <GithubIcon /> },
  { href: "https://instagram.com/", label: "Instagram", icon: <InstagramIcon /> },
  { href: "https://yourwebsite.com/", label: "Website", icon: <LinkIcon /> }
];

export default function Links() {
  return (
    <div className="links-section">
      {links.map(link => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-icon"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}