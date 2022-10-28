import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'


function App() {

  const [json, setJson] = useState([]);
  const [items, setItems] = useState([]);

  const api = axios.create({
    baseURL: 'https://localhost:44392/api/Articulos'
  })

  useEffect(() => {
    api.get('/').then(res => {
      setJson(res.data);
    });
    localStorage.setItem('VentasEntiti', JSON.stringify(VentasEntiti));
    setItems(getData());
  })


  const getData = () => {
    return localStorage.getItem('VentasEntiti');
  }
  
  const Guardar = () => {
    let venta= JSON.parse(items);
    
    axios.post('https://localhost:44392/api/Venta', venta ).then(function (response) {
      console.log(response);
    })
    
  }

  const [VentasEntiti, setVentasEntiti] = useState([]);

  const saveLocal = (json) => {
    let num = document.getElementById(json.cod_barras).value;

    let venta = {
      cod_barras: json.cod_barras,
      cantidad: num
    };

    setVentasEntiti([...VentasEntiti, venta]);

  }

  return (

    <div className='container'>
      <h2>Lista de Articulos</h2>
      <hr />
      <div className="container">

        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Buscar articulo" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
          <button className="btn btn-outline-primary" type="button" id="button-addon2">Buscar</button>
        </div>
      </div>

      <div className='row mb-2'>

      </div>
      {json.map(json => {

        return <div className='row' key={json.cod_barras}>
          <div className='card mb-3'>
            <div className="card-header">
              <h5>{json.cod_barras}</h5>
            </div>
            <div className="card-body">
              <img src="../src/img/producto.jpg" alt="" className='mb-3' />

              <h4 className="card-title mt-2 mb-4">{json.descripcion}</h4>
              <div className='row'>
                <p className="col col-6">Stok: {json.stock}</p>
                <p className="col col-6">Precio compra: {json.precio_compra}</p>
              </div>
              <div className='row'>
                <p className="col col-6">Fecha: {json.fecha_registro}</p>
                <p className="col col-6">Precio venta: {json.precio_venta}</p>
              </div>


              <div className='row'>
                <div className='col-6 me-3'>
                  <select className="form-select" id={json.cod_barras} name='cantidad'>
                    <option selected>Cantidad</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select></div>


                <button className="btn btn-primary col-auto me-3" onClick={() => saveLocal(json)}>
                  Agregar</button>
              </div>
            </div>
          </div>
        </div>
      })}
      <button onClick={Guardar}>Agregar</button>
    </div>
  )
}


export default App
