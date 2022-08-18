import { Navigation } from '../Shared/Navigation/Navigation';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CreateOperator from '../Operators/Create';

export const Operators = () => {

  const [operators, setOperators] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [])

  function fetchData() {
    fetch('https://www.proyectos.dsgys.com/api/v1/users')
      .then(response => response.json())
      .then(({ data }) => {
        setOperators(data);
        setIsLoading(false);
      })
  }

  return (
    <>
      <Navigation />

      <div className="row mt-3 w-100 align-items-center justify-content-center">

        <div className="col-12">
          <h1 className="text-center fs-6 p-2 rounded bg-warning text-dark fw-bold w-50 mx-auto">Catalogo de Operadores</h1>
        </div>

        <div className="col-12 text-center mb-4">
          <button type="button" className="btn btn-primary text-white fw-bold fs-6" data-bs-toggle="modal" data-bs-target="#createOperator">
            Crear Nuevo Operador
          </button>
          <CreateOperator setOperators={fetchData} />
        </div>

        {isLoading ?
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div> :
          <>
            {operators.map(operator => 
            {return (operator.role === 'ADMIN') ?
                <div className="col-11 col-md-5 col-lg-3 m-2" key={operator.slug}>
                  <Link to={`/operadores/${operator.slug}`} className="card rounded shadow-lg bg-primario pt-3 card-linked">
                    <h3 className="card-title fs-6 text-white text-center fw-bold">{operator.name}</h3>
                    <div className="card-body">
                      <p className="text-center fs-6 text-white">{operator.email}</p>
                      <p className="text-center fs-6 fw-bold text-info">{operator.role.toLowerCase().charAt(0).toUpperCase() + operator.role.slice(1).toLowerCase()}</p>
                    </div>
                  </Link>
                </div>
                :
                <div className="col-11 col-md-5 col-lg-3 m-2" key={operator.slug}>
                  <Link to={`/operadores/${operator.slug}`} className="card rounded shadow-lg pt-3 card-linked">
                    <h3 className="card-title fs-6 text-primary text-center fw-bold">{operator.name}</h3>
                    <div className="card-body">
                      <p className="text-center fs-6 text-black">{operator.email}</p>
                      <p className="text-center fs-6 fw-bold text-primario">{operator.role.toLowerCase().charAt(0).toUpperCase() + operator.role.slice(1).toLowerCase()}</p>
                    </div>
                  </Link>
                </div>
              }
            )}
          </>
        }

      </div>
    </>
  )
}
