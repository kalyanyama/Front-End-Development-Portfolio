import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact page - Kalyan yama",
  description: "",
};

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default ContactLayout;
