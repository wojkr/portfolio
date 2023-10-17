import AnchorLink from "react-anchor-link-smooth-scroll";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { TbBuildingBroadcastTower, TbMail } from "react-icons/tb";

const SocialMediaIcons = ({ color = false }) => {
  const classValue =
    "hover:opacity-50 transition duration-500 h-[30px] w-[30px]";
  return (
    <div
      className={`${
        color ? `text-${color}` : ""
      } flex justify-center md:justify-start my-3 gap-7 text-3xl`}
    >
      <a
        href="https://www.linkedin.com/in/wojciech-w-krupa/"
        target="_blank"
        className={classValue}
        rel="noreferrer"
        aria-label="Visit my LinkedIn profile"
      >
        <SiLinkedin />
      </a>

      <a
        href="https://github.com/wojkr"
        target="_blank"
        className={classValue}
        rel="noreferrer"
        aria-label="Visit my GitHub profile"
      >
        <SiGithub />
      </a>
      <a
        href="https://wojkr.github.io/projects/"
        target="_blank"
        className={classValue}
        rel="noreferrer"
        aria-label="Explore my Live Projects"
      >
        <TbBuildingBroadcastTower />
      </a>
      <AnchorLink
        href="#contact"
        className="hover:opacity-50 transition duration-500 h-[30px] w-[30px]"
        rel="noreferrer"
        aria-label="Contact Me"
      >
        <TbMail />
      </AnchorLink>
    </div>
  );
};

export default SocialMediaIcons;
