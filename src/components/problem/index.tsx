export default function Problem({
  problem,
  content,
}: {
  problem: boolean;
  content: string;
}) {
  return (
    <div
      className={
        "flex flex-col justify-start gap-3 w-full rounded-2xl sm:w-1/2 bg-slate-400 px-6 py-4"
      }
    >
      <div className="font-bold text-lg">{problem ? "문제점" : "해결법"}</div>
      <div>{content}</div>
    </div>
  );
}
