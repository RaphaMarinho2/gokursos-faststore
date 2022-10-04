import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'

import type { Item } from './typings'

import './my-orders.scss'

interface ProductItemProps {
  item: Item
}

export default function ProductItem({ item }: ProductItemProps) {
  const value = useFormattedPrice(item.ValorTransacionadoItem)

  return (
    <li className="my-order__details-item">
      <img
        className="my-order__details-item-image"
        src={item.Product.ProductImageURL}
        alt={item.Product.Name}
      />
      <div className="my-order__details-item-content">
        <span className="name">{item.Product.Name}</span>
        <span className="price">{`${item.Quantidade} uni - ${value}`}</span>
      </div>
    </li>
  )
}
