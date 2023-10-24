import { v4 as uuid } from "uuid";

import useDocumentStore from "../../lib/documentStore";

export default function AddNewDocumentBtn(): JSX.Element {
  const [addDocument, setCurrentDocumentId] = useDocumentStore((state) => [
    state.addDocument,
    state.setCurrentDocumentId,
  ]);

  function onClickHandler() {
    const newDocumentId = uuid();
    setCurrentDocumentId(newDocumentId);
    addDocument(newDocumentId);
  }

  return (
    <button
      onClick={onClickHandler}
      className="flex w-full items-center justify-center rounded-md bg-orange p-3 font-sans text-neutral-100 transition-colors hover:bg-orangeHover"
    >
      + New Document
    </button>
  );
}
