import { useLayoutEffect, useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { TbBuildingBroadcastTower } from "react-icons/tb";

const Terminal = () => {
  const terminalMessages = [
    {
      title: "B.Eng ",
      text: ["Aeronautics and Space Technology", "Major in Aircraft Engines"],
    },
    {
      title: "Skilled In ",
      text: [
        ".NET, ASP.NET, EF",
        "Node.js, Express",
        "MongoDB, SQLite",
        "Prisma, Strapi",
      ],
    },
    {
      title: "Musican ",
      text: ["Yamaha Music Europe Teacher"],
    },
    {
      title: "Communicator ",
      text: ["Former Assistant Manager", "Client Relations Consultant"],
    },
  ];
  const [initalBreak, setInitialBreak] = useState(true);
  const forwardSpeed = 50;
  const backwardSpeed = 20;

  const [currentIndexTitle, setCurrentIndexTitle] = useState(0);
  const [displayTitle, setDisplayTitle] = useState(terminalMessages[0].title);
  const [animationDirectionTitle, setAnimationDirectionTitle] =
    useState("pause");
  const [arrOfTitle, setArrOfTitle] = useState(
    terminalMessages.map((t) => t.title)
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [animationDirection, setAnimationDirection] = useState("pause");
  const [arrOfText, setArrOfText] = useState(terminalMessages[0].text);

  useLayoutEffect(() => {
    let interval;
    if (initalBreak) {
      setTimeout(() => setAnimationDirection("forward"), 40 * forwardSpeed);
      setInitialBreak(false);
    }
    const animateText = () => {
      const currentText = arrOfText[currentIndex];
      const currentTitle = arrOfTitle[currentIndexTitle];
      animationText();
      animationTitle();

      // -------------------------------------- TEXT
      function animationText() {
        if (animationDirection === "forward") {
          animationTextForward();
        } else if (animationDirection === "backward") {
          animationTextBackward();
        }
      }

      function animationTextForward() {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setAnimationDirection("pause");
          setTimeout(
            () => setAnimationDirection("backward"),
            20 * forwardSpeed
          );
        }
      }
      function animationTextBackward() {
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1)); //DELETING TEXT CHAR BY CHAR
        } else {
          //TEXT REMOVED
          if (currentIndex === arrOfText.length - 1) {
            setCurrentIndex(0);
            setAnimationDirection("pause");
            setAnimationDirectionTitle("backward"); //trigerring TITLE FUNCTION
          } else {
            setCurrentIndex(currentIndex + 1);
            //going immediately to next element in [TEXT]
            setAnimationDirection("pause");
            setTimeout(
              () => setAnimationDirection("forward"),
              forwardSpeed * 3
            );
          }
        }
      }
      // // ------------------------------------------- TITLE
      function animationTitle() {
        if (animationDirectionTitle === "forward") {
          animationTitleForward();
        } else if (animationDirectionTitle === "backward") {
          animationTitleBackward();
        }
      }
      function animationTitleForward() {
        if (displayTitle.length < currentTitle.length) {
          //WRTIES TITLE
          setDisplayTitle(currentTitle.slice(0, displayTitle.length + 1));
        } else {
          //TITLES WRITTEN
          setAnimationDirectionTitle("pause");
          setTimeout(() => setAnimationDirection("forward"), 6 * forwardSpeed); //WAITING FOR WRITING TITLE (IMITATING HUMAN)
        }
      }
      function animationTitleBackward() {
        //DELETING TITLE
        if (displayTitle.length > 0) {
          //REMOVING ONE CHAR IN TITLE
          setDisplayTitle(currentTitle.slice(0, displayTitle.length - 1));
        } else {
          //WHEN TITLE STRING REMOVED
          if (currentIndexTitle === terminalMessages.length - 1) {
            // MOVING TO NEXT ELEMENT IN terminalMessages ARRAY
            setCurrentIndexTitle(0);
            setArrOfText(terminalMessages[0].text);
          } else {
            setCurrentIndexTitle(currentIndexTitle + 1);
            setArrOfText(terminalMessages[currentIndexTitle + 1].text);
          }
          //WAITING FOR WRITING TITLE (IMITATING HUMAN)
          setAnimationDirectionTitle("pause");
          setTimeout(
            () => setAnimationDirectionTitle("forward"),
            6 * forwardSpeed
          );
        }
      }
    };
    interval = setInterval(
      animateText,
      animationDirection === "forward" ||
        (animationDirection === "pause" &&
          animationDirectionTitle === "forward")
        ? forwardSpeed
        : backwardSpeed
    );

    return () => clearInterval(interval);
  }, [
    arrOfText,
    currentIndex,
    displayText,
    animationDirection,
    terminalMessages,
    currentIndexTitle,
    displayTitle,
    animationDirectionTitle,
  ]);

  return (
    <div className="md:w-full w-9/12 mx-auto md:mt-4 mb-8 px-2 py-1 font-normal bg-primary-1 text-dark-1 md:min-h-full xs:min-h-[5rem] min-h-[7rem]">
      <p className="text-xs select-none">WK @ github.com/wojkr </p>
      <p className="font-bold">
        {"$ "}
        <span>{displayTitle} </span>
        <span className="font-normal">{displayText}</span>
        <span className="cursor-animation-pulse">&#x25AE;</span>
      </p>
    </div>
  );
};

export default Terminal;
