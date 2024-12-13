const Bio = () => {
  return (
    <section id="bio" className="grid gap-6">
      <p className="text-sm text-zinc-600 ">
        Building bridges between design and functionality, I specialize in
        crafting dynamic web applications as a <span className="font-medium">Full-Stack Developer 🧑‍💻</span>
        .
      </p>

      <p className="text-sm text-zinc-600 leading-6">
        My work revolves around{" "}
        <a
          href="https://reactjs.org"
          target="_blank"
          className="font-medium text-cyan-500 hover:underline"
        >
          React.js
        </a>{" "}
        and{" "}
        <a
          href="https://nodejs.org"
          target="_blank"
          className="font-medium text-green-500 hover:underline"
        >
          Node.js
        </a>
        , focusing on creating efficient e-commerce platforms and custom CMS
        solutions with seamless front-end and back-end integration.
      </p>
      <p className="text-sm text-zinc-600 leading-6">
        I’m always learning and exploring new technologies like{" "}
        <a
          href="https://graphql.org"
          target="_blank"
          className="font-medium text-purple-500 hover:underline"
        >
          GraphQL
        </a>
        ,{" "}
        <a
          href="https://en.wikipedia.org/wiki/Object-relational_mapping"
          target="_blank"
          className="font-medium text-green-500 hover:underline"
        >
          ORMs
        </a>
        ,{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          className="font-medium text-dark-500 hover:underline"
        >
          Next.js
        </a>
        ,{" "}
        <a
          href="https://redux.js.org"
          target="_blank"
          className="font-medium text-indigo-500 hover:underline"
        >
          Redux
        </a>
        , and{" "}
        <a
          href="https://www.figma.com"
          target="_blank"
          className="font-medium text-pink-500 hover:underline"
        >
          Figma
        </a>{" "}
        to improve my skills and deliver better results.
      </p>
      <p className="text-sm text-zinc-600 leading-6">
        Whether it’s designing user-friendly interfaces or solving backend
        challenges, I aim to build reliable and modern solutions for every
        project.
      </p>
    </section>
  );
};

export default Bio;
