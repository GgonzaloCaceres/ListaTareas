import { useState } from 'react'
import styles from './GroceriesList.module.css'
import List from '../../components/List/List'
import Grocery from '../../components/Groceries/Grocery/Grocery'
import Modal from '../../components/Modal/Modal'
import useGroceries from '../../hooks/useGroceries'
import GroceryAddForm from '../../components/Groceries/GroceryAddForm/GroceryAddForm'

const GroceriesList = () => {
  const [modalContent, setModalContent] = useState(undefined)
  const { addGrocery, groceriesList, deleteGrocery } = useGroceries()

  const handleAddGrocery = grocery => {
    addGrocery(grocery)
    setModalContent(undefined)
  }

  const handleDeleteGrocery = grocery => {
    deleteGrocery(grocery)
    setModalContent(undefined)
  }
  return (
    <div className={styles.groceriesList}>
      <h1 className={styles.titulo}>Groceries List</h1>
      <button
        className={styles.addGrocery}
        onClick={() => {
          setModalContent(<GroceryAddForm addGrocery={handleAddGrocery} />)
        }}
      >
        +
      </button>
      <Modal closeModal={() => setModalContent(undefined)}>
        {modalContent}
      </Modal>
      <List>
        {groceriesList.map(grocery => (
          <Grocery
            gorceryData={grocery}
            handleDeleteGrocery={groceryId => handleDeleteGrocery(groceryId)}
            key={grocery.id}
          ></Grocery>
        ))}
      </List>
    </div>
  )
}

export default GroceriesList
