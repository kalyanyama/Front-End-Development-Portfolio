import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photos - Kalyan Yama",
  description:
    "Check out all the cool resources Kalyan Yama has put together for you.",
};

export default function PhotosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
