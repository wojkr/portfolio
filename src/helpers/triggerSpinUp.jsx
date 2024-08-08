import { useLayoutEffect } from "react";
import { projectsData } from "../projectsData";

const triggerSpinUp = () => {
  const runServers = () => {
    console.info(
      "----- Requests to trigger the Render.com server spin-up behavior"
    );
    projectsData.forEach(async (p) => {
      if (p.isTurnOnServerNeeded) {
        console.info(`----- ----- (${p.title}): Sending request...`);
        try {
          await fetch(p.serverUrl, {
            headers: {
              "Content-Type": "application/json",
            },
            mode: "no-cors",
          });
          console.info(`OK--- ----- (${p.title}): Request sent`);
        } catch (e) {
          console.info(`ER--- ----- (${p.title}): Caught error: ${e?.message}`);
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
