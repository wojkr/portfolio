import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient3";
import { experienceData } from "../experienceData";

import ExperienceImg from "../assets/my-experience.webp";

const Experience = ({ setSelectedPage }) => {
  const isAboveMediumLargeScreens = useMediaQuery("(min-width:1300px)");
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id="experience"
      className="gap-16 py-32 min-h-[100dvh] flex flex-col justify-center z-10"
    >
      <div className="md:flex md:flex-row justify-center md:text-left text-center md:items-start gap-20">
        <motion.div
          className="inline-block text-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          onViewportEnter={() => setSelectedPage("experience")}
        >
          {/* /EXPERIENCE COLUMN */}
          <p className="font-title mb-2 font-black text-5xl uppercase max-w-screen-sm">
            my <span className="text-primary-3">experience</span>{" "}
          </p>{" "}
          <div className="flex justify-start my-5">
            <LineGradient width="w-1/4" />
          </div>
          {experienceData.map((e) => (
            <ExperienceEntry
              key={e.title + e.companyName + e.dateSpan}
              title={e.title}
              companyName={e.companyName}
              dateSpan={e.dateSpan}
              desc={e.desc}
              listTitle={e.listTitle}
              list={e.list}
            />
          ))}
        </motion.div>
        {/* /IMAGE */}
        <div>
          {isAboveMediumScreens ? (
            <motion.div>
              <div className="relative z-0 ml-20 before:absolute before:scale-y-[100%]  before:scale-x-[80%] before:-top-[10%] before:-left-[20%] before:w-full  before:h-full before:max-h-[400px]  before:border-2 before:border-primary-3 before:z-[-1]">
                <img
                  src={ExperienceImg}
                  alt="device frame mockup - ride rite project"
                  className="mx-auto w-full max-w-[400px] md:max-w-[600px]"
                />
              </div>
            </motion.div>
          ) : (
            <motion.div>
              <img
                src={ExperienceImg}
                alt="device frame mockup - ride rite project"
                className="mx-auto w-full max-w-[600px]"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

const ExperienceEntry = ({
  title,
  companyName,
  dateSpan,
  desc,
  listTitle,
  list,
}) => {
  return (
    <div className="mt-5 mb-10 drop-shadow-accent text-sm">
      <p className="font-bold text-lg">{title}</p>
      <p className="text-primary-light-3">
        <b>{companyName} </b>
        <br />
        {dateSpan}
      </p>
      <p className="my-3 font-thin">
        {desc.map((item, index) => {
          if (item?.tag === "strong") {
            return <strong key={index}>{item.text}</strong>;
          }
          return (
            <span key={index}>
              {item.text}
              {item?.tag === "br" && <br />}
            </span>
          );
        })}
      </p>
      <p className="mb-1">{listTitle}</p>
      <ul className="list-square font-thin">
        {list.map((l) => (
          <li key={l} className="ml-5">
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
