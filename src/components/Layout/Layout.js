import Header from "../Header";
import Footer from "../Footer";
import BestGear from "../Best-gear/BestGear";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Layout({ children }) {
  const { pathname } = useLocation();
  const [showGear, setShowGear] = useState(true);

  useEffect(() => {
    if (pathname === "/checkout") {
      setShowGear(false);
    } else {
      setShowGear(true);
    }
  }, [pathname]);
  return (
    <>
      <Header />
      {children}

      {showGear && <BestGear />}
      <Footer />
    </>
  );
}

export default Layout;
