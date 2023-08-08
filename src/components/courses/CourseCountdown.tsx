import Countdown, { zeroPad } from "react-countdown";

function CourseCountdownBox({ value }: { value: string }) {
  return (
    <div className="flex items-center justify-center w-12 h-12 text-2xl font-medium text-white bg-orange-500 rounded-xl">
      {value}
    </div>
  );
}

export default function CourseCountdown() {
  return (
    <div className="mt-4 space-y-2">
      <h4>Khuyến mãi kết thúc sau</h4>
      <Countdown
        date={new Date("2023-08-15")}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          return (
            <div className="flex items-center space-x-2">
              <CourseCountdownBox value={zeroPad(days)} />
              <div className="text-2xl font-bold text-primary">:</div>
              <CourseCountdownBox value={zeroPad(hours)} />
              <div className="text-2xl font-bold text-primary">:</div>
              <CourseCountdownBox value={zeroPad(minutes)} />
              <div className="text-2xl font-bold text-primary">:</div>
              <CourseCountdownBox value={zeroPad(seconds)} />
            </div>
          );
        }}
      />
    </div>
  );
}
