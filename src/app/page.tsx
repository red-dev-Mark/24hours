import Link from "next/link";
import Button from "../app/components/Button";
import Icon from "../app/components/Icon";
import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen m-0 bg-gray-200">
      <div className="w-[414px] h-[736px] flex flex-col justify-center items-center mx-auto bg-white border-2 border-gray-300 rounded-2xl shadow-lg relative overflow-hidden">
        <div className="w-[414px] h-[736px] relative overflow-hidden bg-[#9395d3]">
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
            <Link href="/home">
              <Button
                text="LOG IN"
                backgroundColor="linear-gradient(126.46deg, #28888c 15.02%, #042a50 146.17%)"
                textColor="white"
              />
            </Link>
            <Button
              text="SIGN UP"
              backgroundColor="white"
              textColor="#28888c"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
