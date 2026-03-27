import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background text-foreground">
      <p className="text-8xl font-bold opacity-10">404</p>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <p className="text-muted-foreground">찾으시는 페이지가 존재하지 않습니다.</p>
      </div>
      <Link
        href="/"
        className="rounded-md border border-border px-5 py-2 text-sm transition-colors hover:bg-muted"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
