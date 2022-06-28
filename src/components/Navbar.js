import React from 'react'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.style} bg-${props.style}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
            </li> */}
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleStyle}/>
              <label className={`form-check-label text-${props.style==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault">At Night?</label>
            </div>
        </div>
    </div>
    </nav>
  )
}