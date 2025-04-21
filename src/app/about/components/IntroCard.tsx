import Image from "next/image";

export default function IntroCard() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <Image
        src="/profile.jpg"
        alt="Laura Gotarra"
        width={200}
        height={200}
        className="rounded-full shadow-md"
      />
      <p className="text-lg font-medium text-center md:text-left">
        I&apos;m <strong className="text-primary">Laura</strong>, nice to meet
        you 👋
      </p>
    </div>
  );
}
