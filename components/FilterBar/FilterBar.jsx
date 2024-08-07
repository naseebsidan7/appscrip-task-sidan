 'use client';

import React from 'react'
import './FilterBar.css'

const FilterBar = ({expand ,setExpand}) => {

     
    const hideFilterHandler =()=>{
      setExpand(!expand)
    }

  return (
 
            <div class="product-filter-bar">
                  <div class="product-items">
                    <p><span className='items-count'>2305 ITEMS</span> <span className='filter-mobile'>FILTER</span></p>
                    <div class="hide-filter" onClick={hideFilterHandler} >
                      <img src="/images/cross-small-svgrepo-com.svg" width='30px' height="25px"  alt="arrow-down-image" />
                      <h5 >{!expand?" Hide Filter":"Show Filter"}</h5>
                    </div>
                  </div>
                  
            
                      <select class="filter-dropdown" >
                        <option value="RECOMMENDED">RECOMMENDED</option>
                        <option value="NEWEST FIRST">NEWEST FIRST</option>
                        <option value="POPULAR">POPULAR</option>
                        <option value=" HIGH TO LOW">PRICE : HIGH TO LOW</option>
                        <option value="LOW TO HIGH ">PRICE : LOW TO HIGH </option>
                      </select>
                 
                </div>
 
  )
}

export default FilterBar