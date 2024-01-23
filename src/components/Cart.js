import React, { useContext, useEffect, useState } from 'react'
import { Context } from './contextApi'
import { useNavigate } from 'react-router'

function Cart() {
  let cartItem = useContext(Context)

 let navigate = useNavigate()

 let handleBtn = ()=>{
  navigate('/')
 }
 function HandleDelete(id){
  let removeItem = cartItem.items.filter((item)=> item.id !== id)
  cartItem.setItems(removeItem)
 }
 let [total, setTotal] = useState(0)

 useEffect(()=>{
let a = 0
for (const item of cartItem.items) {
  a += item.price * item.noOfProduct
}
setTotal(a)
 },[cartItem.items])

  return (
    <div className='container'>
      {cartItem.items.length > 0 ? <div className='row'>
      
      <div className='col-md-8 cartBg mt-5'>
      {cartItem.items.map((product, index)=>(
        <div key={product.id} className='proItem p-4'>

          <div className='proImg'>
            <img src={product.thumbnail} alt={product.title}/>
          </div>

          <div className='proDetail'>
            <div className='proInfo px-3'>
              <h4 className='primColor fw-bolder'>{product.title}</h4>
              <h6><span className='primColor'>Brand :</span> {product.brand}</h6>
              <h6><span className='primColor'>Category :</span> {product.category}</h6>
              <h6><span className='primColor'>Rating  :</span> {product.rating}⭐</h6>
              <button className='rBtn align-self-start' onClick={()=>HandleDelete(product.id)} > <i className="SeconColor bi bi-trash-fill"></i> Remove item</button>
            </div>
          </div>

            <div className='proQuantity'>
              <div>
              <div className='quantity'>
              <button onClick={()=>{
                  let a = structuredClone(cartItem.items)
                a[index] = {...product, noOfProduct: product.noOfProduct < 1 ? 0 : product.noOfProduct - 1}
                cartItem.setItems(a)
              }}> - </button>
              <span>{product.noOfProduct}</span>
              <button onClick={()=>{
                let a = structuredClone(cartItem.items)
                a[index] = {...product, noOfProduct: product.noOfProduct + 1}
                cartItem.setItems(a)
              }}> + </button>
              </div>
              <p className='piece'>(Note: 1 piece)</p>
              </div>
              <div className='proPrice'>
                <h4  className='primColor'>₹ {product.price}</h4>
              </div>
            </div>
          
        </div>  
        ))}
      </div>
   
      
      <div className='col-md-3 cartBg rightCol mt-5'>
      
        <div>
          <h4 className='primColor'>The total amount of</h4>
          <hr/>
        </div>

        <div className='sum'>
        <div className='innerSum'>
            <h6 className='primColor'>Sub Total : </h6>
            <h6>₹ 0</h6>
          </div>
          <div className='innerSum'>
            <h6 className='primColor'>Discount : </h6>
            <h6>₹ 0</h6>
          </div>
          <hr/>
          <div className='innerSum'>
            <h6 className='primColor'>Total : </h6>
            <h6>₹ {total}</h6>
          </div>
        </div>

        <button className='btn primColor'>Go To Checkout</button>
      </div>
    </div> 
    :  <div className='cartPageBtn'>
        <h3><i className="bi bi-cart-fill "></i> Cart is Empty</h3>
        <button className='btn primColor mt-3' onClick={handleBtn}>Continue Shopping</button>
       </div>    
     }
    </div>
  )
}

export default Cart