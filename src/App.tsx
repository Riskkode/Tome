
import "./App.css";
import "./components/common/form/CreateNoteBookForm.css";
import "./components/common/form/CreateNoteBookForm.tsx";
import "./components/buttons/buttonStyle.css"
import CreateNotebookForm from "./components/common/form/CreateNoteBookForm.tsx";
import TomeLogo from "./components/common/logo/TomeLogo.tsx";

function App() {
  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  // }
    // greet

  return (
      <main className="container">
          <TomeLogo/>
          <CreateNotebookForm/>
      </main>
  );
}

export default App;