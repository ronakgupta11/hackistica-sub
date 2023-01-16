
import ProductCard from "./productCard"; 
export default function ProductSlider(){
    return(<div>
        <section className="product-section">
  <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active container-fluid ">
          <div className="row">
            <div className="col-lg-3 product-item">
              <ProductCard image = "" name = " product" description = " this is my first product"></ProductCard>
            </div>

            
          </div>
      </div>
       
      <div className="carousel-item container-fluid">
        <div className="row">
          <div className="col-lg-3 product-item">
            <div className="card" >
              <img src="dog-img.jpg" className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-primary" >Buy Now</button>
                  <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
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
</section>
        </div>);
}