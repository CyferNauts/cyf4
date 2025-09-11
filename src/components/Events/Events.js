import React from 'react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Tech Workshop',
      date: '2024-10-15',
      description: 'Learn the latest in technology.',
      location: 'Online'
    },
    {
      id: 2,
      title: 'Hackathon',
      date: '2024-11-20',
      description: 'Build innovative solutions.',
      location: 'Campus'
    },
    {
      id: 3,
      title: 'Networking Event',
      date: '2024-12-05',
      description: 'Connect with professionals.',
      location: 'Convention Center'
    }
  ];

  return (
    <div className="events">
      <h2>Upcoming Events</h2>
      <div className="events-list">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
