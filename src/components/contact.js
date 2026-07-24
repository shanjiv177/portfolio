"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Contact() {
  return (
    <section id="contact" className="mb-10">
      <Card className="max-w-full mx-auto">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-white">
            Contact Me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full cursor-pointer">
            <Link href="mailto:shanjiv177@gmail.com">Email me</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}

export default Contact;
