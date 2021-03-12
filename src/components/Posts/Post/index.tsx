import {useEffect, useState} from 'react';
import * as API from '../../../api';
import { Post } from '../../../api';
import './styles.css';

interface Props {
    id: number;
}

function PostDetails(props: Props): JSX.Element {
    const [post, setPost] = useState<Post>();

    useEffect(() => {
        async function getPost() {
            const res = await API.getPostDetails(props.id);
            setPost(res);
        }

        getPost();
    }, []);

    return (
        <div className="post">
            {post?.title}
        </div>
    );
}

export default PostDetails;
