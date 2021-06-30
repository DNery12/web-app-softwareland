import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Service = () => {
  const services = [
    { title : "Diseño", desc : "Diseñamos tu pagina web moderna, resposiva, fluida y segura" },
    { title : "Gestion de sistemas", desc : "Llevamos el control de tu sistema computacional implementado" },
    { title : "Implementacion de redes", desc : "Implementamos una red privada para comunicar internamente a tu empresa" },
    { title : "Gestion de redes ", desc : "Llevamos el control de tu la red de tu empresa" },
    { title : "Soluciones de TI", desc : "Proporcionamos soluciones puntuales a los problemas de tu empresa" },
    { title : "Ciberseguridad", desc : "Implementamos protocolos de seguridad para tu empresa." },
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Servicios</span></h3>
              <p className="text-muted">Queremos ayudar a nuestros clientes a maximizar las ventajas que las tecnologías de la información pueden brindarles, optimizando sus inversiones en TI por la vía de la realización de proyectos de implantación óptimos.</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}
export default Service;