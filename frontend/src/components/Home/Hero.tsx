"use client";

import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import hero from "../../assets/images/hero-image.png";

const Hero = () => {
  return (
    <section className="relative mt-10 ">
      <div className="flex flex-row justify-between items-center">
        {/* text */}
        <div className="xl:min-w-[600px]">
          <h1 className="h2 text-wrap max-w-[600px]">
            Seeking Financial Aid for Medical Emergencies or Social Causes?
          </h1>
          {/* btns */}
          <div className="flex flex-col xl:flex-row items-center justify-center gap-8 mt-20">
            <Link to="/auth">
              <Button
                variant="default"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Request Donation</span>
              </Button>
            </Link>
            <Link to="/donation">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Donate and help</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* hero image */}
        <div className="hidden xl:flex relative min-w-[1500px] min-h-[700px] overflow-clip">
          <img
            src={hero}
            className="absolute -top-5 -left-64 w-fit h-full hero_image "
          />
          <svg
            width="4000"
            height="690"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-1 -left-1" // Ensure it positions correctly
          >
            <rect
              width="3500"
              height="470"
              x="80"
              y="80"
              rx="250"
              ry="250"
              stroke="orange"
              strokeWidth="4"
              strokeDasharray="10, 20"
              fill="none"
              transform="rotate(35, 300, 200)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
