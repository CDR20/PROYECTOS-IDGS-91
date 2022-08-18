import mueble1 from "../../assets/muebles1.jpg";
import mueble2 from "../../assets/muebles2.jpg";
import mueble3 from "../../assets/muebles3.jpg";

import { Link } from "react-router-dom";
import { Navigation } from "../Shared/Navigation/Navigation";

const Index = () => {
  return (
    <>
      <Navigation />

      <div
        className="container-fluid mt-3 p-3 w-75 mx-auto"
        id="main-content-home"
      >
        <div className="row w-100 rounded align-items-center justify-content-around mx-auto">
          <div className="col-12">
            <Link
              to="/"
              className="text-center py-5 border-bottom border-3 border-cuaternario text-center d-block w-100 mb-2 fs-4 text-primario nav-link fw-bold fst-italic"
            >
              {" "}
              <span className="text-secundario fst-italic">D</span>
              <span className="text-secundario fst-italic">R</span> Muebles
              "Di-Ro"
            </Link>
          </div>

          <div className="col-12 col-md-5 my-3 shadow-lg rounded bg-light">
            <div className="text-center rounded-pill bg-warning mx-auto icon-container mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path
                  fillRule="evenodd"
                  d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                />
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
            </div>
            <h3 className="bg-primario text-white rounded fw-bold fs-5 text-center p-2">
              ¿Quienes Somos?
            </h3>
            <p className="text-center fs-6 mt-2">
              Somos un empresa mexicana integrada por un equipo familiar que
              trabaja en conjunto con el objetivo de satisfacer las necesidades
              de amueblamiento de hogares, ofreciendo soluciones integrales a
              sus espacios.
            </p>
          </div>

          <div className="col-12 col-md-5 my-3 shadow-lg rounded bg-light">
            <div className="text-center rounded-pill bg-warning mx-auto icon-container mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-question-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
              </svg>
            </div>
            <h3 className="bg-primario text-white rounded fw-bold fs-5 text-center p-2">
              ¿A que nos dedicamos?
            </h3>
            <p className="text-center fs-6 mt-2">
              Muebles Di-Ro ofrece el servicio de venta de productos como;
              recamaras, roperos, vitrinas, comedores, salas y electrodomesticos
              de una forma donde los clientes pueden elegir la forma de compra.
            </p>
          </div>

          <div className="col-12 my-3 shadow-lg rounded bg-light">
            <h3 className="bg-cuaternario text-white rounded fw-bold fs-2 text-center p-2">
              Galeria
            </h3>

            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="true"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={mueble1}
                    className="d-block w-100"
                    width="600px"
                    height="400px"
                    alt="mueble-1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={mueble2}
                    className="d-block w-100"
                    width="600px"
                    height="400px"
                    alt="mueble-2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={mueble3}
                    className="d-block w-100"
                    width="600px"
                    height="400px"
                    alt="mueble-3"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="col-12 col-md-5 my-3 shadow-lg rounded bg-light">
            <div className="text-center rounded-pill bg-warning mx-auto icon-container mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-bullseye"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </div>
            <h3 className="bg-primario text-white rounded fw-bold fs-5 text-center p-2">
              Mision
            </h3>
            <p className="text-center fs-6 mt-2">
              Brindar las mejores soluciones a las necesidades de amueblamiento,
              desarrollando, fabricando e innovando el mobiliario del hogar, que
              mejore las áreas y espacios familiares haciendo de ellos lugares
              confortables.
            </p>
          </div>

          <div className="col-12 col-md-5 my-3 shadow-lg rounded bg-light">
            <div className="text-center rounded-pill bg-warning mx-auto icon-container mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            </div>
            <h3 className="bg-primario text-white rounded fw-bold fs-5 text-center p-2">
              Vision
            </h3>
            <p className="text-center fs-6 mt-2">
              Cimentar el desarrollo comercial de la empresa Muebles Di-Ro en la
              red de internet así como en el ramo mueblero, ofrecer siempre
              productos y servicios de calidad a nuestros clientes.
            </p>
          </div>

          <div className="col-12 my-3">
            <h3 className="bg-cuaternario text-white rounded fw-bold fs-5 text-center p-2">
              Contacto
            </h3>

            <div id="contacto">
              <div className="row w-100 align-items-start">
                <div className="col-12 text-md-start text-center mt-2">
                  <div className="d-block my-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-envelope-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                    </svg>
                    <span className="text-secondary fs-6 fw-bold">
                      muebles.Di_Ro@gmail.com
                    </span>
                  </div>

                  <div className="d-block my-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-phone-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                    </svg>
                    <span className="text-secondary fs-6 fw-bold">
                      +52 722 223 8363
                    </span>
                  </div>

                  <div className="d-block my-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-telephone-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                      />
                    </svg>
                    <span className="text-secondary fs-6 fw-bold">
                      722 616 8986
                    </span>
                  </div>

                  <div className="d-block my-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-cursor-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                    </svg>
                    <span className="text-secondary fs-6 fw-bold">
                      Emiliano Zapata #12, Col. El Panteón Lerma, Estado de
                      México, México
                    </span>
                  </div>
                </div>
              </div>
              <div className="row w-100">
                <div className="col-12 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d665.7185595034094!2d-99.50705207346032!3d19.287894302870548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf50ed42decad%3A0xc9a8a5a6e0d5ed75!2sEmiliano%20Zapata%2012%2C%20El%20pante%C3%B3n%2C%2052005%20Lerma%20de%20Villada%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1655443799466!5m2!1ses-419!2smx"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
