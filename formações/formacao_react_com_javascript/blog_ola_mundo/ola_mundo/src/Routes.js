import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Menu from "./components/Menu";
import Footer from "components/Footer";
import DefaultPage from "components/DefaultPage";
import Post from "pages/Post";
import NotFound from "pages/NotFound";
import ScrollToTop from "components/ScrollToTop";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        {/* Rotas aninhadas: */}
        {/* As rotas <Home/> e <AboutMe/> tornaram-se rotas filhas de <DefaultPage/> */}
        {/* Indica-se, na rota pai, onde vai ser colocada alguma das rotas que forem renderizadas. */}
        {/* A rota pai funcionará como um "roteador" também, escolhendo uma das rotas filhas a serem renderizadas de acordo com o caminho da url. */}
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} /> {/* Rota index é a mesma coisa que path="/". Ou seja, é o mesmo caminho da rota pai */}
          <Route path="aboutme" element={<AboutMe />} />
        </Route>
        {
          /* 
          Na Rota "/", a estrutura a ser renderizada é:
          {
            <DefaultPage>
            <Home/>
              </DefaultPage>
            }
            
            Na Rota "/aboutme", a estrutura a ser renderizada é:
            {
              <DefaultPage>
              <AboutMe/>
              </DefaultPage>
            }
            */
        }
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
