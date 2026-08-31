import { useState, useEffect } from 'react'

export default function App() {
  const [products] = useState([
    { id: 1, name: "Rice 50kg", price: 45000, img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=200" },
    { id: 2, name: "Vegetable Oil 5L", price: 12000, img: "https://images.unsplash.com/photo-1474979266404-7eaacb7d9b3f?w=200" },
    { id: 3, name: "Sugar 50kg", price: 35000, img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=200" },
    { id: 4, name: "Beans 50kg", price: 40000, img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=200" },
    { id: 5, name: "Indomie Carton", price: 8500, img: "https://images.unsplash.com/photo-1617093727343-374698b1ec9b?w=200" },
    { id: 6, name: "Milk 400g", price: 2500, img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200" },
  ])
  
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (product) => {
    setCart([...cart, product])
    alert(`${product.name} added to cart!`)
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#16a34a' }}>LOKOJA GROCERIES MALL</h1>
        <button 
          onClick={() => setShowCart(!showCart)}
          style={{ padding: '10px 20px', background: '#16a34a', color: 'white', border: 'none', borderRadius: '8px' }}
        >
          Cart ({cart.length})
        </button>
      </header>

      {showCart? (
        <div>
          <h2>Your Cart</h2>
          {cart.length === 0? <p>Cart is empty</p> : (
            <>
              {cart.map((item, i) => <p key={i}>{item.name} - ₦{item.price.toLocaleString()}</p>)}
              <h3>Total: ₦{total.toLocaleString()}</h3>
              <button style={{ padding: '12px', background: '#16a34a', color: 'white', border: 'none', borderRadius: '8px', width: '100%' }}>
                Checkout on WhatsApp
              </button>
            </>
          )}
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {products.map(product => (
            <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '15px', background: 'white' }}>
              <img src={product.img} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
              <h3>{product.name}</h3>
              <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#16a34a' }}>₦{product.price.toLocaleString()}</p>
              <button 
                onClick={() => addToCart(product)}
                style={{ width: '100%', padding: '10px', background: '#16a34a', color: 'white', border: 'none', borderRadius: '8px' }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
