import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

const title = "Blog | Pinky's Garage Doors";
const description =
  "Garage door tips, cost guides, and maintenance advice from Pinky's Garage Doors, serving Phoenix, AZ and Maricopa County.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    title,
    description,
    url: "/blog",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/og-image.jpg"] },
};

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="font-script text-2xl text-rose sm:text-3xl">Tips &amp; guides</p>
          <h1 className="mt-2 text-3xl font-extrabold uppercase sm:text-5xl">Garage Door Blog</h1>
          <p className="mt-4 max-w-2xl text-cream/80">
            Repair tips, cost guides, and maintenance advice from the Pinky&apos;s team—serving
            Phoenix, AZ and Maricopa County.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-10">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-ink/10 pb-10 last:border-0">
            <p className="text-sm text-ink/50">{formatDate(post.date)}</p>
            <h2 className="mt-2 text-2xl font-extrabold">
              <Link href={`/blog/${post.slug}`} className="hover:text-rose transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-ink/70">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-sm font-bold uppercase tracking-wide text-rose hover:text-rose-dark"
            >
              Read More →
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
