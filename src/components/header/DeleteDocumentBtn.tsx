import { useState } from "react";
import { toast } from "react-toastify";

import useDocumentStore from "../../lib/documentStore";
import DeleteDocumentModal from "./DeleteDocumentModal";

export default function DeleteDocumentBtn(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const documents = useDocumentStore((state) => state.documents);

  function onClickHandler() {
    const isLastDocument = documents.length === 1;

    if (isLastDocument) {
      toast.warn("You can't delete the last document!");
    } else {
      setIsModalOpen(true);
    }
  }

  return (
    <>
      <button onClick={onClickHandler} className="mr-6">
        <svg
          width="18"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-neutral-500 hover:fill-orange"
        >
          <title>Delete Document</title>
          <path d="M7 16a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM17 4h-4V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H1a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7V3Zm7 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h10v11Zm-3-1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z" />
        </svg>
      </button>

      <DeleteDocumentModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
}
