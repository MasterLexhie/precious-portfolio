import Navigation from "./navigation";
import Footer from "./footer";
const Layout = ({ children }: any) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
