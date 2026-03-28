import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StudyProvider } from "./context/SessionContext.jsx";

createRoot(document.getElementById("root")).render(
  <StudyProvider>
    <App />
  </StudyProvider>,
);
