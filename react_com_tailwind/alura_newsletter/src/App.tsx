import { useEffect, useState } from "react";
import Header from "./components/Header";

const App: React.FC = () => {
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('');

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    const isScrollingUp = currentScrollPosition > prevScrollPosition;

    setScrollDirection(isScrollingUp ? 'up' : 'down');
    console.log(isScrollingUp);
    setPrevScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header scrollDir={scrollDirection} />
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
      <section>
        <p className="text-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit natus recusandae officia, minus nulla dignissimos esse necessitatibus accusantium asperiores quis officiis maxime repudiandae voluptate quisquam consectetur vel, saepe fugit placeat.</p>
      </section>
    </>
  );
};

export default App
