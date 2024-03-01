import { NextApiRequest, NextApiResponse } from "next";
import { resend } from "../../lib/resend";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const date = new Date();
  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
  console.log(new Date().getDate())
  console.log(months[new Date().getMonth()])
  console.log(new Date().getFullYear())
  const mailToOrientrek = await resend.emails.send({
    from: `${req.body.firstName} ${req.body.lastName} <contact@orientrek.com>`,
    to: ["contact@orientrek.com"], // contact@orientrek.com
    subject: `La demande de ${req.body.firstName} ${req.body.lastName} en date du ${new Date().getDate()} ${months[new Date().getMonth()]} ${new Date().getFullYear()}`,
    html: `Votre nom : ${req.body.lastName}<br />
    Votre prénom : ${req.body.firstName}<br />
    Votre email : ${req.body.email}<br />
    Votre téléphone : ${req.body.num}<br />
    Votre message : <br /> <br />
    ${req.body.message}`,
  });

  if (mailToOrientrek.error) {
    return res.status(400).json(mailToOrientrek.error);
  }
  res.status(200).json(mailToOrientrek.data);

  const datePlus3 = new Date(date);
  datePlus3.setDate(datePlus3.getDate() + 3);

  const mailToClient = await resend.emails.send({
    from: "Samuel Bernard <contact@orientrek.com>",
    to: [req.body.email],
    subject: "Orientrek a bien reçu votre message",
    html: `Bonjour ${req.body.lastName},<br /><br />

    
    Vous nous avez adressé le message ci-dessous via notre formulaire de contact : <br /><br />
    
    ${req.body.message}<br /> <br />
    
    Message : Orientrek a pris en compte votre demande et vous remercie. Notre équipe met tout en œuvre pour y répondre avant le ${datePlus3.getDate()} ${months[datePlus3.getMonth()]} ${datePlus3.getFullYear()}`,
  });

  if (mailToClient.error) {
    return res.status(400).json(mailToClient.error);
  }
  res.status(200).json(mailToClient.data);
}
