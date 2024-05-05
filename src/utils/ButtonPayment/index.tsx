import React from 'react'
import * as S from './styles'

interface ButtonPaymentProps {
  icon: React.ReactNode
  label: string
  selected: boolean
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined
}

const ButtonPayment = ({
  icon,
  label,
  selected,
  onClick,
}: ButtonPaymentProps) => {
  return (
    <S.ContainerButtonPayment
      onClick={onClick}
      className={selected ? 'active' : ''}
    >
      {icon}
      <S.Button value={label}>{label.toUpperCase()}</S.Button>
    </S.ContainerButtonPayment>
  )
}

export default ButtonPayment
