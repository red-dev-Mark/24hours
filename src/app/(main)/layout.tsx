import Navbar from "../components/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <header>
        <Navbar />
      </header>

      {children}
      <footer>
        <div> footer </div>
      </footer>
    </section>
  );
}
