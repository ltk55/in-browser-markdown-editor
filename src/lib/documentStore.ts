import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import initialData from "../data/data.json";
import { TDocument } from "../type";
import { getDate } from "./utils";

interface DocumentStore {
  currentDocumentId: string;
  setCurrentDocumentId: (currentDocument: string) => void;
  documents: TDocument[];
  setDocuments: (documents: TDocument[]) => void;
  addDocument: (id: string) => void;
  deleteDocument: () => void;

  displayPreviewOnly: boolean;
  setDisplayPreviewOnly: (displayPreviewOnly: boolean) => void;
}

const useDocumentStore = create<DocumentStore>()(
  persist(
    (set) => ({
      currentDocumentId: "2",
      setCurrentDocumentId: (currentDocumentId: string) => {
        set(() => ({ currentDocumentId }));
      },
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
      deleteDocument: () => {
        set((state) => {
          const currentDocumentId = state.currentDocumentId;
          const filteredDocuments = state.documents.filter(
            (doc) => doc.id !== currentDocumentId,
          );
          return {
            documents: filteredDocuments,
            currentDocumentId:
              filteredDocuments.length > 0 ? filteredDocuments[0].id : "",
          };
        });
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
