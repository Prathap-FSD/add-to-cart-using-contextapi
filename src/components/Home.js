import React, { useContext } from 'react'
import datalist from './datalist.json'
import { Context } from './contextApi'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home() {
 
  let cartItems = useContext(Context)

  function handleCart(item) {
   let existingIndexItem = cartItems.items.findIndex((card)=> card.id === item.id)

   if(existingIndexItem !== -1){
    const updatedCartItems = [...cartItems.items];
    updatedCartItems[existingIndexItem].noOfProduct += 1
    cartItems.setItems(updatedCartItems)
    toast.warning('Product already in Cart')
   }else{
    cartItems.setItems([...cartItems.items, {...item, noOfProduct: item.noOfProduct +1}])
    toast.success('Product added to Cart')
   }
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