import "./App.css";
import "./components/buttons/buttonStyle.css"
import TomeManager from "./components/pages/TomeManager/tomeManager.tsx";



function App() {
  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  // }
    // greet

  return (
      <main className="container">
          <div>
              <TomeManager />
          </div>
      </main>
  );
}

export default App;