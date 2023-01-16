export default function ProductCard(props){
    return(
        <div className="product-card">
             <div className="card" style={{width: "18rem"}}>
                <img src= {props.image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">{props.name}</h5>
                  <p className="card-text">{props.description}</p>
                  <button className="btn btn-primary" >Buy Now</button>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>

        </div>
    );
}