import { Col, Container, Row } from 'react-bootstrap';
import Guardian from './Guardian.js';


function App() {
  return (
    <div className="App">

      <Container>
        <Row>
          <Col>
            <Guardian edition="all" section='all' />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
