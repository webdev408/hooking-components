import React, {Link, NavLink} from 'react-router-dom';



const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-success">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">tSol</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <NavLink className="nav-link active" to="/"><i className="fas fa-home"></i>First</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/second"><i className="fas fa-user-alt"></i>Second</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/third"><i className="fab fa-servicestack"></i>Third</NavLink>
                    </li>
                    <li className="nav-item">
                  <NavLink className="nav-link" to="/registerform"><i className="fas fa-envelope"></i>RegisterForm</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
       </div>
    )
}

export default Navbar;
