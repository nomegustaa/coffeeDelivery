import { createContext, useState } from 'react'
import { IResponseCoffe } from '../pages/Home/interface'

export interface ISelectedResponseCoffe {
  id: number
  nome: string
  imagem: string
  categoria: string[]
  descricao: string
  valor: number
  count: number
}

interface ContextProps {
  children: React.ReactNode
}

interface AuthContentProps {
  getCoffeSelected: (
    idCoffe: number,
    countCoffe: number,
    data: IResponseCoffe[],
  ) => void
  removeCoffeSelected: (idSelected: number) => void
  selectedCoffe: [] | ISelectedResponseCoffe[]
}

export const AuthContext = createContext<AuthContentProps>(
  {} as AuthContentProps,
)

export const Context = ({ children }: ContextProps) => {
  const [selectedCoffe, setSelectedCoffe] = useState<
    ISelectedResponseCoffe[] | []
  >([])

  const getCoffeSelected = (
    idCoffe: number,
    countCoffe: number,
    data: IResponseCoffe[],
  ) => {
    const getCoffe = data?.find((item) => item.id === idCoffe)
    if (getCoffe) {
      const coffeExisting = selectedCoffe.some((item) => item.id === idCoffe)
      if (coffeExisting) {
        setSelectedCoffe((prev) =>
          prev.map((item) => {
            return { ...item, count: item.count + countCoffe }
          }),
        )
      } else {
        setSelectedCoffe([...selectedCoffe, { ...getCoffe, count: countCoffe }])
      }
    }
  }

  const removeCoffeSelected = (idSelected: number) => {
    const removeCoffe = selectedCoffe.filter((item) => item.id !== idSelected)
    setSelectedCoffe(removeCoffe)
  }

  return (
    <AuthContext.Provider
      value={{
        getCoffeSelected,
        selectedCoffe,
        removeCoffeSelected,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
