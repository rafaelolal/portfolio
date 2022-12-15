import Head from "next/head";
import { useEffect, useState } from "react";

export default function TimerPage() {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("12/15/2022 19:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex" style={{ height: "91vh" }}>
      <Head>
        <title>Timer</title>
      </Head>

      {partyTime ? (
        <div className="mx-auto my-auto">
          <h1 className="text-center">RESULTS ARE OUT!</h1>
          <p className="text-center">Contact me to find out the decision.</p>
        </div>
      ) : (
        <div className="mx-auto my-auto">
          <div className="blogfolio mt-5">
            <p>TIME UNTIL COLUMBIA'S RESULTS</p>
          </div>
          <p className="text-center fs-2 mt-5">{days} days</p>
          <p className="text-center fs-2">
            {hours} hours, {minutes} minutes, and {seconds} seconds
          </p>
        </div>
      )}
    </div>
  );
}
