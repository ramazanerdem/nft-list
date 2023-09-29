import { useState } from 'react'

const Header = () => {
  const [navOpen, setNavOpen] = useState(true)

  return (
    <header>
      <div className="logo">
        <img
          className="logo-image"
          src="https://univesthub.com/wp-content/uploads/2022/11/univest-logo-horizon-1-1536x429.png"
          alt="univesthub-logo"
        />
        <div onClick={() => setNavOpen((open) => !open)} className="nav-open">
          <img src="./menu.svg" alt="menu" />
        </div>
      </div>
      <nav className={`${navOpen && 'display-none'} `}>
        <ul>
          <li>
            <a href="#">Docs</a>
          </li>
          <li>
            <a href="#">My Collection</a>
          </li>
          <li>
            <a href="#">
              <img src="./wallet.svg" alt="wallet" />
              Connect Wallet
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
