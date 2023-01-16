export default function Header(props){


   

    return(
        <div className = "header">
<section className="colored">
    <div className="containre-navbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Web3 Cart</a>
                <form className="d-flex " role="search">
                        <input className="form-control me-2 search-product " type="search" placeholder="Search"  aria-label="Search"></input>
                        
                </form>
                <button className="btn btn-light wallet-btn wallet-btn" type="submit">Connect Wallet</button>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <button onClick={() => props.setInSellerTab(prev => !prev)}className="nav-link active seller-btn" aria-current="page">{props.inSellerTab?"Back To Home":"Become a Seller"}</button>
                  </li>
                    <li className="nav-item">
                    <a className="nav-link cart" href="#"><i className="fa-solid fa-cart-shopping icon"></i>Cart</a>
                  </li>
                </ul>
            </div>
          </nav>
    </div>
</section>

            
        </div>
    );
}