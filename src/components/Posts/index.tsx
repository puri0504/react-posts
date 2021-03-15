import {useCallback, useEffect, useMemo, useState} from 'react';
import { Col, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import PostList from './PostList';
import PostDetails from './PostDetails';
import * as API from '../../api';
import { Post } from '../../types';
import styles from './Posts.module.css';

const breakpoints = require('../../constants/breakpoints');

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

    const isMobile = useMediaQuery({ maxWidth: breakpoints.mobile });
    const goBack = useCallback(() => { selectPost(null) }, []);

    const getSelectedPost = useMemo(() => posts.find(post => post.id === selectedPost), [posts, selectedPost]);
    const post = selectedPost && <PostDetails post={getSelectedPost}/>;
    const postList = <PostList id={selectedPost} select={selectPost} posts={posts}/>;

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
