import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
export default function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar bg-${props.mode}`}  data-bs-theme={props.mode} >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link ac tive" aria-current="page" href="#">{props.home}</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/about">{props.aboutText}</a>
        </li> */}
      </ul>

    {/* dark mode  */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
        <input className="form-check-input" type="checkbox"  role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.textMode}</label>
      </div>
  </div>
</div>
</nav>
  )
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired ,
    aboutText: PropTypes.string.isRequired
}

NavBar.defaultProps = {
    title: "set value",
    aboutText: "about us"
}