import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll";
import CustomCursor from "../ui/CustomCursor";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="min-h-screen flex flex-col bg-dark-bg text-white font-sans selection:bg-vibrant-cyan/30 selection:text-vibrant-cyan cursor-none">
        <Navbar />
        <main className="flex-grow">{children}</main>
      </div>
    </SmoothScroll>
  );
};

export default Layout;
