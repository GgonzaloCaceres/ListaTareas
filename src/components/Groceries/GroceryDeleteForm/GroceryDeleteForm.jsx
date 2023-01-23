const GroceryDeleteForm = ({ handleDeleteGrocery, gorceryData }) => {
  return (
    <>
      <h1>Are you sure you want to delete {gorceryData.titulo}?</h1>
      <button
        autoFocus
        onClick={() => {
          handleDeleteGrocery(gorceryData.id)
        }}
      >
        Delete
      </button>
    </>
  )
}

export default GroceryDeleteForm
