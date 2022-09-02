function BackLink(props: any) {
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
