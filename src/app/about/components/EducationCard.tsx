type Props = {
  title: string;
  school: string;
  year: string;
};

export default function EducationCard({ title, school, year }: Props) {
  return (
    <div className="border p-6 rounded-lg shadow hover:shadow-lg transition bg-white dark:bg-neutral-900">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-neutral-400">{school}</p>
      <p className="text-sm text-neutral-300 dark:text-neutral-500">{year}</p>
    </div>
  );
}
