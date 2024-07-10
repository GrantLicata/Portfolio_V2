const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-[#0a192f]">
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default MainLayout;
