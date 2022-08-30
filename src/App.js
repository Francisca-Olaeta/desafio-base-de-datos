import React, {useState} from 'react';
import InputColaborador from './Components/InputColaborador';
import Header from './Components/Header';


function App() {

  const [listaFiltrada, setListaFiltrada] = useState('');

  return (
    <div className="App">
      <Header pasoSetListaFiltrada={setListaFiltrada}/>
      <InputColaborador pasoListaFiltrada={listaFiltrada}/>
    </div>
  );
}

export default App;
