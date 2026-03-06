import "./CustomNavbar.css"
import { Navbar, Container, Button } from "react-bootstrap"
import logo from "../assets/ratelabs-icon-navbar.png"
import { FaWhatsapp } from "react-icons/fa"

export default function CustomNavbar() {
  const whatsappNumber = "393477919455"
  const whatsappText = encodeURIComponent("Ciao! Vorrei maggiori informazioni sui vostri servizi.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`

  return (
    <Navbar bg="white" sticky="top" className="shadow-sm py-3">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2 m-0">
          <img src={logo} alt="Rate Labs logo" className="navbar-logo" />
          <span className="fw-semibold">Rate Labs</span>
        </Navbar.Brand>

        <Button
          as="a"
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          variant="success"
          className="rounded-pill d-flex align-items-center gap-2"
        >
          <FaWhatsapp size={18} />
          <span>Scrivici su WhatsApp</span>
        </Button>
      </Container>
    </Navbar>
  )
}