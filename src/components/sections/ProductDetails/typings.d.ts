export interface ProductInfo {
  productData: ProductData
}
export interface ProductData {
  ID?: any
  _Id: number
  Name: string
  LinkId: string
  Description: string
  DescriptionShort: string
  IsActive: boolean
  ProductImageURL: any
  isKit: boolean
  Department: Department
  Category: Category
  Price: Price
  Especificacao: Especificacao
  Brand: Brand
  BreadCrumbs: BreadCrumb[]
  Installments: Installment[]
  shelfName?: string
}

export interface Department {
  Slug: string
  Name: string
}

export interface Category {
  Slug: string
  Name: string
}

export interface Price {
  ListPrice: any
  BasePrice: any
  isSale: boolean
  SalePercentage: number
  priceCurrency?: string
}

export interface Especificacao {
  Conteudo: string
  Objetivos: string
  CargaHoraria: CargaHoraria
  TipoCurso: TipoCurso
  DisponibilidadeDias: DisponibilidadeDias
}

export interface CargaHoraria {
  Text: string
}

export interface TipoCurso {
  Text: string
  TextGodigitalEdu: string
  DescriptionCertificate: string
}

export interface DisponibilidadeDias {
  Text: string
}

export interface Brand {
  Name: string
}

export interface BreadCrumb {
  Titulo: string
  Url: string
  Tipo: string
}

export interface Installment {
  Valor: number
  Parcela: number
  Text: string
}
