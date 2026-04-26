export default function Entrada({valueTarefa, onChangeTarefa, valueCategoria, onChangeCategoria, onAdicionar}) {
  return (
    <>
      <input className="input" type="text" value={valueTarefa} onChange={onChangeTarefa} placeholder="Adicione uma tarefa"/>

      <input className="input" type="text" value={valueCategoria} onChange={onChangeCategoria} placeholder="Insira sua categoria"/>

      <button onClick={onAdicionar}>Adicionar</button>
    </>
  )
}