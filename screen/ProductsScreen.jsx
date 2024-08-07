'use client';

import FilterBar from '@/components/FilterBar/FilterBar'
import Products from '@/components/Products/Products'
import Sidebar from '@/components/Sidebar/Sidebar'
import React, { useState } from 'react'

const ProductsScreen = () => {
    const [expand, setExpand] = useState(true)
    console.log(expand)
  return (
    <div>
        <FilterBar expand={expand} setExpand={setExpand}  />
        <div style={{display:'flex'}}>
          <Sidebar expand={expand} setExpand={setExpand}/>
          <Products/>
        </div>
    </div>
  )
}

export default ProductsScreen