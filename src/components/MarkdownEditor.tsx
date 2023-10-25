import IconShowPreview from "../assets/icon-show-preview.svg";
import useDocumentStore from "../lib/documentStore";

export default function MarkdownEditor(): JSX.Element {
  const [
    displayPreviewOnly,
    setDisplayPreviewOnly,
    documents,
    setDocuments,
    currentDocumentId,
  ] = useDocumentStore((state) => [
    state.displayPreviewOnly,
    state.setDisplayPreviewOnly,
    state.documents,
    state.setDocuments,
    state.currentDocumentId,
  ]);

  const currentDocument = documents.find((doc) => doc.id === currentDocumentId);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedDocuments = documents.map((doc) => {
      if (doc.id === currentDocumentId) {
        return { ...doc, content: e.target.value };
      }
      return doc;
    });
    setDocuments(updatedDocuments);
  };

  return (
    <section
      className={`h-[calc(100vh-65px)] ${displayPreviewOnly ? "hidden" : ""}`}
    >
      <div
        role="heading"
        className="my-auto flex h-10 items-center justify-between bg-neutral-200 px-4 pl-4 dark:bg-neutral-900"
      >
        <span className="text-sm font-medium tracking-widest text-neutral-500 dark:text-neutral-400">
          MARKDOWN
        </span>

        <button
          onClick={() => setDisplayPreviewOnly(!displayPreviewOnly)}
          className="md:hidden"
        >
          <img src={IconShowPreview} alt="display markdown preview only" />
        </button>
      </div>

      <textarea
        className="mb-4 min-h-[calc(100vh-110px)] w-full resize-none border-none bg-neutral-100 p-4 pt-2 outline-none dark:bg-neutral-1000 dark:text-neutral-400"
        value={currentDocument ? currentDocument.content : ""}
        onChange={handleContentChange}
      />
    </section>
  );
}
