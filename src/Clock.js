import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  // use cleanup funtion to prevent memory leaks/infinite loop
  useEffect(() => {
    let intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;

