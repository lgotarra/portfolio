export default function WannaKnowMore() {
  return (
    <section className="pt-8 text-lg">
      Wanna know more?{" "}
      <a
        href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
        className="text-secondary-accent font-medium"
      >
        Let&apos;s grab a virtual coffee ☕
      </a>
    </section>
  );
}
