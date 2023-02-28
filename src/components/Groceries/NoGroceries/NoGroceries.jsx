import styles from './NoGroceries.module.css'

const NoGroceries = () => {
  return (
    <div className={styles.noGroceriesContainer}>
      <h3 className={styles.noGroceriesTitle}>No groceries yet</h3>
      <img
        src="../../../../public/no-groceries-background.png"
        className={styles.noGroceries}
      ></img>
    </div>
  )
}
export default NoGroceries
