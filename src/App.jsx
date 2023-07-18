import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [run, setRun] = useState("");
  const [codigo, setCodigo] = useState("");
  const [nombre, setNombre] = useState("");
  const [giro, setGiro] = useState("");
  const [runrepresentante, setRunrepresentante] = useState("");
  const [nombrecompleto, setNombrecompleto] = useState("");
  const [imagen, setImagen] = useState("");
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
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
