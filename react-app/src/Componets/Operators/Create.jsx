import { useState } from "react";
import swal from 'sweetalert';

const Create = ({setOperators}) => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        role: 'EMPLEADO'
    });

    const changeValue = (e) => {
        const { name, value  } = e.target;

        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
        
    }

    const submitForm = e =>{
        fetch(`https://www.proyectos.dsgys.com/api/v1/users`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            mode: "cors",
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then( async ({ data }) => {
                await swal(`${data.name}` , "Creado Exitosamente!", "success");
                await setData({
                    name: '',
                    email: '',
                    password: '',
                    address: '',
                    role: ''
                })
                await setOperators();
            });
    }

    return (
        <div className="modal fade" id="createOperator" tabIndex="-1" aria-labelledby="createOperatorLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header bg-primario">
                        <h5 className="modal-title text-white" id="createOperatorLabel">Crear Nuevo Operador</h5>
                    </div>
                    <div className="modal-body">
                        <form id="form-client">
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
                                <input type="radio" className="btn-check" name="role" autoComplete="off" value="EMPLEADO" id="success-outlined" defaultChecked onChange={changeValue}/>
                                <label className="btn btn-outline-info" htmlFor="success-outlined">Empleado</label>

                                <input type="radio" className="btn-check" name="role" autoComplete="off" id="danger-outlined" value="ADMIN" onChange={changeValue}/>
                                <label className="btn btn-outline-primary" htmlFor="danger-outlined">Administrador</label>
                            </div>
                            <div className="form-group mt-2">
                                <label className="form-label fw-bold">Email</label>
                                <input className="form-control" placeholder="Ej. correo@correo.com" name="email" value={data.email} onChange={changeValue} autoComplete="off"/>
                            </div>
                            <div className="form-group mt-2">
                                <label className="form-label fw-bold">Contraseña</label>
                                <input className="form-control" name="password" value={data.password} onChange={changeValue} autoComplete="off"/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary" onClick={submitForm}>Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create;
