import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import App from "./App.jsx"

const routerBase = import.meta.env.DEV ? "/" : "/rate-labs-revenue-management/"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={routerBase}>
      <App />
    </BrowserRouter>
  </StrictMode>
)