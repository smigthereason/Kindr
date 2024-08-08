import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="mt-20">
      <div className="flex flex-row justify-between items-center">
        {/* text */}
        <div>
          <h1 className="h2 text-wrap max-w-[600px]">
            Seeking Financial Aid for Medical Emergencies or Social Causes?
          </h1>
          {/* btn and socials */}
          <div className="flex flex-col xl:flex-row items-center justify-center gap-8 mt-20">
            <Button
              variant="default"
              size="lg"
              className="uppercase flex items-center gap-2"
            >
              <span>Request Donation</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
            >
              <span>Donate and help</span>
            </Button>
          </div>
        </div>
        <div>photo</div>
      </div>
    </section>
  );
};

export default Hero;
