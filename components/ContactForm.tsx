import React, { useState } from "react";
import { sendEmail } from "../utils/sendEmail";
import ReactLoading from "react-loading";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    num: "",
    message: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const setInputChanges = (name: string, value: string) => {
    setValues({ ...values, [name]: value });
  };

  const notify = () =>
    toast.success(
      `Votre message a bien été envoyé et vous recevrez un accusé de réception à l’adresse : ${values.email}`,
      { duration: 6000 }
    );
  const notifyError = () =>
    toast.error("Erreur. Veuillez réessayer.", { duration: 6000 });

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await sendEmail(values);
      notify();
    } catch (error) {
      notifyError();
    } finally {
      setIsLoading(false);
      setValues({
        firstName: "",
        lastName: "",
        num: "",
        message: "",
        email: "",
      });
    }
  };

  return (
    <>
      <form
        name="contactForm"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="PageContact-input">
          <label htmlFor="lastName">Nom: </label>
          <input
            type="text"
            aria-label="Prénom"
            name="lastName"
            id="lastName"
            value={values.lastName}
            onChange={(e) => setInputChanges("lastName", e.target.value)}
          />
        </div>
        <div className="PageContact-input">
          <label htmlFor="firstName">Prénom: </label>
          <input
            type="text"
            aria-label="Nom"
            name="firstName"
            id="firstName"
            value={values.firstName}
            onChange={(e) => setInputChanges("firstName", e.target.value)}
          />
        </div>
        <div className="PageContact-input">
          <label htmlFor="num">Numéro: </label>
          <input
            type="tel"
            aria-label="Téléphone"
            name="num"
            id="num"
            value={values.num}
            onChange={(e) => setInputChanges("num", e.target.value)}
          />
        </div>
        <label htmlFor="email">Email: </label>
        <input
          required
          type="email"
          aria-label="Email"
          name="email"
          id="email"
          value={values.email}
          onChange={(e) => setInputChanges("email", e.target.value)}
        />
        <label htmlFor="message">Message: </label>
        <textarea
          required
          aria-label="Message"
          name="message"
          id="message"
          value={values.message}
          onChange={(e) => setInputChanges("message", e.target.value)}
        />
        {!isLoading && <input type="submit" value="Envoyer" />}
        {isLoading && (
          <ReactLoading type={"spin"} color={"blue"} height={66} width={37} />
        )}
      </form>
      <Toaster />
    </>
  );
};

export default ContactForm;
