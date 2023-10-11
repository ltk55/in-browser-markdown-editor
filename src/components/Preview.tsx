import Markdown from "react-markdown";

import IconHidePreview from "../assets/icon-hide-preview.svg";
import IconShowPreview from "../assets/icon-show-preview.svg";
import useDocumentStore from "../store/documentStore";

export default function Preview({
  markdown,
}: {
  markdown: string;
}): JSX.Element {
  const [displayPreviewOnly, setDisplayPreviewOnly] = useDocumentStore(
    (state) => [state.displayPreviewOnly, state.setDisplayPreviewOnly],
  );

  return (
    <section className="flex h-[calc(100vh-65px)] flex-col border-l border-neutral-300 pb-4">
      <div
        role="heading"
        className={`fixed flex h-10  items-center justify-between bg-neutral-200 px-4 py-3 ${
          displayPreviewOnly ? "w-full" : "w-1/2"
        }`}
      >
        <span className="text-sm font-medium tracking-widest text-neutral-500">
          PREVIEW
        </span>
        <button onClick={() => setDisplayPreviewOnly(!displayPreviewOnly)}>
          <img
            src={displayPreviewOnly ? IconHidePreview : IconShowPreview}
            alt={
              displayPreviewOnly
                ? "show markdown editor"
                : "display markdown preview only"
            }
          />
        </button>
      </div>

      <Markdown
        className={`preview-markdown mt-10 overflow-y-auto p-6 ${
          displayPreviewOnly ? "px-[calc(100vw-70vw)]" : ""
        }`}
      >
        {markdown}
      </Markdown>
    </section>
  );
}
