import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const Login = () => {

    const { login, message, logged, user } = useContext(AuthContext);
    const navigate = useNavigate();

    if(logged === true){
      navigate('/',{
          replace: true
      });
    }

    const [ data, setData ] = useState({
      email: '',
      password: ''
    });

    const changeValue = (e) => {
      const { name, value  } = e.target;

      setData(prevState => ({
          ...prevState,
          [name]: value
      }));
      
  }

    const onLogin = async(e) =>{

        e.preventDefault();

        await login(data);

        if(logged === true){
          navigate('/',{
              replace: true
          });
        }

    }

  return (
    <>
        <div className="container">
          <div className="row vh-100 align-items-center justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <form action="#" className="shadow-lg p-5 rounded text-center" method="POST" onSubmit={onLogin}>
                <h1 className="text-center text-primary border-bottom border-3 border-primary fs-4 pb-3">Iniciar Sesion</h1>
                {!logged && message.length > 0 ?
                  <div className="alert alert-danger">
                    {message}
                  </div>
                  :
                  <></>
                }
                <div className="form-group my-2 mt-5">
                  <label htmlFor="email" className="form-label">Correo electronico</label>
                  <input type="text" name="email" id="email" className="form-control" onChange={changeValue} value={data.email}/>
                </div>
                <div className="form-group my-2 mb-3">
                  <label htmlFor="email" className="form-label">Contraseña</label>
                  <input type="password" name="password" id="password" className="form-control" onChange={changeValue} value={data.password}/>
                </div>
                <button type="submit" className="btn btn-primary">Iniciar Sesion</button>
                <Link to="/" className="btn">Regresar</Link>
              </form>
            </div>
          </div>
        </div>

    </>
  )
}