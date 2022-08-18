import icon from '../../assets/404.jpg';
import { Link } from 'react-router-dom';
import { Navigation } from '../Shared/Navigation/Navigation';

export const NotFound = () => {
  return (
    <>
      <Navigation/>

      <div className='container vh-100 d-flex align-items-center'>
          <div className='row w-100 align-items-center justify-content-center'>
              <div className='col-12 col-lg-6 text-center'>
                  <img src={icon} alt="not-found" className='img-fluid w-50'/>
              </div>
              <div className='col-12 text-center'>
                  <h1 className='text-primario fs-4 fw-bold text-center'>404 - Pagina no Encontrada</h1>
                  <Link to="/" className='btn btn-primary btn-sm fs-6'>Regresar</Link>
              </div>
          </div>
      </div>
    </>
  )
}
