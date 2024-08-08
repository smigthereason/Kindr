import { Link } from "react-router-dom";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import logo from "../assets/images/kindr-logo-white.png";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-opacity-50 bg-world bg-cover bg-center bg-blend-darken">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link to="/">
          <img
            src={logo}
            alt="kindr logo"
            className="h-12 object-cover mx-auto my-2"
          />
        </Link>

        {/* desktop nav & hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
