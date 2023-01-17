import { useState } from "react";
import ProductCard from "./productCard"; 
export default function ProductSlider(props){

   const electronicsData = props.electronicsData;
   const householdData = props.householdData;

   const electronicsComp = electronicsData.map((data,i) => {
    // console.log(data.image);
    return(
      <ProductCard key = {i} image = {data.image} name = {data.name} description = "this is description of product" price = {data.price} token = {data.token}></ProductCard> 
    );
   });
   const householdComp = householdData.map((data,i) => {
    return(
      <ProductCard key = {i} image = {data.image} name = {data.name} description = "this is description of product" price = {data.price} token = {data.token}></ProductCard> 
    );
   })
    return(<div>
        <section className="product-section">
  <h4 className="category-head">Electronics</h4>
  <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active container-fluid ">
          <div className="row">
            <div className="col-lg-3 product-item">
              {electronicsComp}
            </div>

            
          </div>
      </div>
       
      <div className="carousel-item container-fluid">
        <div className="row">
          <div className="col-lg-3 product-item">
              {electronicsComp}
          {/* {householdComp} */}
          </div>
       
          
        </div>
      </div>
        
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon icon-prev"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon icon-next" ></span>
    </button>
  </div>
  <h4 className="category-head">HouseHold</h4>
  <div id="carouselExample-2" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active container-fluid ">
          <div className="row">
            <div className="col-lg-3 product-item">
              {householdComp}
            </div>

            
          </div>
      </div>
       
      <div className="carousel-item container-fluid">
        <div className="row">
          <div className="col-lg-3 product-item">
          {householdComp}

          </div>
       
          
        </div>
      </div>
        
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample-2" data-bs-slide="prev">
      <span className="carousel-control-prev-icon icon-prev"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample-2" data-bs-slide="next">
      <span className="carousel-control-next-icon icon-next" ></span>
    </button>
  </div>
</section>
        </div>);
}