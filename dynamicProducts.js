import axios from 'axios'

function getProducts() {
  return axios
    .get(
      `${process.env.SERVER_CATALOG_BASE_URL}/odata/Catalog/v1/Products?$select=LinkId`
    )
    .then((response) => response.json())
}

export async function dynamicProducts() {
  const products = await getProducts()

  return products
}
