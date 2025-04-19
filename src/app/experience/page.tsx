import experience from "@/data/experience.json";
import { loadMarkdownContent } from "./components/loadMarkdown";
import ExperienceCard from "./components/ExperienceCard";

export default async function ExperiencePage() {
  const experiencesWithDescriptions = await Promise.all(
    experience.map(async (exp) => {
      const description = await loadMarkdownContent(exp.slug);
      return { ...exp, description };
    })
  );

  return (
    <main className="mainPage">
      <section className="space-y-6">
        {experiencesWithDescriptions.map((exp) => (
          <ExperienceCard
            key={exp.slug}
            jobTitle={exp.jobTitle}
            company={exp.company}
            startDate={exp.startDate}
            endDate={exp.endDate}
            description={exp.description}
            skills={exp.skills}
          />
        ))}
      </section>
    </main>
  );
}
