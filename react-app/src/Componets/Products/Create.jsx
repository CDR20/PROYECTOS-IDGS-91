import { useState } from "react";
import swal from 'sweetalert';

const Create = ({setClients}) => {

    const [data, setData] = useState({
        name: '',
        cellphone: '',
        address: ''
    });

    const changeValue = (e) => {
        const { name, value  } = e.target;

        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
        
    }

    const submitForm = e =>{
        fetch(`https://www.proyectos.dsgys.com/api/v1/clients`, {
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
                    cellphone: '',
                    address: ''
                })
                await setClients([]);
            });
    }

    return (
        <div className="modal fade" id="createProduct" tabIndex="-1" aria-labelledby="createProductLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header bg-primario">
                        <h5 className="modal-title text-white" id="createProductLabel">Crear Nuevo Producto</h5>
                    </div>
                    <div className="modal-body">
                        <form id="form-client">
                            <div className="form-group mt-2">
                                <label className="form-label fw-bold">Nombre Completo</label>
                                <input className="form-control" placeholder="Nombre Completo" name="name" value={data.name} onChange={changeValue}/>
                            </div>
                            <div className="form-group mt-2">
                                <label className="form-label fw-bold">Direccion</label>
                                <input className="form-control" placeholder="Nombre Completo" name="address" value={data.address} onChange={changeValue}/>
                            </div>
                            <div className="form-group mt-2">
                                <label className="form-label fw-bold">Telefono</label>
                                <input className="form-control" placeholder="Nombre Completo" name="cellphone" value={data.cellphone} onChange={changeValue}/>
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