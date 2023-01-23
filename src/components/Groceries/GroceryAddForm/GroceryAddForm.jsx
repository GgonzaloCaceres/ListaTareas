import { useState } from 'react'
import uuid from 'uuid-random'

const GroceryAddForm = ({ addGrocery }) => {
  const [value, setValue] = useState('')

  return (
    <>
      <h1>Add new grocery</h1>
      <form
        onSubmit={evt => {
          evt.preventDefault()
          addGrocery({ titulo: value, id: uuid() })
        }}
      >
        <input
          value={value}
          onChange={event => setValue(event.target.value)}
          type="text"
        ></input>
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default GroceryAddForm
