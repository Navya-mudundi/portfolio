
import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailChimpForm";
import logo from "../Assets/img/navyalogo.png";
import navIcon1 from "../Assets/img/nav-icon1.jpg";
import navIcon2 from "../Assets/img/github.png";
import navIcon3 from "../Assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo}style={{borderRadius:"10px",width:"60px"}} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
