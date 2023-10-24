import React, { SetStateAction } from "react";

import useDocumentStore from "../../lib/documentStore";

interface DeleteDocumentModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function DeleteDocumentModal({
  isModalOpen,
  setIsModalOpen,
}: DeleteDocumentModalProps): JSX.Element {
  const deleteDocument = useDocumentStore((state) => state.deleteDocument);

  function onClickHandler() {
    deleteDocument();
    setIsModalOpen(false);
  }

  return (
    <div
      className={`${
        isModalOpen ? "block" : "hidden"
      }  bg-overlayTransparent absolute left-0 top-0 z-50 h-screen w-screen`}
      onClick={() => setIsModalOpen(false)}
    >
      <div className="absolute left-1/2 top-1/2 w-[343px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-neutral-100 p-6">
        <span className="font-serif text-xl font-bold text-neutral-700">
          Delete this document?
        </span>
        <p className="my-4 font-serif text-sm font-normal text-neutral-500 ">
          Are you sure you want to delete the ‘welcome.md’ document and its
          contents? This action cannot be reversed.
        </p>
        <button className="primary-btn w-full" onClick={onClickHandler}>
          <span>Confirm & Delete</span>
        </button>
      </div>
    </div>
  );
}
