import Link from "next/link";

export default function Backward() {
  return (
    <Link href="/">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 absolute left-5 top-5"
        preserveAspectRatio="none"
      >
        <g clipPath="url(#clip0_8_131)">
          <path
            d="M11.67 3.86998L9.9 2.09998L0 12L9.9 21.9L11.67 20.13L3.54 12L11.67 3.86998Z"
            fill="white"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_8_131">
            <rect width="24" height="24" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
}
