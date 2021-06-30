import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Conócenos</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">El trabajo en equipo nos <span className="text-primary font-weight-medium">UNE</span></h1>
              <p className="text-muted mb-4 pb-2">En la mayor parte de las empresas, compañías u organizaciones, el trabajo en equipo resulta vital para que cada miembro o empleado pueda aportar su granito de arena, su saber y su buen hacer. La unión de las fuerzas permite que la productividad se incremente y que los resultados sean mucho más satisfactorios para las empresas.</p>
              <a href="#" className="btn btn-warning">
                Conocenos Ahora <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/img/grupo.jpg" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;