import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import firebase from "firebase/app";
import "firebase/database"; // for Realtime Database
import "firebase/firestore"; // for Firestore

function FirebaseCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from Firebase and set them in the state
    const database = firebase.database();
    const eventsRef = database.ref("events");

    eventsRef.on("value", (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setEvents(Object.values(data));
      }
    });
  }, []);

  return (
    <div>
      <h1>My Firebase Calendar</h1>
      <Calendar events={events} />
    </div>
  );
}

export default FirebaseCalendar;
