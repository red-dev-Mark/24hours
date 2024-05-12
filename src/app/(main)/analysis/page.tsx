"use client";

import Chart from "./_components/Chart";
import DayPicker from "./_components/DayPicker";

export default function page() {
  return (
    <div className="w-[414px] h-[736px] relative overflow-hidden bg-[#d6d7ef]">
      <div className="w-[356.68px] h-[200px]">
        <DayPicker />
      </div>
      <div className="w-[400px] h-[500px]">{/* <Chart /> */}</div>
    </div>
  );
}
