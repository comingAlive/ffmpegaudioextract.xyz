import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren<any>) => {
  return (
    <>
      <Header />
      <main className="w-full max-w-sm">{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
