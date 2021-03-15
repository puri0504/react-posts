import * as React from 'react';
import { List } from 'antd';
import { PostComments } from '../../types';

interface Props {
    comments: PostComments[];
}

function Comments(props: Props): JSX.Element {
    return (
        <List>
            {
                props.comments?.map(comment => (
                    <List.Item key={comment.id}>
                        <h4>{comment.name}:</h4>
                        <div>{comment.body}</div>
                    </List.Item>
                ))
            }
        </List>
    );
}

export default Comments;
