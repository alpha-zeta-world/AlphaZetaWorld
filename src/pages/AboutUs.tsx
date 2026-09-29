import Hero from "../components/About/Hero";
import Model from "../components/About/model";
import Execution  from "../components/About/execution";
import Principles from "../components/About/principles";
import Team from "../components/About/Team";
import Count from "../components/About/count";
import CTA from "../components/Home/CTA";
import Different from "../components/About/different";

export default function Home() {
  return (
    <>
      <Hero />
      <Model />
      <Execution />
      <Different />
      <Count />
      <Principles  />

      <Team />
      <CTA />
      
    </>
  );
}