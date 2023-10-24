import { useState } from "react";

import CloseIcon from "../../assets/icon-close.svg";
import MenuIcon from "../../assets/icon-menu.svg";

export default function SidebarToggle(): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen((prev) => !prev);
    document.getElementsByTagName("body")[0].classList.toggle("sidebar-closed");
  }

  return (
    <button
      className="flex h-full w-14 items-center justify-center bg-neutral-700 hover:bg-orange md:w-[72px]"
      onClick={toggleSidebar}
    >
      <img
        src={isSidebarOpen ? CloseIcon : MenuIcon}
        alt={isSidebarOpen ? "close sidebar" : "open sidebar"}
      />
    </button>
  );
}
