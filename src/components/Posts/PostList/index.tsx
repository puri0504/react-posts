import * as React from 'react';
import { MenuClickEventHandler } from 'rc-menu/lib/interface'
import { Menu } from 'antd';
import { Post } from '../../../types';

interface Props {
    id?: number | null;
    posts: Post[];
    select: (id: number) => void;
}

function PostList(props: Props): JSX.Element {
    const selectedKeys = props.id ? [props?.id.toString()] : [];
    const select: MenuClickEventHandler = ({ key }) => {
        props.select(+key)
    };

    return (
        <Menu selectedKeys={selectedKeys} onClick={select}>
            {
                props.posts.map(post => (
                    <Menu.Item key={post.id}>{post.title}</Menu.Item>
                ))
            }
        </Menu>
    );
}

export default PostList;
