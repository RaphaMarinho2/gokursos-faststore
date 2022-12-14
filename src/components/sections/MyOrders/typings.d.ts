export interface OrderData {
  OrderID: string
  Data: string
  DataHora: string
  LiquidoTotal: number
  TransacionadoTotal: number
  NovoLiquidoTotal: number
  Quantidade: number
  Estado: string
  Campanha: boolean
  Items: Item[]
  Order: Order
  StatusCore: StatusCore
  PaymentMethodCore: PaymentMethodCore
}

export interface Item {
  Quantidade: number
  TransacionadoItem: number
  TransacionadoTotal: number
  Product: Product
}

export interface Product {
  Name: string
  LinkId: string
  Description: string
  ProductURL: string
  ProductImageURL: string
  BrandCore: BrandCore
}

export interface BrandCore {
  Name?: string
}

export interface Order {
  Status: string
  StatusDescription: string
  PaymentMethod: PaymentMethod
}

export interface PaymentMethod {
  numeroCartao?: string
  metodoPagamento: 'cartaoCredito' | 'gratuidade' | 'boleto' | 'pix'
  parcelas: number
}

export interface StatusCore {
  Status:
    | 'PAGAMENTO APROVADO'
    | 'PAGAMENTO PENDENTE'
    | 'FATURADO'
    | 'CANCELAMENTO SOLICITADO'
    | 'CANCELADO'
    | 'PAGAMENTO NÃO FINALIZADO'
  TipoPagamento: string
}

export interface PaymentMethodCore {
  Name: string
}
