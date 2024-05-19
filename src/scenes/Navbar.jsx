import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  setIsMenuToggled,
  isTopOfPage = false,
  dark: desktop = true,
}) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        desktop
          ? //desktop
            isTopOfPage
            ? //top of page
              selectedPage === lowerCasePage
              ? "hover:text-primary-light-2 text-primary-2"
              : "hover:text-primary-light-2 text-white"
            : //middle
            selectedPage === lowerCasePage
            ? "text-primary-2"
            : "text-dark-1 hover:text-primary-2 "
          : //mobile
          selectedPage === lowerCasePage
          ? "hover:text-primary-2 text-primary-2"
          : "hover:text-primary-2"
      }
       transition duration-500 uppercase`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        setIsMenuToggled(false);
      }}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-gradient-1";
  const buttonBackground = isTopOfPage ? "bg-primary-1" : "";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <AnchorLink href="#home">
          <h4
            className={`font-title text-3xl font-bold ${
              isTopOfPage ? "text-white" : "text-dark-1"
            } transition duration-500`}
          >
            WK
          </h4>
        </AnchorLink>

        {/* DESKTOP NAV */}
        {isAboveMediumScreens ? (
          <div className="flex justify-between gap-16 tracking-wider text-lg ">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
              isTopOfPage={isTopOfPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
              isTopOfPage={isTopOfPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
              isTopOfPage={isTopOfPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
              isTopOfPage={isTopOfPage}
            />
          </div>
        ) : (
          <button
            className={`${buttonBackground} rounded-full p-2 `}
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img src={menuIcon} alt="menu-icon" />
          </button>
        )}
        {/* MOBLIE MENU POPUP */}
        {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-primary-1 w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                className="fill-dark-1"
              >
                <img src={closeIcon} alt="close-icon" />
              </button>
            </div>
            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-dark-1">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
                dark={false}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
                dark={false}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
                dark={false}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
                dark={false}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
