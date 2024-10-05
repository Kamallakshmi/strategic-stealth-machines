"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { sendEmail } from "./actions/sendMail";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { SlideTabsExample } from "@/components/SlideTab";

const Contactpage = () => {
  const { toast } = useToast();

  const submitHandler = async (formData: FormData) => {
    const email = String(formData.get("email"));
    const fname = String(formData.get("fname"));
    const lname = String(formData.get("lname"));
    const comment = String(formData.get("comment"));

    if (!email || !fname || !lname || !comment) {
      console.log("Error");
    } else {
      console.log(email, fname, lname, comment);
      const inputData = {
        email,
        fname,
        lname,
        comment,
      };
      const response = await sendEmail(inputData);
      if (!response.success) {
        toast({
          title: "Error",
          description: response.message,
        });
      } else {
        toast({
          title: "Success",
          description: response.message,
        });
      }
    }
  };

  return (
    <section className="bg-navy animate-gradient-bg">
      <SlideTabsExample />
      <div className="container mx-auto p-5 flex flex-col items-center justify-center w-full h-screen">
        <h3 className="text-white text-2xl font-bold my-3">Reach us!</h3>
        <form
          action={submitHandler}
          className="flex flex-col w-full md:max-w-lg space-y-3"
        >
          <Label className="text-white" htmlFor="email">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
            required
          />
          <Label className="text-white" htmlFor="fname">
            First Name
          </Label>
          <Input
            type="text"
            name="fname"
            id="fname"
            placeholder="John"
            required
          />
          <Label className="text-white" htmlFor="lname">
            Last Name
          </Label>
          <Input
            type="text"
            name="lname"
            id="lname"
            placeholder="Doe"
            required
          />
          <Label className="text-white" htmlFor="comment">
            Comment
          </Label>
          <Textarea
            rows={7}
            name="comment"
            id="comment"
            placeholder="How can we help you?"
            required
          />
          <Button variant={"destructive"} className="my-3" size={"sm"}>
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contactpage;
