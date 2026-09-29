import Hero from "../components/Digital/Hero";
import Whatwedo from "../components/Digital/whatwedo";
import Solutions  from "../components/Digital/solutions";
import Process from "../components/Digital/process";
import Impact from "../components/Digital/impact";
import Industries from "../components/Digital/industries";
import CTA from "../components/Home/CTA";
import Feedback from "../components/Digital/feedback";


export default function Home() {
  return (
    <>
      <Hero />
      <Whatwedo  />
      <Solutions />
      <Process />
      <Impact/>

      <Industries  />

      <Feedback/>
      <CTA />
      
    </>
  );
}