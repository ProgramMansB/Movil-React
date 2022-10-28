import { useState, useEffect } from 'react'

export const ObtenerLocalStorage = () =>{

    const [VentasEntiti, setVentasEntiti] = useState([]);
    
    const getData = () => {
        return localStorage.getItem('VentasEntiti');
    }

    useEffect(()=> {
        setVentasEntiti(getData());
    },[]);

    return(
        <div>
            <button onClick={getData}>mostrar</button>
            <textarea value={VentasEntiti}></textarea>
        </div>
    )

}

export default ObtenerLocalStorage