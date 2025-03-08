//esto es un componente de prueba

import React from 'react'   //importar react
import './componente.css'    //importar archivo css de componente
import { useState } from 'react' //importar useState de react


const Componente = () => {  //crear componente
    const [count, setCount] = useState(0) //crear estado count y setCount
    return (  //retornar
        <div className="componente">  {/*div con clase componente*/}
            <h1>Componente</h1>  {/*h1 con texto Componente*/}
            <p>Contador: {count}</p>  {/*p con texto Contador: y el valor de count*/}
            <button onClick={() => setCount(count + 1)}>Incrementar</button>  {/*botón que al hacer click incrementa el valor de count*/}
        </div>  //fin div
    )  //fin return
}  //fin componente