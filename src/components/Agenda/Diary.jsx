import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { TiPencil } from "react-icons/ti";

function Diary() {
  const [agenda, setAgenda] = useState([]);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  //crea agenda
  function createAgenda() {
    const url = `https://playground.4geeks.com/contact/agendas/agendaAndresH`;
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
        console.log("se creo agenda", data);
        setAgenda(data.contacts);
      })
      .catch((error) => error);
    navigate("/form-add");
  }

  //elimina agenda
  function deleteAgenda() {
    const url = `https://playground.4geeks.com/contact/agendas/agendaAndresH`;
    const metods = {
      method: "DELETE",
      header: { "Content-type": "application/json" },
    };
    fetch(url, metods)
      .then((res) => {
        if (!res.ok) console.log("No se pudo eliminar la agenda");
        return res.json();
      })
      .then((data) => {
        console.log("se elimino la agenda", data);
        setAgenda(null);
        setUser(null);
      })
      .catch((error) => error);
  }

  //peticion get que crea cards de users
  useEffect(() => {
    async function getContacts() {
      const url = "https://playground.4geeks.com/contact/agendas/agendaAndresH";
      await fetch(url)
        .then((res) => {
          if (!res.ok) console.log(res.statusText);
          return res.json();
        })
        .then((data) => {
          setUser(data.contacts);
        })
        .catch((error) => error);
    }

    getContacts();
  }, [user]);

  //navegacion para formulario de agregar contacto
  function handleFormAdd() {
    navigate("/form-add");
  }
  //navegacion para formulario editar contacto
  function handleFormEdit(id, name, email, phone, address) {
    navigate(`/form-edit/${id}/${name}/${email}/${phone}/${address}`);
  }

  //delete cards
  function handleDeleteCard(id) {
    const url = `https://playground.4geeks.com/contact/agendas/agendaAndresH/contacts/${id}`;
    const method = {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    };
    fetch(url, method)
      .then((res) => {
        if (!res.ok) console.log(res.statusText);
        console.log(res);
        return res.json();
      })
      .then((data) => data)
      .catch((error) => error);
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <div className="text-start my-5">
          {agenda && agenda.length >= 0 ? (
            <button onClick={deleteAgenda} className="btn btn-danger fw-bolder">
              Delete Agenda
            </button>
          ) : (
            <button
              onClick={createAgenda}
              className="btn btn-primary fw-bolder"
            >
              Create Agenda
            </button>
          )}
        </div>
        <div className="text-end my-5">
          <button onClick={handleFormAdd} className="btn btn-success fw-bolder">
            Add New Contact
          </button>
        </div>
      </div>
      <div className="my-4">
        {user &&
          user.map((el) => {
            return (
              <Card
                key={el.id}
                name={el.name}
                email={el.email}
                location={el.address}
                phone={el.phone}
                edit={
                  <TiPencil
                    onClick={() =>
                      handleFormEdit(
                        el.id,
                        el.name,
                        el.email,
                        el.phone,
                        el.address
                      )
                    }
                    color="blue"
                  />
                }
                clear={
                  <FaTrashAlt
                    onClick={() => {
                      handleDeleteCard(el.id);
                    }}
                    color="darkred"
                  />
                }
              />
            );
          })}
      </div>
    </div>
  );
}

export default Diary;
/***
 *
 *
 *
 *
 *
 *
 *
 */
