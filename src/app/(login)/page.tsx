import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import { Button } from "@/entities/ui";
import { LoginButton, SignUpButton } from "@/features/authentication/login";

export default function Home() {
  return (
    <>
      <Header />
      {/* <Image
        className="absolute top-20 left-1/2 transform -translate-x-1/2"
        width={300}
        height={300}
        src="https://cdn-icons-png.flaticon.com/512/2059/2059677.png"
        alt="mainImage"
      /> */}

      <div className="w-[375px] absolute left-5 top-[441px] text-center text-white">
        <p className="text-xl font-bold">안녕하세요!</p>
        <p className="mt-2 text-xs">
          매일매일 시간을 기록하고 분석해주는
          <br />
          이십사시 입니다.
        </p>
      </div>

      <div className="flex flex-col justify-start items-start absolute left-10 top-[560px] gap-3">
        <LoginButton />
        <SignUpButton />
      </div>
    </>
  );
}
