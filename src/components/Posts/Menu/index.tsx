import * as React from 'react';
import {useEffect, useState} from 'react';
import * as API from '../../../api'
import { Post } from '../../../api'
import './styles.css';

function Menu(): JSX.Element {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function getPosts() {
      const res = await API.getPosts();
      setPosts(res);
    }

    getPosts();
  }, []);

  return (
    <div className="menu">
      {
        posts.map(post => (
          <div>{post.title}</div>
        ))
      }
    </div>
  );
}

export default Menu;
