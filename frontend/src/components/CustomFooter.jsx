import { Container, Row, Col, Nav } from "react-bootstrap"
import "./CustomFooter.css"

export default function CustomFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <Row className="footer-top">
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <div className="footer-heading">Servizi</div>
            <Nav className="footer-links flex-column">
              <Nav.Link href="#services">Revenue Management</Nav.Link>
              <Nav.Link href="#news">News & Insight</Nav.Link>
              <Nav.Link href="#about">Chi siamo</Nav.Link>
              <Nav.Link href="#contact">Prenota una chiamata</Nav.Link>
            </Nav>
          </Col>

          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <div className="footer-heading">Rate Labs</div>
            <Nav className="footer-links flex-column">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Col>

          <Col lg={4}>
            <div className="footer-heading">Informazioni</div>
            <Nav className="footer-links flex-column">
              <Nav.Link href="#newsletter">Newsletter</Nav.Link>
              <Nav.Link href="#contact">Supporto</Nav.Link>
              <Nav.Link href="#contact">Consulenza</Nav.Link>
              <Nav.Link href="#contact">Disponibilità</Nav.Link>
            </Nav>
          </Col>
        </Row>

        <div className="footer-divider"></div>

        <div className="footer-middle">
          <span className="footer-tagline">Strategia</span>
          <span className="footer-tagline">Crescita</span>
          <span className="footer-tagline">Risultati</span>
        </div>

        <div className="footer-brand-wrap">
          <div className="footer-brand">Rate Labs</div>
          <p className="footer-copy">
            © 2026, Rate Labs. Tutti i diritti riservati.
          </p>
        </div>
      </Container>
    </footer>
  )
}