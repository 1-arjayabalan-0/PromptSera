export default function ProblemSection() {
  const items = [
    {
      icon: "psychology_alt",
      title: "Chaotic Thoughts",
      desc: "Jumbled notes and vague ideas lead to confusion and ineffective prompts.",
    },
    {
      icon: "output",
      title: "Poor AI Output",
      desc: "When your input is unclear, the AI's output is often irrelevant or low-quality.",
    },
    {
      icon: "edit_off",
      title: "Prompt-Writing Friction",
      desc: "Struggling to find the right words wastes time and stifles creativity.",
    },
  ];

  return (
    <section className="flex flex-col gap-6 px-4 m-16 mt-0">
      <h2 className="text-white text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] text-center">
        Lost in a Jumble of Ideas?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-1 gap-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 flex-col text-center items-center backdrop-blur-sm sm:col-span-1"
          >
            <div className="text-primary">
              <span className="material-symbols-outlined !text-4xl">
                {item.icon}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-white text-lg font-bold leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm font-normal leading-normal">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
