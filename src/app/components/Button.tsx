"use client"

interface ButtonProps {
  text: string;
  onClick?: () => void;
  backgroundColor: string;
  textColor: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  backgroundColor,
  textColor,
}) => {
  return (
    <div
      className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[335px] relative gap-2.5 p-2.5 rounded-[3px]"
      style={{ background: backgroundColor }}
      onClick={onClick}
    >
      <p
        className="flex-grow w-[315px] text-xs font-bold text-center"
        style={{ color: textColor }}
      >
        {text}
      </p>
    </div>
  );
};

export default Button;

//jsx version
// import React from "react";

// const Button = ({ text, onClick, backgroundColor, textColor }) => {
//   return (
//     <div
//       className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[335px] relative gap-2.5 p-2.5 rounded-[3px]"
//       style={{ background: backgroundColor }}
//       onClick={onClick}
//     >
//       <p
//         className="flex-grow w-[315px] text-xs font-bold text-center"
//         style={{ color: textColor }}
//       >
//         {text}
//       </p>
//     </div>
//   );
// };

// export default Button;