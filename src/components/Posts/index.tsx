import {useState} from 'react';
import {Col, Row} from 'antd';
import { useMediaQuery } from 'react-responsive';
import PostList from './PostList';
import Post from './Post';

function Posts() {
    const [selectedPost, selectPost] = useState<number>();
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1000px)'
    });

    const postList = <PostList id={selectedPost} select={selectPost}/>;
    const post = selectedPost && <Post id={selectedPost}/>;

    return (
        <Row className="App">
            {isDesktopOrLaptop && (
                <>
                    <Col span={6}>
                        {postList}
                    </Col>
                    <Col span={18}>
                        {post}
                    </Col>
                </>
            )}
            {!isDesktopOrLaptop && (
                <Col span={24}>
                    {!selectedPost && postList}
                    {post}
                </Col>
            )}
        </Row>
    );
}

export default Posts;
