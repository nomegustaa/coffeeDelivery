import { ButtonProps } from './interface'
import * as S from './styles'

const Button = ({ label, ...props }: ButtonProps) => {
  return <S.Button {...props}>{label}</S.Button>
}

export default Button
