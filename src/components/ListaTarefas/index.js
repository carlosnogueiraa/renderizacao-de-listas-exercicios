import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  LinhaHorizontal,
  TarefaConcluida
} from "./styled";
import ListaConcluida from "../ListaConcluida";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefasExcluidas, setTarefasExcluidas] = useState([])

  const onChangeTarefa = (e) => {
    setNovaTarefa(e.target.value);
  };
  
  const adicionaTarefa = (e) => {
    e.preventDefault()
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };
  
  return (
    <ListaTarefasContainer>
      <InputContainer onSubmit={(e) => adicionaTarefa(e)}>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton type="submit">Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <ListaConcluida 
                lista={lista} 
                setLista={setLista} 
                tarefa={tarefa}
                tarefasExcluidas={tarefasExcluidas}
                setTarefasExcluidas={setTarefasExcluidas}
                />
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal/>
      {tarefasExcluidas.map((item, index) => {
        return (
          <TarefaConcluida key={index}>
            <p>{item}</p>
          </TarefaConcluida>
        )
      })}
    </ListaTarefasContainer>
  );
}
