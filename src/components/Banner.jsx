import React from 'react';
import "../styles/Banner.scss";
import { Container, Row, Col } from 'react-bootstrap';

const Banner = () => {
  return (
    <div className='banner'>

        <Container>
            <Row>
                <Col>
                    <h1>Banner</h1>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Banner