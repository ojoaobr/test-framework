import { useEffect, useState } from 'react';
import { BackToHome } from '../components/BackToHome';
import { Table } from '../components/Table';

import getData from '../services/api';

import styles from '../styles/pages/Pages.module.css';

export function Posts() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await getData.get('/posts')
      setPosts(response.data);
    }
    loadPosts();

  }, [])

  return (
    <div className={styles.container}>
      <strong>Tabela de Posts</strong>
      <BackToHome />
      <Table data={posts} />
    </div>
  )
}
