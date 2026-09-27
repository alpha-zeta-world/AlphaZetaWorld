import Hero from "../components/Home/Hero";
import Howwework from "../components/Home/Howwework";
import Whyweare from "../components/Home/whyweare";

import Testimonials from "../components/Home/Testimonials";
import Service from "../components/Home/service";
import CTA from "../components/Home/CTA";


export default function Home() {
  return (
    <>
      <Hero />
      <Howwework />
      <Whyweare />
     
      <Testimonials />
      <Service/>
      <CTA />
      
    </>
  );
}