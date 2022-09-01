import { useEffect, useState } from 'react'
import { Button as UIButton, Modal } from '@faststore/ui'

import Section from '../../Section'
import IconClose from '../../../icons/IconClose'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'

interface PriceVariation {
  Parcela: number | string
  Valor: number
}

interface InstalmentListProps {
  priceVariation: PriceVariation[]
}

export const InstalmentList = ({ priceVariation }: InstalmentListProps) => {
  const [modal, setModal] = useState(false)

  useEffect(() => {
    if (!priceVariation?.length) {
      return
    }

    setModal(false)
  }, [priceVariation.length])

  if (!priceVariation?.length) {
    return <></>
  }

  const showModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  const listOfInstalment = priceVariation.sort((a, b) =>
    a.Parcela > b.Parcela
      ? 1
      : -1
  ).map(
    (value: PriceVariation, index: number) => (
      <li key={index}>
        {value?.Parcela !== 1 ? (
          <p>
            Apenas {value?.Parcela}x de {useFormattedPrice(value?.Valor)}
          </p>
        ) : (
          <p>à vista R$ {value?.Valor},00</p>
        )}
      </li>
    )
  )

  return (
    <Section className="product-details__price-list">
      <UIButton className="modal-open" onClick={showModal}>
        Ver todas as opções
      </UIButton>
      <Modal isOpen={modal}>
        <div className="product-details__price-modal">
          <div className="product-details__price-list--top">
            <h3>Opções de Parcelamento</h3>
            <UIButton className="modal-close" onClick={closeModal}>
              <IconClose />
            </UIButton>
          </div>
          <div>
            <ul className="product-details__price-list--content">
              {listOfInstalment}
            </ul>
          </div>
        </div>
      </Modal>
    </Section>
  )
}
