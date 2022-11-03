import InstitucionalBanner from 'src/pages/institucional/components'

import InstitutionalMenu from '../InstutionalMenu/InstitutionalMenu'
import './style.scss'

interface InstitutionalCancelPolicyProps {
  location: string
  text?: string | null
}

const InstitutionalCancelPolicy = ({
  location,
}: InstitutionalCancelPolicyProps) => {
  return (
    <>
      <InstitucionalBanner text="Política de Cancelamento" />

      <div className="institucional-cancel-policy">
        <InstitutionalMenu location={location} />
        <div className="text-container">
          <p>
            Nossa política de cancelamento tem como base o Código de Defesa do
            Consumidor. Sendo assim, para cancelamento o prazo é de até 7 (sete)
            dias corridos após a data da compra do curso. Após solicitar o
            cancelamento do seu pedido, nossa equipe irá entrar em contato para
            realizar os trâmites do reembolso. Para realização do reembolso,
            será necessário o envio dos dados bancários em nome do próprio
            cliente e comprovante do pagamento. O prazo para que haja o crédito
            na conta do favorecido é de até 10 (dez) dias úteis, contados a
            partir do recebimento de todos os dados necessários ao procedimento
            do reembolso.
          </p>
        </div>
      </div>
    </>
  )
}

export default InstitutionalCancelPolicy
