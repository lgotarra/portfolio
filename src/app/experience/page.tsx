import experience from "@/data/experience.json";
import ExperienceCard from "@/components/ExperienceCard";

export default function ExperiencePage() {
  return (
    <main className="max-w-4xl mx-auto py-8 px-4">
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <ExperienceCard
            key={index}
            jobTitle={exp.jobTitle}
            company={exp.company}
            startDate={exp.startDate}
            endDate={exp.endDate}
            description={exp.description}
            skills={exp.skills}
          />
        ))}
      </div>
    </main>
  );
}
