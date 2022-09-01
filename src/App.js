import "bootstrap/dist/css/bootstrap.css";
import Navbar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Hola Mundo ItemListContainer" />
    </>
  );
}

export default App;