import * as React from 'react';
import {useEffect, useState} from 'react';
import { Menu } from 'antd';
import * as API from '../../../api'
import {Post} from '../../../api'
import './styles.css';

interface Props {
    id: number
}

function PostList(props: Props): JSX.Element {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        async function getPosts() {
            const res = await API.getPosts();
            setPosts(res);
        }

        getPosts();
    }, []);

    return (
        <Menu className="menu" selectedKeys={[props.id.toString()]}>
            {
                posts.map(post => (
                    <Menu.Item key={post.id}>{post.title}</Menu.Item>
                ))
            }
        </Menu>
    );
}

export default PostList;
