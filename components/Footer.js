import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  const links = [
    { id : 1, title : "Características",
      child : [
          { title : "TRABAJO", link : "/" },
          { title : "EQUIPO", link : "/" },
          { title : "RESULTADO", link : "/" },
          { title : "UNIDAD", link : "/" }
      ]
    },
    { id : 2, title : "Sobre nosotros",
      child : [
          { title : "Contactanos", link : "/" },
          { title : "FAQs", link : "/" },
          { title : "Privacy Policy", link : "/" },
      ]
    },
  ];
  
  return (
    <section className="footer section">
      <Container>
        <Row>
          <Col lg={4}>
              <div className="mb-4">
                <p className="text-muted mt-4 mb-2">email@email.com</p>
                <h6 className="text-muted font-weight-normal">+52 1571-3173-9</h6>
              </div>
          </Col>
          <Col lg={8}>
            <Row>
              {
                links.map((link, key) =>
                  <Col key={key} md={4}>
                    <h6 className="text-dark mb-3">{link.title}</h6>
                    <ul className="list-unstyled company-sub-menu">
                      {
                        link.child.map((fLink, key) =>
                          <li key={key}><a href={fLink.link}>{fLink.title}</a></li>
                        )
                      }
                    </ul>
                  </Col>
                )
              }
              
              <Col md={4}>
                <h6 className="text-dark mb-3">Nestra dirección</h6>
                <p className="text-muted f-14">1234 Av. las aves Mexico city, 4667</p>
                <h6 className="text-muted pb-2">Email: email@email.com</h6>
                <ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-linkedin"></i></a></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
<Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">2020 © Name. Design by DNery12</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Footer;