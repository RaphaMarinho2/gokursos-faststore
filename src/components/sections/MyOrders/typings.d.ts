export interface OrderData {
  Pedidos: Pedido[]
  Status: string
  StatusDescription: string
  StatusCore: StatusCore
}

export interface Pedido {
  OrderID: string
  ValorLiquido: number
  ValorTransacionado: number
  Data: string
  DataHora: string
  Quantidade: number
  Estado: string
  Campanha: boolean
  qtdItens: number
  NewVLiquido: number
  Items: Item[]
  Order: ShippingInfo
}

export interface Item {
  ValorTransacionadoItem: number
  VTransicionadoPorItem: number
  Quantidade: number
  Product: Product
}

export interface Product {
  Name: string
  LinkId: string
  Description: string
  BrandCore: BrandCore
  ProductURL: string
}

export interface BrandCore {
  Name: string
}

export interface ShippingInfo {
  Addresss: Addresss[]
}

export interface Addresss {
  ReceiverName: string
  Street: string
  Number: string
  Complement: string
  Neighborhood: string
  PostalCode: string
  City: string
  State: string
  Country: string
}

export interface StatusCore {
  Status: string
}
