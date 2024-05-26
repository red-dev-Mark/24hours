import Link from "next/link";

export default function Check() {
    return (
      <div className="flex-grow-0 flex-shrink-0 w-[335px] h-4">
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
        <p className="w-[82.73px] absolute left-[16.34px] top-[142px] text-xs font-bold text-center text-white">
          Remember me
        </p>
        <Link href="/home">
          <p className="w-[102.13px] absolute left-[232.87px] top-[142px] text-xs font-bold text-center text-[#28888c]">
            Forgot password?
          </p>
        </Link>
      </div>
    );
}

