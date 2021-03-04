import { useHistory } from 'react-router-dom';
import styles from '../styles/components/BackToHome.module.css'

export function BackToHome() {

  const history = useHistory();

  return (
    <div className={styles.container}>
      <button className={styles.Button} onClick={() => history.push(`/`)} >
        <img src="./arrow.svg" alt="Voltar" />
      </button>
    </div>
  )
}