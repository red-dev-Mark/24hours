import ControlButton from "../home/_components/ControlButton";
import CategoryButton from "../home/_components/CategoryButton";

const Page: React.FC = () => {
  const categories: string[] = ["운동", "공부", "휴식", "식사"];
  return (
    <div className="">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-5 p-4 max-w-4xl m-5">
          {categories.map((category, index) => (
            <CategoryButton key={index} category={category} />
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-10 mt-4">
        <ControlButton text="Start" />
        <ControlButton text="Finish" />
      </div>
    </div>
  );
};

export default Page;

// import React, { useState } from "react";

// export default function Page() {
//   const categories: string[] = ["운동", "공부", "휴식", "식사", "독서", "취침"];
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [startTime, setStartTime] = useState<Date | null>(null);
//   const [endTime, setEndTime] = useState<Date | null>(null);
//   const [elapsedTime, setElapsedTime] = useState<string>("");

//   const handleCategoryClick = (category: string) => {
//     setSelectedCategory(category);
//     setStartTime(null);
//     setEndTime(null);
//     setElapsedTime("");
//   };
// å
//   const handleStart = () => {
//     if (!selectedCategory) {
//       alert("카테고리를 선택해주세요.");
//       return;
//     }
//     setStartTime(new Date());
//   };
//   const handleFinish = () => {
//     if (!startTime) {
//       alert("시작 버튼을 먼저 눌러주세요.");
//       return;
//     }
//     const endTime = new Date();
//     setEndTime(endTime); // 상태 설정
//     const elapsed = (endTime.getTime() - (startTime as Date).getTime()) / 1000; // 시간 차이를 초 단위로 계산
//     setElapsedTime(
//       `카테고리 '${selectedCategory}'의 총 소요 시간은 ${elapsed}초 입니다.`
//     );
//   };

//   return (
//     <>
//       <div className="flex justify-center">
//         <div className="grid grid-cols-3 gap-5 p-4 max-w-4xl m-5">
//           {categories.map((category, index) => (
//             <button
//               key={index}
//               className="flex justify-center items-center w-24 h-12 bg-white rounded-xl m-2 border-2 border-blue-500"
//               onClick={() => handleCategoryClick(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>
//       <div className="flex justify-center space-x-10 mt-4">
//         <button
//           className="px-10 py-4 bg-blue-300 rounded-xl"
//           onClick={handleStart}
//         >
//           Start
//         </button>
//         <button
//           className="px-10 py-4 bg-blue-300 rounded-xl"
//           onClick={handleFinish}
//         >
//           Finish
//         </button>
//       </div>
//       {elapsedTime && (
//         <div className="text-center mt-4">
//           <p>{elapsedTime}</p>
//         </div>
//       )}
//     </>
//   );
// }
