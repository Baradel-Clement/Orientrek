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
      "Message bien envoyé. Vous allez reçevoir une confirmation par mail"
    );
  const notifyError = () => toast.error("Erreur. Veuillez réessayer.");

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
    <div>
      <Toaster />
      <br />
      <br />
      <p>Nom</p>
      <input
        type="text"
        aria-label="Nom"
        name="firstName"
        value={values.firstName}
        onChange={(e) => setInputChanges("firstName", e.target.value)}
      />
      <br />
      <br />
      <p>Prénom</p>
      <input
        type="text"
        aria-label="Prénom"
        name="firstName"
        value={values.lastName}
        onChange={(e) => setInputChanges("lastName", e.target.value)}
      />
      <br />
      <br />
      <p>Téléphone</p>
      <input
        type="tel"
        aria-label="Téléphone"
        name="firstName"
        value={values.num}
        onChange={(e) => setInputChanges("num", e.target.value)}
      />
      <br />
      <br />
      <p>Email</p>
      <input
        type="email"
        aria-label="Email"
        name="firstName"
        value={values.email}
        onChange={(e) => setInputChanges("email", e.target.value)}
      />
      <br />
      <br />
      <p>Message</p>
      <textarea
        aria-label="Message"
        name="firstName"
        value={values.message}
        onChange={(e) => setInputChanges("message", e.target.value)}
      />
      <br />
      <br />
      {!isLoading && (
        <button type="submit" onClick={() => handleSubmit()}>
          Envoyer
        </button>
      )}
      {isLoading && (
        <ReactLoading type={"spin"} color={"blue"} height={66} width={37} />
      )}
    </div>
  );
};

export default ContactForm;
