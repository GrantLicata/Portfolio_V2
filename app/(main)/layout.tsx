import Navbar from "@/components/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-navy-300">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
