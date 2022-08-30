import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const Header = (Props) => {

// Función para capturar el input de la búsqueda
const capturarInputBuscador = (e) => {
    Props.pasoSetListaFiltrada(e.target.value);
    console.log(e.target.value);
}

  return (
    <>
    <div>
{/* -----------Buscador de colaboradores (navbar)----------------------------------------------------------------------------------- */}
      <Navbar bg="dark" expand="lg">
        <Container fluid className='text-light justify-content-between mx-5'>
            <h1 className="h3">Buscador de colaboradores</h1>
    
            <Form onChange={capturarInputBuscador} value={Props} className="d-flex me-5 p-4" >
                  <Form.Control
                  name="buscadorColaborador"
                    type="search"
                    placeholder="Buscar colaborador"
                    className="me-2"
                    aria-label="Search"
                  />
            </Form>
    

        </Container>

      </Navbar>
    </div>
    </>
  )
}

export default Header