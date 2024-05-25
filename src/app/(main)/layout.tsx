import Header from "../components/Header";
import Move from "../components/Move";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center h-screen m-0 bg-gray-200">
      <div className="w-[414px] h-[736px] flex flex-col justify-center items-center mx-auto bg-white border-2 border-gray-300 rounded-2xl shadow-lg relative overflow-hidden">
        <Header />
        <div className="flex justify-center items-center h-full">
          <div className="w-full h-full p-10">{children}</div>
        </div>
        <Move />
      </div>
    </div>
  );
}
