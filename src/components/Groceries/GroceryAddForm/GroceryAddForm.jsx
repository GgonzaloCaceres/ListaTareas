import { useState } from 'react'
import uuid from 'uuid-random'
import styles from './GroceryAddForm.module.css'

const GroceryAddForm = ({ addGrocery }) => {
  const [value, setValue] = useState('')

  return (
    <div className={styles.groceryAddModal}>
      <h1 className={styles.addFormTitle}>Add new grocery</h1>
      <form
        className={styles.groceryAddForm}
        onSubmit={evt => {
          evt.preventDefault()
          addGrocery({ titulo: value, id: uuid() })
        }}
      >
        <input
          autoFocus
          value={value}
          onChange={event => setValue(event.target.value)}
          type="text"
          className={styles.addFormInput}
        ></input>
        <button className={styles.addGroceryButton} type="submit">
          Save
        </button>
      </form>
    </div>
  )
}

export default GroceryAddForm
