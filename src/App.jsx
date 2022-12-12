import Lista from './components/Lista/Lista.jsx'
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.app}>
      <h1 className={styles.titulo}>Lista de tareas</h1>
      <Lista></Lista>
    </div>
  )
}

export default App
