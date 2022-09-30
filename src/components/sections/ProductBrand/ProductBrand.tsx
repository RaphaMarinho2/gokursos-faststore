import './product-brand.scss'

interface ProductBrandsProps {
  NameOfBrand: string
}

function ProductBrand({ NameOfBrand }: ProductBrandsProps) {
  return (
    <p className="text-brand-custom">
      Curso produzido por:
      <span className="name-of-brand">{NameOfBrand}</span>
      {/* <a href={} className="name-of-brand">{NameOfBrand}</a> */}
    </p>
  )
}

export default ProductBrand
