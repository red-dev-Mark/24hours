import Link from "next/link";
import Backward from "./_components/Backward";
import { LoginButton } from "@/features/authentication/login";
import LoginBox from "./_components/LoginBox";
import Check from "./_components/Check";
import SocialLoginButton from "./_components/SocialLoginButton";

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
            <LoginBox text="Username" />
            <LoginBox text="Password" />
            <Check />
          </div>

          <LoginButton />
        </div>
        <p className="flex-grow-0 flex-shrink-0 w-[335px] text-xs font-bold text-center text-white">
          OR
        </p>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
          <SocialLoginButton text="Continue with Google" />
          <SocialLoginButton text="Continue with Facebook" />
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
