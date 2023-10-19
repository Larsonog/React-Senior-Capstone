//import FirebaseCalendar from "./Calendar"
//import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import Calendar1 from "./Calendar";
//import App from "./Calendar2";

const Events = () => {
  const [date, setDate] = useState(new Date())
  return (
    <div>
      <h1>Events</h1>
      <Calendar1/>
    </div>
  )
}

export default Events