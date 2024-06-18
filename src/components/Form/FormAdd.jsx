import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CardContext from "../context/cardContext";

function FormAdd() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //llamada al store
  const { cardActions } = useContext(CardContext);

  //POST crea User en la api y se renderiza en las cards de la vista raiz
  function saveUser() {
    if (name && email && phone && address) {
      const url =
        "https://playground.4geeks.com/contact/agendas/agendaAndresH/contacts";
      const method = {
        method: "POST",
        body: JSON.stringify({
          name: name,
          phone: phone,
          email: email,
          address: address,
        }),
        headers: { "Content-type": "Application/json" },
      };
      fetch(url, method)
        .then((res) => {
          if (!res.ok) console.log(res.statusText);
          return res.json();
        })
        .then((data) => {
          console.log(data);
          cardActions({ type: "add", payload: data });
        })
        .catch((error) => error);
    } else {
      alert("hay campos vacios");
    }

    document.getElementById("inputName").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputPhone").value = "";
    document.getElementById("inputAddress").value = "";
  }

  return (
    <div className="container mt-5 p-3 bg-light rounded">
      <h1 className="text-center ">Add New Contact</h1>
      <div className="mb-4">
        <label className="form-label">Full Name</label>
        <input
          id="inputName"
          type="text"
          className="form-control"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="form-label">Email</label>
        <input
          id="inputEmail"
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="form-label">Phone</label>
        <input
          id="inputPhone"
          type="text"
          className="form-control"
          placeholder="Enter phone"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="form-label">Address</label>
        <input
          id="inputAddress"
          type="text"
          className="form-control"
          placeholder="Enter address"
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="text-center mb-4">
        <button
          onClick={() => saveUser()}
          className="container btn btn-primary px-5 fw-bolder"
        >
          save
        </button>
      </div>
      <Link
        onClick={() => cardActions({ type: "clean" })}
        to={"/agenda_contactos"}
        className="fw-semibold"
        href="#"
      >
        Or get back to contacts
      </Link>
    </div>
  );
}

export default FormAdd;
