import { IoIosArrowRoundForward } from "react-icons/io";

const Stories = () => {
  return (
    <section className="relative mt-10 xl:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-2  grid-rows-6 md:grid-rows-3 lg:grid-rows-2 xl:grid-rows-6 xl:grid-flow-col xl:min-h-[1200] z-10">
        <div className="bg-white/20 xl:col-span-3 xl:row-span-2 xl:h-[200px] p-6 flex flex-col gap-2 justify-center items-start">
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
        <div className="bg-white/20 xl:col-span-3 xl:row-span-4 relative bg-story1 bg-cover mask-image">
          <div className="absolute bottom-2 left-5 z-10 z-10">
            <h1 className=" leading-loose">Title</h1>
            <p className="text-sm text-white/50 mb-2">Subtext</p>

            <p className="flex flex-row items-center justify-center gap-2 text-sm">
              Know more{" "}
              <IoIosArrowRoundForward className="text-accent text-3xl " />
            </p>
          </div>
        </div>
        <div className="bg-white/20 xl:col-span-2 xl:row-span-3 relative bg-story2 bg-cover mask-image">
          <div className="absolute bottom-2 left-5 z-10">
            <h1 className=" leading-loose">Title</h1>
            <p className="text-sm text-white/50 mb-2">Subtext</p>

            <p className="flex flex-row items-center justify-center gap-2 text-sm">
              Know more{" "}
              <IoIosArrowRoundForward className="text-accent text-3xl " />
            </p>
          </div>
        </div>
        <div className="bg-white/20 xl:col-span-2 xl:row-span-3 relative bg-story3 bg-cover mask-image bg-right-top bg-no-repeat">
          <div className="absolute bottom-2 left-5 z-10">
            <h1 className=" leading-loose">Title</h1>
            <p className="text-sm text-white/50 mb-2">Subtext</p>

            <p className="flex flex-row items-center justify-center gap-2 text-sm">
              Know more{" "}
              <IoIosArrowRoundForward className="text-accent text-3xl " />
            </p>
          </div>
        </div>
        <div className="bg-white/20 xl:col-span-2 xl:row-span-3 relative bg-story4 bg-cover mask-image">
          <div className="absolute bottom-2 left-5 z-10">
            <h1 className=" leading-loose">Title</h1>
            <p className="text-sm text-white/50 mb-2">Subtext</p>

            <p className="flex flex-row items-center justify-center gap-2 text-sm">
              Know more{" "}
              <IoIosArrowRoundForward className="text-accent text-3xl " />
            </p>
          </div>
        </div>
        <div className="bg-white/20 xl:col-span-2 xl:row-span-3 relative bg-story5 bg-cover mask-image">
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

      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-40 pink__gradient" />
    </section>
  );
};

export default Stories;
