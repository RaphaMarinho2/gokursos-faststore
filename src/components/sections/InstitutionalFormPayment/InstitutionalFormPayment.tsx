import InstitutionalMenu from '../InstutionalMenu/InstitutionalMenu'
import './style.scss'

interface InstitutionalFormpaymentProps {
  location: string
}

const InstitutionalFormpayment = ({
  location,
}: InstitutionalFormpaymentProps) => {
  return (
    <>
      <div className="title-container">
        <p>Formas de pagamento</p>
      </div>

      <div className="institucional-form-payment">
        <InstitutionalMenu location={location} />
        <div className="text-container">
          <p>
            Oferecemos como meios de pagamentos as bandeiras de cartão de
            crédito Mastercard, Visa, Elo, American Express e Hipercard, além de
            boleto.
          </p>

          <p>
            Parcelamos a sua compra em até 12x sem juros a depender do valor.
          </p>
          <p>
            No caso de boleto bancário, a aprovação do pagamento poderá levar
            até 72 horas para ser processada. Este prazo é dado pelo sistema
            bancário e não pelo Gokursos. Caso deseje acessar o conteúdo do
            curso de forma mais rápida, recomendamos a utilização do meio de
            pagamento com cartão de crédito.
          </p>

          <p>
            Lembramos que o prazo de liberação de acesso ao curso inicia-se após
            a identificação e aprovação do pagamento.
          </p>
        </div>
      </div>
    </>
  )
}

export default InstitutionalFormpayment
