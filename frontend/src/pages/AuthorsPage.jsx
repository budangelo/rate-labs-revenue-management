import { Container, Row, Col } from "react-bootstrap"
import hotelImage from "../assets/mehdi-shiri--XdV3YSGHLw-unsplash.jpg"
import hotelImage2 from "../assets/goran-ivos-iY9g8EcikeY-unsplash.jpg"
import hotelImage3 from "../assets/takashi-sakamoto-_aPuOL2qOfY-unsplash.jpg"
import hotelImage4 from "../assets/sole-d-alessandro-g-srxicXz3cxU-unsplash.jpg"
import hotelImage5 from "../assets/pexels-darshan394-2695392.jpg"
import hotelImage6 from "../assets/pexels-arina-krasnikova-5951751.jpg"
import hotelImage7 from "../assets/lucjano-kuci-ldJsES6F5d4-unsplash.jpg"
import "../styles/AuthorPage.css"

export default function AuthorsPage() {
  const authorsItems = [
    {
      id: 1,
      image: hotelImage,
      imageTitle: "Form",
      author: "Mehdi Shiri",
      source: "Unsplash",
    },
    {
      id: 2,
      image: hotelImage2,
      imageTitle: "Method",
      author: "Goran Ivos",
      source: "Unsplash",
    },
    {
      id: 3,
      image: hotelImage3,
      imageTitle: "Hero",
      author: "Takashi Sakamoto",
      source: "Unsplash",
    },
    {
      id: 4,
      image: hotelImage4,
      imageTitle: "Form",
      author: "Sole d'Alessandro",
      source: "Unsplash",
    },
    {
      id: 5,
      image: hotelImage5,
      imageTitle: "Method",
      author: "Darshan",
      source: "Pexels",
    },
    {
      id: 6,
      image: hotelImage6,
      imageTitle: "Method",
      author: "Arina Krasnikova",
      source: "Pexels",
    },
    {
      id: 7,
      image: hotelImage7,
      imageTitle: "About Us",
      author: "Lucjano Kuci",
      source: "Unsplash",
    },
  ]

  return (
    <section className="authors-page">
      <Container fluid="lg">
        <div className="authors-page-header text-center">
          <h1 className="authors-page-title">Autori delle immagini</h1>
          <p className="authors-page-subtitle">
            Crediti delle immagini utilizzate nel sito.
          </p>
        </div>
        <Row className="gy-4">
          {authorsItems.map((item) => (
            <Col md={6} key={item.id}>
              <div className="authors-page-card">
                <img
                  src={item.image}
                  alt={item.imageTitle}
                  className="authors-page-image"
                />
                <div className="authors-page-info">
                  <h3 className="authors-image-title">{item.imageTitle}</h3>
                  <p className="authors-image-author">Autore: {item.author}</p>
                  <p className="authors-image-source">Fonte: {item.source}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}