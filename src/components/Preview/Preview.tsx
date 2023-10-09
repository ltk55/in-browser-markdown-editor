import Markdown from "react-markdown";

export default function Preview({
  markdown,
}: {
  markdown: string;
}): JSX.Element {
  return (
    <section className="flex flex-1 flex-col border-l border-neutral-300">
      <div
        role="heading"
        className="fixed my-auto flex h-10 w-full items-center bg-neutral-200 pl-4 text-sm font-medium tracking-widest text-neutral-500"
      >
        PREVIEW
      </div>
      <Markdown className="preview-markdown mt-10 overflow-y-auto p-6">
        {markdown}
      </Markdown>
    </section>
  );
}
