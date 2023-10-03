import Markdown from "react-markdown";

export default function Preview({
  markdown,
}: {
  markdown: string;
}): JSX.Element {
  return (
    <Markdown className="preview h-screen flex-1 overflow-y-auto p-6">
      {markdown}
    </Markdown>
  );
}
