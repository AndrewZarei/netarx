import React from 'react';
import Header from './Header';
import Footer from './Footer';


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // تابع برای مقداردهی اولیه particles


  return (
    <div className="min-h-screen flex flex-col relative">
    

       

      {/* محتوای اصلی */}
      <Header />
      <main className="flex-1 z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;