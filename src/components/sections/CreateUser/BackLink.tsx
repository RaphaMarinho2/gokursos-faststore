import type { StepWizardChildProps } from 'react-step-wizard'

function BackLink(props: Pick<StepWizardChildProps, 'previousStep'>) {
  const { previousStep } = props

  return (
    <div>
      <button onClick={previousStep} className="back-link">
        Voltar
      </button>
    </div>
  )
}

export default BackLink
