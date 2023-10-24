import Logo from "../../assets/logo.svg";
import useDocumentStore from "../../lib/documentStore";
import Document from "./Document";

export default function Sidebar(): JSX.Element {
  const documents = useDocumentStore((state) => state.documents);

  return (
    <aside className="sidebar relative h-screen bg-neutral-900 px-6 py-7">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div className="my-7">
        <span className="text-sm font-medium uppercase tracking-widest text-neutral-600">
          my documents
        </span>

        <ul>
          {documents.map((doc) => {
            return (
              <Document createdAt={doc.createdAt} name={doc.name} id={doc.id} />
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
