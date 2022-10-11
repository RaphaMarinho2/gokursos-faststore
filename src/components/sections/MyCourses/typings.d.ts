export interface MyCourseData {
  Name: string
  Title: string
  IsActive: boolean
  ProductImage: ProductImage
  BrandCore: BrandCore
  Especificacao: Especificacao
  SKUs: Sku[]
  _Id: number
}

export interface ProductImage {
  ProductImageURL: string
}

export interface BrandCore {
  Name: string
}

export interface Especificacao {
  DisponibilidadeDias: DisponibilidadeDias
}

export interface DisponibilidadeDias {
  Text: string
}

export interface Sku {
  _Id: number
}
