import * as S from './styles'
import Logo from '../../assets/images/Logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { HeaderProps } from './interface'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = ({ city }: HeaderProps) => {
  const { selectedCoffe } = useContext(AuthContext)

  const navigate = useNavigate()

  return (
    <S.Container>
      <S.imgLogo src={Logo} alt="logo" onClick={() => navigate('/')} />
      <S.ContainerIcons>
        <S.ContainerMap>
          <MapPin size={32} color="#8047F8" weight="fill" />
          <S.City>{city}</S.City>
        </S.ContainerMap>

        <S.ContainerShopping onClick={() => navigate('/pedido')}>
          <S.AmountCoffe>{selectedCoffe.length}</S.AmountCoffe>
          <ShoppingCart size={32} color="#C47F17" weight="fill" />
        </S.ContainerShopping>
      </S.ContainerIcons>
    </S.Container>
  )
}

export default Header
