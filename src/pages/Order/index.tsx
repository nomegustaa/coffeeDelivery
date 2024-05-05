import { useContext } from 'react'
import FormOrder from '../../components/FormOrder'
import Payment from '../../components/Payment'
import TotalCoffess from '../../components/TotalCoffees'
import * as S from './styles'
import { AuthContext } from '../../context/AuthContext'

const Order = () => {
  const { selectedCoffe } = useContext(AuthContext)

  return (
    <S.ContainerOrder>
      <S.ContainerWrapper>
        <FormOrder />
        <Payment />
      </S.ContainerWrapper>
      <S.ContainerWrapper>
        <TotalCoffess selectedCoffe={selectedCoffe} />
      </S.ContainerWrapper>
    </S.ContainerOrder>
  )
}

export default Order
