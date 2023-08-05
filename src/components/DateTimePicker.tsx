import React, { useState, useRef, RefObject, useEffect } from "react";
import { getToday } from "./getToday";

interface DateTimePickerProps {
  onDateTimeChange: (dateTimeValue: string) => void;
}

function DateTimePicker({ onDateTimeChange }: DateTimePickerProps) {
  const [dateTime, setDateTime] = useState(getToday());
  const dateTimeInputRef: RefObject<HTMLInputElement> = useRef(null);
  const [dateError, setDateError] = useState<boolean>(false);

  const handleDateTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let today = getToday();
    if (event.target.value < today) {
      setDateError(true);
      if (dateTimeInputRef.current) {
        dateTimeInputRef.current.blur();
      }
      return;
    } else {
      setDateError(false);
      setDateTime(event.target.value);
      onDateTimeChange(event.target.value);
    }
    // if (dateTimeInputRef.current) {
    //   dateTimeInputRef.current.blur();
    // }
  };

  return (
    <>
      <input
        type="datetime-local"
        value={dateTime}
        onChange={handleDateTimeChange}
        ref={dateTimeInputRef}
        className="border mb-4 p-2 rounded focus:outline-none focus:ring focus:border-blue-300 w-full sm:w-52 "
        required
      />
      {dateError ? (
        <div style={{ color: "red" }}>
          Events can not take place in the past
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default DateTimePicker;
