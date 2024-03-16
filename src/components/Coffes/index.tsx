import { ShoppingCart } from 'phosphor-react'
import { IResponseCoffe } from '../../pages/Home/interface'
import InputNumber from '../../utils/InputNumber'
import * as S from './styles'

const Coffees = ({
  id,
  nome,
  imagem,
  categoria,
  descricao,
  valor,
}: IResponseCoffe) => {
  console.log(categoria)
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
          R$ <span>{String(valor).replace('.', ',')}</span>
        </p>

        <InputNumber />
        <div className="shoppingCart">
          <ShoppingCart size={24} weight="fill" color="#FFF" />
        </div>
      </S.ShoppingCart>
    </S.Container>
  )
}

export default Coffees
