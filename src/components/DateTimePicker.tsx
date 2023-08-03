import React, {useState} from 'react'



function DateTimePicker() {
    const [dateTime, setDateTime] = useState('');

    const handleDateTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDateTime(event.target.value);
    };

  return (

    <input
      type="datetime-local"
      value={dateTime}
      onChange={handleDateTimeChange}
      className="border p-2 rounded focus:outline-none focus:ring focus:border-blue-300 w-52"
    />


  )
}

export default DateTimePicker