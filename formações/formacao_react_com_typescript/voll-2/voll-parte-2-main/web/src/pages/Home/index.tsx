import { Banner } from "./components/Banner";
import { SearchSection } from "./components/SearchSection";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Banner />
      <SearchSection />
      <Services />
      <Testimonials />
    </>
  );
}
