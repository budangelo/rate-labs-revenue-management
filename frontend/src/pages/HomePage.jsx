import { Container, Row, Col, Card, Button, Form } from "react-bootstrap"
import marketAnalysis from "../assets/ragnar-beaverson-4pWMzaiw4ek-unsplash.jpg"
import priceOptimization from "../assets/annie-spratt-0cPSKUEANqU-unsplash.jpg"
import strategicSupport from "../assets/darien-attridge-byZUF1EMG9I-unsplash.jpg"
import aboutImage from "../assets/lucjano-kuci-ldJsES6F5d4-unsplash.jpg"
import newsletterImage from "../assets/mehdi-shiri--XdV3YSGHLw-unsplash.jpg"
import { useEffect, useRef, useState } from "react"
import newsImage1 from "../assets/markus-winkler-IrRbSND5EUc-unsplash.jpg"


export default function HomePage() {
  const whySectionRef = useRef(null)
const [whyVisible, setWhyVisible] = useState(false)
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setWhyVisible(true)
      }
    },
    { threshold: 0.2 }
  )

  if (whySectionRef.current) {
    observer.observe(whySectionRef.current)
  }

  return () => {
    if (whySectionRef.current) {
      observer.unobserve(whySectionRef.current)
    }
  }
}, [])
const newsItems = [
  { id: 1, image: newsImage1, text: "Pricing dinamico per aumentare il RevPAR" },
  { id: 2, image: newsImage1, text: "Analisi della concorrenza in tempo reale" },
  { id: 3, image: newsImage1, text: "Strategie per migliorare l’occupazione" },
  { id: 4, image: newsImage1, text: "Decisioni basate sui dati, non sull’istinto" },
  { id: 5, image: newsImage1, text: "Monitoraggio delle performance giornaliere" },
  { id: 6, image: newsImage1, text: "Ottimizzazione dei prezzi nei periodi chiave" },
  { id: 7, image: newsImage1, text: "Supporto pratico per hotel indipendenti" },
  { id: 8, image: newsImage1, text: "Più controllo sui ricavi della struttura" },
  { id: 9, image: newsImage1, text: "Lettura chiara dei trend di mercato" },
  { id: 10, image: newsImage1, text: "Strategie semplici, risultati concreti" },
  { id: 11, image: newsImage1, text: "Revenue management su misura" },
  { id: 12, image: newsImage1, text: "Visione strategica per crescere nel tempo" }
]

const newsLoop = [...newsItems, ...newsItems]

