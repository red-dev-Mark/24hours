"use client";

import Chart from "./_components/Chart";
import DayPicker from "./_components/DayPicker";
// import dynamic from "next/dynamic";

// const Chart = dynamic(() => import("./_components/Chart"), { ssr: false });
// const DayPicker = dynamic(() => import("./_components/DayPicker"), {
//   ssr: false,
// });

export default function page() {
  return (
    <div className="w-[414px] h-[736px] relative overflow-hidden bg-[#d6d7ef]">
      <div className="w-[356.68px] h-[100px]">{/* <DayPicker /> */}</div>
      <div className="w-[400px] h-[500px]">
        <Chart />
      </div>
    </div>
  );
}
