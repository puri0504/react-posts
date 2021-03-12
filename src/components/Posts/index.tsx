import {Col, Row} from 'antd';
import PostList from './PostList';
import Post from './Post';

function Posts() {
    return (
        <Row className="App">
            <Col span={6}>
                <PostList id={2}/>
            </Col>
            <Col span={18}>
                <Post id={2}/>
            </Col>
        </Row>
    );
}

export default Posts;
