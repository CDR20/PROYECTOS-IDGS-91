import { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../auth/context/AuthContext";

export const Navigation = () => {
  const { user, logged, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {
    logout();

    navigate("/", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primario">
      <div className="container-fluid">
        <Link
          to="/"
          className="text-decoration-none text-white fw-bold fs-6 fst-italic navbar-brand"
        >
          {" "}
          <span className="text-secundario fst-italic">D</span>
          <span className="text-secundario fst-italic">R</span> Muebles "Di-Ro"
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            {logged ? (
              <>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    aria-current="page"
                    to="/operadores"
                  >
                    Operadores
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    aria-current="page"
                    to="/proveedores"
                  >
                    Proveedores
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    aria-current="page"
                    to="/clientes"
                  >
                    Clientes
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    aria-current="page"
                    to="/productos"
                  >
                    Productos
                  </NavLink>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
          <div>
            <span className="text-white fs-6  me-2">{user?.name}</span>
            {logged ? (
              <button className="btn btn-info btn-sm" onClick={onLogout}>
                Cerrar Sesion
              </button>
            ) : (
              <Link to="/login" className="btn btn-primary btn-sm">
                Iniciar Sesion
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
