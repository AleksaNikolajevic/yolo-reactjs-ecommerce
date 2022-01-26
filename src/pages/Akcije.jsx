import React from 'react'

import Helmet from '../components/Helmet'
import Section, { SectionTitle, SectionBody } from '../components/Section'

import Placeholder from 'react-bootstrap/Placeholder'
import { Card } from 'react-bootstrap'
import Button from '../components/Button'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'


const Akcije = () => {
    return (
        <Helmet title="Fly London Srbija">
            {/* hero slider */}
           
            {/* end hero slider */}

            {/* policy section */}
           
            <Section>
                <SectionTitle>
                AFTER PARTY

                </SectionTitle>
                <SectionBody>
                <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22537%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20537%20160%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17e95bd70ee%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A27pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17e95bd70ee%22%3E%3Crect%20width%3D%22537%22%20height%3D%22160%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22202.015625%22%20y%3D%2294.4%22%3E537x160%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
        <Card.Body>
          <Card.Title>Akcija</Card.Title>
          <Card.Text>
            Tekst akcije
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
                </SectionBody>
            </Section>
            {/* end best selling section */}

            {/* new arrival section */}
            
            {/* end popular product section */}
        </Helmet>
    )
}

export default Akcije
