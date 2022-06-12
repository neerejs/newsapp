

import { Col, Container, Row } from 'react-bootstrap';
//import Guardian from './Guardian';

import News from './News';
// import NewsBySection from './NewsBySection';
// import NewsByEdition from './NewsByEdition';
// import Sections from './Sections';
// import TopNav from './TopNav';
import Guardian from './Guardian.js';

function App() {
  return (
    <div className="App">

      <Container>
        <Row>
          <Col>
            <News />
          </Col>
          <Col>
            <Guardian />
            {/* <Sections /> */}
            {/* <NewsBySection sectionid="football" /> */}
            {/* <NewsByEdition editionid="us" /> */}
          </Col>
        </Row>
      </Container>



    </div>
  );
}

export default App;
