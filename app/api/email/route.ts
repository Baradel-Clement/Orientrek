import { NextApiRequest, NextApiResponse } from "next";
import { resend } from "../../../lib/resend";

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);

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
  const mailToOrientrek = await resend.emails.send({
    from: req.body.firstName !== '' && req.body.lastName !== '' ? `${req.body.firstName} ${req.body.lastName} <contact@orientrek.com>` : 'contact@orientrek.com',
    to: ["contact@orientrek.com"], // contact@orientrek.com
    subject: `La demande de ${req.body.firstName} ${req.body.lastName
      } en date du ${new Date().getDate()} ${months[new Date().getMonth()]
      } ${new Date().getFullYear()}`,
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

  const datePlus3 = new Date(date);
  datePlus3.setDate(datePlus3.getDate() + 3);

  const mailToClient = await resend.emails.send({
    from: "Samuel Bernard <ne-pas-repondre@orientrek.com>",
    to: [req.body.email],
    subject: "Orientrek a bien reçu votre message",
    html: `Bonjour ${req.body.firstName},<br /><br />
  
      
      Vous nous avez adressé le message ci-dessous via notre formulaire de contact : <br /><br />
      
      ${req.body.message}<br /> <br />
      
      Orientrek a pris en compte votre demande et vous remercie. Notre équipe met tout en œuvre pour y répondre avant le ${datePlus3.getDate()} ${months[datePlus3.getMonth()]
      }.<br /><br />
      
      Si vous souhaitez compléter votre demande, nous vous remercions d'adresser votre message à contact@orientrek.com.`,
  });

  if (mailToClient.error) {
    return res.status(400).json(mailToClient.error);
  }
  return res.status(200).json([mailToClient.data, mailToOrientrek.data]);
}
