import { useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa"
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
            <Link to="/" className="floating-brand" aria-label="Rate Labs home" onClick={handleClose}>
              <img
                src={`${import.meta.env.BASE_URL}Logo-Rate-Labs.png`}
                alt="Rate Labs logo"
                className="floating-logo"
              />
            </Link>
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
          <Nav.Link as={Link} to="/" onClick={handleClose}>Home</Nav.Link>
          <Nav.Link as={Link} to="/#about" onClick={handleClose}>About Us</Nav.Link>
          <Nav.Link as={Link} to="/#services" onClick={handleClose}>Method</Nav.Link>
          <Nav.Link as={Link} to="/#contact" onClick={handleClose}>Contact</Nav.Link>
          <Nav.Link as={Link} to="/authors" onClick={handleClose}>Authors</Nav.Link>
        </Nav>
      </aside>
    </>
  )
}
