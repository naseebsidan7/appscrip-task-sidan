import React from 'react'
import './Sidebar.css'

const Sidebar = ({expand }) => {
     
    return (
    expand  ? (<div></div>
     ) :  (
        <div className="product-filter-sidebar">
              
        <div className="checkbox-group">
          
          <label>
            <input type="checkbox" name="new-arrivals"  className="custom-checkbox"  /> NEW ARRIVALS
          </label><br />
          <label>
            <input type="checkbox" name="sale"  className="custom-checkbox"  /> ON SALE
          </label><br />
          <label>
            <input type="checkbox" name="best-sellers"  className="custom-checkbox"  /> BEST SELLERS
          </label><br />
        </div>

        <div className="filter-group">
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" name="occasion" className="custom-select">
            <option value="casual">All</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
            <option value="party">Party</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="work">Work</label>
            <select id="work" name="work">
            <option value="casual">All</option>
            <option value="office">Office</option>
            <option value="home">Home</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="fabric">Fabric</label>
          <select id="fabric" name="fabric">
            <option value="casual">All</option>
            <option value="cotton">Cotton</option>
            <option value="silk">Silk</option>
            <option value="wool">Wool</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="segment">Segment</label>
          <select id="segment" name="segment">
            <option value="casual">All</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="pattern">Pattern</label>
          <select id="pattern" name="pattern">
            <option value="casual">All</option>
            <option value="solid">Solid</option>
            <option value="striped">Striped</option>
            <option value="checked">Checked</option>
          </select>
        </div>


      </div>
    ));
    };
    
export default Sidebar