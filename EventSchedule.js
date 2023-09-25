import React from 'react';

const EventSchedule = () => {
  const sessions = [
    { id: 1, title: 'AI in Events', time: '10:00 AM' },
    { id: 2, title: 'Networking Lunch', time: '12:00 PM' },
    // More sessions...
  ];

  return (
    <div>
      <h2>Event Schedule</h2>
      <ul>
        {sessions.map(session => (
          <li key={session.id}>{session.title} - {session.time}</li>
        ))}
      </ul>
    </div>
  );
}

export default EventSchedule;
