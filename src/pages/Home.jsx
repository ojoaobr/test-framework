import { useHistory } from 'react-router-dom'
import styles from '../styles/pages/Home.module.css'

export function Home() {

  const history = useHistory();

  return (
    <div className={styles.container}>
      <button className={styles.Button} onClick={() => history.push(`/posts`)}>Postagens</button>
      <button className={styles.Button} onClick={() => history.push(`/albuns`)}>Albuns</button>
      <button className={styles.Button} onClick={() => history.push(`/todos`)}>To-Do's</button>
    </div>
  )
}