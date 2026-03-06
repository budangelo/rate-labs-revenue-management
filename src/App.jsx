import './App.css'
import CustomNavbar from "./components/CustomNavbar.jsx"
import CustomFooter from "./components/CustomFooter.jsx"
import HomePage from "./pages/HomePage.jsx"
export default function App() {
  return (
<>
  <CustomNavbar />
    <main className="flex-grow-1">
      <HomePage />
    </main>
    <CustomFooter />
  </>
  )
}
