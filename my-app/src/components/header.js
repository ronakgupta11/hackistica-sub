export default function Header(props){


   

    return(
        <div className = "header">
<section className="colored">
    <div className="containre-navbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
              <div className="nav-section-1">

              <a className="navbar-brand" href="/">W3Kart</a>
              <input className="form-control me-2 search-product " type="search" placeholder="Search"  aria-label="Search"></input>
              </div>
                        
                <div className="nav-section-2">

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <button onClick={() => (props.setInSellerTab(prev => !prev))}className="nav-link active seller-btn">{props.inSellerTab?"Back To Home":"Become a Seller"}</button>
                  </li>
                    <li className="nav-item">
                    <button className="nav-link cart seller-btn"><i className="fa-solid fa-cart-shopping icon"></i>Cart</button>
                  </li>
                <button onClick= {props.walletStatus?() => props.disconnect():() => props.connect()}className="btn btn-light wallet-btn wallet-btn">{props.walletStatus?"disconnect Wallet":"connect Wallet"}</button>
                </ul>
                </div>

            </div>
          </nav>
    </div>
</section>

            
        </div>
    );
}