import Markdown from "react-markdown";

import IconHidePreview from "../assets/icon-hide-preview.svg";
import IconShowPreview from "../assets/icon-show-preview.svg";
import useDocumentStore from "../lib/documentStore";
import { TDocument } from "../type";

export default function Preview(): JSX.Element {
  const [
    displayPreviewOnly,
    setDisplayPreviewOnly,
    documents,
    currentDocumentId,
  ] = useDocumentStore((state) => [
    state.displayPreviewOnly,
    state.setDisplayPreviewOnly,
    state.documents,
    state.currentDocumentId,
  ]);

  function getContentById(id: string, documents: TDocument[]) {
    const document = documents.find((doc) => doc.id === id);
    return document ? document.content : null;
  }

  return (
    <section className="flex h-[calc(100vh-65px)] flex-col border-l border-neutral-300 pb-4 dark:border-neutral-600">
      <div
        role="heading"
        className={`fixed z-0 flex h-10 items-center justify-between bg-neutral-200 px-4 py-3 dark:bg-neutral-900 ${
          displayPreviewOnly ? "w-full" : "w-1/2"
        }`}
      >
        <span className="text-sm font-medium tracking-widest text-neutral-500 dark:text-neutral-400">
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
        className={`preview-markdown mt-10 overflow-y-auto p-6 dark:bg-neutral-1000 ${
          displayPreviewOnly ? "md:px-12 lg:px-[calc(100vw-70vw)]" : ""
        }`}
      >
        {getContentById(currentDocumentId, documents)}
      </Markdown>
    </section>
  );
}
