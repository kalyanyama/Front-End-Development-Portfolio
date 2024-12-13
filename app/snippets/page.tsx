"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Divider from "@/components/ui/divider";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const content = [
  {
    catagory: "UI",
    defaultCount: 6,
    list: [
      {
        label: "",
        image: "",
      },
      {
        label: "",
        image: "",
      },
      {
        label: "",
        image: "",
      },
      {
        label: "",
        image: "",
      },
      {
        label: "",
        image: "",
      },
      {
        label: "",
        image: "",
      },
      {
        label: "",
        image: "",
      },
      {
        label: "",
        image: "",
      },
      {
        label: "",
        image: "",
      },
      {
        label: "",
        image: "",
      },
      {
        label: "",
        image: "",
      },
    ],
  },
  {
    catagory: "Integrations",
    defaultCount: 6,
    list: [
      {
        label: "",
        image: "",
      },
    ],
  },
];

const Snippets = () => {
  return (
    <div className="min-h-700 container sm:max-w-5xl">
      <h2 className="text-xl font-bold">Snippets</h2>
      {content.map((item) => {
        return (
          <div key={item.catagory}>
            <Divider />
            <div className="flex justify-between items-center">
              <h2 className="text-base font-bold">{item.catagory}</h2>
              <Button
                variant={"link"}
                onClick={() => (item.defaultCount = item.list.length)}
              >
                + {item.list.length} other items
              </Button>
            </div>
            {item.list && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                {item.list
                  .map((innerItem, index) => (
                    <div key={index}>
                      <Card className="hover:shadow-xl transition ease-in-out duration-500 hover:-translate-y-1 ">
                        <CardHeader>
                          <CardTitle>Archive Product</CardTitle>
                          <CardDescription>
                            Lipsum dolor sit amet, consectetur adipiscing elit.
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button size="sm" asChild>
                            <Link href={"/snippets/12345"} className="text-sm">
                              <LightningBoltIcon className="mr-1 h-3 w-3" />{" "}
                              Take a Look?
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  ))
                  .slice(0, item.defaultCount)}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Snippets;
