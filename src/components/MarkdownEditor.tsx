import useDocumentStore from "../store/documentStore";

export default function MarkdownEditor(): JSX.Element {
  const [displayPreviewOnly, documents, setDocuments, currentDocumentId] =
    useDocumentStore((state) => [
      state.displayPreviewOnly,
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
        className="my-auto flex h-10 items-center bg-neutral-200 pl-4 text-sm font-medium tracking-widest text-neutral-500"
      >
        MARKDOWN
      </div>

      <textarea
        className="mb-4 min-h-[calc(100vh-110px)] w-full bg-neutral-100 p-4 pt-2"
        value={currentDocument ? currentDocument.content : ""}
        onChange={handleContentChange}
      />
    </section>
  );
}
