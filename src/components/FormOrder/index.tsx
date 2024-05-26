import { MapPinLine } from 'phosphor-react'
import * as S from './styles'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const FormOrder = () => {
  const { register, formState } = useContext(AuthContext)

  return (
    <>
      <S.Title>Complete seu pedido</S.Title>
      <S.Container>
        <S.ContainerDescription>
          <MapPinLine size={20} weight="regular" color="#C47F17" />
          <div>
            <p>Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </S.ContainerDescription>

        <S.Form>
          <input
            type="text"
            placeholder="CEP"
            className="stateCode"
            {...register('cep')}
          />
          <input
            type="text"
            placeholder="Rua"
            className="street"
            {...register('street')}
            title={formState.errors.street?.message}
          />
          <input
            type="text"
            placeholder="Número"
            className="numberHouse"
            {...register('numberHouse', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Complemento Opcional"
            className="complement"
            {...register('complement')}
          />
          <input type="text" placeholder="Bairro" {...register('district')} />
          <input
            type="text"
            placeholder="Cidade"
            className="city"
            {...register('city')}
          />
          <input
            type="text"
            placeholder="UF"
            className="uf"
            {...register('uf')}
          />
        </S.Form>
      </S.Container>
    </>
  )
}

export default FormOrder
