import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import Header from "./components/header/Header";
import MarkdownEditor from "./components/MarkdownEditor";
import Preview from "./components/Preview";
import Sidebar from "./components/sidebar/Sidebar";
import useDocumentStore from "./lib/documentStore";

function App() {
  const displayPreviewOnly = useDocumentStore(
    (state) => state.displayPreviewOnly,
  );

  return (
    <div className="wrapper grid transition-all">
      <Sidebar />
      <div>
        <Header />
        <main
          className={`grid h-screen w-full ${
            displayPreviewOnly ? "grid-cols-1" : "md:grid-cols-2"
          }`}
        >
          <MarkdownEditor />
          <Preview />
        </main>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
