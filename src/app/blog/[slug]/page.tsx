import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { posts, getPostBySlug } from '@/data/posts';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  (process.env.VERCEL_URL
    ? `${process.env.VERCEL_URL}`
    : 'http://localhost:3000');

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | 블로그`,
    description: post.description,
    keywords: post.tags,
    robots: { index: true, follow: true },
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      authors: ['한정욱'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { Content } = post;

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: '블로그', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${siteUrl}/blog/${post.slug}` },
    ],
  };

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { '@type': 'Person', name: '한정욱', url: siteUrl },
    publisher: { '@type': 'Person', name: '한정욱', url: siteUrl },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/blog/${post.slug}` },
    image: `${siteUrl}/blog/${post.slug}/opengraph-image`,
  };

  const faqStructuredData = post.faq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }
    : null;

  const formattedDate = new Date(post.publishedAt)
    .toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })
    .replace(/\. /g, '.')
    .replace(/\.$/, '');

  return (
    <main className="bg-beige text-primaryColor">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      {faqStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      )}

      <article className="container mx-auto px-6 py-14 max-w-4xl text-secondaryColor">
        <nav className="mb-6">
          <Link
            href="/blog"
            className="text-sm text-secondaryColor/70 hover:text-primaryColor transition-colors"
          >
            &larr; 블로그 목록
          </Link>
        </nav>

        <header className="mb-10">
          <p className="text-sm text-secondaryColor/70">
            {formattedDate} · {post.readTime}
          </p>
          <h1 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-primaryColor">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed">{post.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-quaternary px-3 py-1 text-xs text-primaryColor"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <Content />
      </article>
    </main>
  );
}
