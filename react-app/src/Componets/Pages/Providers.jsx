import { Navigation } from '../Shared/Navigation/Navigation';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CreateProvider from '../Providers/Create';

export const Providers = () => {

  const [providers, setProviders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [])

  function fetchData() {
    fetch('https://www.proyectos.dsgys.com/api/v1/providers')
      .then(response => response.json())
      .then(({ data }) => {
        setProviders(data);
        setIsLoading(false);
      })
  }

  return (
    <>
      <Navigation />

      <div className="row mt-3 w-100 align-items-center justify-content-center">

        <div className="col-12">
          <h1 className="text-center fs-6 p-2 rounded bg-warning text-dark fw-bold w-50 mx-auto">Catalogo de Proveedores</h1>
        </div>

        <div className="col-12 text-center mb-4">
          <button type="button" className="btn btn-primary text-white fw-bold fs-6" data-bs-toggle="modal" data-bs-target="#createClient">
            Crear Nuevo Proveedor
          </button>
          <CreateProvider setProviders={fetchData} />
        </div>

        {isLoading ?
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div> :
          <>
            {providers.map(provider =>
              <div className="col-11 col-md-5 col-lg-3 m-2" key={provider.slug}>
                <Link to={`/proveedores/${provider.slug}`} className="card rounded shadow-lg pt-3 card-linked">
                  <h3 className="card-title fs-6 text-primary text-center fw-bold">{provider.name}</h3>
                  <div className="card-body">
                    <p className="text-center fs-6 text-black">{provider.address}</p>
                    <p className="text-center fs-6 fw-bold">{provider.cellphone}</p>
                  </div>
                </Link>
              </div>
            )}
          </>
        }

      </div>
    </>
  )
}
