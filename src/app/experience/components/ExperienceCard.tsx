import MarkdownRenderer from "@/components/MarkdownRenderer";

type Props = {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
};

export default function ExperienceCard({
  jobTitle,
  company,
  startDate,
  endDate,
  description,
  skills,
}: Props) {
  return (
    <div className="cardDiv">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">{jobTitle}</h3>
          <h4 className="text-md mb-2 text-neutral-400">{company}</h4>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-sm text-neutral-300 dark:text-neutral-500 text-end">{`${startDate}`}</span>
          <span className="text-sm text-neutral-300 dark:text-neutral-500 text-end">{`${endDate}`}</span>
        </div>
      </div>

      <div className="mt-2 mb-6">
        <MarkdownRenderer content={description} />
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={`skill-${i}`}
            className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
