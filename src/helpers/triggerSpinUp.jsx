import { useLayoutEffect } from "react";
import { projectsData } from "../projectsData";

const triggerSpinUp = (query) => {
  const runServers = () => {
    console.log(
      "----- Sent requests to trigger Render.com server spin-up behavior ----- "
    );
    projectsData.forEach((p) => {
      if (p.isTurnOnServerNeeded) {
        fetch(p.serverUrl, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) =>
            console.log(`RESOLVED for ${p.title}. RES: ${response}`)
          )
          .catch((e) => console.log(e.message));
      }
    });
  };

  useLayoutEffect(() => {
    setTimeout(runServers(), 1000);
  }, []);

  return;
};

export default triggerSpinUp;
