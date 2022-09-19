import axios from 'axios'

function getProducts() {
  return axios.get(
    `${process.env.SERVER_CATALOG_BASE_URL}/odata/Catalog/v1/Products?$select=LinkId`
  )
}

export async function dynamicProducts() {
  const { data } = await getProducts()

  return data
}
