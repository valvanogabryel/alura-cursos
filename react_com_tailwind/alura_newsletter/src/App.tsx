import { useState } from "react";
import ArticleList from "./components/ArticleList";
import Form from "./components/Form";
import Header from "./components/Header";
import ScrollListener from "./components/ScrollListener";
import User from "./interfaces/IUser";

const App: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [user, setUser] = useState<User | undefined>();

  const hasUser = Boolean(user);

  function handleScroll() {
    setScrollPosition(window.pageYOffset);
  };

  return (
    <div className="h-screen">
      <ScrollListener onScroll={handleScroll} />
      <Header scrollPos={scrollPosition} user={user} />
      {hasUser && <ArticleList />}
      {hasUser || <Form setUser={setUser} />}
    </div>
  );
};

export default App
