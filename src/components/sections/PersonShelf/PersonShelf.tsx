import './styles.scss'

type PersonShelfType = {
  nodes: Array<{
    name?: string
    curso?: string
    imagem: {
      url: string
    }
  }>
}

const PersonShelf = ({ nodes }: PersonShelfType) => {
  return nodes.map((node, index) => {
    const { name, curso, imagem } = node

    return (
      <div key={index}>
        <img src={imagem?.url} alt={name} />
        <h3>{name}</h3>
        <p>{curso}</p>
      </div>
    )
  })
}

export default PersonShelf
