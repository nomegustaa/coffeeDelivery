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
      <FormOrder />
      <TotalCoffess selectedCoffe={selectedCoffe} />
      <Payment />
    </S.ContainerOrder>
  )
}

export default Order
