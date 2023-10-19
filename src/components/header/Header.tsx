import Logo from "../../assets/logo.svg";
import DocumentName from "./DocumentName";
import SidebarToggle from "./SidebarToggle";

export default function Header(): JSX.Element {
  return (
    <header className="grid grid-cols-[56px_1fr] bg-neutral-800 md:grid-cols-[72px_1fr] ">
      <SidebarToggle />

      <div className="grid w-full grid-cols-[1fr_18px_41px] content-center items-center gap-6 pl-6 pr-2 md:grid-cols-[1fr_18px_152px] xl:grid-cols-[auto_1fr_18px_152px]">
        <img src={Logo} alt="logo" />
        <DocumentName />
      </div>
    </header>
  );
}
