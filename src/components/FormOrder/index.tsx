import { MapPinLine } from 'phosphor-react'
import * as S from './styles'

const FormOrder = () => {
  return (
    <>
      <S.Title>Complete seu pedido</S.Title>
      <S.Container>
        <S.ContainerDescription>
          <MapPinLine size={20} weight="regular" color="#C47F17" />
          <div>
            <p>Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </S.ContainerDescription>

        <S.Form>
          <input type="text" placeholder="CEP" className="stateCode" />
          <input type="text" placeholder="Rua" className="street" />
          <input type="text" placeholder="Número" className="number" />
          <input
            type="text"
            placeholder="Complemento Opcional"
            className="complement"
          />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" className="city" />
          <input type="text" placeholder="UF" className="uf" />
        </S.Form>
      </S.Container>
    </>
  )
}

export default FormOrder
