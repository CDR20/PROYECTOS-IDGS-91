import { useState, useEffect } from "react";
import swal from 'sweetalert';
import { useParams, Link, useNavigate } from "react-router-dom";

const Edit = () => {

    let params = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        role: ''
    });

    const [isLoading, setIsLoading] = useState(true);


    const changeValue = (e) => {
        const { name, value } = e.target;

        setData(prevState => ({
            ...prevState,
            [name]: value
        }));

    }

    useEffect(() => {
        fetch(`https://www.proyectos.dsgys.com/api/v1/users/${params.slug}`)
            .then(response => response.json())
            .then(({ data }) => {
                setData(data);
                setIsLoading(false);
            });

    }, [])


    const submitForm = e => {
        fetch(`https://www.proyectos.dsgys.com/api/v1/users/${params.slug}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            mode: "cors",
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(async ({ data }) => {
                await swal(`${data.name}`, "Modificado y Guardado Exitosamente!", "success");
                navigate('/operadores');
            });
    }

    const deleteClient = e => {
        fetch(`https://www.proyectos.dsgys.com/api/v1/users/${params.slug}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            mode: "cors",
        })
            .then(response => response.json())
            .then(async ({ data }) => {
                await swal(`${data.name}`, "Fué Eliminado!", "warning");
                navigate('/operadores');
            });
    }

    return (
        <div className="container">
            <div className="row vh-100 justify-content-center align-items-center">
                {isLoading ?
                    <div className="spinner-grow text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    :
                    <div className="col-12 col-lg-6">
                        <h1 className="bg-primario p-5 text-white text-center fs-5 fw-bold">Editar Operador {data.name}</h1>
                        <form id="form-client" className="text-center bg-white p-5 shadow-lg rounded">
                            <div className="form-group mt-2">
                                <label className="form-label fw-bold">Nombre Completo</label>
                                <input className="form-control" placeholder="Ej. Carolina Diaz Romero" name="name" value={data.name} onChange={changeValue} autoComplete="off"/>
                            </div>
                            <div className="form-group mt-2">
                                <label className="form-label fw-bold">Direccion</label>
                                <input className="form-control" placeholder="Ej. Calle concepción #12..." name="address" value={data.address} onChange={changeValue} autoComplete="off"/>
                            </div>
                            <div className="form-group mt-2"> 
                                <div className="text-center fw-bold text-primario my-2 ">Rol Del Operador</div>
                                <input type="radio" className="btn-check" name="role" autoComplete="off" value="EMPLEADO" id="success-outlined" defaultChecked={data.role === 'EMPLEADO'} onClick={changeValue} onChange={changeValue}/>
                                <label className="btn btn-outline-info" htmlFor="success-outlined">Empleado</label>

                                <input type="radio" className="btn-check" name="role" autoComplete="off" id="danger-outlined" value="ADMIN" onClick={changeValue} defaultChecked={data.role === 'ADMIN'} onChange={changeValue}/>
                                <label className="btn btn-outline-primary" htmlFor="danger-outlined">Administrador</label>
                            </div>
                            <div className="form-group mt-2">
                                <label className="form-label fw-bold">Email</label>
                                <input className="form-control" placeholder="Ej. correo@correo.com" name="email" value={data.email} onChange={changeValue} autoComplete="off"/>
                            </div>
                            
                            <button type="button" className="btn btn-primary btn-sm mt-2 mx-2" onClick={submitForm}>Guardar</button>
                            <button type="button" className="btn btn-danger btn-sm mt-2 mx-2" onClick={deleteClient}>Eliminar</button>
                            <Link to="/operadores" className="btn btn-sm mx-2 mt-2">Cerrar</Link>
                        </form>
                    </div>
                }
            </div>
        </div>

    )
}

export default Edit;