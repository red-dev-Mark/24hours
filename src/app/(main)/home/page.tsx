"use client";

import React, { useState } from "react";
import Move from "@/app/components/Move";
import Header from "@/app/components/Header";
import ControlButton from "./_components/ControlButton";
import { dummy } from "@/lib/dummyData";

interface Category {
  id: string;
  value: number;
  color: string;
}

interface DummyData {
  [key: string]: Category[];
}

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [elapsedTime, setElapsedTime] = useState<string>("");
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setStartTime(null);
    setEndTime(null);
    setElapsedTime("");
    setIsStarted(false);
  };

  const handleStart = () => {
    if (!selectedCategory) {
      alert("카테고리를 선택해주세요.");
      return;
    }
    setStartTime(new Date());
    setIsStarted(true);
  };

  const handleFinish = () => {
    if (!startTime) {
      alert("시작 버튼을 먼저 눌러주세요.");
      return;
    }
    const endTime = new Date();
    setEndTime(endTime);
    const elapsed = (endTime.getTime() - startTime.getTime()) / 1000;
    setElapsedTime(`${elapsed}초`);
    setIsStarted(false);

    setSelectedCategory(null);
    setStartTime(null);
    setEndTime(null);
  };

  return (
    <div className="w-full h-full p-5 mt-14">
      <h1 className="text-2xl font-bold text-center m-6 text-gray-700">
        활동 선택
      </h1>
      <div className="grid grid-cols-1 gap-4 mb-6 p-6 max-h-80 py-4 text-lg font-bold overflow-y-auto no-scrollbar">
        {dummy[0].map((category: Category, index: number) => (
          <button
            key={index}
            className={`flex justify-center items-center w-full h-16 rounded-xl transition-transform transform hover:scale-105 ${
              selectedCategory === category.id
              ? "bg-[#9395d3] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.id}
          </button>
        ))}
      </div>
      <div className="flex justify-center space-x-10 m-10">
        <ControlButton
          className={`px-8 py-4 rounded-full text-lg font-bold transition-colors ${
            isStarted
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
          text="Start"
          onClick={handleStart}
        />
        <ControlButton
          className="px-8 py-4 bg-blue-500 text-white rounded-full text-lg font-bold transition-colors hover:bg-blue-600"
          text="Finish"
          onClick={handleFinish}
        />
      </div>
      {elapsedTime && (
        <div className="text-center text-l text-gray-800">
          <p>{elapsedTime}</p>
        </div>
      )}
    </div>
  );
}
