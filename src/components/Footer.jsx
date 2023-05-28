import React from 'react';
import "../styles/Footer.scss";
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <h4>Social Media</h4>
            <a href="true"><i className="fa-brands fa-square-facebook"></i></a>
            <a href="true"><i class="fa-brands fa-square-whatsapp"></i></a>
            <a href="true"><i className="fa-brands fa-youtube"></i></a>
            <a href="true"><i class="fa-brands fa-square-instagram"></i></a>
          </Col>
          <Col>
            <h4>Address</h4>
            <p>Lodhan Chowk</p>
            <p>near Lodhan High Schoool</p>
            <p>Goalpokher, U/Dinajpur</p>
            <p>733210, WestBengal</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="blink">
              <i className="fa-solid fa-phone"></i> &nbsp;
              <span>+91 - 12345-67890</span>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer">
            <p>All Rights Reserved By: <a href="true">Little Angel's Academy</a></p>
            <p>Developed By: <a href="true">Nawaz Danish</a></p>
      </div>
    </footer>
  )
}

export default Footer