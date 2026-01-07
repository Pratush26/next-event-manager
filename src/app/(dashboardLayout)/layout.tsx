import Footer from "@/Components/Shared/Footer";
import NavBar from "@/Components/Shared/NavBar";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex flex-col justify-between min-h-screen">
        <NavBar />
        {children}
        <Footer />
      </div>
  );
}
