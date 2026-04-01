import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import CustomNavbar from "./components/CustomNavbar.jsx"
import CustomFooter from "./components/CustomFooter.jsx"
import HomePage from "./pages/HomePage.jsx"
import AuthorsPage from "./pages/AuthorsPage.jsx"

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 100)
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [location])

  return null
}

export default function App() {
  return (
    <>
      <CustomNavbar />
      <ScrollToHash />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <CustomFooter />
            </>
          }
        />
        <Route path="/authors" element={<AuthorsPage />} />
      </Routes>
    </>
  )
}