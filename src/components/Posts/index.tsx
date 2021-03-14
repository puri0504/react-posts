import {useState} from 'react';
import {Col, Row} from 'antd';
import { useMediaQuery } from 'react-responsive';
import PostList from './PostList';
import Post from './Post';

function Posts() {
    const [selectedPost, selectPost] = useState<number>();
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    });

    return (
        <Row className="App">
            <Col span={6}>
                {isDesktopOrLaptop && <PostList id={selectedPost} select={() => selectPost}/>}
            </Col>
            <Col span={18}>
                {selectedPost && <Post id={selectedPost}/>}
            </Col>
        </Row>
    );
}

export default Posts;
