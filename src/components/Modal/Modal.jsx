import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

const Modal = ({ closeModal, children }) => {
  if (!children) return null
  return createPortal(
    <>
      <div className={styles.modal}>{children}</div>
      <b
        onClick={() => closeModal && closeModal()}
        className={styles.ModalBackground}
      ></b>
    </>,
    document.getElementById('modalRoot')
  )
}

export default Modal
