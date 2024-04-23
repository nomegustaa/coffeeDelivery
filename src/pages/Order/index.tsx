import FormOrder from '../../components/FormOrder'
import Payment from '../../components/Payment'
import TotalCoffess from '../../components/TotalCoffees'
import * as S from './styles'

const Order = () => {
  return (
    <S.ContainerOrder>
      <FormOrder />
      <TotalCoffess />
      <Payment />
    </S.ContainerOrder>
  )
}

export default Order
