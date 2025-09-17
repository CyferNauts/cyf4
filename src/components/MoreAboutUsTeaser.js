import React from 'react';

export default function MoreAboutUsTeaser() {
  return (
    <div style={{ width: '100%', backgroundColor: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px 0' }}>
      <div style={{ width: '70%', maxWidth: '1000px', position: 'relative', paddingBottom: '39%', height: 0 }}>
        <iframe
          src="https://www.youtube.com/embed/AuKR2fQbMBk"
          title="More About Us Teaser"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        ></iframe>
      </div>
    </div>
  );
}
