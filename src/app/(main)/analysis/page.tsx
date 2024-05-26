"use client";

import { DayStoreProvider } from "@/lib/useStoreProvider";
import Chart from "./_components/Chart";
import DayPicker from "./_components/DayPicker";

export default function page() {
  return (
    <DayStoreProvider>
      <div className="w-[360px] h-[80px] mt-20 mx-auto">
        <DayPicker />
      </div>
      <div className="w-[400px] h-[400px]">
        <Chart />
      </div>
    </DayStoreProvider>
  );
}
