import React from "react";

type LayoutProps = {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ header, children, footer }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <header className="sticky top-0 z-50">{header}</header>
      <main className="flex-grow px-4">{children}</main>
      <footer>{footer}</footer>
    </div>
  );
};

export default Layout;
