import React from 'react'
import  newCollectons from "../Assets/new_collections"
import Item from '../item/Item'
import './NewCollections.css'
const NewCollections = () => {
  return (
    <div className='newcollections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
           {newCollectons.map((item,i) => {
            return <Item key= {i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice= {item.old_price} />
           })}
        </div>
    </div>
  )
}

export default NewCollections