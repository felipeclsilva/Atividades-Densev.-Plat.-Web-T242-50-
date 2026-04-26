import { useState } from "react";
import Container from "./components/Container";
import Entrada from "./components/Entrada";
import Lista from "./components/Lista";

export default function App() {
  const [tarefa, setTarefa] = useState("");
  const [categoria, setCategoria] = useState("");
  const [listaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim() && categoria.trim()) {
      setListaTarefas([...listaTarefas, { tarefa, categoria }]);
      setTarefa("");
      setCategoria("");
    }
  };

  const deletarTarefa = (id) => {
    setListaTarefas(listaTarefas.filter((_, idDeletado) => idDeletado !== id));
  };

  return (
    <>
      <h1>To-do List</h1>
      <h2>Organize suas tarefas</h2>

      <Container>
        <Entrada
          valueTarefa={tarefa}
          onChangeTarefa={(e) => setTarefa(e.target.value)}
          valueCategoria={categoria}
          onChangeCategoria={(e) => setCategoria(e.target.value)}
          onAdicionar={adicionarTarefa}
        />
        <Lista tarefas={listaTarefas} onDelete={deletarTarefa} />
      </Container>
    </>
  );
}
