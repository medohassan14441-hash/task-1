import { Container, Row, Col } from "react-bootstrap";
import heroImg from "../../assets/heroImg.png";

function HeroSection() {
  return (
    <section className="hero-section py-5">
      <Container>
        <Row className="align-items-center">
          
          <Col lg={6} md={12} className="mb-5 mb-lg-0">
            <h1 className="fw-bold" style={{ color: "var(--main-color)", fontSize: "3.5rem" }}>
              The <span style={{ color: "var(--secondary-color)" }}>#1</span> Job Board for <br />
              Hiring or Find your next <br />
              job in <span style={{ color: "var(--secondary-color)" }}>Egypt</span>
            </h1>
            
            <p className="mt-3 text-muted" style={{ fontSize: "1.1rem", maxWidth: "500px", lineHeight: "1.6" }}>
              Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day
            </p>
          </Col>

         
          <Col lg={6} md={12} className="text-center">
            <img src={heroImg} alt="Hero Illustration" className="img-fluid" />
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;