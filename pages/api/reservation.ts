import { NextApiRequest, NextApiResponse } from "next";
import { resend } from "../../lib/resend";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const date = new Date();
    const months = [
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre",
    ];

    const currentDate = `${new Date().getDate()} ${
      months[new Date().getMonth()]
    } ${new Date().getFullYear()}`;

    const mailToOrientrek = await resend.emails.send({
      from:
        req.body.inputValues.firstName !== "" &&
        req.body.inputValues.lastName !== ""
          ? `${req.body.inputValues.firstName} ${req.body.inputValues.lastName} <contact@orientrek.com>`
          : "contact@orientrek.com",
      to: ["resa.orientrek@gmail.com", "contact@orientrek.com"],
      subject: `demande de réservation du séjour ${req.body.reservation.sejour} ${req.body.reservation.date} de ${req.body.inputValues.firstName} ${req.body.inputValues.lastName}`,
      html: `Date de la demande: ${currentDate}<br />
      Nom : ${req.body.inputValues.lastName}<br />
      Prénom : ${req.body.inputValues.firstName}<br />
      Email : ${req.body.inputValues.email}<br />
      Téléphone : ${req.body.inputValues.num}<br />
      Séjour : ${req.body.reservation.sejour}<br />
      Dates : ${req.body.reservation.date}<br />
      Message : <br /> <br />
      ${req.body.inputValues.message}`,
    });

    if (mailToOrientrek.error) {
      return res.status(400).json(mailToOrientrek.error);
    }

    const datePlus3 = new Date(date);
    datePlus3.setDate(datePlus3.getDate() + 3);

    const mailToClient = await resend.emails.send({
      from: "Samuel Bernard <ne-pas-repondre@orientrek.com>",
      cc: ["resa.orientrek@gmail.com"],
      to: [req.body.inputValues.email],
      subject: `Votre demande de réservation du séjour ${req.body.reservation.sejour} ${req.body.reservation.date}`,
      html: `Bonjour ${req.body.inputValues.firstName} ${req.body.inputValues.lastName},<br /><br />
  
      Ce ${currentDate}, vous avez envoyé une demande de réservation sur le site <a href="www.orientrek.com" target="_blank">www.orientrek.com</a> pour le séjour ci-après :<br /> 
      
      ${req.body.reservation.sejour} ${req.body.reservation.date}<br /><br /> 

      Nous vous remercions pour votre confiance et notre équipe vous transmettra l’ensemble des documents nécessaires pour votre inscription.<br /><br /> 

      Si vous n’êtes pas à l’origine de cette demande, nous vous prions de faire suivre ce mail à l’adresse contact@orientrek.com en précisant que ${req.body.inputValues.firstName} ${req.body.inputValues.lastName} n’a pas sollicité de demande de réservation et qu’il n’y a pas lieu d’y donner suite.
      
      `,
    });

    if (mailToClient.error) {
      return res.status(400).json(mailToClient.error);
    }
    return res.status(200).json([mailToClient.data, mailToOrientrek.data]);
    return res.status(200).json("");
  } else {
    return res.status(200).json({ message: "Hello from Next.js!" });
  }
}
