import * as React from 'react';
import { useState, useEffect } from 'react';
import * as API from '../../../../api';
import { PostComments as Comments } from '../../../../types';

interface Props {
    id: number;
}

function PostComments(props: Props): JSX.Element {
    const [comments, setComments] = useState<Comments[]>();

    useEffect(() => {
        async function getPost() {
            const res = await API.getPostComments(props.id);
            setComments(res);
        }

        getPost();
    }, [props.id]);

    return (
        <ul>
            {
               comments?.map(comment => (
                   <li key={comment.id}>{comment}</li>
               ))
            }
        </ul>
    );
}

export default PostComments;
