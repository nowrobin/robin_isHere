import Link from 'next/link';
import { posts } from '@/data/posts';

export default function BlogDashboardPage() {
  return (
    <main className="bg-beige text-primaryColor">
      <div className="container mx-auto px-6 py-14 max-w-4xl">
        <header className="mb-10">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">블로그</h1>
          <p className="mt-3 text-lg text-secondaryColor">
            개발하면서 정리한 글 모음
          </p>
        </header>

        <div className="space-y-6">
          {posts.map((post) => {
            const formattedDate = new Date(post.publishedAt)
              .toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })
              .replace(/\. /g, '.')
              .replace(/\.$/, '');

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-xl border border-tertiary bg-quaternary/30 p-6 transition-all hover:bg-quaternary/60 hover:shadow-md"
              >
                <div className="flex items-center gap-3 text-sm text-secondaryColor/70">
                  <time dateTime={post.publishedAt}>{formattedDate}</time>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-2 text-xl font-semibold text-primaryColor">
                  {post.title}
                </h2>
                <p className="mt-2 text-secondaryColor leading-relaxed line-clamp-2">
                  {post.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-quaternary px-3 py-1 text-xs text-primaryColor"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>

        {posts.length === 0 && (
          <p className="text-center text-secondaryColor/70 py-20">
            아직 작성된 글이 없습니다.
          </p>
        )}
      </div>
    </main>
  );
}
