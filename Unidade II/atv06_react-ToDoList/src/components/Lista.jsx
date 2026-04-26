export default function Lista ({ tarefas, onDelete }) {
  return (
    <ul>
      {tarefas.map((item, id) => (
        <li type="none" className="itemLista" key={id}>
          <span>
            {item.tarefa} - {item.categoria}
          </span>
          <button className="deletarBotao" onClick={() => onDelete(id)}>
            Deletar
          </button>
        </li>
      ))}
    </ul>
  );
};
