import IllustrationImage from '../../assets/images/Illustration.svg'
import { CurrencyCircleDollar, MapPin, Timer } from 'phosphor-react'
import * as S from './styles'

const OrderConfirmed = () => {
  return (
    <>
      <div style={{ margin: '70px 0 42px 0' }}>
        <S.Title>Uhu! Pedido confirmado</S.Title>
        <S.SubTitle>
          Agora é só aguardar que logo o café chegará até você
        </S.SubTitle>
      </div>
      <S.Container>
        <S.ContainerIcons>
          <S.ContainerSubTitle color="purple">
            <div>
              <MapPin size={24} color="#FFF" weight="fill" />
            </div>
            <p>
              Entrega em <strong>Rua joão Daniel Martinelli, 102</strong>
              Farrapos - Porto Alegre, Rs
            </p>
          </S.ContainerSubTitle>

          <S.ContainerSubTitle color="yellow">
            <div>
              <Timer size={24} color="#FFF" weight="fill" />
            </div>
            <p>
              Previsão de entrega <strong>20 min - 30 min</strong>
            </p>
          </S.ContainerSubTitle>

          <S.ContainerSubTitle color="yellow-dark">
            <div>
              <CurrencyCircleDollar size={24} color="#FFF" weight="regular" />
            </div>
            <p>
              Pagamento na entrega <strong>Cartão de Crédito</strong>
            </p>
          </S.ContainerSubTitle>
        </S.ContainerIcons>

        <img src={IllustrationImage} alt="image-illustration" />
      </S.Container>
    </>
  )
}

export default OrderConfirmed
