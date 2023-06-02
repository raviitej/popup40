// Write your code here
import './index.css'
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

const Header = () => (
  <div className="header">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>

    <div>
      <Popup
        modal
        trigger={
          <button
            className="trigger-button btn"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div>
            <button
              className="btn "
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <ul className="displayContainer">
              <li className="container">
                <Link to="/" onClick={() => close()}>
                  <AiFillHome />
                  <h1>Home</h1>
                </Link>
              </li>

              <li className="container">
                <Link to="/about" onClick={() => close()}>
                  <BsInfoCircleFill />
                  <h1>About</h1>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
