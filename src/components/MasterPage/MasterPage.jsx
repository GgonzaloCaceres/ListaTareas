import styles from './MasterPage.module.css'
import { Link, useRoute } from 'wouter'

const MasterPage = ({ children }) => {
  const [onHomePage] = useRoute('/')

  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <div
            className={
              onHomePage ? styles.headerButtonSelected : styles.headerButton
            }
          >
            Home
          </div>
        </Link>
        <Link href="ListaTareas">
          <div
            className={
              !onHomePage ? styles.headerButtonSelected : styles.headerButton
            }
          >
            Task List
          </div>
        </Link>
      </header>
      {children}
    </>
  )
}

export default MasterPage
