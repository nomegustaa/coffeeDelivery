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

export interface ICountCoffee {
  idCoffee: number
  count: number
}

interface ContextProps {
  children: React.ReactNode
}

interface AuthContentProps {
  getCoffeSelected: (idCoffe: number, data: IResponseCoffe[]) => void
  removeCoffeSelected: (idSelected: number) => void
  addCountCoffee: (idCoffee: number) => void
  removeCountCoffee: (idCoffee: number) => void
  selectedCoffe: [] | ISelectedResponseCoffe[]
}

export const AuthContext = createContext<AuthContentProps>(
  {} as AuthContentProps,
)

export const Context = ({ children }: ContextProps) => {
  const [selectedCoffe, setSelectedCoffe] = useState<
    ISelectedResponseCoffe[] | []
  >([])

  const addCountCoffee = (idCoffee: number) => {
    setSelectedCoffe((prev) =>
      prev.map((item) =>
        item.id === idCoffee ? { ...item, count: item.count + 1 } : item,
      ),
    )
  }

  const removeCountCoffee = (idCoffee: number) => {
    setSelectedCoffe((prev) =>
      prev.map((item) =>
        item.id === idCoffee && item.count > 0
          ? {
              ...item,
              count: item.count - 1,
            }
          : item,
      ),
    )
  }

  const getCoffeSelected = (idCoffe: number, data: IResponseCoffe[]) => {
    const getCoffe = data?.find((item) => item.id === idCoffe)
    if (getCoffe) {
      const coffeExisting = selectedCoffe.some((item) => item.id === idCoffe)
      if (coffeExisting) {
        setSelectedCoffe((prev) =>
          prev.map((item) => {
            if (item.id === idCoffe) {
              return {
                ...item,
                count: item.count + 1,
              }
            }
            return item
          }),
        )
      } else {
        setSelectedCoffe([...selectedCoffe, { ...getCoffe, count: 1 }])
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
        addCountCoffee,
        removeCountCoffee,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
