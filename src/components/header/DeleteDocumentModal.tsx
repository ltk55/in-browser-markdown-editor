import React, { SetStateAction } from "react";
import { toast } from "react-toastify";

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
    toast.success("Document deleted!");
    setIsModalOpen(false);
  }

  return (
    <div
      className={`${
        isModalOpen ? "block" : "hidden"
      }  dark:bg-lightOverlayTransparent absolute left-0 top-0 z-50 h-screen w-screen bg-overlayTransparent`}
      onClick={() => setIsModalOpen(false)}
    >
      <div className="absolute left-1/2 top-1/2 w-[343px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-neutral-100 p-6 dark:bg-neutral-1000">
        <h4 className="font-serif text-xl font-bold text-neutral-700 dark:text-neutral-100">
          Delete this document?
        </h4>
        <p className="my-4 font-serif text-sm font-normal text-neutral-500 dark:text-neutral-400">
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
