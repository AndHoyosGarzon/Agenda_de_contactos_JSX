import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardsProvider } from "./components/context/cardContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CardsProvider>
    <App />
  </CardsProvider>
);
