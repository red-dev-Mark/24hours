export default function Check() {
  return (
    <div className="flex items-center justify-between w-[335px] mt-2">
      <div className="flex items-center">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3"
          preserveAspectRatio="none"
        >
          <rect width="12" height="12" rx="1" fill="#28888C"></rect>
          <g clipPath="url(#clip0_8_150)">
            <path
              d="M4.75007 7.7375L3.01257 6L2.4209 6.5875L4.75007 8.91666L9.75006 3.91666L9.16257 3.32916L4.75007 7.7375Z"
              fill="white"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_8_150">
              <rect
                width="10"
                height="10"
                fill="white"
                transform="translate(1 1)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
        <p className="ml-2 text-xs font-bold text-white">Remember me</p>
      </div>
      <p className="text-xs font-bold text-[#28888c]">Forgot password?</p>
    </div>
  );
}
