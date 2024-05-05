import { Bank, CreditCard, CurrencyCircleDollar, Money } from 'phosphor-react'
import * as S from './styles'
import ButtonPayment from '../../utils/ButtonPayment'
import { useState } from 'react'

const Payment = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null)

  const handleActiveButton = (label: string) => {
    if (activeButton === label) {
      setActiveButton(null)
    } else {
      setActiveButton(label)
    }
  }

  return (
    <S.Container>
      <S.ContainerDescription>
        <CurrencyCircleDollar size={20} weight="regular" color="#8047F8" />
        <div>
          <p>Pagemento</p>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </S.ContainerDescription>

      <S.ContainerButton>
        <ButtonPayment
          selected={activeButton === 'cartão de crédito'}
          label="Cartão de crédito"
          icon={<CreditCard size={20} color="#8047F8" />}
          onClick={() => handleActiveButton('cartão de crédito')}
        />
        <ButtonPayment
          selected={activeButton === 'cartão de débito'}
          label="Cartão de Débito"
          icon={<Bank size={20} color="#8047F8" />}
          onClick={() => handleActiveButton('cartão de débito')}
        />
        <ButtonPayment
          selected={activeButton === 'dinheiro'}
          label="Dinheiro"
          icon={<Money size={20} color="#8047F8" />}
          onClick={() => handleActiveButton('dinheiro')}
        />
      </S.ContainerButton>
    </S.Container>
  )
}

export default Payment
