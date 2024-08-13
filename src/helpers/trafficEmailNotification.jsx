import { useLayoutEffect } from "react";

const now = new Date(Date.now());
const MailData = {
  email: "test@test.com",
  platform: navigator?.userAgentData?.platform || "no data",
  isMoblie: navigator?.userAgentData?.mobile ? "Mobile" : "Desktop",
  date: now.toDateString(),
  time: now.toTimeString(),
};
const trafficEmailNotification = (url) => {
  const sendEmail = async (e) => {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(MailData),
      });

      if (!res.ok) throw new Error(`HTTP status: ${res.status}`);

      console.info("OK--- Traffic notification sent");
    } catch (error) {
      console.info(`ER--- Email notification error: ${error?.message}`);
    }
  };

  useLayoutEffect(() => {
    const trafficNotificationTimeout = setTimeout(sendEmail(), 1000);
    return clearTimeout(trafficNotificationTimeout);
  }, []);

  return;
};

export default trafficEmailNotification;
