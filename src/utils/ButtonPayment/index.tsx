import React, { ComponentProps } from 'react'
import * as S from './styles'

interface ButtonPaymentProps extends ComponentProps<'button'> {
  icon: React.ReactNode
  label: string
  onClickButton: React.MouseEventHandler<HTMLDivElement>
  selected?: boolean
}

const ButtonPayment = ({
  icon,
  label,
  onClickButton,
  selected,
}: ButtonPaymentProps) => {
  return (
    <S.ContainerButtonPayment
      onClick={onClickButton}
      className={selected ? 'active' : 'disabled'}
    >
      {icon}
      <S.Button value={label}>{label.toUpperCase()}</S.Button>
    </S.ContainerButtonPayment>
  )
}

export default ButtonPayment
