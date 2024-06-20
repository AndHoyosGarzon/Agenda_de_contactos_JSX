import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agenda from "./components/Agenda/Diary";
import FormAdd from "./components/Form/FormAdd";
import FormEdit from "./components/Form/FormEdit";
import Diary from "./components/Agenda/Diary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Diary />} />
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
