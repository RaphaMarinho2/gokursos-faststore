import InstitutionalMenu from '../InstutionalMenu/InstitutionalMenu'
import './style.scss'

interface InstitutionalTermsProps {
  location: string
  text?: string | null
}

const InstitutionalTerms = ({ location, text }: InstitutionalTermsProps) => {
  return (
    <>
      <div className="title-container">
        <p>Termos de uso</p>
      </div>

      <div className="institucional-terms">
        <InstitutionalMenu location={location} />
        <div className="text-container">
          <h1>ATUALIZADO PELA ÚLTIMA VEZ EM 30/09/2020</h1>
          <p>Privacidade - GoKursos</p>
          <p>{text}</p>
        </div>
      </div>
    </>
  )
}

export default InstitutionalTerms
