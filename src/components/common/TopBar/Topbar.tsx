import { Link } from '@faststore/ui'
import { useRef, useState } from 'react'
import LeiaJaLogo from 'src/components/icons/LeiaJa'
import SearchIcon from 'src/components/icons/SearchIcon'

const handleSubmit = () => {
  const searchButton = document.getElementById('submit-button')

  searchButton?.click()
}

const Topbar = () => {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState('')

  const handleInputValue = () => {
    if (searchInputRef.current?.value === undefined) return

    setInputValue(`${searchInputRef.current?.value}`)
  }

  return (
    <div className="topbar-wrapper">
      <div className="topbar-content-wrapper">
        <LeiaJaLogo />
        <div className="topbar-categories-wrapper">
          <div className="topbar-category-divider" />
          <Link
            style={{ borderBottom: '2px solid #E0272E' }}
            className="topbar-category-item"
            href="https://www.leiaja.com/noticias/?utm_source=gokursos"
            target="_blank"
          >
            NOTÍCIA
          </Link>
          <div className="topbar-category-divider" />
          <Link
            style={{ borderBottom: '2px solid #234D7B' }}
            className="topbar-category-item"
            href="https://www.leiaja.com/politica/?utm_source=gokursos"
            target="_blank"
          >
            POLÍTICA
          </Link>
          <div className="topbar-category-divider" />
          <Link
            style={{ borderBottom: '2px solid #000000' }}
            className="topbar-category-item"
            href="
          https://www.leiaja.com/carreiras/?utm_source=gokursos"
            target="_blank"
          >
            CARREIRAS
          </Link>
          <div className="topbar-category-divider" />
          <Link
            style={{ borderBottom: '2px solid #176507' }}
            className="topbar-category-item"
            href="

          https://www.leiaja.com/esportes/?utm_source=gokursos"
            target="_blank"
          >
            ESPORTES
          </Link>
          <div className="topbar-category-divider" />
          <Link
            style={{ borderBottom: '2px solid #DF8129' }}
            className="topbar-category-item"
            href="https://www.leiaja.com/cultura/?utm_source=gokursos"
            target="_blank"
          >
            ENTRETENIMENTO
          </Link>
          <div className="topbar-category-divider" />
          <Link
            style={{ borderBottom: '2px solid #4EB2EB' }}
            className="topbar-category-item"
            href="https://www.leiaja.com/tecnologia/?utm_source=gokursos"
            target="_blank"
          >
            TECNOLOGIA
          </Link>
          <div className="topbar-category-divider" />
        </div>
        <form className="topbar-search" onSubmit={handleSubmit}>
          <input
            type="text"
            ref={searchInputRef}
            placeholder=""
            className="topbar-search"
            onChange={handleInputValue}
          />
          <Link
            href={
              inputValue !== ''
                ? `https://www.leiaja.com/search/site/${encodeURIComponent(
                    inputValue
                  )}`
                : 'https://www.leiaja.com/search/site'
            }
            id="submit-button"
            className="submit-button"
            target="_blank"
          >
            <SearchIcon />
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Topbar
