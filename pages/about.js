import React from 'react';
import {Row,Col,
  Card,  Container
} from 'react-bootstrap';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';

const About = (props) => {
  return (
    <div>
       
     <PageLayout>
     <h1>I am About Page</h1>
      <Container>
        <Row>
         
          <Col className="md-6">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some ashik moosa cards example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </PageLayout>
      
    </div>
  );
};

export default About;