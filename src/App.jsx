import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [run, setRun] = useState("");
  const [nombre, setNombre] = useState("");
  const [giro, setGiro] = useState("");
  const [runrepresentante, setRunrepresentante] = useState("");
  const [nombrecompleto, setNombrecompleto] = useState("");
  const [imagen, setImagen] = useState("");
  const [codigo, setCodigo] = useState("");
  const [fecha, setFecha] = useState("");
  const [entrega, setEntrega] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [tipo, setTipo] = useState("");
  const [precio, setPrecio] = useState("");
  const [estado, setEstado] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className="nav">Solicitud de Almacigos</h1>
      <div className="centrargrip">
        <form onSubmit={handlesubmit}>
          <div className="grid-container">
            <div className="centrardiv">
              <div className="div">
                <p className="texto">Run Empresa</p>
                <div className="cajainput">
                  <input
                    className="input"
                    type="text"
                    name="Run Empresa"
                    value={run}
                    onChange={(e) => setRun(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="div">
                <p className="texto">Nombre Empresa</p>
                <div className="cajainput">
                  <input
                    className="input"
                    type="text"
                    name="Nombre Empresa"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="div">
                <p className="texto">Giro Empresa</p>
                <div className="cajainput">
                  <input
                    className="input"
                    type="text"
                    name="Giro Empresa"
                    value={giro}
                    onChange={(e) => setGiro(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="div">
                <p className="texto">RUN Representante Empresa</p>
                <div className="cajainput">
                  <input
                    className="input"
                    type="text"
                    name="RUN Representante Empresa"
                    value={runrepresentante}
                    onChange={(e) => setRunrepresentante(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="div">
                <p className="texto">Nombre Completo Representante</p>
                <div className="cajainput">
                  <input
                    className="input"
                    type="text"
                    name="Nombre Completo Representante"
                    value={nombrecompleto}
                    onChange={(e) => setNombrecompleto(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="div">
                <p className="texto">Imagen Empresa</p>
                <div className="cajainput">
                  <input
                    className="input"
                    type="text"
                    name="Nombre Completo Representante"
                    value={imagen}
                    onChange={(e) => setImagen(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="centrardiv">
                <div className="div">
                  <p className="texto">Codigo Solicitud</p>
                  <div className="cajainput">
                    <input
                      className="input"
                      type="text"
                      name="codigo solicitud"
                      value={codigo}
                      onChange={(e) => setCodigo(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="div">
                  <p className="texto">Fecha Solicitud</p>
                  <div className="cajainput">
                    <input
                      className="input"
                      type="date"
                      id="fecha"
                      name="fecha"
                      value={fecha}
                      onChange={(e) => setFecha(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="div">
                  <p className="texto">Fecha Entrega Almacigos</p>
                  <div className="cajainput">
                    <input
                      className="input"
                      type="date"
                      id="entrega"
                      name="entrega"
                      value={entrega}
                      onChange={(e) => setEntrega(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="div">
                  <p className="texto">Cantidad de Almacigos</p>
                  <div className="cajainput">
                    <input
                      className="input"
                      type="text"
                      name="cantidad"
                      value={cantidad}
                      onChange={(e) => setCantidad(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="div">
                  <p className="texto">Tipo Almacigos</p>
                  <div className="cajainput">
                    <input
                      className="input"
                      type="text"
                      name="Nombre Completo Representante"
                      value={tipo}
                      onChange={(e) => setTipo(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="div">
                  <p className="texto">Precio de Venta</p>
                  <div className="cajainput">
                    <input
                      className="input"
                      type="text"
                      name="precio"
                      value={precio}
                      onChange={(e) => setPrecio(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="div">
                  <p className="texto">estado de solicitud</p>
                  <div className="cajainput">
                    <input
                      className="input"
                      type="text"
                      name="estado"
                      value={estado}
                      onChange={(e) => setEstado(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="boton" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
