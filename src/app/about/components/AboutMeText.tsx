import Link from "next/link";

export default function AboutMeText() {
  return (
    <section className="space-y-4">
      <p>📍 Based in Terrassa, Barcelona</p>

      <p>🎮 I love playing and discovering new videogames in my free time.</p>

      <p>
        📷 I enjoy photography and videography as a hobby. You can check out
        some of my work on{" "}
        <Link
          href="https://www.flickr.com"
          target="_blank"
          className="text-primary hover:underline"
        >
          Flickr
        </Link>{" "}
        or watch{" "}
        <Link
          href="https://www.youtube.com"
          target="_blank"
          className="text-primary hover:underline"
        >
          some videos
        </Link>
        .
      </p>

      <p>
        🎶 I&apos;m passionate about Catalan folklore and traditional music.
      </p>
    </section>
  );
}
