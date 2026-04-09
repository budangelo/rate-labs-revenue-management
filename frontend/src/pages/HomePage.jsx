import { Container, Row, Col, Button, Form } from "react-bootstrap"
import marketAnalysis from "../assets/pexels-arina-krasnikova-5951751.jpg"
import priceOptimization from "../assets/pexels-darshan394-2695392.jpg"
import strategicSupport from "../assets/goran-ivos-iY9g8EcikeY-unsplash.jpg"
import aboutImage from "../assets/bg-about-us.jpg"
import newsletterImage from "../assets/mehdi-shiri--XdV3YSGHLw-unsplash.jpg"
import newsImage1 from "../assets/01.jpeg"
import newsImage2 from "../assets/02.jpeg"
import newsImage3 from "../assets/03.jpeg"
import newsImage4 from "../assets/04.jpeg"
import newsImage5 from "../assets/05.jpeg"
import newsImage6 from "../assets/06.jpeg"
import newsImage7 from "../assets/07.jpeg"
import newsImage8 from "../assets/08.jpeg"
import newsImage9 from "../assets/09.jpeg"
import newsImage10 from "../assets/10.jpeg"
import newsImage11 from "../assets/11.jpeg"
import newsImage12 from "../assets/12.jpeg"
import imagebgform from "../assets/sole-d-alessandro-g-srxicXz3cxU-unsplash.jpg"
import { useEffect, useRef, useState } from "react"

