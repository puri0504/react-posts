import { useEffect, useState } from 'react';
import { PageHeader, Layout  } from 'antd';
import * as API from '../../../api';
import { Post } from '../../../api';
import './styles.css';

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
        <Layout className="post">
            {/*<Header>{post?.title}</Header>*/}
            <Content className="post-content">{post?.body}</Content>
        </Layout>
    );
}

export default PostDetails;
