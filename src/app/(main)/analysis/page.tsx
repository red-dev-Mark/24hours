"use client";

import Chart from "./_components/Chart";
import DayPicker from "./_components/DayPicker";

export default function page() {
  return (
    <>
      <div className="w-[356.68px] h-[100px] mt-20 mx-auto">
        <DayPicker />
      </div>
      <div className="w-[400px] h-[400px]">
        <Chart />
      </div>
    </>
  );
}
