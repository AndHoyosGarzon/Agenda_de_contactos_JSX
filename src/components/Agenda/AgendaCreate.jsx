import { useState } from "react";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

function AgendaCreate() {
  const [agenda, setAgenda] = useState("");
  const navigate = useNavigate();

  function createAgenda() {
    const url = `https://playground.4geeks.com/contact/agendas/${agenda}`;
    const metods = {
      method: "POST",
      header: { "Content-type": "application/json" },
    };
    fetch(url, metods)
      .then((res) => {
        if (res.status === 400) console.log("La agenda ya esta creada");
        return res.json();
      })
      .then((data) => {
        console.log(data);
        console.log("se creo agenda");
      })
      .catch((error) => error);
    document.getElementById("nameAgenda").value = "";
    navigate("/form-add");
  }

  return (
    <div className={style.contentForm}>
      <p className="h1 fw-bolder">CREAR AGENDA DE CONTACTOS</p>
      <input
        id="nameAgenda"
        className="form-control text-center"
        type="text"
        placeholder="Escribe el nombre de tu agenda"
        onChange={(e) => setAgenda(e.target.value)}
      />
      <div>
        <button
          onClick={createAgenda}
          className="btn btn-primary px-5 fw-bolder border-black"
        >
          Crear agenda
        </button>
      </div>
    </div>
  );
}

export default AgendaCreate;
