import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import { remover } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({ descricao, prioridade, status, titulo, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="Prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="Status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraDeAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoRemoverOuCancelar onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoRemoverOuCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoRemoverOuCancelar onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemoverOuCancelar>
          </>
        )}
      </S.BarraDeAcoes>
    </S.Card>
  )
}

export default Tarefa
