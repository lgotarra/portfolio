import IntroCard from "./components/IntroCard";
import AboutMeText from "./components/AboutMeText";
import EducationCard from "./components/EducationCard";
import WannaKnowMore from "./components/WannaKnowMore";
import education from "@/data/education.json";

export default function AboutPage() {
  return (
    <main className="mainPage">
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
