export default function ProductCard(props){
    return(
        <div className="product-card">
             <div className="card" style={{width: "18rem"}}>
                <img src= {props.image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">{props.name}</h5>
                  {/* <p className="card-text">{props.description}</p> */}
                  {/* <span>{props.quantity}</span> */}
                  <div style={{margin:"0.5rem 0" ,color:"green", fontSize: "1.2rem"}}>

                  <span style={{marginRight: "0.5rem"
                  }} >{props.price}</span>
                  <span>{props.token}</span>
                  </div>
                  <div className="card-btn">

                  <button className="btn btn-primary " >Buy Now</button>
                  <button className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              </div>

        </div>
    );
}