import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { Container, Resultado } from './styles'

import { RootReducer } from '../../store'

const ListaDetarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens

    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'Prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'Status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complemento =
      termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ''
    if (criterio === 'Todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) com "Todas" ${complemento}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) com ${`${criterio} ${valor}`}${complemento}`
    }
    return mensagem
  }

  const tarefasFiltradas = filtraTarefas()
  const mensagem = exibeResultadoFiltragem(tarefasFiltradas.length)

  return (
    <Container>
      <Resultado>{mensagem}</Resultado>
      <ul>
        {tarefasFiltradas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              status={t.status}
              titulo={t.titulo}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDetarefas
