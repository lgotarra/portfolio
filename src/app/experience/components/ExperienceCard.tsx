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
    <div className="border p-6 rounded-lg shadow hover:shadow-lg transition bg-white dark:bg-neutral-900">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{jobTitle}</h3>
        <span className="text-sm text-neutral-300 dark:text-neutral-500">{`${startDate} - ${endDate}`}</span>
      </div>
      <h4 className="text-md mb-2 text-neutral-400">{company}</h4>
      <p className="text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
