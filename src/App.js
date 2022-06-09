

import { Col, Container, Row } from 'react-bootstrap';
import Guardian from './Guardian';
import LatestNews from './LatestNews';
import News from './News';
import TopNav from './TopNav';

function App() {
  return (
    <div className="App">

      <Container>
        <TopNav />
        <Row>
          <Col>
            <News />
          </Col>
          <Col>
            <Guardian />
          </Col>
        </Row>
      </Container>



    </div>
  );
}

export default App;
