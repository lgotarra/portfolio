type Props = {
  title: string;
  school: string;
  year: string;
};

export default function EducationCard({ title, school, year }: Props) {
  return (
    <div className="border border-neutral-300 dark:border-neutral-700 p-4 rounded-md shadow-sm bg-white">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">{school}</p>
      <p className="text-sm">{year}</p>
    </div>
  );
}
