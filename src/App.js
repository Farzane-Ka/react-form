import FormPurchase from "./components/FormPurchase";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App() {
  return (
      <div>
          <Container >
              <Row className="justify-content-center">
                  <Col xs={12} md={6}>
                      <FormPurchase/>
                  </Col>
              </Row>
          </Container>
      </div>


  );
}

export default App;
