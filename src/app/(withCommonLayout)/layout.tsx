import Footer from "@/components/shared/Footer";
import Topbar from "@/components/shared/Topbar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>
        <Topbar />
        <div className=""> {children}</div>
        <Footer />
      </div>
    </>
  );
};

export default CommonLayout;
