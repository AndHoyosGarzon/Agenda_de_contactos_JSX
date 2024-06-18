import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function FormEdit() {
  //obtenemos el valor del id por parametros
  let { id, name, email, phone, address } = useParams();

  //estados que almacenan los cambios de los inputs
  const [nameMod, setNameMod] = useState("");
  const [phoneMod, setPhoneMod] = useState("");
  const [emailMod, setEmailMod] = useState("");
  const [addressMod, setAddressMod] = useState("");

  //Modificamos el contacto con el metodo Put
  function modifyUser() {
    if (nameMod && phoneMod && emailMod && addressMod) {
      const url = `https://playground.4geeks.com/contact/agendas/agendaAndresH/contacts/${id}`;
      const method = {
        method: "PUT",
        body: JSON.stringify({
          name: nameMod,
          phone: phoneMod,
          email: emailMod,
          address: addressMod,
        }),
        headers: { "Content-type": "application/json" },
      };
      fetch(url, method)
        .then((res) => {
          if (!res.ok) console.log(res.statusText);
          return res.json();
        })
        .then((data) => data)
        .catch((error) => error);
    } else {
      alert("no has modificado todos los campos");
    }

    document.getElementById("inputName").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputPhone").value = "";
    document.getElementById("inputAddress").value = "";
  }

  return (
    <div className="container mt-5 p-3 bg-light rounded">
      <h1 className="text-center ">Edit Contact</h1>
      <div className="mb-4">
        <label className="form-label">Full Name</label>
        <input
          id="inputName"
          type="text"
          className="form-control"
          defaultValue={name}
          onChange={(e) => setNameMod(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="form-label">Email</label>
        <input
          id="inputEmail"
          type="email"
          className="form-control"
          defaultValue={email}
          onChange={(e) => setEmailMod(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="form-label">Phone</label>
        <input
          id="inputPhone"
          type="text"
          className="form-control"
          defaultValue={phone}
          onChange={(e) => setPhoneMod(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="form-label">Address</label>
        <input
          id="inputAddress"
          type="text"
          className="form-control"
          defaultValue={address}
          onChange={(e) => setAddressMod(e.target.value)}
        />
      </div>
      <div className="text-center mb-4">
        <button
          onClick={() => {
            modifyUser();
          }}
          className="container btn btn-primary px-5 fw-bolder"
        >
          Modify User
        </button>
      </div>
      <Link to={"/agenda_contactos"} className="fw-semibold" href="#">
        Or get back to contacts
      </Link>
    </div>
  );
}

export default FormEdit;
