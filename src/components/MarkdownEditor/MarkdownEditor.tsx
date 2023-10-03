export default function MarkdownEditor({
  markdown,
  setMarkdown,
}: {
  markdown: string;
  setMarkdown: (markdown: string) => void;
}): JSX.Element {
  return (
    <textarea
      className="h-screen w-full flex-1 px-4 pb-4 pt-2"
      value={markdown}
      onChange={(e) => setMarkdown(e.target.value)}
    />
  );
}
