import { useThemeContext } from '../../providers/ThemeProvider'
import styles from './HomePage.module.css'

const HomePage = () => {
  const { darkMode, toggleTheme } = useThemeContext()

  return (
    <section className={styles.homePage}>
      <h1>Welcome</h1>
      <button onClick={() => toggleTheme()}>Cambiar el tema</button>
      {darkMode && <h2>Dark Mode activated!</h2>}
    </section>
  )
}

export default HomePage
