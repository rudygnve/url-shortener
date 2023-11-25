import type { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from "@/config/nodemailer";

type ResponseData = {
  success: boolean;
  message: string | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const data = req.body;
  if (!data) {
    return res.status(500).json({ success: true, message: "No data" });
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `New Message Entry From QikLink`,
      text: "This is a test",
      html: `<h3>New Message From ${data.name}</h3><p><b>Message:</b><br>${data.message}</p><p><b>Email:</b> ${data.email}</p><p><b>Phone:</b> ${data?.phone}</p>`,
    });

    return res.status(200).json({ success: true, message: "Sent" });
  } catch (error) {
    return res.status(500).json({ success: true, message: "Sent" });
  }
}
