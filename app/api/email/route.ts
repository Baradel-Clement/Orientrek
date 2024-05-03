import { resend } from "../../../lib/resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: Request
) {
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
  const body = await req.json();
  
  const mailToOrientrek = await resend.emails.send({
    from: body.firstName !== '' && body.lastName !== '' ? `${body.firstName} ${body.lastName} <contact@orientrek.com>` : 'contact@orientrek.com',
    to: ["contact@orientrek.com"], // contact@orientrek.com
    subject: `La demande de ${body.firstName} ${body.lastName
      } en date du ${new Date().getDate()} ${months[new Date().getMonth()]
      } ${new Date().getFullYear()}`,
    html: `Votre nom : ${body.lastName}<br />
      Votre prénom : ${body.firstName}<br />
      Votre email : ${body.email}<br />
      Votre téléphone : ${body.num}<br />
      Votre message : <br /> <br />
      ${body.message}`,
  });

  if (mailToOrientrek.error) {
    return NextResponse.json({ message: mailToOrientrek.error }, { status: 400 });
  }

  const datePlus3 = new Date(date);
  datePlus3.setDate(datePlus3.getDate() + 3);

  const mailToClient = await resend.emails.send({
    from: "Samuel Bernard <ne-pas-repondre@orientrek.com>",
    to: [body.email],
    subject: "Orientrek a bien reçu votre message",
    html: `Bonjour ${body.firstName},<br /><br />
  
      
      Vous nous avez adressé le message ci-dessous via notre formulaire de contact : <br /><br />
      
      ${body.message}<br /> <br />
      
      Orientrek a pris en compte votre demande et vous remercie. Notre équipe met tout en œuvre pour y répondre avant le ${datePlus3.getDate()} ${months[datePlus3.getMonth()]
      }.<br /><br />
      
      Si vous souhaitez compléter votre demande, nous vous remercions d'adresser votre message à contact@orientrek.com.`,
  });

  if (mailToClient.error) {
    return NextResponse.json({ message: mailToClient.error }, { status: 400 });
  }
  return NextResponse.json({ message: mailToClient.data }, { status: 200 });
}
