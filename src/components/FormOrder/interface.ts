import * as zod from 'zod'

export const formSchema = zod.object({
  district: zod.string().min(1, 'Informe o bairro'),
  street: zod.string().min(1, 'Informe o nome da rua'),
  cep: zod.string().min(8).max(8),
  complement: zod.string().optional(),
  numberHouse: zod.number().min(1, 'Informe o número do endereço'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(2).max(2),
})

export type IHandleCreatOrder = zod.infer<typeof formSchema>
