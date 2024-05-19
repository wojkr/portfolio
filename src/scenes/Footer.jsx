import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = ({ setSelectedPage }) => {
  return (
    <footer className="h-64 bg-primary-2 bg-gradient-1 pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons color="dark-1" />
        <div className="md:flex justify-center md:justify-between text-center font-semibold ">
          <AnchorLink
            className="font-title text-2xl text-dark-1"
            href="#home"
            onClick={() => setSelectedPage("home")}
          >
            WK
          </AnchorLink>
          <p className="text-md text-dark-1">
            &copy;{new Date(Date.now()).getFullYear()}{" "}
            <span className="uppercase">wojciech krupa.</span> All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
