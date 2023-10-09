import Logo from "../../assets/logo.svg";

export default function Header(): JSX.Element {
  return (
    <header className="flex h-[72px] gap-6 bg-neutral-800 py-4">
      <div className="hidden h-full items-center border-r border-r-neutral-500 px-6 xl:flex">
        <img src={Logo} alt="logo" />
      </div>
    </header>
  );
}
