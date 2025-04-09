type Props = {
  title: string;
  school: string;
  year: string;
};

export default function EducationCard({ title, school, year }: Props) {
  return (
    <div className="border border-neutral-300 dark:border-neutral-700 p-4 rounded-md shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">{school}</p>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">{year}</p>
    </div>
  );
}
