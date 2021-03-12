import {Col, Row} from 'antd';
import PostList from './PostList';
import Post from './Post';

function Posts() {
    return (
        <Row className="App">
            <Col span={8}>
                <PostList id={2}/>
            </Col>
            <Col span={16}>
                <Post id={2}/>
            </Col>
        </Row>
    );
}

export default Posts;
