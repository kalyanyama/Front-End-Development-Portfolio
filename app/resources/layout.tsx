import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources - Kalyan yama.",
  description:
    "Check out all the cool resources Kalyan Yama has put together for you.",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
