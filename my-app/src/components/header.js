export default function Header(){
    return(
        <div className = "header">
            <section className="colored">
    <div className="containre-navbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Navbar</a>
                <form className="d-flex " role="search">
                        <input className="form-control me-2 search-product" type="search" placeholder="Search"  aria-label="Search"></input>
                        {/* <!-- <i className="fa-sharp fa-solid fa-magnifying-glass"></i> --> */}
                </form>
                <button className="btn btn-light wallet-btn" type="submit">Connect Wallet</button>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Become a Seller</a>
                  </li>
                    <li>
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