import React, { useEffect, useState } from 'react';
import { database } from './firebase_setup/firebase';

function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from Firebase when the component mounts
    const eventsRef = database.ref('events');
    eventsRef.on('value', (snapshot) => {
      const eventData = snapshot.val();
      if (eventData) {
        const eventArray = Object.values(eventData);
        setEvents(eventArray);
      }
    });

    // Cleanup the Firebase listener when the component unmounts
    return () => {
      eventsRef.off();
    };
  }, []);

  return (
    <div>
      <h2>Calendar</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{event.title}</strong> - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Calendar;
