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
    <div className="border p-6 rounded-lg shadow hover:shadow-lg transition bg-white">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{jobTitle}</h3>
        <span className="text-sm">{`${startDate} – ${endDate}`}</span>
      </div>
      <h4 className="text-md mb-2">{company}</h4>
      <p className="text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="text-xs bg-gray-100 px-2 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
