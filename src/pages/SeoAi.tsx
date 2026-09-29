import Hero from "../components/Seo/Hero";
import Whatwedo from "../components/Seo/whatwedo";
import Solutions  from "../components/Seo/solutions";
import Process from "../components/Seo/process";
import Impact from "../components/Seo/impact";
import Industries from "../components/Seo/industries";
import CTA from "../components/Home/CTA";
import Feedback from "../components/Seo/feedback";
import Platform from "../components/Seo/platform";

export default function Home() {
  return (
    <>
      <Hero />
      <Whatwedo  />
      <Solutions />
      <Process />
      <Impact/>
      <Platform/>
      <Industries  />

      <Feedback/>
      <CTA />
      
    </>
  );
}