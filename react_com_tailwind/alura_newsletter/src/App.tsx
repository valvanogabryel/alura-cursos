import { useEffect, useState } from "react";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";

const App: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll() {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header scrollPos={scrollPosition} />
      <ArticleList />
    </>
  );
};

export default App
