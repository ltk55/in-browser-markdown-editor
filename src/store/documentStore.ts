import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface DocumentStore {
  documentName: string;
  setDocumentName: (documentName: string) => void;
}

const useDocumentStore = create<DocumentStore>()(
  persist(
    (set) => ({
      documentName: "Untitled Document.md",
      setDocumentName: (documentName: string) => {
        set(() => ({ documentName }));
      },
    }),
    {
      name: "markdown-app-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useDocumentStore;
