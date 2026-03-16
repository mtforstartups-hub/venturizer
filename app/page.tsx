import HeroSection from "./components/HeroSection";
import Values from "./components/Values";
import MissionVision from "./components/MissionVision";
import StakeHolders from "./components/StakeHolders";
import Solution360 from "./components/Solution360";
import WhatWeDo from "./components/WhatWeDo";
import TeamAndPartners from "./components/TeamAndPartners";
import Sectors from "./components/Sectors";
import WhatWeDoV2 from "./components/WhatWeDoV2";
import ValueCreation from "./components/ValueCreation";
import ContactForm from "./components/ContactForm";
import ThreeUsed from "./components/ThreeUsed";
import ValueCreationV2 from "./components/ValueCreationV2";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Values />
      {/* <MissionVision />
      <StakeHolders /> */}
      <Solution360 />
      {/* <WhatWeDo /> */}
      <WhatWeDoV2 />
      {/* <ValueCreationV2 /> */}
      <ValueCreation />
      {/* <Sectors />
      <TeamAndPartners /> */}
      <ContactForm />

    </>
  );
}
