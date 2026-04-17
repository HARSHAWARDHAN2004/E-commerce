import React from 'react'
import '../../style/home.css'
export default function Electronic() {

  let [data, setdata] = useState([])

  useEffect(() => {
    async function showTask() {
      let product = await fetch('http://localhost:3000/AllProduct/Electronics')
      let actualData = await product.json()
      setdata(actualData)   
    }

    showTask()
  }, [])

return (
  <div className="home">

    <h2 className="title">Groceries & Essentials</h2>

    <div className="card-container">
      {data.map((item) => (
        <div className="card" key={item.id}>
          
          <img src={item.image} alt={item.name} />

          <p className="category">{item.category}</p>

          <h4>{item.name}</h4>

          <p className="price">₹{item.price}</p>

          <button>Add</button>

        </div>
      ))}
    </div>

  </div>
)
}
