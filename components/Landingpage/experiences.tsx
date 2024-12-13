const lifeLogs = [
  {
    date: "2023 — 2024",
    role: "Full-Stack Developer",
    company: "AVS Consulting Services",
    location: "Hyderabad, TG",
    highlights: [
      "Collaborated on developing robust full-stack applications for various clients.",
    ],
  },
  {
    date: "2023 — 2023",
    role: "Backend Developer",
    company: "Shami Innovation & Technologies",
    location: "Noida, UP",
    highlights: [
      "Built and optimized backend APIs, ensuring scalability and performance.",
    ],
  },
  {
    date: "2023 — 2023",
    role: "Full-Stack Developer",
    company: "MalTech Solutions Private Limited",
    location: "Bapatla, AP",
    highlights: [
      "Worked on both front-end and back-end tasks to deliver seamless applications.",
    ],
  },
];

const Experiences = () => {
  return (
    <div className="space-y-6">
      <p className="text-sm text-zinc-500 font-label">Work history</p>
      <div className="space-y-2">
        {lifeLogs.map((entry, entryIndex) => (
          <div key={entryIndex} className=" pb-4">
            {entry.company && (
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <p className="text-sm">
                  {entry.company},{" "}
                  <span className="text-zinc-500 ">
                    {entry.location}
                  </span>
                </p>
                <p className="text-sm font-medium font-label text-zinc-500">
                  {entry.date}
                </p>
              </div>
            )}
            {entry.highlights && (
              <ul className="list-inside mt-2 text-sm text-zinc-500 space-y-1">
                {entry.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex} className="">
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