const newsletterRef = useRef(null)
const [newsletterVisible, setNewsletterVisible] = useState(false)

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setNewsletterVisible(true)
      }
    },
    { threshold: 0.2 }
  )

  if (newsletterRef.current) {
    observer.observe(newsletterRef.current)
  }

  return () => {
    if (newsletterRef.current) {
      observer.unobserve(newsletterRef.current)
    }
  }
}, [])
  return (
    <>
      <section id="home" className="hero-section"> 
          <Container className="hero-content">
            <Row className="min-vh-100 align-items-center">
              <Col lg={7}>
                <div className="text-white">
                  <h1 className="hero-title hero-fade-in">
                    Aumenta il fatturato del tuo hotel indipendente con il Pricing Dinamico
                  </h1>
        
                  <p className="hero-text hero-slide-left">
                    Aiutiamo proprietari e strutture a ottimizzare prezzi, occupazione e performance con un approccio professionale e orientato ai risultati.
                  </p>
        
                  <Button variant="light" size="lg" href="#contact" className="hero-btn hero-slide-left-delay">
                    Richiedi una Valutazione
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
      </section>
<section className="why-rate-labs py-5" ref={whySectionRef}>
  <Container>
    <div className="text-center why-header">
      <h2 className={`why-title reveal-up ${whyVisible ? "is-visible" : ""}`}>
        Perché scegliere Rate Labs
      </h2>

      <p className={`why-subtitle mb-4 reveal-up delay-1 ${whyVisible ? "is-visible" : ""}`}>
        Soluzioni semplici, dati chiari e una strategia pensata per far crescere i tuoi risultati.
      </p>
    </div>

    <Row className="g-2 mt-4 justify-content-center">
      <Col md={6} lg={4}>
        <article className={`why-hover-card reveal-up delay-2 ${whyVisible ? "is-visible" : ""}`}>
          <img
            src={marketAnalysis}
            alt="Analisi del mercato"
            className="why-hover-image"
          />
          <div className="why-hover-overlay"></div>
          <div className="why-hover-top">
            <h3 className="why-hover-title">Analisi del mercato</h3>
          </div>
          <div className="why-hover-content">
            <span className="why-hover-text">
              Studiamo tendenze, domanda e concorrenza per posizionare al meglio il tuo immobile.
            </span>
          </div>
        </article>
      </Col>

      <Col md={6} lg={4}>
        <article className={`why-hover-card reveal-up delay-3 ${whyVisible ? "is-visible" : ""}`}>
          <img
            src={priceOptimization}
            alt="Ottimizzazione prezzi"
            className="why-hover-image"
          />
          <div className="why-hover-overlay"></div>
          <div className="why-hover-top">
            <h3 className="why-hover-title">Ottimizzazione prezzi</h3>
          </div>
          <div className="why-hover-content">
            <span className="why-hover-text">
              Definiamo tariffe dinamiche per massimizzare i ricavi e mantenere alta l’occupazione.
            </span>
          </div>
        </article>
      </Col>

      <Col md={6} lg={4}>
        <article className={`why-hover-card reveal-up delay-4 ${whyVisible ? "is-visible" : ""}`}>
          <img
            src={strategicSupport}
            alt="Supporto strategico"
            className="why-hover-image"
          />
          <div className="why-hover-overlay"></div>
          <div className="why-hover-top">
            <h3 className="why-hover-title">Supporto strategico</h3>
          </div>
          <div className="why-hover-content">
            <span className="why-hover-text">
              Ti accompagniamo con indicazioni pratiche per migliorare performance e risultati nel tempo.
            </span>
          </div>
        </article>
      </Col>
    </Row>
  </Container>
</section>
<section
  id="about"
  className="about-band-section"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42)), url(${aboutImage})`
  }}
>
  <Container fluid className="about-band-container">
    <div className="about-band-content">
      <div className="about-band-left">
        <p className="about-band-label">Chi siamo</p>
        <h2 className="about-band-title">
          Strategia, dati e visione per valorizzare ogni struttura.
        </h2>
      </div>

      <div className="about-band-right">
        <p className="about-band-text">
          Rate Labs nasce con l’obiettivo di aiutare hotel indipendenti e
          proprietà ricettive a prendere decisioni più intelligenti sul pricing,
          sull’occupazione e sulla crescita. Uniamo analisi di mercato,
          approccio pratico e supporto strategico per trasformare i dati in
          risultati concreti.
        </p>
      </div>
    </div>
  </Container>
</section>
<section className="news-ticker-section">
  <Container fluid>
    <div className="news-ticker-header text-center">
      <h2 className="news-ticker-title">News</h2>
      <p className="news-ticker-subtitle">
        Insight, trend e spunti dal mondo del revenue management.
      </p>
    </div>

    <div className="news-ticker-wrapper">
      <div className="news-ticker-track">
        {newsLoop.map((item, index) => (
          <article className="news-pill-card rounded-3" key={`${item.id}-${index}`}>
            <div className="news-pill-image-wrapper">
              <img src={item.image} alt={item.text} className="news-pill-image" />
            </div>
            <div className="news-pill-body">
              <span className="news-pill-text">{item.text}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </Container>
</section>
<section
  className={`newsletter-section py-5 reveal-up-soft ${newsletterVisible ? "is-visible" : ""}`}
  ref={newsletterRef}
>
  <Container>
    <Row className="justify-content-center">
      <Col xl={10}>
        <div className="newsletter-card overflow-hidden">
          <Row className="g-0 align-items-stretch">
            <Col lg={7}>
              <div className="newsletter-content h-100">
                <h3 className="newsletter-title">Iscriviti alla newsletter</h3>

                <p className="newsletter-text">
                  Ricevi aggiornamenti, consigli e insight sul revenue management direttamente nella tua email.
                </p>

                <Form>
                  <Row className="g-3">
                    <Col md={8}>
                      <Form.Control
                        type="email"
                        placeholder="Inserisci la tua email"
                        size="lg"
                        className="newsletter-input"
                      />
                    </Col>

                    <Col md={4}>
                      <Button
                        type="submit"
                        size="lg"
                        className="newsletter-btn w-100"
                      >
                        Iscriviti
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>

            <Col lg={5}>
              <div className="newsletter-image-wrapper">
                <img
                  src={newsletterImage}
                  alt="Newsletter Rate Labs"
                  className="newsletter-image"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </Container>
</section>
<section id="contact" className="contact-form-section py-5">
  <Container>
    <Row className="justify-content-center">
      <Col lg={9} xl={8}>
        <div className="contact-form-card">
          <h3 className="contact-form-title">Prenota una chiamata</h3>

          <Form>
            <Row className="g-3 custom-input-form">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Il tuo nome"
                    className="contact-input"
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Cognome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Il tuo cognome"
                    className="contact-input"
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="La tua email"
                    className="contact-input"
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Il tuo numero"
                    className="contact-input"
                  />
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Group>
                  <Form.Label>Messaggio</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="Scrivi qui il tuo messaggio"
                    className="contact-input contact-textarea"
                  />
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Button type="submit" className="contact-submit-btn w-100">
                  Invia richiesta
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Col>
    </Row>
  </Container>
</section>
    </>
  )
}