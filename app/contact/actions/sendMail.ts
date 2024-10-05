"use server";

import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";
interface EmailTemplateProps {
  fname: string;
  lname: string;
  email: string;
  comment: string;
}
export const sendEmail = async ({
  fname,
  lname,
  email,
  comment,
}: EmailTemplateProps) => {
  try {
    console.log(fname, lname, email, comment);
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: `New contact from ${fname} ${lname}`,
      react: EmailTemplate({ fname, lname, email, comment }),
    });

    if (error) {
      console.log(error);
      return {
        message: "Invalid Data",
        success: false,
      };
    }
    console.log(data);
    return {
      message: "Email Sent, Our team will reach you!",
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      message: "Something went wrong, please try again later",
      success: false,
    };
  }
};