export default function HomePage() {
  //----------------------  CARDS   ------------------
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
  //----------------------  NEWS SECTION  ------------------
  const newsItems = [
    { id: 1, image: newsImage1, title: "Il mito del prezzo fisso: Perché stai perdendo prenotazioni dirette", text: "Mantenere listini prezzi statici o basati solo sull'alta/bassa stagione è il modo più rapido per regalare margini ai tuoi competitor. Il mercato di oggi è fluido: la domanda cambia per eventi, meteo e trend di volo. Un approccio di Dynamic Pricing ti permette di alzare le tariffe quando la domanda è in picco e di stimolare l'occupazione quando è piatta. Non vendere mai una camera a 100€ se il mercato è disposto a pagarne 150€. È tempo di far lavorare i prezzi per te, non viceversa." },
    { id: 2, image: newsImage2, title: "Disintermediazione strategica: Meno commissioni, più margine", text: "Le OTA (Booking, Expedia) sono vetrine eccellenti, ma non possono essere la tua unica fonte di fatturato. Un hotel indipendente sano deve mirare a un equilibrio. Il Revenue Management non è solo 'cambiare i prezzi', ma ottimizzare i canali di distribuzione. Attraverso tariffe opache, pacchetti esclusivi sul sito web e politiche di cancellazione mirate, puoi spostare gradualmente le prenotazioni sul tuo canale diretto, aumentando il margine netto (RevPAR) di ogni singola camera venduta." },
    { id: 3, image: newsImage3, title: "L'istinto non basta più: Perché i dati battono l'esperienza", text: "'Ho sempre fatto così e ha sempre funzionato' è la frase più pericolosa nell'hotellerie moderna. L'istinto e la conoscenza del territorio dell'albergatore sono fondamentali, ma senza l'analisi dei dati (Pace, Pick-up, Booking Window) si naviga a vista. Affidarsi a dati storici e previsionali permette di anticipare i trend anziché rincorrerli. Le decisioni basate sui numeri riducono l'ansia e massimizzano i profitti in modo matematico." },
    { id: 4, image: newsImage4, title: "Oltre il tuo vicino: Come analizzare la vera concorrenza", text: "Il tuo vero competitor non è sempre l'hotel di fronte al tuo. Il comp-set (competitive set) si basa su chi il tuo potenziale ospite sta valutando come alternativa. Potrebbe essere una struttura di categoria diversa o persino in una zona adiacente. Analizzare i prezzi dei veri competitor in tempo reale ti permette di posizionarti strategicamente: puoi scegliere se essere il 'value for money' della zona o posizionarti come opzione premium quando gli altri riempiono." },
    { id: 5, image: newsImage5, title: "Ottimizzare il 'LOS': Il segreto per massimizzare il RevPAR", text: "Riempire l'hotel per un solo sabato notte a un prezzo altissimo potrebbe sembrare un successo, ma se ti lascia con la domenica e il lunedì vuoti, hai perso soldi. L'ottimizzazione della durata del soggiorno (LOS) tramite restrizioni come il Minimum Stay ti aiuta a spalmare l'occupazione sui giorni di spalla (shoulder days). Un Revenue intelligente sacrifica un picco giornaliero per garantire un profitto settimanale molto più elevato e costante." },
    { id: 6, image: newsImage6, title: "Non tutti i clienti sono uguali: La potenza della segmentazione", text: "Il cliente corporate prenota all'ultimo minuto ed è meno sensibile al prezzo. La famiglia prenota mesi prima e cerca valore. Cercare di attrarre tutti con la stessa tariffa è un errore. Segmentare il mercato significa creare strategie di prezzo, offerte e restrizioni specifiche per ogni tipologia di ospite. Quando capisci chi sta prenotando e perché, puoi massimizzare la spesa di ogni segmento senza cannibalizzare le tue entrate." },
    { id: 7, image: newsImage7, title: "Leggere il Pick-up: Come reagire prima che sia troppo tardi", text: "Il Pick-up è la velocità con cui ricevi le prenotazioni per una determinata data futura. Se per il prossimo ponte festivo il tuo hotel si sta riempiendo troppo velocemente rispetto allo scorso anno, i tuoi prezzi sono troppo bassi. Se si riempie troppo lentamente, sei fuori mercato. Monitorare quotidianamente questa metrica ti permette di correggere il tiro in tempo reale, assicurandoti di arrivare a ridosso della data con la massima tariffa possibile per le ultime camere." },
    { id: 8, image: newsImage8, title: "Policy di cancellazione: Trovare l'equilibrio per non perdere ricavi", text: "Una politica di cancellazione troppo rigida allontana le conversioni. Una troppo flessibile genera disdette dell'ultimo minuto e camere invendute. La chiave del Revenue Management è usare le policy come leva tariffaria. Offrire tariffe Non Rimborsabili scontate crea un flusso di cassa immediato e sicurezza, mentre le tariffe flessibili (vendute a un premium price) catturano il cliente indeciso. Il giusto mix protegge il tuo inventario." },
    { id: 9, image: newsImage9, title: "Oltre la camera: Il Total Revenue Management per indipendenti", text: "Perché fermarsi al prezzo della camera? Il Total Revenue Management si concentra sull'ottimizzazione della spesa totale dell'ospite. Ristorante, SPA, parcheggio, early check-in o up-selling della camera: ogni touchpoint è un'opportunità di profitto. Gestire i prezzi dei servizi ancillari con la stessa cura con cui si gestiscono le camere può aumentare drasticamente il fatturato netto della struttura, indipendentemente dalla stagione." },
    { id: 10, image: newsImage10, title: "Capitalizzare gli eventi locali: Molto più che alzare i prezzi", text: "Concerti, fiere ed eventi sportivi sono mini-alte stagioni. Ma limitarsi ad alzare i prezzi a dismisura mesi prima rischia di lasciarti vuoto. La strategia corretta prevede di analizzare il comportamento di prenotazione legato a quell'evento specifico: applicare restrizioni di soggiorno, vendere prima ai target altospendenti e gestire l'inventario in modo da non saturare l'hotel troppo presto. Il tempismo è tutto." },
    { id: 11, image: newsImage11, title: "Overbooking calcolato: Rischio o mossa vincente?", text: "La parola 'overbooking' terrorizza molti albergatori indipendenti, evocando clienti arrabbiati alla reception. Tuttavia, analizzando statisticamente il tasso di No-Show e le cancellazioni storiche, un overbooking matematicamente calcolato è una delle strategie più potenti per garantire il 100% di occupazione reale. Con i giusti dati e piani di riprotezione, si trasforma da un incubo logistico a una pura ottimizzazione del fatturato." },
    { id: 12, image: newsImage12, title: "Il costo del mancato Revenue: Cosa stai sacrificando?", text: "Molti hotel indipendenti vedono il Revenue Management come un 'costo extra' o una cosa da grandi catene alberghiere. La realtà è che il vero costo è il potenziale inespresso: le camere vendute sottocosto e quelle rimaste vuote. L'adozione di pratiche di Revenue Management, supportate dalla tecnologia e dalle competenze giuste, si ripaga da sola in pochi mesi. Il tuo hotel ha un potenziale nascosto; è ora di sbloccarlo." }
  ]
  const truncateWords = (text, limit = 20) => {
    const words = text.trim().split(/\s+/)
    return words.length <= limit ? text : `${words.slice(0, limit).join(" ")}...`
  }
  const newsLoop = [...newsItems, ...newsItems]
  const newsletterRef = useRef(null)
  const [newsletterVisible, setNewsletterVisible] = useState(false)
  const mobileNewsCardRef = useRef(null)
  const [isMobileViewport, setIsMobileViewport] = useState(false)
  const [activeMobileNewsIndex, setActiveMobileNewsIndex] = useState(0)
  const [isMobileNewsExpanded, setIsMobileNewsExpanded] = useState(false)
  const activeMobileNews = newsItems[activeMobileNewsIndex]
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
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 576px)")
  
    const handleChange = (event) => {
      setIsMobileViewport(event.matches)
  
      if (!event.matches) {
        setIsMobileNewsExpanded(false)
      }
    }
  
    setIsMobileViewport(mediaQuery.matches)
  
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange)
    } else {
      mediaQuery.addListener(handleChange)
    }
  
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange)
      } else {
        mediaQuery.removeListener(handleChange)
      }
    }
  }, [])
  useEffect(() => {
    if (!isMobileViewport || isMobileNewsExpanded) return
  
    const intervalId = window.setInterval(() => {
      setActiveMobileNewsIndex((prev) => (prev + 1) % newsItems.length)
    }, 4000)
  
    return () => window.clearInterval(intervalId)
  }, [isMobileViewport, isMobileNewsExpanded])
  useEffect(() => {
    if (!isMobileNewsExpanded) return
  
    const handlePointerDown = (event) => {
      if (mobileNewsCardRef.current && !mobileNewsCardRef.current.contains(event.target)) {
        setIsMobileNewsExpanded(false)
      }
    }
  
    document.addEventListener("pointerdown", handlePointerDown)
  
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
    }
  }, [isMobileNewsExpanded])

  const processSteps = [
  {
    id: "01",
    tabTitle: "Chiamata conoscitiva",
    meta: "30 min • senza impegno",
    description: "Capiamo la tua struttura e gli obiettivi di fatturato.",
    outcome: "Una valutazione chiara su dove intervenire e cosa aspettarti."
  },
  {
    id: "02",
    tabTitle: "Analisi e diagnosi",
    meta: "circa 1 settimana",
    description: "Tariffe, canali, occupazione, margine reale a confronto.",
    outcome: "Una fotografia precisa del fatturato che non stai ancora realizzando."
  },
  {
    id: "03",
    tabTitle: "Strategia su misura",
    meta: "Documento consegnato",
    description: "Priorità, leve tariffarie e azioni da avviare subito.",
    outcome: "Un piano operativo concreto, non una presentazione da mettere in un cassetto."
  },
  {
    id: "04",
    tabTitle: "Affiancamento mensile",
    meta: "Opzionale • su base continuativa",
    description: "",
    outcome: "Monitoraggio e ottimizzazione continua."
  }
]

