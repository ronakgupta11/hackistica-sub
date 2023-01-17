import { useState } from "react";
import ProductCard from "./productCard";
import { ethers } from "ethers";
import { abi, SHOP_CONTRACT_ADDRESS } from "../constants";

export default function ProductSlider(props){

  const buyNow = async (e) => {
    console.log(e.target.value)
   
  };


   const electronicsData = props.electronicsData;
   const householdData = props.householdData;

   const electronicsComp = electronicsData.map((data,i) => {
    // console.log(data.image);
    return(
      <ProductCard key = {i} image = {data.imageUrl} name = {data.name} description = "this is description of product" price = {data.price} token = {data.token} buyNow  = {buyNow}></ProductCard> 
    );
   });

   const row1Elec = electronicsComp.slice(0,4);
   const row2Elec = electronicsComp.slice(4);
  
   const householdComp = householdData.map((data,i) => {
    return(
      <ProductCard key = {i} image = {data.imageUrl} name = {data.name} description = "this is description of product" price = {data.price} token = {data.token}></ProductCard> 
    );
   })
   const row1house = householdComp.slice(0,4);
   const row2house = householdComp.slice(4);
    return(<div>
        <section className="product-section">
  <h4 className="category-head">Electronics</h4>
  <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active container-fluid ">
          <div className="row">
            <div className="col-lg-3 product-item">
              {row1Elec}
            </div>

            
          </div>
      </div>
       
      <div className="carousel-item container-fluid">
        <div className="row">
          <div className="col-lg-3 product-item">
              {row2Elec}
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
              {row1house}
            </div>

            
          </div>
      </div>
       
      <div className="carousel-item container-fluid">
        <div className="row">
          <div className="col-lg-3 product-item">
          {row2house}

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