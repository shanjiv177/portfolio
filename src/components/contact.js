"use client";
import { useActionState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { submitContactForm } from "@/actions/actions";
import Form from "next/form";


function Contact() {
  const [state, formAction, isLoading] = useActionState(submitContactForm, {
    email: "",
    name: "",
    message: "",
    success: false,
    err: null,
  });



  return (
    <section id="contact" className="mb-10">
      <Card className="max-w-full mx-auto">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-white">
            Contact Me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form
            className="flex flex-col gap-4"
            action={formAction}
            noValidate
          >
            <Input
              name="name"
              type="text"
              placeholder="Your Name"
              defaultValue={state.name}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              defaultValue={state.email}
              required
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              defaultValue={state.message}
              required
            />
            <Button type="submit" className="w-full cursor-pointer">
              {isLoading ? "Sending..." : "Send"}
            </Button>
            {state.success && (
              <p className="text-green-500 mt-2">
                {"Thank you for reaching out!"}
              </p>
            )}
            {state.err && (
              <p className="text-red-500 mt-2">
                {state.err || "An error occurred. Please try again."}
              </p>
            )}
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}

export default Contact;