const [activeProcessIndex, setActiveProcessIndex] = useState(0)
const activeProcessStep = processSteps[activeProcessIndex]


  return (
    <>
    {/*----------------------  HERO  ------------------*/}
      <section id="home" className="hero-section"> 
          <Container className="hero-content">
            <Row className="min-vh-100 align-items-center">
              <Col lg={7}>
                <div className="text-white">
                  <h1 className="hero-title hero-fade-in">
                    Aumenta il fatturato del tuo hotel indipendente con il Pricing Dinamico
                  </h1>
                  <p className="hero-text hero-slide-left">
                    Strategie di Revenue Management su misura per proteggere il tuo margine. Metti alla prova il tuo hotel: fai scansionare il tuo posizionamento dalla nostra IA e ricevi il report gratuito.
                  </p>
                  <Button
                    variant="light"
                    size="lg"
                    type="button"
                    className="hero-btn hero-slide-left-delay"
                    data-tally-open="pbLPBb"
                    data-tally-emoji-text="👋"
                    data-tally-emoji-animation="flash"
                  >
                    Analisi IA gratuita
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
      </section>
    {/*----------------------  CARDS (X3)  ------------------*/}
      <section id="services" className="why-rate-labs py-5" ref={whySectionRef}>
        <Container>
          <div className="text-center why-header">
            <h2 className={`why-title reveal-up ${whyVisible ? "is-visible" : ""}`}>
              Il Metodo Rate Labs
            </h2>
            <p className={`why-subtitle mb-4 reveal-up delay-1 ${whyVisible ? "is-visible" : ""}`}>
              Dati complessi trasformati in azioni semplici. Un approccio per massimizzare l'occupazione e il prezzo medio, tutelando e ottimizzando il margine reale del tuo hotel.
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
                  <h3 className="why-hover-title">Fotografia dello Status Quo</h3>
                </div>
                <div className="why-hover-content">
                  <span className="why-hover-text">
                    Partiamo dai tuoi dati storici e dal tuo posizionamento online. Identifichiamo i punti deboli, le tariffe non ottimizzate e le opportunità di fatturato che stai lasciando sul tavolo.
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
                  <h3 className="why-hover-title">Strategia e Pianificazione</h3>
                </div>
                <div className="why-hover-content">
                  <span className="why-hover-text">
                    Non vendiamo camere a caso. Definiamo obiettivi chiari: corretta segmentazione, bilanciamento dei canali (OTA vs Diretto) e una struttura tariffaria pensata per massimizzare il profitto.
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
                  <h3 className="why-hover-title">Ottimizzazione Continua</h3>
                </div>
                <div className="why-hover-content">
                  <span className="why-hover-text">
                    Il mercato cambia ogni giorno. Monitoriamo costantemente il pick-up, la domanda locale e i competitor, aggiustando le tariffe con precisione per cogliere ogni singola opportunità di profitto.
                  </span>
                </div>
              </article>
            </Col>
          </Row>
        </Container>
      </section>
    {/*----------------------  PROCESS JOURNEY  ------------------*/}
      <section className="process-journey-section py-5">
        <Container>
          <div className="process-journey-header text-center">
            <h2 className="process-journey-title">
              Dal primo contatto al revenue ottimizzato
            </h2>
            <p className="process-journey-subtitle">
              Ogni hotel è diverso. Il percorso, no.
            </p>
          </div>

          <div className="process-tabs-shell">
            <div className="process-tabs-scroll">
              {processSteps.map((step, index) => (
                <button
                  key={step.id}
                  type="button"
                  className={`process-tab-button ${activeProcessIndex === index ? "is-active" : ""}`}
                  onClick={() => setActiveProcessIndex(index)}
                  aria-pressed={activeProcessIndex === index}
                >
                  <span className="process-tab-number">{step.id}</span>
                  <span className="process-tab-label">{step.tabTitle}</span>
                </button>
              ))}
            </div>
          </div>

          <div
  key={activeProcessStep.id}
  className="process-panel-shell process-panel-animate"
>
            <Row className="g-3 align-items-stretch">
              <Col lg={6}>
                <article className="process-card process-card-primary h-100">
                  <span className="process-card-kicker">Step {activeProcessStep.id}</span>
                  <h3 className="process-card-title">{activeProcessStep.tabTitle}</h3>
                  <p className="process-card-meta">{activeProcessStep.meta}</p>

                  {activeProcessStep.description && (
                    <p className="process-card-text mb-0">
                      {activeProcessStep.description}
                    </p>
                  )}
                </article>
              </Col>

              <Col lg={6}>
                <article className="process-card process-card-secondary h-100">
                  <span className="process-card-kicker">Cosa ottieni</span>
                  <p className="process-card-text process-card-text-secondary mb-0">
                    {activeProcessStep.outcome}
                  </p>
                </article>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    {/*----------------------  ABOUT US  ------------------*/}
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
    {/*----------------------  NEWS (X12)  ------------------*/}
      <section className="news-ticker-section">
        <Container fluid>
          <div className="news-ticker-header text-center">
            <h2 className="news-ticker-title">Revenue Hotel - niente più scuse</h2>
            <p className="news-ticker-subtitle">
              12 Pillole di Revenue: Sfatare i Miti e Massimizzare i Profitti
            </p>
          </div>
      
          <div className="news-ticker-desktop">
            <div className="news-ticker-wrapper">
              <div className="news-ticker-track">
                {newsLoop.map((item, index) => {
                  const previewText = truncateWords(item.text, 20)
      
                  return (
                    <article className="news-pill-card" key={`${item.id}-${index}`}>
                      <div className="news-pill-surface rounded-4">
                        <div className="news-pill-image-wrapper">
                          <img src={item.image} alt={item.title} className="news-pill-image" />
                        </div>
      
                        <div className="news-pill-content">
                          <h4 className="news-pill-title">{item.title}</h4>
                          <p className="news-pill-text">{previewText}</p>
                        </div>
                      </div>
      
                      <div className="news-pill-hover-panel rounded-4">
                        <div className="news-pill-image-wrapper news-pill-image-wrapper-hover">
                          <img src={item.image} alt={item.title} className="news-pill-image" />
                        </div>
      
                        <div className="news-pill-hover-body">
                          <h4 className="news-pill-title">{item.title}</h4>
      
                          <div className="news-pill-full-text-wrapper">
                            <p className="news-pill-full-text">{item.text}</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
      
          <div className="mobile-news-spotlight">
            <div className="mobile-news-stage">
              <div key={activeMobileNews.id} className="mobile-news-card-shell">
                <article
                  ref={mobileNewsCardRef}
                  className={`mobile-news-card ${isMobileNewsExpanded ? "is-expanded" : ""}`}
                  onClick={() => {
                    if (!isMobileNewsExpanded) {
                      setIsMobileNewsExpanded(true)
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if ((event.key === "Enter" || event.key === " ") && !isMobileNewsExpanded) {
                      event.preventDefault()
                      setIsMobileNewsExpanded(true)
                    }
                  }}
                >
                  <div className="mobile-news-image-wrapper">
                    <img
                      src={activeMobileNews.image}
                      alt={activeMobileNews.title}
                      className="mobile-news-image"
                    />
                  </div>
      
                  <div className="mobile-news-body">
                    <div className="mobile-news-meta">
      
                      <span className="mobile-news-status">
                        {isMobileNewsExpanded ? "Tocca fuori per chiudere" : "Tocca per leggere"}
                      </span>
                    </div>
      
                    <h4 className="mobile-news-title">{activeMobileNews.title}</h4>
      
                    {!isMobileNewsExpanded && (
                      <p className="mobile-news-preview">
                        {truncateWords(activeMobileNews.text, 28)}
                      </p>
                    )}
      
                    {isMobileNewsExpanded && (
                      <div className="mobile-news-full-text-wrapper">
                        <p className="mobile-news-full-text">{activeMobileNews.text}</p>
                      </div>
                    )}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </Container>
      </section>
    {/*----------------------  NEWSLETTER  ------------------*/}
      <section
        className={`newsletter-section py-5 reveal-up-soft ${newsletterVisible ? "is-visible" : ""}`}
        ref={newsletterRef}
      >
        <Container>
          <Row className="justify-content-center">
            <Col xl={10}>
              <div className="newsletter-card overflow-hidden">
                <Row className="g-0 align-items-stretch">
                  <Col lg={7}  className="order-2 order-lg-1">
                    <div className="newsletter-content h-100">
                      <h3 className="newsletter-title">Strategie di Revenue per la TUA città.</h3>
                      <p className="newsletter-text">
                        Il mercato cambia da Milano a Palermo. Iscriviti per ricevere insight, prezzi e consigli operativi calibrati solo sulle dinamiche del tuo territorio.
                      </p>
                      <Form>
                        <Row className="g-3 d-flex justify-content-center">
                          <Col md={8}>
                              <Button
                                type="button"
                                size="lg"
                                className="newsletter-btn w-100"
                                data-tally-open="q4P8Jk"
                                data-tally-emoji-text="👋"
                                data-tally-emoji-animation="wave"
                              >
                                Iscriviti
                              </Button>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </Col>
                  <Col lg={5} className="order-1 order-lg-2">
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
    {/*----------------------  CONTACT FORM ------------------*/}
      <section id="contact" className="contact-form-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={9} xl={8}>
              <div
                className="contact-form-card"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${imagebgform})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
                }}
              >
                <h3 className="contact-form-title">Quanto Vale un Quarto d'Ora per il Tuo Hotel?</h3>
                <p className="newsletter-text">
                  15 minuti di orologio. Analizziamo al volo la tua situazione attuale e ti indico subito dove stai perdendo marginalità e prenotazioni dirette. Nessun impegno, solo numeri e azioni pratiche. Scegli il tuo orario.
                </p>
              <div className="contact-cta-wrap">
                <Button
                  type="button"
                  className="contact-submit-btn"
                  onClick={() =>
                    window.Calendly?.initPopupWidget({
                      url: "https://calendly.com/ratelab-it/30min"
                    })
                  }
                >
                  Prenota una call gratuita
                </Button>
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}