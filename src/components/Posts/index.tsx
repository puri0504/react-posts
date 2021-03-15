import {useState} from 'react';
import {Col, Row} from 'antd';
import { useMediaQuery } from 'react-responsive';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import PostList from './PostList';
import Post from './PostDetails';
import styles from './Posts.module.css';

function Posts() {
    const [selectedPost, selectPost] = useState<number | null>(null);
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1000px)'
    });

    const postList = <PostList id={selectedPost} select={selectPost}/>;
    const post = selectedPost && <Post id={selectedPost}/>;

    return (
        <Row className={styles.posts}>
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
                        <Button type="link" shape="round" size="large" onClick={() => selectPost(null)}>
                            <ArrowLeftOutlined className={styles.backBtnIcon} />
                        </Button>
                    )}
                    {post}
                </Col>
            )}
        </Row>
    );
}

export default Posts;
