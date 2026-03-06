import { Container, Row, Col, Card, Button, Form } from "react-bootstrap"
import '../App.css'
import marketAnalysis from "../assets/market-analysis.png"
import priceOptimization from "../assets/price-optimization.png"
import strategicSupport from "../assets/strategic-support.png"
export default function HomePage() {
  return (
    <>
      <section
        id="home"
        className="py-5"
        style={{
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Container>
          <Row>
            <Col lg={7}>
              <div className="text-white">
                <h1 className="display-4 fw-bold mb-3">
                  Aumenta il fatturato del tuo hotel indipendente con il Pricing Dinamico
                </h1>
                <p className="lead mb-4">
                  Aiutiamo proprietari e strutture a ottimizzare prezzi, occupazione e performance con un approccio professionale e orientato ai risultati.
                </p>
                <Button variant="light" size="lg" href="#contact">
                  Richiedi una Valutazione
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="why-rate-labs py-5 bg-light">
  <Container>
    <div className="text-center why-header">
      <h2 className="why-title">Perché scegliere Rate Labs</h2>
      <p className="why-subtitle mb-0">
        Soluzioni semplici, dati chiari e una strategia pensata per far crescere i tuoi risultati.
      </p>
    </div>

    <Row className="g-4 justify-content-center">
      <Col md={6} lg={4}>
        <Card className="why-card h-100 border-0 shadow-sm">
          <Card.Body className="why-card-body text-center">
            <div className="why-image-wrapper">
              <img
                src={marketAnalysis}
                alt="Analisi del mercato"
                className="why-image"
              />
            </div>
            <h4 className="why-card-title">Analisi del mercato</h4>
            <p className="why-card-text mb-0">
              Studiamo tendenze, domanda e concorrenza per posizionare al meglio il tuo immobile.
            </p>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} lg={4}>
        <Card className="why-card h-100 border-0 shadow-sm">
          <Card.Body className="why-card-body text-center">
            <div className="why-image-wrapper">
              <img
                src={priceOptimization}
                alt="Ottimizzazione prezzi"
                className="why-image"
              />
            </div>
            <h4 className="why-card-title">Ottimizzazione prezzi</h4>
            <p className="why-card-text mb-0">
              Definiamo tariffe dinamiche per massimizzare i ricavi e mantenere alta l’occupazione.
            </p>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} lg={4}>
        <Card className="why-card h-100 border-0 shadow-sm">
          <Card.Body className="why-card-body text-center">
            <div className="why-image-wrapper">
              <img
                src={strategicSupport}
                alt="Supporto strategico"
                className="why-image"
              />
            </div>
            <h4 className="why-card-title">Supporto strategico</h4>
            <p className="why-card-text mb-0">
              Ti accompagniamo con indicazioni pratiche per migliorare performance e risultati nel tempo.
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
</section>

      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="p-4 p-md-5 rounded shadow-sm bg-white border text-center">
                <h3 className="fw-bold mb-3">Iscriviti alla newsletter</h3>
                <p className="text-muted mb-4">
                  Ricevi aggiornamenti, consigli e insight sul revenue management direttamente nella tua email.
                </p>

                <Form>
                  <Row className="g-3 justify-content-center">
                    <Col md={8}>
                      <Form.Control
                        type="email"
                        placeholder="Inserisci la tua email"
                        size="lg"
                      />
                    </Col>
                    <Col md={4}>
                      <Button variant="dark" size="lg" className="w-100">
                        Iscriviti
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="contact" className="py-5 bg-light">
        <Container>
          <Row className="g-4 align-items-stretch">
            <Col lg={5}>
              <div className="h-100 p-4 p-md-5 rounded shadow-sm bg-white">
                <h3 className="fw-bold mb-3">Contattaci</h3>
                <p className="text-muted mb-4">
                  Vuoi migliorare le performance del tuo immobile? Scrivici e ti ricontatteremo al più presto.
                </p>

                <div className="mb-3">
                  <strong>Email</strong>
                  <p className="mb-0 text-muted">info@ratelabs.it</p>
                </div>

                <div className="mb-3">
                  <strong>Telefono</strong>
                  <p className="mb-0 text-muted">+39 000 000 0000</p>
                </div>

                <div>
                  <strong>Disponibilità</strong>
                  <p className="mb-0 text-muted">Lun - Ven | 09:00 - 18:00</p>
                </div>
              </div>
            </Col>

            <Col lg={7}>
              <div className="h-100 p-4 p-md-5 rounded shadow-sm bg-white">
                <h3 className="fw-bold mb-4">Prenota una chiamata</h3>

                <Form>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Il tuo nome" />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Cognome</Form.Label>
                        <Form.Control type="text" placeholder="Il tuo cognome" />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="La tua email" />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="text" placeholder="Il tuo numero" />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label>Messaggio</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          placeholder="Scrivi qui il tuo messaggio"
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Button variant="dark" size="lg" className="w-100">
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