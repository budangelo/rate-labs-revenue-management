import { useState } from "react"
import { Container, Row, Col, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./CustomFooter.css"

export default function CustomFooter() {
  const [isDeveloperCardOpen, setIsDeveloperCardOpen] = useState(false)
  const founderLinkedIn = "https://www.linkedin.com/in/INSERISCI-LINK-BRIAN"
  const developerLinkedIn = "https://www.linkedin.com/in/INSERISCI-TUO-LINKEDIN"
  const developerEmail = "tuamail@example.com"

  return (
    <footer className="site-footer">
      <Container>
        <Row className="footer-top justify-content-between align-items-start align-items-lg-end g-4">
          <Col lg={6}>
            <div className="footer-heading">Informazioni</div>

            <Nav className="footer-links flex-column">
              <Nav.Link as={Link} to="/privacy">
                Privacy
              </Nav.Link>

              <Nav.Link href={founderLinkedIn} target="_blank" rel="noreferrer">
                Founder
              </Nav.Link>

              <Nav.Link as={Link} to="/#contact">
                Prenota una chiamata
              </Nav.Link>
            </Nav>
          </Col>

          <Col lg={5} className="footer-dev-col">
            <div
              className={`footer-dev-card ${isDeveloperCardOpen ? "is-open" : ""}`}
              onClick={() => setIsDeveloperCardOpen((prev) => !prev)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault()
                  setIsDeveloperCardOpen((prev) => !prev)
                }
              }}
            >
              <div className="footer-dev-top">
                <div>
                  <span className="footer-dev-badge">Design & sviluppo web</span>
                  <h4 className="footer-dev-name">Angelo Buda</h4>
                </div>
          
                <span className={`footer-dev-plus ${isDeveloperCardOpen ? "is-open" : ""}`}>
                  +
                </span>
              </div>
          
              <div className={`footer-dev-details ${isDeveloperCardOpen ? "is-open" : ""}`}>
                <a
                  href={developerLinkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-dev-link"
                  onClick={(event) => event.stopPropagation()}
                >
                  LinkedIn
                </a>
          
                <a
                  href={`mailto:${developerEmail}`}
                  className="footer-dev-link"
                  onClick={(event) => event.stopPropagation()}
                >
                  {developerEmail}
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <div className="footer-divider"></div>

        <div className="footer-middle">
          <span className="footer-tagline">Strategia</span>
          <span className="footer-tagline">Crescita</span>
          <span className="footer-tagline">Risultati</span>
        </div>

        <div className="footer-brand-wrap">
          <img
            src="/Logo-Rate-Labs.png"
            alt="Rate Labs logo"
            className="footer-brand-logo"
          />

          <p className="footer-copy">
            © 2026, Rate Labs. Tutti i diritti riservati.
          </p>

          <p className="footer-vat">
            P.IVA: 12922040014
          </p>
        </div>
      </Container>
    </footer>
  )
}