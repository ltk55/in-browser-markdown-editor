import CopyIcon from "../../assets/icon-document.svg";
import useDocumentStore from "../../lib/documentStore";
import { formatDisplayDate } from "../../lib/utils";

interface DocumentProps {
  createdAt: string;
  name: string;
  id: string;
}

export default function Document({
  createdAt,
  name,
  id,
}: DocumentProps): JSX.Element {
  const [currentDocumentId, setCurrentDocumentId] = useDocumentStore(
    (state) => [state.currentDocumentId, state.setCurrentDocumentId],
  );

  return (
    <li className="overflow-x-hidden">
      <button
        onClick={() => setCurrentDocumentId(id)}
        title={name}
        className="relative mt-6 flex items-center overflow-x-auto "
      >
        <img src={CopyIcon} alt="" />
        <span className="ml-4 block">
          <span className="hidden w-fit text-xs leading-none text-neutral-500 md:block">
            {formatDisplayDate(createdAt)}
          </span>
          <span
            className={`${
              currentDocumentId === id ? "text-orange" : "text-neutral-100"
            }  block text-left hover:text-orange`}
          >
            {name}
          </span>
        </span>
      </button>
    </li>
  );
}
