import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../baseDatosOriginal";
import { BaseColaboradores } from '../baseDatosOriginal';
import Table from 'react-bootstrap/Table';


// Use States
function InputColaborador(Props) {
const [nombreColaborador, setNombreColaborador] = useState('');
const [correoColaborador, setCorreoColaborador] = useState('');
const [idRef, setIdRef] = useState(4);
const [listadoColaboradores, setListadoColaboradores] = useState(BaseColaboradores);


// Función para enviar el formulario
const enviarFormulario = (e) => {
e.preventDefault()
{nombreColaborador === "" || correoColaborador === "" ? alert("Debes rellenar todos los campos") : 
  setListadoColaboradores([...listadoColaboradores, {nombre: nombreColaborador, correo: correoColaborador, id: idRef}])};
  setNombreColaborador('');
  setCorreoColaborador('');
  setIdRef(idRef+1);
};

// Función para capturar el input nombre
const capturarInputNombre = (e) => {
setNombreColaborador(e.target.value)
}

// Función para capturar el input mail
const capturarInputCorreo = (e) => {
setCorreoColaborador(e.target.value)
}

/* ------------------------------------------------------------------------------------------------------------------------------- */

return (
<>
  <div className="main container w-75">
{/* -----------Formulario para ingresar colaboradores -------------------------------------------------------------------------- */}
        <Form onSubmit= {enviarFormulario} className='formulario'>
        <h3>Ingresa datos del colaborador</h3>

{/* //Input nombre */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre del colaborador</Form.Label>
             <Form.Control name="nombreColaborador" onChange={capturarInputNombre} value={nombreColaborador} type="text" placeholder="Ingresa el nombre del colaborador" />
            </Form.Group>

{/* //Input correo */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Correo del colaborador</Form.Label>
            <Form.Control name="correoColaborador" onChange={capturarInputCorreo} value={correoColaborador} type="email" placeholder="Ingresa el correo del colaborador" />
            </Form.Group>
      
            <Button variant="primary" type="submit">Agregar</Button>

        </Form>


        
{/* -----------Impresión de resultados -------------------------------------------------------------------------- */}
      <div className="tabla">
        
      <h3>Resultados de búsqueda</h3> 
      <Table  striped className=''>
        <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Correo electrónico</th>
        </tr>
        </thead>
        <tbody>
        {listadoColaboradores.filter((el) => {
        //Props.pasoSelListaFiltrada viene del Header. Si no hay nada ahí, me retorna el array original.
        if(Props.pasoListaFiltrada ===''){
        return el;
        }
        else if (el.nombre.toLocaleLowerCase().includes(Props.pasoListaFiltrada.toLocaleLowerCase()))
        {
        return el;
        }
       
        // Acá termina el filter y empieza el map.
        }).map ((el) => (<tr key={el.id}>
        <td>{el.id}</td>
        <td>{el.nombre}</td>
        <td>{el.correo}</td></tr>))
        }
        </tbody>
      </Table>

      </div>

  </div>
</>
  );
}

export default InputColaborador;