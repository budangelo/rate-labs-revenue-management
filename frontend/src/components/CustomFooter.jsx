import './CustomFooter.css'
import { Container, Row, Col } from "react-bootstrap"

export default function CustomFooter() {
  return (
    <footer
      className="mt-5 py-4"
      style={{ backgroundColor: "#6c757d", color: "#ffffff" }}
    >
      <Container>
        <Row className="align-items-center gy-3">
          <Col md={4} className="text-center text-md-start">
            <h5 className="mb-1 fw-semibold">Rate Labs</h5>
            <small>Revenue Management</small>
          </Col>

          <Col md={4} className="text-center">
            <div
              style={{
                width: "60px",
                height: "2px",
                backgroundColor: "rgba(255,255,255,0.5)",
                margin: "0 auto"
              }}
            ></div>
          </Col>

          <Col md={4} className="text-center text-md-end">
            <small>© {new Date().getFullYear()} Rate Labs. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}