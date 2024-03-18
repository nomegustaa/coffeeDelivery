import Button from '../../utils/Button'
import InputNumber from '../../utils/InputNumber'
import * as S from './styles'

const TotalCoffess = () => {
  return (
    <S.ContainerTotalCoffes>
      <S.ContainerCoffe>
        <img src="teste" alt="tetse" />
        <S.ContainerAmount>
          <p title="nome do café">Nome do café</p>
          <S.Amount>
            <InputNumber />
            <S.ButtonRemove>REMOVER</S.ButtonRemove>
          </S.Amount>
        </S.ContainerAmount>
        <S.PriceCoffe>R$ 9,90</S.PriceCoffe>
      </S.ContainerCoffe>

      <S.ContainerPrice>
        <p>Total de itens</p>
        <p className="price">R$ 29,70</p>
        <p>Entrega</p>
        <p className="price">R$ 3,50</p>
        <S.TotalPrice>Total</S.TotalPrice>
        <S.TotalPrice className="price">R$ 32,20</S.TotalPrice>
      </S.ContainerPrice>
      <Button label="CONFIRMAR PEDIDO" />
    </S.ContainerTotalCoffes>
  )
}

export default TotalCoffess
