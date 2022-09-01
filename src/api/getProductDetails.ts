import axios from 'axios'

export interface ProductInfo {
  productData: {
    productName: string | undefined
    description: string | undefined
    specification: string | undefined
    productImages: string | undefined
    priceOnData: string | undefined
    breadCrumb: string | undefined
    category: string | undefined
    department: string | undefined | any
    installments: string | undefined
  }
}

export const getProductDetails = async ({
  params: { slug },
}: {
  params: Record<string, string>
}) => {
  try {
    const response =
      await axios.get(`${process.env.GATSBY_CATALOG_BASE_URL}/odata/Catalog/v1/Products?$expand=Installments,Brand,
    Department, Category, Price, Especificacao, Especificacao/CargaHoraria, Especificacao/DisponibilidadeDias,
    Especificacao/TipoCurso, BreadCrumbs&$filter=LinkId eq '${slug}'&$top=1&$select=_Id, Name,
    ProductImageURL, IsActive, Description, DescriptionShort, isKit, Department, Category, Price/ListPrice, Price/BasePrice,
    Price/isSale, Price/SalePercentage, Especificacao/Conteudo, Especificacao/Objetivos,
    Especificacao/CargaHoraria/Text,Especificacao/DisponibilidadeDias/Text, Especificacao/TipoCurso/Text, Especificacao/TipoCurso/TextGodigitalEdu,
    Especificacao/TipoCurso/DescriptionCertificate, Brand/Name, BreadCrumbs/Titulo, BreadCrumbs/Url, BreadCrumbs/Tipo, Installments/Valor, Installments/Parcela,
    Installments/Text,LinkId`)

    return {
      status: 200,
      props: {
        productData: {
          productName: response.data.value[0]?.Name,
          description: response.data.value[0]?.Description,
          specification: response.data.value[0]?.Especificacao,
          productImages: response.data.value[0]?.ProductImageURL,
          priceOnData: response.data.value[0]?.Price,
          breadCrumb: response.data.value[0]?.BreadCrumbs,
          category: response.data.value[0]?.Category,
          department: response.data.value[0]?.Department,
          installments: response.data.value[0]?.Installments,
        },
      },
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
      },
    }
  } catch (err) {
    console.error(err)

    return {
      status: 500,
      props: {},
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
      },
    }
  }
}
