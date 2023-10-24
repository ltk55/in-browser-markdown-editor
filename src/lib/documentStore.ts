import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import initialData from "../data/data.json";
import { TDocument } from "../type";
import { getDate } from "./utils";

interface DocumentStore {
  documents: TDocument[];
  setDocuments: (documents: TDocument[]) => void;
  addDocument: (id: string) => void;
  currentDocumentId: string;
  setCurrentDocumentId: (currentDocument: string) => void;
  displayPreviewOnly: boolean;
  setDisplayPreviewOnly: (displayPreviewOnly: boolean) => void;
}

const useDocumentStore = create<DocumentStore>()(
  persist(
    (set) => ({
      documents: initialData,
      setDocuments: (documents: TDocument[]) => {
        return set(() => ({ documents }));
      },
      addDocument: (id: string) => {
        set((state) => ({
          documents: [
            ...state.documents,
            {
              id,
              createdAt: getDate(),
              name: "untitled-document.md",
              content: "",
            },
          ],
        }));
      },
      currentDocumentId: "2",
      setCurrentDocumentId: (currentDocumentId: string) => {
        set(() => ({ currentDocumentId }));
      },
      displayPreviewOnly: false,
      setDisplayPreviewOnly: (displayPreviewOnly: boolean) => {
        set(() => ({ displayPreviewOnly }));
      },
    }),
    {
      name: "markdown-app-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useDocumentStore;
