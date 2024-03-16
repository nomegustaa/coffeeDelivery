import { useState } from 'react'
import * as S from './styles'

const InputNumber = () => {
  const [valueInput, setValueInput] = useState<number>(1)

  const handleSumValueInput = () => {
    return setValueInput(valueInput + 1)
  }

  const handleSubtractionValueInput = () => {
    return setValueInput(valueInput - 1)
  }

  return (
    <S.ContainerInput>
      <button disabled={valueInput === 1} onClick={handleSubtractionValueInput}>
        <S.SytleMinus size={14} weight="bold" />
      </button>
      <S.InputNumber disabled={true} value={valueInput} type="number" />
      <button disabled={valueInput === 10} onClick={handleSumValueInput}>
        <S.SytlePlus size={14} weight="bold" />
      </button>
    </S.ContainerInput>
  )
}

export default InputNumber
