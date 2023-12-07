import React from 'react'
import { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';

import dropdownIcon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/item/Item'

const ShopCategory = (props) => {
  const {allProduct} = useContext(ShopContext);
  return (
    <div className='shop-category'>
        <img className='shopcategory-banner' src={props.banner} alt="" />
        <div className="shopcategory-indexsort">
          <p>
             <span>Showing 1-12</span> Out of 36 product
          </p>
          <div className="shopcategory-sort">
              Sort by <img src={dropdownIcon} alt="" />
          </div>
        </div>
        <div className="shopcategory-product">
          {allProduct.map((item,i) => {
            if (props.Category===item.category) {
              return <Item  key= {i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice= {item.old_price}/>
            }
            else{
              return null; 
            }
          })}
        </div>
        <div className="shopcategory-loadmore">
          Explore More
        </div>
    </div>
  )
}

export default ShopCategory