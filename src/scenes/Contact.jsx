import LineGradientPrimary1 from "../components/LineGradient1";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

import contactImage600 from "../assets/contact-600.webp";
import contactImage400 from "../assets/contact-400.webp";
import { useState } from "react";

const Contact = ({ setSelectedPage }) => {
  const [isSubmited, setIsSubmited] = useState(false);
  const [mailSentConfirmation, setMailSentConfirmation] = useState(false);
  const {
    register,
    trigger,
    reset,
    formState: { errors },
  } = useForm();

  const mailMessages = {
    success:
      "Your email has been sent successfully. Thank you for contacting me!",
    error: "Something went wrong, try again.",
    await: "Sending...",
  };
  const sendEmail = async (e) => {
    await fetch("https://usebasin.com/f/4d404e5170ee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    })
      .then((response) => response.json())
      .then((data) => {
        reset();
        setMailSentConfirmation(mailMessages.success);
      })
      .catch((error) => {
        setMailSentConfirmation(mailMessages.error);
        console.log(error);
      })
      .finally(() => setIsSubmited(false));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSubmited) {
      setIsSubmited(true);
      setMailSentConfirmation(false);
      const isValid = await trigger();
      if (isValid) {
        setMailSentConfirmation(mailMessages.await);
        console.log("Email: Input");
        console.log(e);
        await sendEmail(e);
      } else {
        setIsSubmited(false);
      }
    }
  };

  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  const isAbove500PxScreen = useMediaQuery("(min-width:500px)");

  return (
    <section id="contact" className="pt-32 pb-4">
      {/* HEADING */}
      <motion.div
        className="flex justify-center md:justify-end w-full  "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        onViewportEnter={() => setSelectedPage("contact")}
      >
        <div>
          <p className="font-title font-semibold text-4xl md:text-end text-center">
            CONTACT <span className="text-primary-1 ">ME</span>
          </p>
          <div className="flex justify-center md:justify-end my-5">
            <LineGradientPrimary1 width="w-1/2" />
          </div>
        </div>
      </motion.div>
      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-32 mt-5">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {isAboveMediumScreen ? (
            <img
              src={contactImage600}
              alt="contact"
              className="shadow-primary1 h-fit"
            />
          ) : (
            <img
              src={isAbove500PxScreen ? contactImage600 : contactImage400}
              alt="contact"
            />
          )}
        </motion.div>

        {/* FORM SECTION */}
        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {/* FORM */}
          <form onSubmit={onSubmit} noValidate>
            {/* NAME */}
            <div className="mb-4">
              <input
                className="w-full bg-primary-light-1 text-dark-1 font-normal placeholder-black placeholder-opacity-40 p-3"
                placeholder="NAME"
                type="text"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                  pattern: /^[A-Za-z ]+$/i,
                })}
              />
              {errors.name && (
                <p className="text-primary-2 font-bold mt-1 text-right drop-shadow-accent">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                  {errors.name.type === "pattern" &&
                    "Please enter a valid input. The input should only contain letters (uppercase or lowercase) and spaces."}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div className="my-4">
              <input
                className="w-full bg-primary-light-1 text-dark-1 font-normal placeholder-black placeholder-opacity-40 p-3"
                placeholder="EMAIL"
                type="text"
                formNoValidate="formnovalidate"
                {...register("email", {
                  required: true,
                  pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                })}
              />
              {errors.email && (
                <p className="text-primary-2 font-bold mt-1 text-right drop-shadow-accent">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div className="my-4">
              <textarea
                className="w-full bg-primary-light-1 font-normal text-dark-1 placeholder-black placeholder-opacity-40 p-3 resize-none "
                placeholder="MESSAGE"
                rows="7"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && (
                <p className="text-primary-2 font-bold mt-1 text-right drop-shadow-accent">
                  {errors.message.type === "required" &&
                    "This field is required"}
                  {errors.message.type === "maxLength" &&
                    "Max length is  2000 char."}
                </p>
              )}
            </div>
            <div className="md:text-start text-center">
              {!isSubmited ? (
                <button
                  className="p-5 bg-primary-1 font-normal  text-dark-1 hover:bg-primary-2 hover:text-white transition duration-500"
                  type="submit"
                >
                  SEND ME A MESSAGE
                </button>
              ) : (
                <button
                  className="p-5 bg-primary-light-3 font-normal  text-dark-1"
                  disabled
                >
                  SENDING...
                </button>
              )}
              {mailSentConfirmation && (
                <p
                  className={`${
                    mailSentConfirmation === mailMessages.success
                      ? "text-primary-1"
                      : mailSentConfirmation === mailMessages.error
                      ? "text-primary-2"
                      : "text-primary-light-1"
                  } mt-4 text-left drop-shadow-accent 
                  ${
                    mailSentConfirmation === mailMessages.await
                      ? "animate-text"
                      : ""
                  }`}
                >
                  {mailSentConfirmation}
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
