import { Navigation } from '../Shared/Navigation/Navigation';
// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import CreateProduct from '../Products/Create';

export const Products = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [])

  function fetchData() {
    fetch('https://www.proyectos.dsgys.com/api/v1/products')
      .then(response => response.json())
      .then(({ data }) => {
        setProducts(data);
        setIsLoading(false);
      })
  }

  return (
    <>
      <Navigation />

      <div className="row mt-3 w-100 align-items-center justify-content-center">

        {/* <div className="col-12 text-center mb-4">
          <button type="button" className="btn btn-primary text-white fw-bold fs-6" data-bs-toggle="modal" data-bs-target="#createProduct">
            Crear Nuevo Producto
          </button>
          <CreateProduct setProducts={fetchData} />
        </div> */}

        {isLoading ?
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div> :
          <div className="row align-items-top justify-content-center mt-3" id="products-list">
            {products.map(product =>
              <div className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-2" key={product.slug}>
                <div className="card m-1 shadow-lg p-3 border border-secondary border-1">

                  <img src={`https://www.proyectos.dsgys.com/api/v1/products/images/${product.image}`} alt="product" className="mx-auto" width="150px" height="150px" />

                  <span className="id d-none">{product.id}</span>

                  <p className="text-center fs-6 fw-bold mb-0 name">{product.name}</p>

                  <p className="text-secondary fs-6 fw-bold text-center code">{product.code}</p>

                  <div className="d-flex align-items-center justify-content-around">
                    <span className="text-center text-primary fs-6 w-auto mx-auto align-middle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-up" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z" />
                        <path fillRule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z" />
                      </svg>
                      ${product.provider_price}
                    </span>
                    <span className="text-center text-primary fw-bold fs-6s w-auto mx-auto align-middle">
                      <span className="price">
                        ${product.shop_price}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                      </svg>
                    </span>
                  </div>

                  {(product.stock <= 0) ?
                    <p className="text-center text-danger fs-6 fw-bold">AGOTADO</p>
                   :
                    <p className="text-center text-success fs-6 fw-bold stock">{product.stock} existente(s)</p>
                   }

                  <h6 className="text-center fs-6 border-bottom border-primary border-3 pb-2 text-uppercase text-secondary fw-bold">Inversor</h6>
                  <p className="fs-6 text-center fw-bold text-primary">
                    {product.inversor.name}
                  </p>

                  <small className="text-muted text-center">Última vez actualizado: 
                    <span className="fw-bold">
                        {' '+product.lastUpdated}
                    </span>
                  </small>

                  <div className="d-flex align-items-center justify-content-around py-3">
                    {/* <a href="{{ route('products.edit', $product) }}" className="btn btn-lg fs-6 text-center p-2" title="Editar">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                      </svg>
                    </a> */}
                      {/* <button className="btn btn-lg fs-6 text-center p-2" title="Eliminar" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash2-fill" viewBox="0 0 16 16">
                          <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
                        </svg>
                      </button> */}
                    {/* <button className="btn btn-lg fs-6 text-center p-2 agregar-carrito" title="Agregar al Carrito">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus-fill disabled" viewBox="0 0 16 16">
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                      </svg>
                    </button> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        }

      </div>
    </>
  )
}
