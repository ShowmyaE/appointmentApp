// import { DtPicker } from 'react-calendar-datetime-picker'
// import 'react-calendar-datetime-picker/dist/style.css'
// import { Component} from "react";

// class Booking extends Component{
//     state = { date: null, selectedDateTime: new Date()}

//     render(){
//         // const [date, setDate] = useState(null)
//         const { date, selectedDateTime } = this.state
//         return(
//             <>
//             {/* <Header/> */}
//              <DtPicker 
//                      value={selectedDateTime}
//                      onChange={date}
//                      dateFormat="YYYY-MM-DD"
//                      timeFormat="HH:mm"
//                       />
//             </>
//             )
//     }
// }
// export default Booking

// import React, { useState } from 'react';
// import {DtPicker} from 'react-calendar-datetime-picker';
// import 'react-calendar-datetime-picker/dist/style.css'

// function Booking() {
//   const [selectedDateTime, setSelectedDateTime] = useState(new Date());

//   const handleChange = (date) => {
//     console.log("Date", selectedDateTime)
//     setSelectedDateTime(date);
//   };

//   const formatTime = (date) => {
//     if (!date) return '';
//     const hours = date.getHours().toString().padStart(2, '0');
//     const minutes = date.getMinutes().toString().padStart(2, '0');
//     return `${hours}:${minutes}`;
//   };

//   return (
//     <div>
//       <DtPicker
//       withTime ={true}
//         value={selectedDateTime}
//         onChange={handleChange}
//       />
//       {/* <p>Selected Date and Time: {selectedDateTime}</p> */}
//       <p>Selected Time: {formatTime(selectedDateTime)}</p>
//     </div>
//   );
// }

// export default Booking;

// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import TimePicker from 'react-time-picker';
// import 'react-time-picker/dist/TimePicker.css';

// function Booking() {
//   const [date, setDate] = useState(new Date());
//   const [time, setTime] = useState('12:00');

//   const handleDateChange = (newDate) => {
//     setDate(newDate);
//   };

//   const handleTimeChange = (newTime) => {
//     setTime(newTime);
//   };

//   return (
//     <div>
//       <Calendar
//         onChange={handleDateChange}
//         value={date}
//       />
//       <TimePicker
//         onChange={handleTimeChange}
//         value={time}
//       />
//       <p>Selected Date: {date.toDateString()}</p>
//       <p>Selected Time: {time}</p>
//     </div>
//   );
// }

// export default Booking;

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import default styles

// Custom CSS
import './booking.css'; // Import custom styles if needed

function DateTimePicker() {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
    console.log("DATE",new Date(date) )
  };

  return (
    <div className="date-time-picker-container">
      <h1 className="header">Date and Time Picker</h1>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        showTimeSelect
        dateFormat="Pp" // Date and time format
        className="datepicker-input" // Apply custom styling class
        popperClassName="datepicker-popper" // Apply custom popper styling class
      />
      {/* <p className="selected-date-time">Selected Date and Time: {startDate.toString()}</p> */}
    </div>
  );
}

export default DateTimePicker;


