import Link from "next/link";
import Backward from "./_components/Backward";
import { LoginButton } from "@/features/authentication/login";
import LoginBox from "./_components/LoginBox";
import Check from "./_components/Check";
import SocialLoginButton from "./_components/SocialLoginButton";

export default function Page() {
  return (
    <div className="w-[414px] h-[736px] relative overflow-hidden bg-[#9395d3] flex flex-col items-center justify-center">
      <Backward />
      <div className="absolute top-16">
        <p className="text-2xl font-bold text-white">환영합니다</p>
      </div>
      <div className="flex flex-col items-center gap-5 mt-10">
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col gap-2.5">
            <LoginBox text="Username" />
            <LoginBox text="Password" />
            <Check />
          </div>
          <Link href="/home" legacyBehavior>
              <LoginButton />
          </Link>
        </div>
        <p className="w-[335px] text-xs font-bold text-center text-white">OR</p>
        <div className="flex flex-col gap-2.5">
          <SocialLoginButton text="Continue with Google" />
          <SocialLoginButton text="Continue with Facebook" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-1.5 mt-20">
        <p className="text-xs font-bold text-white">Don’t have an account?</p>
        <p className="text-xs font-bold text-[#28888c]">Sign up</p>
      </div>
    </div>
  );
}
