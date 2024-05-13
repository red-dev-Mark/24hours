"use client";

import Chart from "./_components/Chart";
import DayPicker from "./_components/DayPicker";
// import dynamic from "next/dynamic";

// const Chart = dynamic(() => import("./_components/Chart"), { ssr: false });
// const DayPicker = dynamic(() => import("./_components/DayPicker"), {
//   ssr: false,
// });

// import { useState, useEffect } from "react";

export default function page() {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  return (
    <>
      {/* <h1>{isClient ? "This is never prerendered" : "Prerendered"}</h1> */}

      <div className="w-[356.68px] h-[100px] mt-20 mx-auto">
        <DayPicker />
      </div>
      <div className="w-[400px] h-[400px]">
        <Chart />
      </div>
    </>
  );
}
