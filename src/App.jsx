import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgendaCreate from "./components/Agenda/AgendaCreate";
import Agenda from "./components/Agenda/Diary";
import FormAdd from "./components/Form/FormAdd";
import FormEdit from "./components/Form/FormEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AgendaCreate />} />
        <Route path="/agenda_contactos" element={<Agenda />} />
        <Route path="/form-add" element={<FormAdd />} />
        <Route
          path="/form-edit/:id/:name/:email/:phone/:address"
          element={<FormEdit />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
