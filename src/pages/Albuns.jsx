import { useEffect, useState } from 'react';
import { BackToHome } from '../components/BackToHome';
import { Table } from '../components/Table';

import getData from '../services/api';

import styles from '../styles/pages/Pages.module.css';

export function Albuns() {

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function loadAlbums() {
      const response = await getData.get('/albums')
      setAlbums(response.data);
    }
    loadAlbums();

  }, [])

  return (
    <div className={styles.container}>
      <strong>Tabela de Albuns</strong>
      <BackToHome />
      <Table data={albums} />
    </div>
  )
}
