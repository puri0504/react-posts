import * as React from 'react';
import { useCallback } from 'react';
import { MenuClickEventHandler } from 'rc-menu/lib/interface'
import { Menu } from 'antd';
import { Post } from '../../../types';

interface Props {
    id?: number | null;
    posts: Post[];
    select: (id: number) => void;
}

function PostList(props: Props): JSX.Element {
    const { select } = props;
    const selectedKeys = props.id ? [props?.id.toString()] : [];
    const onClick: MenuClickEventHandler = useCallback(({ key }) => {
        select(+key)
    }, [select]);

    return (
        <Menu selectedKeys={selectedKeys} onClick={onClick}>
            {
                props.posts.map(post => (
                    <Menu.Item key={post.id}>{post.title}</Menu.Item>
                ))
            }
        </Menu>
    );
}

export default PostList;
