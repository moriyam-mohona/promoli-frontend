import Footer from "@/components/shared/Footer";
import Topbar from "@/components/shared/Topbar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>
        <Topbar />

        <div className="bg-[#FDF8F0]"> {children}</div>
        <Footer />
      </div>
    </>
  );
};

export default CommonLayout;
