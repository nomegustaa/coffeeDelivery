import { useContext } from 'react'
import Button from '../../utils/Button'
import InputNumber from '../../utils/InputNumber'
import { TotalCoffeProps } from './interface'
import * as S from './styles'
import { AuthContext } from '../../context/AuthContext'
import { IHandleCreatOrder } from '../FormOrder/interface'
import { useNavigate } from 'react-router-dom'

const TotalCoffess = ({ selectedCoffe }: TotalCoffeProps) => {
  const { handleSubmit, formState, removeCoffeSelected, activeButton, reset } =
    useContext(AuthContext)

  const navigate = useNavigate()

  const handleCreateOrder = (data: IHandleCreatOrder) => {
    localStorage.setItem('district', data.district)
    localStorage.setItem('street', data.street)
    localStorage.setItem('cep', data.cep)
    localStorage.setItem('complement', data.complement || '')
    localStorage.setItem('numberHouse', String(data.numberHouse))
    localStorage.setItem('city', data.city)
    localStorage.setItem('uf', data.uf)
    localStorage.setItem('payment', activeButton || '')
    reset()
    navigate('/pedidoconfirmado')
  }

  const totalCoffee = selectedCoffe.reduce(
    (acc, value) => acc + value.valor * value.count,
    0,
  )
  const freight = 3.5
  const totalWithFreight = totalCoffee + freight

  console.log(formState)
  return (
    <>
      <S.Title>Cafés selecionados</S.Title>
      <S.ContainerTotalCoffes>
        <S.ContainerTotalCoffesWrapper>
          {selectedCoffe.length === 0 && (
            <S.CoffeeNotFound>Não há Café selecionado....</S.CoffeeNotFound>
          )}
          {selectedCoffe.map((item) => {
            const totalCoffe = item.valor * item.count
            return (
              <S.ContainerCoffe key={item.id}>
                <img src={item.imagem} alt={item.nome} />
                <S.ContainerAmount>
                  <p title={item.nome}>{item.nome}</p>
                  <S.Amount>
                    <InputNumber
                      key={item.id}
                      idCoffee={item.id}
                      countCoffee={item.count}
                    />
                    <S.ButtonRemove
                      onClick={() => removeCoffeSelected(item.id)}
                    >
                      REMOVER
                    </S.ButtonRemove>
                  </S.Amount>
                </S.ContainerAmount>
                <S.PriceCoffe>
                  R${' '}
                  {totalCoffe.toLocaleString('pt-br', {
                    minimumFractionDigits: 2,
                  })}
                </S.PriceCoffe>
              </S.ContainerCoffe>
            )
          })}
        </S.ContainerTotalCoffesWrapper>

        <S.ContainerPrice>
          <p>Total de itens</p>
          <p className="price">R$ {totalCoffee.toFixed(2).replace('.', ',')}</p>
          <p>Entrega</p>
          <p className="price">
            R$ {freight.toFixed(2).toString().replace('.', ',')}
          </p>
          <S.TotalPrice>Total</S.TotalPrice>
          <S.TotalPrice className="price">
            R$ {totalWithFreight.toFixed(2).toString().replace('.', ',')}
          </S.TotalPrice>
        </S.ContainerPrice>
        <Button
          label="CONFIRMAR PEDIDO"
          disabled={
            selectedCoffe.length === 0 ||
            activeButton === null ||
            !formState.isValid
          }
          onClick={handleSubmit(handleCreateOrder)}
        />
      </S.ContainerTotalCoffes>
    </>
  )
}

export default TotalCoffess
