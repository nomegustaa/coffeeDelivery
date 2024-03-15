import { ButtonProps } from './interface'
import * as S from './styles'

const Button = ({ label }: ButtonProps) => {
  return <S.Button>{label}</S.Button>
}

export default Button
