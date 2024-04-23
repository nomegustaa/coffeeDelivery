import { useContext, useState } from 'react'
import Button from '../../utils/Button'
import InputNumber from '../../utils/InputNumber'
import { TotalCoffeProps } from './interface'
import * as S from './styles'
import { AuthContext } from '../../context/AuthContext'

const TotalCoffess = ({ selectedCoffe }: TotalCoffeProps) => {
  const { removeCoffeSelected } = useContext(AuthContext)
  return (
    <S.ContainerTotalCoffes>
      {selectedCoffe.length === 0 && (
        <S.CoffeeNotFound>Não há Café selecionado....</S.CoffeeNotFound>
      )}
      {selectedCoffe.map((item) => {
        return (
          <S.ContainerCoffe key={item.id}>
            <img src={item.imagem} alt={item.nome} />
            <S.ContainerAmount>
              <p title={item.nome}>{item.nome}</p>
              <S.Amount>
                <InputNumber />
                <S.ButtonRemove onClick={() => removeCoffeSelected(item.id)}>
                  REMOVER
                </S.ButtonRemove>
              </S.Amount>
            </S.ContainerAmount>
            <S.PriceCoffe>
              R${' '}
              {item.valor.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
            </S.PriceCoffe>
          </S.ContainerCoffe>
        )
      })}

      <S.ContainerPrice>
        <p>Total de itens</p>
        <p className="price">R$ 29,70</p>
        <p>Entrega</p>
        <p className="price">R$ 3,50</p>
        <S.TotalPrice>Total</S.TotalPrice>
        <S.TotalPrice className="price">R$ 32,20</S.TotalPrice>
      </S.ContainerPrice>
      <Button label="CONFIRMAR PEDIDO" disabled={selectedCoffe.length === 0} />
    </S.ContainerTotalCoffes>
  )
}

export default TotalCoffess
