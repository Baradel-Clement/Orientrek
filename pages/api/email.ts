import { NextApiRequest, NextApiResponse } from "next";
import { resend } from "../../lib/resend";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mailToOrientrek = await resend.emails.send({
    from: `${req.body.firstName} ${req.body.lastName} <contact@orientrek.com>`,
    to: ["baradelclement@gmail.com"],
    subject: "Page Contact | Vous avez reçu un message.",
    html: `Vous avez reçu un message de : ${req.body.firstName} ${req.body.lastName} \n \n Contact : ${req.body.email} OU ${req.body.num} \n \n ${req.body.message}`,
  });

  if (mailToOrientrek.error) {
    return res.status(400).json(mailToOrientrek.error);
  }
  res.status(200).json(mailToOrientrek.data);

  const mailToClient = await resend.emails.send({
    from: "Samuel Bernard <do-not-reply@orientrek.com>",
    to: [req.body.email],
    subject: "Orientrek a bien reçu votre message",
    html: `Prénom:  ${req.body.firstName} \n \n Nom:  ${req.body.lastName} \n \n num:  ${req.body.num} \n \n email:  ${req.body.email} \n \n message:  ${req.body.message} \n \n Votre message a bien été envoyé `,
  });

  if (mailToClient.error) {
    return res.status(400).json(mailToClient.error);
  }
  res.status(200).json(mailToClient.data);
}
