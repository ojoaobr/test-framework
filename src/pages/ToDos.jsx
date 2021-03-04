import { useEffect, useState } from 'react';
import { BackToHome } from '../components/BackToHome';
import { Table } from '../components/Table';

import getData from '../services/api';

import styles from '../styles/pages/Posts.module.css';

export function ToDos() {

  const [todos, setToDos] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await getData.get('/todos')
      setToDos(response.data);
    }
    loadPosts();

  }, [])

  return (
    <div className={styles.container}>
      <strong>Tabela de To-Do's</strong>
      <BackToHome />
      <Table data={todos} />
    </div>
  )
}
