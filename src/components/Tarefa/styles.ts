import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/TarefaEnums'

type TagProps = {
  parametro: 'Status' | 'Prioridade'
  prioridade?: enums.Prioridades
  status?: enums.Status
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'Prioridade') {
    if (props.prioridade === enums.Prioridades.URGENTE)
      return variaveis.vermelho
    if (props.prioridade === enums.Prioridades.IMPORTANTE)
      return variaveis.amareloEscuro
  } else {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDO) return variaveis.verde
  }

  return '#ccc'
}

export const Card = styled.div`
  border-radius: 16px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
`

export const Titulo = styled.h3`
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 18px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  line-height: 24px;
  color: #8b8b8b;
  display: block;
  width: 100%;
  margin: 16px 0;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraDeAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoRemoverOuCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
