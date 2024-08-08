import Hero from "@/components/Home/Hero";
import Charities from "@/components/Home/Charities";
import Stories from "@/components/Home/Stories";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto ">
        <Hero />
        <Charities />
        <Stories />
      </div>
      <div className="py-10 bg-white/20 mt-10 ">
        <div className="container mx-auto flex flex-row justify-between items-center ">
          <div>
            <h1 className="text-xl mb-2 font-bold">Get update on success stories</h1>
            <p className="text-white/50">Get directly on your email</p>
          </div>
          <div className="flex flex-row gap-4">
            {/* input */}
            <div className="grid grid-cols-1 gap-1">
              <Input placeholder="Enter your email" />
              <p className="text-white/60 text-sm">
                We care about your data in our{" "}
                <span className=" underline">privacy policy.</span>
              </p>
            </div>
            {/* button */}
            <Button variant="secondary" size="md" className="max-w-40">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
