import React from "react";
import {
  Body,
  Html,
  Head,
  Container,
  Hr,
  Heading,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
type ContactEmailProps = {
  message: string;
  senderEmail: string;
};
export default function Contact_Email({ message,senderEmail }: ContactEmailProps) {
  return (
    <Html className="">
      <Head />
      <Preview>New Message from Employer</Preview>
      <Tailwind>
        <Body className="">
          <Container className="bg-white">
            <Section className="">
              <Heading className="text-black font-sans text-lg">Congratulations!!. You got a job</Heading>
              <Text className="text-neutral-800">{message}</Text>
              <Hr />
              <Text>Sender: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
