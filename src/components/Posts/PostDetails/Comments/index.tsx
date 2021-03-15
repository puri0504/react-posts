import * as React from 'react';
import { useState, useEffect } from 'react';
import * as API from '../../../../api';
import { PostComments as CommentsType } from '../../../../types';
import Comments from '../../../Comments';
import styles from './Comments.module.css';

interface Props {
    id: number;
}

function PostComments(props: Props): JSX.Element {
    const [comments, setComments] = useState<CommentsType[]>();

    useEffect(() => {
        async function getPost() {
            const res = await API.getPostComments(props.id);
            setComments(res);
        }

        getPost();
    }, [props.id]);

    return (
        <div className={styles.root}>
            {comments && (
                <>
                    <h3>Comments:</h3>
                    <Comments comments={comments}/>
                </>
            )}
        </div>
    );
}

export default PostComments;
