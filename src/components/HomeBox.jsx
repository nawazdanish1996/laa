import React from 'react';
import "../styles/HomeBox.scss";
import { Container, Row, Col } from 'react-bootstrap';

const HomeBox = () => {
  return (
    <div className='homeBox'>
        <Container>
            <Row>
                <Col>
                    <h1>box</h1>
                </Col>
                <Col>
                    <h1>box</h1>
                </Col>
                <Col>
                    <h1>box</h1>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HomeBox