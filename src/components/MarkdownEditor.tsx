export default function MarkdownEditor({
  markdown,
  setMarkdown,
}: {
  markdown: string;
  setMarkdown: (markdown: string) => void;
}): JSX.Element {
  return (
    <section className="flex-1">
      <div
        role="heading"
        className="my-auto flex h-10 items-center bg-neutral-200 pl-4 text-sm font-medium tracking-widest text-neutral-500"
      >
        MARKDOWN
      </div>

      <textarea
        className="mb-4 h-full w-full bg-neutral-100 p-4 pb-20 pt-2"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
    </section>
  );
}