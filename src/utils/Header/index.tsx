import * as S from './styles'
import Logo from '../../assets/images/Logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { HeaderProps } from './interface'

const Header = ({ city }: HeaderProps) => {
  return (
    <S.Container>
      <img src={Logo} alt="logo" />
      <S.ContainerIcons>
        <S.ContainerMap>
          <MapPin size={32} color="#8047F8" weight="fill" />
          <S.City>{city}</S.City>
        </S.ContainerMap>

        <S.ContainerShopping>
          <ShoppingCart size={32} color="#C47F17" weight="fill" />
        </S.ContainerShopping>
      </S.ContainerIcons>
    </S.Container>
  )
}

export default Header
