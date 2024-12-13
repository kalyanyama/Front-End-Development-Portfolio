import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Divider from "@/components/ui/divider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="container min-h-[600px] grid items-center">
      <Card className="mx-auto  max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Let’s Have a Quick Chat!</CardTitle>
          <CardDescription>
            Got a fun idea or just feel like saying hello? Fill out the form
            below, and let’s turn those thoughts into reality!
          </CardDescription>
          <Divider />
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="send-a-pigeon@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                required
                id="subject"
                placeholder="What magic can I create for you?"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Let’s chat about your wildest dreams!"
                rows={7}
                required
              />
            </div>

            <Button type="submit" className="w-full mt-3">
              Send it
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
