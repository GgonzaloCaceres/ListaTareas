import styles from './ListaTareas.module.css'
import Lista from '../Lista/Lista'

const ListaTareas = () => {
  console.log('listaTareas')
  return (
    <div className={styles.app}>
      <h1 className={styles.titulo}>Lista de tareas</h1>
      <Lista></Lista>
    </div>
  )
}

export default ListaTareas
