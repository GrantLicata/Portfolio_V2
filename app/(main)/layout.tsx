const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-navy-300">
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default MainLayout;
