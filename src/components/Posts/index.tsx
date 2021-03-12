import {Col, Row} from 'antd';
import Menu from  './Menu';
import Post from  './Post';

function Posts() {
  return (
      <Row className="App">
          <Col span={8}>
              <Menu />
          </Col>
          <Col span={16}>
              <Post id={2} />
          </Col>
      </Row>
  );
}

export default Posts;
