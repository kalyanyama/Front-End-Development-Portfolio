import { Card, CardDescription, CardHeader } from "@/components/ui/card";

const ContactPage = () => {
  return (
    <Card>
      <CardHeader>
        <CardDescription className="flex flex-wrap gap-2 text-sm">
          Curious about my work and experience?
          <a
            href="https://read.cv/kalyanyama"
            className="text-sky-500 after:content-['_↗'] underline"
            target="_blank"
          >
            Read.CV
          </a>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ContactPage;
