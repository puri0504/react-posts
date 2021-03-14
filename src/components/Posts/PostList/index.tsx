import * as React from 'react';
import { useEffect, useState } from 'react';
import { MenuClickEventHandler } from 'rc-menu/lib/interface'
import { Menu } from 'antd';
import * as API from '../../../api'
import {Post} from '../../../api'
import './styles.css';

interface Props {
    id?: number | null
    select: (id: number) => void
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

    const selectedKeys = props.id ? [props?.id.toString()] : [];
    const select: MenuClickEventHandler = ({ key }) => {
        props.select(+key)
    };

    return (
        <Menu className="menu" selectedKeys={selectedKeys} onClick={select}>
            {
                posts.map(post => (
                    <Menu.Item key={post.id}>{post.title}</Menu.Item>
                ))
            }
        </Menu>
    );
}

export default PostList;
