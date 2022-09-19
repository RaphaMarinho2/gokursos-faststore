function getProducts() {
  return fetch(
    `${process.env.GATSBY_CATALOG_BASE_URL}/odata/Catalog/v1/Products?$select=LinkId`
  ).then((response) => response.json())
}

exports.dynamicProducts = async () => {
  const products = await getProducts()

  return products
}
