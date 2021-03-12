import {Col, Row} from 'antd';
import PostList from './PostList';
import Post from './Post';
import {useState} from "react";

function Posts() {
    const [selectedPost, selectPost] = useState<number>();

    return (
        <Row className="App">
            <Col span={6}>
                <PostList id={selectedPost} select={() => selectPost}/>
            </Col>
            <Col span={18}>
                {selectedPost && <Post id={selectedPost}/>}
            </Col>
        </Row>
    );
}

export default Posts;
