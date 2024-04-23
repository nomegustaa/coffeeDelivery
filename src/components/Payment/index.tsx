import { Bank, CreditCard, CurrencyCircleDollar, Money } from 'phosphor-react'
import * as S from './styles'
import ButtonPayment from '../../utils/ButtonPayment'
import { useState } from 'react'

const Payment = () => {
  const [valueButton, setValueButton] = useState<string>('')

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setValueButton(e.currentTarget.textContent || '')
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
          selected={valueButton.includes('CARTÃO DE CRÉDITO')}
          label="Cartão de crédito"
          icon={<CreditCard size={20} color="#8047F8" />}
          onClickButton={handleClick}
        />
        <ButtonPayment
          selected={valueButton.includes('CARTÃO DE DÉBITO')}
          label="Cartão de Débito"
          icon={<Bank size={20} color="#8047F8" />}
          onClickButton={handleClick}
        />
        <ButtonPayment
          selected={valueButton.includes('DINHEIRO')}
          label="Dinheiro"
          icon={<Money size={20} color="#8047F8" />}
          onClickButton={handleClick}
        />
      </S.ContainerButton>
    </S.Container>
  )
}

export default Payment
