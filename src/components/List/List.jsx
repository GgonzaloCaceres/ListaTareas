import styles from './List.module.css'

const List = ({ children }) => {
  return <div className={styles.contenedorLista}>{children}</div>
}

export default List
