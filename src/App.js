

import { Col, Container, Row } from 'react-bootstrap';
//import Guardian from './Guardian';

import News from './News';
import Sections from './Sections';
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
            {/* <Guardian /> */}
            <Sections />
          </Col>
        </Row>
      </Container>



    </div>
  );
}

export default App;
