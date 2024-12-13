import { Card, CardDescription, CardHeader } from "@/components/ui/card";

const ContactPage = () => {
  return (
    <div className="flex gap-2 text-sm text-gray-500">
      <p>Curious about my work ?</p>
      <a
        href="https://read.cv/kalyanyama"
        className="text-sky-500 after:content-['_↗']"
        target="_blank"
      >
        Read.CV
      </a>
    </div>
  );
};

export default ContactPage;
