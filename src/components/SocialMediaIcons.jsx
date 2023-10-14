import { SiGithub, SiLinkedin } from "react-icons/si";
import { TbBuildingBroadcastTower } from "react-icons/tb";

const SocialMediaIcons = ({ color = false }) => {
  return (
    <div
      className={`${
        color ? `text-${color}` : ""
      } flex justify-center md:justify-start my-10 gap-7 text-3xl`}
    >
      <a
        href="https://www.linkedin.com/in/wojciech-w-krupa/"
        target="_blank"
        className="hover:opacity-50 transition duration-500"
        rel="noreferrer"
        aria-label="Visit my LinkedIn profile"
      >
        <SiLinkedin />
      </a>

      <a
        href="https://github.com/wojkr"
        target="_blank"
        className="hover:opacity-50 transition duration-500 h-[30px] w-[30px]"
        rel="noreferrer"
        aria-label="Visit my GitHub profile"
      >
        <SiGithub />
      </a>
      <a
        href="https://wojkr.github.io/projects/"
        target="_blank"
        className="hover:opacity-50 transition duration-500 h-[30px] w-[30px]"
        rel="noreferrer"
        aria-label="Explore my Live Projects"
      >
        <TbBuildingBroadcastTower />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
