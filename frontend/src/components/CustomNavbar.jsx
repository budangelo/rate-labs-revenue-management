import { useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa"
import logo from "../assets/ratelabs-icon-navbar2.png"
import "./CustomNavbar.css"

export default function CustomNavbar() {
  const [showMenu, setShowMenu] = useState(false)

  const handleClose = () => setShowMenu(false)
  const handleShow = () => setShowMenu(true)

  const whatsappNumber = "393477919455"
  const whatsappMessage = "Ciao, vorrei maggiori informazioni sui servizi di Rate Labs."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <>
      <Navbar className="floating-bottom-navbar">
        <Container className="justify-content-center">
          <div className="floating-navbar-inner">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="floating-nav-action"
              aria-label="Chat WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a href="#home" className="floating-brand" aria-label="Rate Labs home">
              <img src={logo} alt="Rate Labs logo" className="floating-logo" />
            </a>

            <button
              type="button"
              className="floating-nav-action floating-menu-btn"
              onClick={handleShow}
              aria-label="Open menu"
              aria-expanded={showMenu}
            >
              <FaBars />
            </button>
          </div>
        </Container>
      </Navbar>

      <div
        className={`menu-backdrop ${showMenu ? "show" : ""}`}
        onClick={handleClose}
        aria-hidden="true"
      />

      <aside
        className={`center-menu-panel ${showMenu ? "show" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
      >
        <button type="button" className="center-menu-close" onClick={handleClose} aria-label="Close menu">
          <FaTimes />
        </button>

        <Nav className="flex-column center-menu-nav">
          <Nav.Link href="#home" onClick={handleClose}>Home</Nav.Link>
          <Nav.Link href="#about" onClick={handleClose}>About Us</Nav.Link>
          <Nav.Link href="#services" onClick={handleClose}>Services</Nav.Link>
          <Nav.Link href="#contact" onClick={handleClose}>Contact</Nav.Link>
        </Nav>
      </aside>
    </>
  )
}
