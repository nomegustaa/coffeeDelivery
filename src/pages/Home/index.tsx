import imageCoffee from '../../assets/images/coffee.svg'
import { Timer, ShoppingCart, Coffee, Package } from 'phosphor-react'
import * as S from './styles'
import Coffees from '../../components/Coffes'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { IResponseCoffe, ISelectedResponseCoffe } from './interface'

const Home = () => {
  const [data, setData] = useState<IResponseCoffe[] | []>([])
  const [selectedCoffe, setSelectedCoffe] = useState<
    ISelectedResponseCoffe[] | []
  >([])
  const getCoffes = async () => {
    try {
      const response = await axios.get('../../../api.json')

      setData(response.data.produtos)
    } catch (e) {
      console.log(e)
    }
  }

  const getCoffeSelected = (idCoffe: number, countCoffe: number) => {
    const getCoffe = data?.find((item) => item.id === idCoffe)
    if (getCoffe) {
      const coffeExisting = selectedCoffe.some((item) => item.id === idCoffe)
      if (coffeExisting) {
        setSelectedCoffe((prev) =>
          prev.map((item) => {
            return { ...item, count: item.count + countCoffe }
          }),
        )
      } else {
        setSelectedCoffe([...selectedCoffe, { ...getCoffe, count: countCoffe }])
      }
    }
  }

  useEffect(() => {
    getCoffes()
  }, [])

  return (
    <>
      <S.ContainerMain>
        <div>
          <S.Title>Encontre o café perfeito para qualquer hora do dia</S.Title>

          <S.Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </S.Subtitle>

          <S.ContainerIcons>
            <S.IconsContainer color="yellow-dark">
              <div>
                <ShoppingCart size={24} color="#FFF" />
              </div>
              <p>Compra simples e segura</p>
            </S.IconsContainer>

            <S.IconsContainer color="base-text">
              <div>
                <Package size={24} color="#FFF" />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </S.IconsContainer>

            <S.IconsContainer color="yellow">
              <div>
                <Timer size={24} color="#FFF" />
              </div>
              <p>Entrega rápida e rastreada</p>
            </S.IconsContainer>

            <S.IconsContainer color="purple">
              <div>
                <Coffee size={24} color="#FFF" />
              </div>
              <p>O café chega fresquinho até você</p>
            </S.IconsContainer>
          </S.ContainerIcons>
        </div>
        <img src={imageCoffee} alt="coffee" />
      </S.ContainerMain>

      <S.TitleCoffee>Nossos cafés</S.TitleCoffee>

      <S.ContainerCoffes>
        {data?.map((item) => {
          return (
            <Coffees
              id={item.id}
              key={item.id}
              nome={item.nome}
              categoria={item.categoria}
              descricao={item.descricao}
              imagem={item.imagem}
              valor={item.valor}
              getCoffeSelected={getCoffeSelected}
            />
          )
        })}
      </S.ContainerCoffes>
    </>
  )
}

export default Home
