import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TrackedLink from "@/components/TrackedLink";
import { blogPosts, getBlogPost, type ContentBlock } from "@/lib/blog";
import { site } from "@/lib/site";

const siteUrl = "https://pinkysgaragedoors.com";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const title = `${post.title} | Pinky's Garage Doors`;
  const url = `/blog/${post.slug}`;

  return {
    title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
      images: ["/images/og-image.jpg"],
    },
  };
}

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-10 text-2xl font-extrabold text-ink">{block.text}</h2>;
    case "h3":
      return <h3 className="mt-8 text-xl font-bold text-ink">{block.text}</h3>;
    case "ul":
      return (
        <ul className="mt-4 list-disc space-y-2 pl-6 text-ink/70">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "p":
    default:
      return <p className="mt-4 text-ink/70">{block.text}</p>;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-sm text-cream/60">{formatDate(post.date)}</p>
          <h1 className="mt-2 text-3xl font-extrabold uppercase sm:text-4xl">{post.title}</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <article>
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </article>

        <div className="mt-14 rounded-lg bg-ink-soft p-8 text-center text-cream">
          <h2 className="text-xl font-extrabold uppercase">Need Garage Door Help in Phoenix?</h2>
          <p className="mt-2 text-cream/80">
            Pinky&apos;s Garage Doors offers same-day repair and free estimates across the Valley.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <TrackedLink
              href="/contact"
              event="estimate_click"
              location="blog_post"
              className="rounded-md bg-rose px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink hover:bg-rose-dark transition-colors"
            >
              Get a Free Estimate
            </TrackedLink>
            <TrackedLink
              href={site.phoneHref}
              external
              event="call_click"
              location="blog_post"
              className="rounded-md border border-cream/40 px-6 py-3 text-sm font-bold uppercase tracking-wide text-cream hover:bg-cream/10 transition-colors"
            >
              Call {site.phone}
            </TrackedLink>
          </div>
        </div>
      </section>
    </>
  );
}
