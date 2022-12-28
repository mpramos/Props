import './App.css';
import Header from './Header';
function App() {

  let firstName="Susana"
  let lastName="Ramirez"
  let country="Bolivia"
  // let añoActual=2022
  // let añoNacimiento=2019
  // let edad= añoActual-añoNacimiento
  // console.log(edad);
  // let estado=edad>=18
  console.log(estado);
  return (
   <>
    <Header 
    firstName={firstName}
    lastName={lastName}
    country={country}
    // estado={estado}
    />
   </>
  );
}

export default App;
