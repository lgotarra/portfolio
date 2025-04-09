import IntroCard from "./components/IntroCard";
import AboutMeText from "./components/AboutMeText";
import EducationCard from "./components/EducationCard";
import WannaKnowMore from "./components/WannaKnowMore";
import education from "@/data/education.json";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-10 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white space-y-12">
      <IntroCard />
      <AboutMeText />
      <section>
        <h2 className="text-2xl font-semibold mb-4">🎓 Education</h2>
        <div className="space-y-4">
          {education.map((item, idx) => (
            <EducationCard key={idx} {...item} />
          ))}
        </div>
      </section>
      <WannaKnowMore />
    </main>
  );
}
