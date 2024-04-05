import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 ">
      <div>logo</div>
      <div className="flex flex-col text-[3rem]">
        <Link href="/home">home</Link>
        <Link href="/calendar">calendar</Link>{" "}
        <Link href="/analysis">analysis</Link>
      </div>
    </nav>
  );
}
