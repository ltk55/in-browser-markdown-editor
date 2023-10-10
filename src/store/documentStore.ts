import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface DocumentStore {
  documentName: string;
  setDocumentName: (documentName: string) => void;
  displayPreviewOnly: boolean;
  setDisplayPreviewOnly: (displayPreviewOnly: boolean) => void;
}

const useDocumentStore = create<DocumentStore>()(
  persist(
    (set) => ({
      documentName: "Untitled Document.md",
      setDocumentName: (documentName: string) => {
        set(() => ({ documentName }));
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
