import Header from "../components/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center h-screen m-0 bg-gray-200">
      <div className="w-[414px] h-[736px] flex flex-col justify-center items-center mx-auto bg-white border-2 border-gray-300 rounded-2xl shadow-lg relative overflow-hidden">
        <div className="w-[414px] h-[736px] relative overflow-hidden bg-[#9395d3]">
          {children}
        </div>
      </div>
    </div>
  );
}
