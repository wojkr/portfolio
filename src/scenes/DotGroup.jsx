import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ setSelectedPage, selectedPage }) => {
  const selectedStyles = `relative bg-primary-2 before:absolute before:w-6 before:h-6 before:border-2 before:border-primary-2 before:left-[-50%] before:top-[-50%]`;
  return (
    <div className="flex flex-col gap-6 fixed top-[45%] right-7">
      <AnchorLink
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-primary-1"
        } w-3 h-3`}
        href="#home"
        onClick={() => setSelectedPage("home")}
      ></AnchorLink>
      <AnchorLink
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-primary-1"
        } w-3 h-3`}
        href="#skills"
        onClick={() => setSelectedPage("skills")}
      ></AnchorLink>
      <AnchorLink
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-primary-1"
        } w-3 h-3`}
        href="#projects"
        onClick={() => setSelectedPage("projects")}
      ></AnchorLink>
      <AnchorLink
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-primary-1"
        } w-3 h-3`}
        href="#contact"
        onClick={() => setSelectedPage("contact")}
      ></AnchorLink>
    </div>
  );
};
export default DotGroup;
