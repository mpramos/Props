import React from 'react'

const Header = (props) => {
    let añoActual=2022
    let añoNacimiento=1999
    let edad= añoActual-añoNacimiento
    console.log(edad);
    let estado=edad>=18
    let estadoEdad= estado ? 'Puede votar': 'No puede votar'
  return (
    <div>
        <p>{estadoEdad}</p>
        <h1>{props.firstName}</h1>
        <p>{props.lastName}</p>
        <h2>{props.country}</h2>

    </div>
  )
}

export default Header


// const suma=(a,b)=>{
//     return a+b
// }
// export default suma