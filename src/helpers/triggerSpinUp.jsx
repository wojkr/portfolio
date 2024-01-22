import { useLayoutEffect } from "react";
import { projectsData } from "../projectsData";

const triggerSpinUp = (query) => {
  const runServers = () => {
    console.log(
      "----- Requests to trigger the Render.com server spin-up behavior ----- "
    );
    projectsData.forEach(async (p) => {
      if (p.isTurnOnServerNeeded) {
        console.log(`      Sending request to ${p.title}`);
        try {
          await fetch(p.serverUrl, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          })
            .then((responseJSON) => responseJSON.json())
            .then((response) => {
              console.log(`      RESOLVED for ${p.title}:`);
              console.log(response);
            })
            .catch((e) => {
              console.log(`      RESOLVED for ${p.title}:`);
              console.warn(`     Error: ${e.message}`);
            });
        } catch (e) {
          console.warn(`      Caught error (${p.title}):`);
          console.warn(e);
        }
      }
    });
  };

  useLayoutEffect(() => {
    const triggerSpinUpTimeout = setTimeout(runServers(), 1000);
    return clearTimeout(triggerSpinUpTimeout);
  }, []);

  return;
};

export default triggerSpinUp;
