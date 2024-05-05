import { ShoppingCart } from 'phosphor-react'
import { IResponseCoffe } from '../../pages/Home/interface'
import InputNumber from '../../utils/InputNumber'
import * as S from './styles'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Coffees = ({
  id,
  nome,
  imagem,
  categoria,
  descricao,
  valor,
  getCoffeSelected,
  data,
}: IResponseCoffe) => {
  const { selectedCoffe } = useContext(AuthContext)
  const isSelected = selectedCoffe.some((item) => item.id === id)
  return (
    <S.Container key={id}>
      <img src={imagem} alt="example-coffe" />

      <S.ContainerCategory>
        {categoria.map((item, index) => (
          <S.Category key={index}>{item}</S.Category>
        ))}
      </S.ContainerCategory>
      <S.NameCoffe>{nome}</S.NameCoffe>
      <S.DescriptionCoffe>{descricao}</S.DescriptionCoffe>

      <S.ShoppingCart>
        <p>
          R$ <span>{valor.toFixed(2).toString().replace('.', ',')}</span>
        </p>
        {isSelected && (
          <InputNumber
            countCoffee={
              selectedCoffe.find((item) => item.id === id)?.count || 1
            }
            idCoffee={id}
            key={id}
          />
        )}

        <div
          className="shoppingCart"
          onClick={() => getCoffeSelected(id, data)}
        >
          <ShoppingCart key={id} size={24} weight="fill" color="#FFF" />
        </div>
      </S.ShoppingCart>
    </S.Container>
  )
}

export default Coffees
