export interface IResponseCoffe {
  id: number
  nome: string
  imagem: string
  categoria: string[]
  descricao: string
  valor: number
  getCoffeSelected: (idcoffe: number, countCoffe: number) => void
}

export interface ISelectedResponseCoffe {
  id: number
  nome: string
  imagem: string
  categoria: string[]
  descricao: string
  valor: number
  count?: number
}
