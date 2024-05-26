import Link from "next/link";
import Backward from "./_components/Backward";
import { LoginButton } from "@/features/authentication/login";

export default function page() {
  return (
    <div className="w-[414px] h-[736px] relative overflow-hidden bg-[#9395d3]">
      <Backward />
      <div className="flex flex-col justify-start items-start h-[27px] absolute left-14 top-[103px] gap-2.5">
        <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-white">
          환영합니다
        </p>
      </div>
      <div className="flex flex-col justify-start items-start absolute left-10 top-[185px] gap-5">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px]">
              <p className="flex-grow-0 flex-shrink-0 text-xs font-bold text-center text-white">
                Username
              </p>
              <div className="flex-grow-0 flex-shrink-0 w-[335px] h-10">
                <div className="w-[335px] h-10 absolute left-[-0.5px] top-[20.5px] rounded-[3px] bg-white"></div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px]">
              <p className="flex-grow-0 flex-shrink-0 text-xs font-bold text-center text-white">
                Password
              </p>
              <div className="flex-grow-0 flex-shrink-0 w-[335px] h-10">
                <div className="w-[335px] h-10 absolute left-[-0.5px] top-[20.5px] rounded-[3px] bg-white"></div>
              </div>
            </div>
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
          </div>

          <LoginButton />
        </div>
        <p className="flex-grow-0 flex-shrink-0 w-[335px] text-xs font-bold text-center text-white">
          OR
        </p>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
          <div className="flex-grow-0 flex-shrink-0 w-[335px] h-9 relative rounded-[3px] bg-white">
            <div className="w-[147px] h-4">
              {/* <img
                src="image-2.png"
                className="w-4 h-4 absolute left-[93.5px] top-[9.5px] object-cover"
              /> */}
              <p className="absolute left-[120px] top-2.5 text-xs font-bold text-center text-black">
                Continue with Google
              </p>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[335px] h-9 relative rounded-[3px] bg-white">
            <div className="w-[163px] h-[22px]">
              <p className="absolute left-[114px] top-2.5 text-xs font-bold text-center text-black">
                Continue with Facebook
              </p>
              {/* <img
                src="image-3.png"
                className="w-[22px] h-[22px] absolute left-[85.5px] top-[6.5px] object-contain"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-start absolute left-[127px] top-[547px] gap-1.5">
        <p className="flex-grow-0 flex-shrink-0 text-xs font-bold text-center text-white">
          Don’t have account?
        </p>
        <p className="flex-grow-0 flex-shrink-0 text-xs font-bold text-center text-[#28888c]">
          Sign up
        </p>
      </div>
    </div>
  );
}
