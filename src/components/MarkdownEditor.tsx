import useDocumentStore from "../store/documentStore";

export default function MarkdownEditor({
  markdown,
  setMarkdown,
}: {
  markdown: string;
  setMarkdown: (markdown: string) => void;
}): JSX.Element {
  const displayPreviewOnly = useDocumentStore(
    (state) => state.displayPreviewOnly,
  );

  return (
    <section
      className={`h-[calc(100vh-65px)] ${displayPreviewOnly ? "hidden" : ""}`}
    >
      <div
        role="heading"
        className="my-auto flex h-10 items-center bg-neutral-200 pl-4 text-sm font-medium tracking-widest text-neutral-500"
      >
        MARKDOWN
      </div>

      <textarea
        className="mb-4 min-h-[calc(100vh-110px)] w-full bg-neutral-100 p-4 pt-2"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
    </section>
  );
}
