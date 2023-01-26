import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Menu from "./components/Menu";
import Footer from "components/Footer";
import DefaultPage from "components/DefaultPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Route>

        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
