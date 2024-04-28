import { useContext } from 'react'
import * as S from './styles'
import { AuthContext } from '../../context/AuthContext'

interface InputNumberProps {
  countCoffee: number
  idCoffee: number
}

const InputNumber = ({ countCoffee, idCoffee }: InputNumberProps) => {
  const { addCountCoffee, removeCountCoffee } = useContext(AuthContext)
  return (
    <S.ContainerInput>
      <button
        disabled={countCoffee === 1}
        onClick={() => removeCountCoffee(idCoffee)}
      >
        <S.SytleMinus size={14} weight="bold" />
      </button>
      <S.InputNumber disabled={true} value={countCoffee} type="number" />
      <button
        disabled={countCoffee === 10}
        onClick={() => addCountCoffee(idCoffee)}
      >
        <S.SytlePlus size={14} weight="bold" />
      </button>
    </S.ContainerInput>
  )
}

export default InputNumber
