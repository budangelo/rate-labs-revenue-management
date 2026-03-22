import { Container, Row, Col } from "react-bootstrap"
import "../styles/PrivacyPage.css"

export default function PrivacyPage() {
    return (
        <section className="privacy-page py-5">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8} xl={7}>
                        <div className="privacy-card">
                            <h1 className="privacy-title">Privacy Policy</h1>
                            <p className="privacy-text">
                                This page is currently being prepared. The full privacy policy content will be added soon.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}