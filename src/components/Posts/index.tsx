import { useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import PostList from './PostList';
import PostDetails from './PostDetails';
import * as API from '../../api';
import styles from './Posts.module.css';
import { Post } from '../../types';

function Posts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [selectedPost, selectPost] = useState<number | null>(null);

    useEffect(() => {
        async function getPosts() {
            const res = await API.getPosts();
            setPosts(res);
        }

        getPosts();
    }, []);

    const isMobile = useMediaQuery({ maxWidth: 641 });
    const goBack = useCallback(() => { selectPost(null) }, []);

    const postList = <PostList id={selectedPost} select={selectPost} posts={posts}/>;
    const post = selectedPost && <PostDetails id={selectedPost} post={posts[1]}/>;

    return (
        <Row className={styles.root}>
            {!isMobile && (
                <>
                    <Col span={6}>
                        {postList}
                    </Col>
                    <Col span={18}>
                        {post}
                    </Col>
                </>
            )}
            {isMobile && (
                <Col span={24}>
                    {!selectedPost && postList}
                    {selectedPost && (
                        <Button type="link" shape="round" size="large" onClick={goBack}>
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
