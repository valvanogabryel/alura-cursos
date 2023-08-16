import { Navbar } from "../Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import "./DefaultPage.modules.scss";

export function DefaultPage() {
  return (
    <div className="container">
      <Navbar />
      <div className="container-outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
