import styles from './TaskList.module.css'
import List from '../../components/List/List'

const TaskList = () => {
  console.log('listaTareas')
  return (
    <div className={styles.app}>
      <h1 className={styles.titulo}>Lista de tareas</h1>
      <List></List>
    </div>
  )
}

export default TaskList
