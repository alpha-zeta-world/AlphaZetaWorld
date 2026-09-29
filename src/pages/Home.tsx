import Hero from "../components/Home/Hero";
import Banner from "../components/Home/banner";
import Howwework from "../components/Home/Howwework";
import Whyweare from "../components/Home/whyweare";
import Whatwebuild from "../components/Home/whatwebuild";
import Ourwork from  "../components/Home/ourwork";
import Testimonials from "../components/Home/Testimonials";
import Service from "../components/Home/service";
import CTA from "../components/Home/CTA";


export default function Home() {
  return (
    <>
      <Hero />
      <Banner/>
      <Howwework />
      <Whyweare />
      <Whatwebuild/>
      <Ourwork />
     <Testimonials />
      <Service/>
      <CTA />
      
    </>
  );
}