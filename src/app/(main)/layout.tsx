import Header from "../components/Header";
import Move from "../components/move";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-[414px] h-[736px] absolute left-0 top-0 overflow-hidden">
        <header>
          <Header />
        </header>
        <body>{children}</body>
        <section>
          <Move />
        </section>
      </div>
    </>
  );
}
