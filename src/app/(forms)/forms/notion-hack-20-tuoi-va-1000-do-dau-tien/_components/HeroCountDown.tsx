"use client";

import moment from "moment";
import Countdown, { zeroPad } from "react-countdown";

function TimeCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center sm:gap-1">
      <span className="text-4xl font-bold">{value}</span>
      <span className="text-lg">{label}</span>
    </div>
  );
}

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}) => {
  if (completed) {
    return null;
  } else {
    return (
      <div className="max-w-md p-6 mx-auto space-y-4 bg-white border-4 border-black rounded-lg shadow-[0.5rem_0.5rem_#000]">
        <p className="text-lg text-center">Thời gian đăng ký còn</p>
        <div className="grid grid-cols-4 gap-4">
          <TimeCard value={zeroPad(days)} label="Ngày" />
          <TimeCard value={zeroPad(hours)} label="Giờ" />
          <TimeCard value={zeroPad(minutes)} label="Phút" />
          <TimeCard value={zeroPad(seconds)} label="Giây" />
        </div>
      </div>
    );
  }
};

export default function HeroCountDown() {
  return (
    <Countdown
      date={moment("2023-12-18 19:00:00").toDate()}
      renderer={renderer}
    />
  );
}
