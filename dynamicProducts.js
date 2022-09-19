import axios from 'axios'

function getProducts() {
  return axios.get(
    `${'https://gde.godigitaledu.com'}/odata/Catalog/v1/Products?$select=LinkId`
  )
}

export async function dynamicProducts() {
  const { data } = await getProducts()

  return data
}
