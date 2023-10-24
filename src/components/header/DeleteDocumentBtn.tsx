import { useState } from "react";

import DeleteIcon from "../../assets/icon-delete.svg";
import DeleteDocumentModal from "./DeleteDocumentModal";

export default function DeleteDocumentBtn(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function onClickHandler() {
    setIsModalOpen(true);
  }

  return (
    <>
      <button onClick={onClickHandler} className="mr-6">
        <img src={DeleteIcon} alt="delete document" />
      </button>

      <DeleteDocumentModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
}
