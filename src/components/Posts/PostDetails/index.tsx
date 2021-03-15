import * as React from 'react';
import { useState, useEffect } from 'react';
import { Layout  } from 'antd';
import * as API from '../../../api';
import { Post } from '../../../types';
import styles from './PostDetails.module.css';

interface Props {
    id: number;
}

function PostDetails(props: Props): JSX.Element {
    const [post, setPost] = useState<Post>();
    const { Header, Content } = Layout;

    useEffect(() => {
        async function getPost() {
            const res = await API.getPostDetails(props.id);
            setPost(res);
        }

        getPost();
    }, [props.id]);

    return (
        <Layout className={styles.root}>
            <Header>
                <h2 className={styles.heading}>{post?.title}</h2>
            </Header>
            <Content className={styles.content}>{post?.body}</Content>
        </Layout>
    );
}

export default PostDetails;
