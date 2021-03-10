import { Row, Col } from 'antd';
import Menu from  './components/Menu';
import Post from  './components/Post';
import './styles.css';

function App() {
  return (
    <Row className="App">
      <Col span={8}>
        <Menu />
      </Col>
      <Col span={16}>
        <Post/>
      </Col>
    </Row>
  );
}

export default App;
