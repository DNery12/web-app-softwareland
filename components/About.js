import React from 'react';
import { Container, Row, Col } from "reactstrap";
const About = () => {
return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">Sobre <span className="text-warning">Nosotros</span></h3>
              <p className="text-muted">Somos una empresa de tecnologia emergente con presencia en todo el pais</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">Conoce nuestros valores</h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Nuestra Misión</h6>
                <p className="text-muted font-weight-light">Creamos valor para nuestros clientes aportándoles, mediante nuestro apoyo experto en la Gestión de sus Datos, soluciones empresariales de gran calidad y fiabilidad, que les ayuden a conseguir mejoras apreciables y duraderas en sus resultados de negocio.</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Nustra Visión</h6>
                <p className="text-muted font-weight-light">Ofrecer a nuestros clientes un acceso sencillo a su información, minimizando riesgos y retrasos en la entrega de ésta, sea dispar o heterogénea, en tiempo real, obteniendo un coste total de propiedad mucho menor en comparación a soluciones manuales.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;