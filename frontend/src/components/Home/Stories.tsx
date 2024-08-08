import { IoIosArrowRoundForward } from "react-icons/io";

const Stories = () => {
  return (
    <section className="mt-10 px-20">
      <div className="grid grid-cols-7 gap-2 grid-rows-6 grid-flow-col min-h-[1200]">
        <div className="bg-white/20 col-span-3 row-span-2 h-[200px] p-6 flex flex-col gap-2 justify-center items-start">
          <h3 className="bg-white/30 rounded-sm capitalize text-accent text-xs w-fit p-2">
            Success Stories
          </h3>
          <p className="text-white/80 text-xl">By you It’s happened</p>
          <p className="text-white/40 text-sm">
            Lorem Ipsum is simply dummy text of the printin typesetting dummy
            text ever when an unknown printer took a galley of type and
            scrambled a type specimen book.{" "}
          </p>
        </div>
        <div className="bg-white/20 col-span-3 row-span-4 relative bg-story1 bg-cover mask-image">
          <div className="absolute bottom-2 left-5 z-10 z-10">
            <h1 className=" leading-loose">Title</h1>
            <p className="text-sm text-white/50 mb-2">Subtext</p>

            <p className="flex flex-row items-center justify-center gap-2 text-sm">
              Know more{" "}
              <IoIosArrowRoundForward className="text-accent text-3xl " />
            </p>
          </div>
        </div>
        <div className="bg-white/20 col-span-2 row-span-3 relative bg-story2 bg-cover mask-image">
          <div className="absolute bottom-2 left-5 z-10">
            <h1 className=" leading-loose">Title</h1>
            <p className="text-sm text-white/50 mb-2">Subtext</p>

            <p className="flex flex-row items-center justify-center gap-2 text-sm">
              Know more{" "}
              <IoIosArrowRoundForward className="text-accent text-3xl " />
            </p>
          </div>
        </div>
        <div className="bg-white/20 col-span-2 row-span-3 relative bg-story3 bg-cover mask-image bg-right-top bg-no-repeat">
          <div className="absolute bottom-2 left-5 z-10">
            <h1 className=" leading-loose">Title</h1>
            <p className="text-sm text-white/50 mb-2">Subtext</p>

            <p className="flex flex-row items-center justify-center gap-2 text-sm">
              Know more{" "}
              <IoIosArrowRoundForward className="text-accent text-3xl " />
            </p>
          </div>
        </div>
        <div className="bg-white/20 col-span-2 row-span-3 relative bg-story4 bg-cover mask-image">
          <div className="absolute bottom-2 left-5 z-10">
            <h1 className=" leading-loose">Title</h1>
            <p className="text-sm text-white/50 mb-2">Subtext</p>

            <p className="flex flex-row items-center justify-center gap-2 text-sm">
              Know more{" "}
              <IoIosArrowRoundForward className="text-accent text-3xl " />
            </p>
          </div>
        </div>
        <div className="bg-white/20 col-span-2 row-span-3 relative bg-story5 bg-cover mask-image">
          <div className="absolute bottom-2 left-5 z-10">
            <h1 className=" leading-loose">Title</h1>
            <p className="text-sm text-white/50 mb-2">Subtext</p>

            <p className="flex flex-row items-center justify-center gap-2 text-sm">
              Know more{" "}
              <IoIosArrowRoundForward className="text-accent text-3xl " />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
