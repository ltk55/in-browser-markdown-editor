import { toast } from "react-toastify";

import SaveIcon from "../../assets/icon-save.svg";
import useDocumentStore from "../../lib/documentStore";

export default function SaveDocumentBtn(): JSX.Element {
  const saveDocument = useDocumentStore((state) => state.saveDocument);

  function onClickHandler() {
    saveDocument();
    toast.success("Document saved!");
  }

  return (
    <button aria-label="save" className="primary-btn" onClick={onClickHandler}>
      <img src={SaveIcon} alt="save" />
      <span className="ml-2 hidden md:inline-block">Save Changes</span>
    </button>
  );
}
