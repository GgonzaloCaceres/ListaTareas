import styles from './MasterPage.module.css'
import { Link, useRoute } from 'wouter'
import { useThemeContext } from '../../providers/ThemeProvider'
import { FaMoon, FaSun } from 'react-icons/fa/'

const MasterPage = ({ children }) => {
  const [onHomePage] = useRoute('/Home')
  const [onTaskList] = useRoute('/TaskList')
  const [onGroceries] = useRoute('/Groceries')
  const { darkMode, toggleTheme } = useThemeContext()

  return (
    <>
      <header className={styles.header}>
        <section className={styles.navigation}>
          <Link href="/Home">
            <div
              className={
                onHomePage ? styles.headerButtonSelected : styles.headerButton
              }
            >
              Home
            </div>
          </Link>
          <Link href="TaskList">
            <div
              className={
                onTaskList ? styles.headerButtonSelected : styles.headerButton
              }
            >
              Task List
            </div>
          </Link>
          <Link href="Groceries">
            <div
              className={
                onGroceries ? styles.headerButtonSelected : styles.headerButton
              }
            >
              Groceries List
            </div>
          </Link>
        </section>
        <section>
          <button className={styles.themeButton} onClick={() => toggleTheme()}>
            {!darkMode && <FaMoon size={'1.5rem'} />}
            {darkMode && <FaSun size={'1.5rem'} color={'silver'} />}
          </button>
        </section>
      </header>
      {children}
    </>
  )
}

export default MasterPage
