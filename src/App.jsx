import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import { CategoriasProvider } from "./context/CategoriasProvider";
import { BebidadasProvider } from "./context/BebidasProvider";
import ListadoBebidas from "./components/listadoBebidas";
import ModalBebida from "./components/ModalBebida";



function App() {
  return (
    <CategoriasProvider>
      <BebidadasProvider>
        <header className="py-5">
          <h1> Buscador de Bebidas </h1>
        </header>

        <Container className="mt-5">
          <Formulario />
          <ListadoBebidas/>
          <ModalBebida/>
        </Container>
      </BebidadasProvider>
    </CategoriasProvider>
  );
}

export default App;
