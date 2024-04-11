import * as S from './styles'

const InputNumber = ({
  countCoffe,
  setCountCoffe,
}: {
  setCountCoffe: React.Dispatch<React.SetStateAction<number>>
  countCoffe: number
}) => {
  const handleSumValueInput = () => {
    return setCountCoffe(countCoffe + 1)
  }

  const handleSubtractionValueInput = () => {
    return setCountCoffe(countCoffe - 1)
  }

  return (
    <S.ContainerInput>
      <button disabled={countCoffe === 1} onClick={handleSubtractionValueInput}>
        <S.SytleMinus size={14} weight="bold" />
      </button>
      <S.InputNumber disabled={true} value={countCoffe} type="number" />
      <button disabled={countCoffe === 10} onClick={handleSumValueInput}>
        <S.SytlePlus size={14} weight="bold" />
      </button>
    </S.ContainerInput>
  )
}

export default InputNumber
