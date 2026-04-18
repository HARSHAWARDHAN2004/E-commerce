import React, { useState } from 'react'
import '../../style/addcard.css'

export default function AddCard() {

  let schema = {
    name: "",
    price: "",
    image: "",
    category: "",
    status: false
  }

  let [task, setTask] = useState(schema)

  function handlingChange(e) {
    let name = e.target.name
    let val = e.target.value

    setTask({ ...task, [name]: val })
  }

  async function addProduct(category, product) {
    let res = await fetch("http://localhost:3000/AllProduct")
    let data = await res.json()

    data[category].push(product)

    await fetch("http://localhost:3000/AllProduct", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
  }

  function handlingSubmit(e) {
    e.preventDefault()

    if (!task.category) {
      alert("Please select category")
      return
    }

    let newProduct = {
      id: Date.now(),
      name: task.name,
      price: Number(task.price),
      image: task.image
    }

    addProduct(task.category, newProduct)

    setTask(schema) // reset form
  }

 return (
  <div className="addCardContainer">

    <form className="addCardForm" onSubmit={handlingSubmit}>

      <label>
        Name <br />
        <input
          type="text"
          name="name"
          value={task.name}
          onChange={handlingChange}
        />
      </label>

      <label>
        Price <br />
        <input
          type="text"
          name="price"
          value={task.price}
          onChange={handlingChange}
        />
      </label>

      <label>
        Image URL <br />
        <input
          type="text"
          name="image"
          value={task.image}
          onChange={handlingChange}
        />
      </label>

      <label>
        Category <br />
        <select
          name="category"
          value={task.category}
          onChange={handlingChange}
        >
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="DailyNeeds">DailyNeeds</option>
          <option value="FruitsVegetables">FruitsVegetables</option>
          <option value="Clothes">Clothes</option>
          <option value="Grains">Grains</option>
        </select>
      </label>

      <input type="submit" value="Add Product" />

    </form>

  </div>
)
}