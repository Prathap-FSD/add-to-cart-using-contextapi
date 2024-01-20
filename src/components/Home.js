import React, { useContext } from 'react'
import datalist from './datalist.json'
import { Context } from './contextApi'



function Home() {
 
  let cartItems = useContext(Context)

function handleCart(item){
  cartItems.setItems([...cartItems.items, item])
}

  return (
    <div className='container'>
   <div className='row mt-5'>
    <div className='d-flex flex-wrap'>
        {datalist.products.map((item)=>(
          
        <div key={item.id} className='col-sm-6 col-md-4 col-lg-3  mb-4'>
            <div  className='card m-3'>
                <div className='card-body'>
                    <img className='cd-img' src={item.thumbnail} alt={item.title}/>
                    <div className='d-flex justify-content-between mt-3'>
                    <span className=''><b>{item.title}</b></span>
                    <span><b> <span className='primColor'></span>  {item.rating}</b>⭐</span>
                    </div>
                    <div className='d-flex justify-content-between mt-3'>
                    <span><b><span className='primColor price'>₹</span>  {item.price}</b></span>
                    </div>
                    <p className='mt-2 para'>{item.description}</p>
                    
                    
                </div>
                <div className='card-footer'>
                  <button className='btn addBtn primColor' onClick={()=>{
                    handleCart(item)
                  }}> Add to cart</button>
                </div>
            </div>
        </div>
    ))}
    </div>
   </div>
    </div>
  )
}

export default Home