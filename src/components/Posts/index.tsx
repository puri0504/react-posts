import {useState} from 'react';
import {Col, Row} from 'antd';
import { useMediaQuery } from 'react-responsive';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import PostList from './PostList';
import Post from './Post';
import './styles.css';

function Posts() {
    const [selectedPost, selectPost] = useState<number>();
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1000px)'
    });

    const postList = <PostList id={selectedPost} select={selectPost}/>;
    const post = selectedPost && <Post id={selectedPost}/>;

    return (
        <Row>
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
                    {selectedPost && (
                        <Button type="link" shape="round" size="large">
                            <ArrowLeftOutlined className="backBtn-icon" />
                        </Button>
                    )}
                    {post}
                </Col>
            )}
        </Row>
    );
}

export default Posts;
