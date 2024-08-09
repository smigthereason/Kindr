import { Button } from "@/components/ui/button";
import { RiCheckFill } from "react-icons/ri";

const About = () => {
  return (
    <section className="h-full">
      <div className="bg-about min-h-96 bg-cover bg-no-repeat bg-center flex justify-center items-center">
        <h1 className="h2">About Us</h1>
      </div>
      <div className="container mx-auto mt-40">
        <div className="flex flex-col">
          <div className="relative flex flex-col items-center xl:items-start xl:flex-row gap-10">
            <div className="xl:min-w-[500px] z-10 ">
              <h1 className="h2 font-semibold mb-8">Where it all Began</h1>
              <p className="h3 mb-6">Who Are We?</p>
              <img
                src="../src/assets/images/story4.png"
                alt=""
                className="h-[420px] w-[420px] object-cover z-[2]"
              />
            </div>
            <div className="xl:self-end max-w-[90vw] flex flex-col justify-between gap-6 z-10">
              <p className="pl-4 border-l-2 border-accent text-white/60 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                aliquet urna ligula, ac vulputate eros tristique vel. Nunc erat
                mi, volutpat non sem a, maximus
              </p>
              <p className="text-sm text-white/40"></p>
              <div className="flex flex-col xl:flex-row gap-4">
                <div className="p-4 flex flex-col justify-center items-center bg-stone-700 xl:min-h-[300px] xl:p-8 xl:justify-around rounded-md">
                  <h1 className="text-xl mb-5 xl:text-2xl">Our Mission</h1>
                  <p className="text-white/50">
                    Our mission is to provide a platform for people to help
                    others in need.
                  </p>
                  <p className="text-sm text-white/50 mt-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    aliquet urna ligula, ac vulputate eros tristique vel. Nunc
                    erat mi, volutpat non sem a, maximus
                  </p>
                </div>
                <div className="p-4 flex flex-col justify-center items-center bg-stone-700 xl:min-h-[300px] xl:p-8 xl:justify-around rounded-md">
                  <h1 className="text-xl mb-5 xl:text-2xl">Our Visson</h1>
                  <p className="text-white/50">
                    Our mission is to provide a platform for people to help
                    others in need.
                  </p>
                  <p className="text-sm text-white/50 mt-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    aliquet urna ligula, ac vulputate eros tristique vel. Nunc
                    erat mi, volutpat non sem a, maximus
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute z-[0] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
          </div>
          <div className="flex flex-col xl:flex-row justify-center items-center mt-40 relative">
            <div className="relative">
              <img
                src="../src/assets/images/story5.png"
                alt=""
                className="h-[250px] sm:h-[300px] xl:h-[360px] w-[250px] sm:w-[300px] xl:w-[360px] object-cover rounded-md z-0  relative -bottom-10 left-20 xl:left-10 "
              />
              <img
                src="../src/assets/images/story2.png"
                alt=""
                className="h-[250px] sm:h-[300px] xl:h-[360px] w-[250px] sm:w-[300px] xl:w-[360px] object-cover relative -inset-20 xl:-inset-40 rounded-md z-10"
              />
            </div>
            <div className="ml-20 flex flex-col gap-12 z-10">
              <h1 className="h2 text-center mb-5">
                <span className="border-b-2 border-accent">Our </span>Values
              </h1>
              <div className="flex items-center self-start flex-col ">
                {/* dot */}
                <p className="flex items-center  gap-4 relative right-[5.9rem]">
                  <RiCheckFill className="bg-white rounded-full text-xl text-accent" />
                  <h2 className="text-white/80 h3">Accredited Causes</h2>
                </p>
                <p className="text-white/60 ">
                  Our mission is to provide a platform for people to help others
                  in need.
                </p>
              </div>
              <div className="flex items-center self-start flex-col ">
                {/* dot */}
                <p className="flex items-center gap-4 relative right-[6.5rem]">
                  <RiCheckFill className="bg-white rounded-full text-xl text-accent" />
                  <h2 className="text-white/80 h3">Focused Support</h2>
                </p>
                <p className="text-white/60 ">
                  Our mission is to provide a platform for people to help others
                  in need.
                </p>
              </div>
              <div className="flex text-start items-center  self-start flex-col ">
                {/* dot */}
                <p className="flex items-center text-start gap-4 relative right-32">
                  <RiCheckFill className="bg-white rounded-full text-xl text-accent" />
                  <h2 className="text-white/80 h3">Data Driven</h2>
                </p>
                <p className="text-white/60 ">
                  Our mission is to provide a platform for people to help others
                  in need.
                </p>
              </div>
            </div>

            <div className="absolute z-[0] w-[50%] h-[50%] left-20 bottom-40 blue__gradient" />
          </div>
          <div className="relative mt-20 xl:mt-0">
            <div className="mb-10 flex flex-col items-center justify-center">
              <h1 className="h2 text-center mb-5">Want to get Involved ?</h1>
              <p className="text-sm text-white/50 text-center max-w-[600px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                aliquet urna ligula, ac vulputate eros tristique vel. Nunc erat
                mi, volutpat non sem a, maximus scelerisque augue. Sed pharetra,
                est eget rhoncus faucibus, sem mi congue sem, in faucibus sem
                turpis id est. In eu porta enim, vitae consectetur erat.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
                undoubtable source.
              </p>
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-around gap- xl:gap-0 ">
              <div className="bg-stone-700 py-8 px-10 rounded-lg flex flex-col items-center justify-center h-[300px] w-[350px] z-10">
                <h2 className="text-4xl mb-7 text-center text-white/80">
                  Create <br />
                  Your Cause
                </h2>
                <Button variant="secondary" size="md">
                  Get Accredited
                </Button>
              </div>
              <div className="bg-stone-700 rounded-lg pb-6 px-6 flex flex-col justify-center items-center h-[300px] w-[350px] z-10">
                <h2 className="text-3xl mb-5 text-center text-white/80">
                  The Long Journey
                  <br /> to End Poverty <br />
                  begins here
                </h2>
                <Button variant="outline" size="md">
                  Donate
                </Button>
              </div>
            </div>
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-40 pink__gradient" />
          </div>
          <div className="flex flex-col justify-center items-center mb-20">
            <h1 className="h2 font-semibold mt-20 mb-8 border-b-2 border-accent">
              Our Team
            </h1>
            <p className="h3 mb-6">A Strong and Devoted Team</p>
            <p className="text-center text-white/60 xl:max-w-[500px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquet urna ligula, ac vulputate eros tristique vel. Nunc erat
              mi, volutpat non sem a, maximus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
