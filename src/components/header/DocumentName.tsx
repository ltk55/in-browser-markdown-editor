import { useEffect, useState } from "react";

import IconDocument from "../../assets/icon-document.svg";
import useDocumentStore from "../../lib/documentStore";

export default function DocumentName(): JSX.Element {
  const [documents, setDocuments, currentDocumentId] = useDocumentStore(
    (state) => [state.documents, state.setDocuments, state.currentDocumentId],
  );

  const currentDocument = documents.find((doc) => doc.id === currentDocumentId);

  const [documentName, setDocumentName] = useState(
    currentDocument ? currentDocument.name : "",
  );

  useEffect(() => {
    const updatedDocument = documents.find(
      (doc) => doc.id === currentDocumentId,
    );
    if (updatedDocument) {
      setDocumentName(updatedDocument.name);
    }
  }, [documents, currentDocumentId]);

  const handleDocumentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDocumentName(e.target.value);

    // Update the current document's name
    const updatedDocuments = documents.map((doc) => {
      if (doc.id === currentDocumentId) {
        return { ...doc, name: e.target.value };
      }
      return doc;
    });
    setDocuments(updatedDocuments);
  };

  return (
    <div className="relative flex items-center overflow-x-auto">
      <img src={IconDocument} alt="document icon" />
      <div className="ml-4">
        <label
          className="hidden text-xs leading-none text-neutral-500 md:block"
          htmlFor="document-name"
        >
          Document Name
        </label>
        <input
          id="document-name"
          type="text"
          className="border-b border-b-transparent bg-transparent text-neutral-100 caret-orange outline-none focus:border-b-neutral-100"
          value={documentName}
          onChange={handleDocumentNameChange}
        />
      </div>
    </div>
  );
}
