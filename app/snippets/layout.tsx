import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snippets - Kalyan yama",
  description: "",
};

const SnippetsLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default SnippetsLayout;
