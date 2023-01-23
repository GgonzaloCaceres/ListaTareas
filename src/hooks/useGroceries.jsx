import { useState } from 'react'

const useGroceries = () => {
  const [groceries, setGroceries] = useState([
    { titulo: 'grossceria', id: 'grossceria' }
  ])

  const deleteGrocery = id => {
    const newGroceries = groceries.filter(grocery => grocery.id !== id)
    setGroceries(newGroceries)
  }

  const addGrocery = grocery => {
    setGroceries([...groceries, grocery])
  }

  return {
    groceriesList: groceries,
    addGrocery,
    deleteGrocery
  }
}

export default useGroceries
