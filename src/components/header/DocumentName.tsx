import IconDocument from "../../assets/icon-document.svg";
import useDocumentStore from "../../store/documentStore";

export default function DocumentTitle(): JSX.Element {
  const [documentName, setDocumentName] = useDocumentStore((state) => [
    state.documentName,
    state.setDocumentName,
  ]);

  return (
    <div className="relative flex items-center overflow-x-auto">
      <img src={IconDocument} alt="document icon" />
      <div className="ml-4">
        <label
          className="hidden text-xs leading-none text-neutral-500 md:block"
          htmlFor="document-name"
        >
          Document Name
        </label>
        <input
          id="document-name"
          type="text"
          className="border-b-transparent bg-transparent border-b text-neutral-100 caret-orange outline-none focus:border-b-neutral-100"
          value={documentName}
          onChange={(e) => setDocumentName(e.target.value)}
        />
      </div>
    </div>
  );
}
