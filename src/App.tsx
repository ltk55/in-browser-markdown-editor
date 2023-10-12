import Header from "./components/header/Header";
import MarkdownEditor from "./components/MarkdownEditor";
import Preview from "./components/Preview";
import useDocumentStore from "./store/documentStore";

function App() {
  const displayPreviewOnly = useDocumentStore(
    (state) => state.displayPreviewOnly,
  );

  return (
    <>
      <Header />
      <div
        className={`grid h-screen w-full ${
          displayPreviewOnly ? "grid-cols-1" : "grid-cols-2"
        }`}
      >
        <MarkdownEditor />
        <Preview />
      </div>
    </>
  );
}

export default App;
