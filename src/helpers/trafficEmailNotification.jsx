import { useLayoutEffect } from "react";

const now = new Date(Date.now());
const MailData = {
  platform: navigator?.userAgentData?.platform || "no data",
  isMoblie: navigator?.userAgentData?.mobile ? "Mobile" : "Desktop",
  date: now.toDateString(),
  time: now.toTimeString(),
};
const trafficEmailNotification = () => {
  const sendEmail = async (e) => {
    try {
      await fetch(
        "https://formsubmit.co/ajax/2dfe1cb18982311021ec0a63158f3740",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(MailData),
        }
      )
        .then(console.log("----- Traffic notification sent"))
        .catch((error) => {
          console.warn("Email notification error:");
          console.warn(error);
        });
    } catch (e) {
      console.warn("Email notification error:");
      console.warn(e);
    }
  };

  useLayoutEffect(() => {
    const trafficNotificationTimeout = setTimeout(sendEmail(), 1000);
    return clearTimeout(trafficNotificationTimeout);
  }, []);

  return;
};

export default trafficEmailNotification;
