import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemLIstContainer/itemListContainer";

function App() {
  return (
    <main>
      <NavBar />
      <ItemListContainer greeting={"Welcome"} />
    </main>
  );
}

export default App;
