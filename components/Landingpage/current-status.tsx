import React from "react";

const CurrentStatus = () => {
  return (
    <div className="grid gap-2">
      <p className="text-sm text-zinc-500 font-label">
        Current Focus
      </p>
      <q className="text-sm ">
        Focused on personal projects while exploring tools like{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          Next.js
        </a>
        ,{" "}
        <a
          href="https://graphql.org"
          target="_blank"
          className="text-purple-500 hover:underline"
        >
          GraphQL
        </a>
        , and{" "}
        <a
          href="https://redux.js.org"
          target="_blank"
          className="text-indigo-500 hover:underline"
        >
          Redux
        </a>
        . Enhancing design skills with{" "}
        <a
          href="https://www.figma.com"
          target="_blank"
          className="text-pink-500 hover:underline"
        >
          Figma
        </a>{" "}
        and improving backend performance using{" "}
        <a
          href="https://en.wikipedia.org/wiki/Object-relational_mapping"
          target="_blank"
          className="text-green-500 hover:underline"
        >
          ORMs
        </a>
        . Building prototypes, contributing to open-source, and seeking
        opportunities to grow and innovate.
      </q>
    </div>
  );
};

export default CurrentStatus;
