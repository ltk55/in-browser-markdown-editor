import { toast } from "react-toastify";
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
    toast.success("New document created!");
  }

  return (
    <button onClick={onClickHandler} className="primary-btn w-full">
      + New Document
    </button>
  );
}
