import {useEffect, useState} from 'react';
import * as API from '../../api'
import './styles.css';

function Menu() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const {data} = await API.getPosts();
      return data;
    }

    const response = getPosts();
    setPosts(response);
  }, []);

  return (
    <div className="menu">
      Menu
    </div>
  );
}

export default Menu;
