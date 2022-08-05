type MidiaType = {
  url: string
  alternateName: string
}

type Infos = {
  text: string
}

export type ProductQueryDetails = {
  product: {
    node: {
      image: MidiaType[]
      video: MidiaType[]
      productInfos: Infos[]
    }
  }
}
