import { useState } from 'react'
import styles from './Grocery.module.css'
import { FaTrash } from 'react-icons/fa'
import Modal from '../../Modal/Modal'
import GroceryDeleteForm from '../GroceryDeleteForm/GroceryDeleteForm'

const Grocery = ({ handleDeleteGrocery, gorceryData, ...props }) => {
  const [modalContent, setModalContent] = useState(undefined)
  return (
    <>
      <section className={styles.groceryContainer}>
        <span>{gorceryData.titulo}</span>
        <button
          onClick={() =>
            setModalContent(
              <GroceryDeleteForm
                gorceryData={gorceryData}
                handleDeleteGrocery={handleDeleteGrocery}
              />
            )
          }
        >
          <FaTrash className={styles.groceryIcon} />
        </button>
      </section>
      <Modal closeModal={() => setModalContent(undefined)}>
        {modalContent}
      </Modal>
    </>
  )
}
export default Grocery
