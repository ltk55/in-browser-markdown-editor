import Logo from "../../assets/logo.svg";
import DeleteDocumentBtn from "./DeleteDocumentBtn";
import DocumentName from "./DocumentName";
import SaveDocumentBtn from "./SaveDocumentBtn";
import SidebarToggle from "./SidebarToggle";

export default function Header(): JSX.Element {
  return (
    <header className="flex h-14 items-center bg-neutral-800 md:h-[72px]">
      <SidebarToggle />

      <div className="ml-6 flex content-center items-center gap-6 pr-2">
        <img src={Logo} alt="logo" className="hidden md:block" />
        <DocumentName />
      </div>

      <div className="ml-auto mr-4 flex">
        <DeleteDocumentBtn />
        <SaveDocumentBtn />
      </div>
    </header>
  );
}
