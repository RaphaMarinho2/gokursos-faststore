export interface OrderData {
  Pedidos: OrderDetails[]
  Status: string
  StatusDescription: string
  StatusCore: StatusCore
}

export interface OrderDetails {
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
  Items: OrderItemData[]
  Order: ShippingInfo
  PaymentMethodCore: PaymentMethod
}

export interface PaymentMethod {
  Name: string
}

export interface OrderItemData {
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
  ProductImageURL: string
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
