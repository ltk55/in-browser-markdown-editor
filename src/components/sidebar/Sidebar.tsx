import Logo from "../../assets/logo.svg";

export default function Sidebar(): JSX.Element {
  return (
    <aside className="sidebar relative h-screen bg-neutral-900 px-6 py-7">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="my-7">
        <span className="text-sm font-medium uppercase tracking-widest text-neutral-600">
          my documents
        </span>
      </div>
    </aside>
  );
}
