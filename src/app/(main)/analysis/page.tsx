"use client";

import { DayStoreProvider } from "@/lib/useStoreProvider";
import Chart from "./_components/Chart";
import DayPicker from "./_components/DayPicker";

export default function page() {
  return (
    <DayStoreProvider>
      <div className="w-[360px] h-[10px] mt-10 mx-auto">
        <DayPicker />
      </div>
      <div className="w-[400px] h-[500px]">
        <Chart />
      </div>
    </DayStoreProvider>
  );
}
