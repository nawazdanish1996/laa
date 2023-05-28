import React from 'react';
import "../styles/ImageBoxHome.scss";
import { Container, Row, Col } from 'react-bootstrap';
import img from "../assets/School Pics/school.jpg";

const ImageBoxHome = () => {
  return (
    <div className="imgBoxHome">
        <Container>
            <Row>
                <Col xs={12}>
                    <h1>Education</h1>
                </Col>
                <Col>
                    <h2>Text</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nostrum labore blanditiis cum magnam repudiandae voluptatum, inventore praesentium itaque facilis aperiam voluptatem natus tempora eius? Fugit dolorum sed delectus temporibus hic reiciendis itaque laborum sunt vero distinctio officiis enim neque unde, necessitatibus magni blanditiis eos deleniti laudantium, nihil provident atque!</p>
                </Col>
                <Col>
                    <img className='img-fluid' src={img} alt="img" />
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <h1>Edwerfe3rfefr</h1>
                </Col>
                <Col>
                    <h2>Text</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Col>
                <Col>
                    <img className='img-fluid' src={img} alt="img" />
                </Col>
            </Row>
            
            <Row>
                <Col xs={12}>
                    <h1>Edwerfe3rfefr</h1>
                </Col>
                <Col>
                    <h2>Text</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Col>
                <Col>
                    <img className='img-fluid' src={img} alt="img" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ImageBoxHome