import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Divider from "@/components/ui/divider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SnippetInfo = () => {
  const codeForPreviousDemo = `
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;
  return (
    <div className="min-h-[600px] container sm:max-w-3xl">
      <h2 className="text-xl font-bold">Snippets</h2>
      <Divider />
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Preview</TabsTrigger>
          <TabsTrigger value="password">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card className="h-[500px] grid justify-center items-center">
            <CardContent className="space-y-2">
              <Button>Save changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <ScrollArea className="h-[500px] w-full rounded-xl border p-4">
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              {codeForPreviousDemo}
            </code>
          </ScrollArea>
        </TabsContent>
      </Tabs>
      <Divider />
    </div>
  );
};

export default SnippetInfo;
