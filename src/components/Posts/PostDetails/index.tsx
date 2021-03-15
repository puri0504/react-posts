import * as React from 'react';
import { Layout  } from 'antd';
import { Post } from '../../../types';
import styles from './PostDetails.module.css';

interface Props {
    id: number;
    post: Post;
}

function PostDetails(props: Props): JSX.Element {
    const { Header, Content } = Layout;
    const { post } = props;

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
