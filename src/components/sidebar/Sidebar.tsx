import Logo from "../../assets/logo.svg";
import useDocumentStore from "../../lib/documentStore";
import AddNewDocumentBtn from "./AddNewDocumentBtn";
import DarkModeToggle from "./DarkModeToggle";
import Document from "./Document";

export default function Sidebar(): JSX.Element {
  const documents = useDocumentStore((state) => state.documents);

  return (
    <aside className="sidebar relative h-screen overflow-hidden bg-neutral-900 pl-6">
      <img src={Logo} alt="logo" className="pt-7 md:hidden" />

      <div className="my-7">
        <div className="mb-7 text-sm font-medium uppercase tracking-widest text-neutral-500">
          my documents
        </div>

        <div className="mr-6">
          <AddNewDocumentBtn />
        </div>

        <ul className="mr-6 h-[calc(100vh-200px)] overflow-y-auto">
          {documents.map((doc) => {
            return (
              <Document
                createdAt={doc.createdAt}
                name={doc.name}
                id={doc.id}
                key={doc.id}
              />
            );
          })}
        </ul>
      </div>

      <DarkModeToggle />
    </aside>
  );
}
